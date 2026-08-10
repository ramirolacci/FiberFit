import { Exercise, Goal, Level, Equipment, Routine, RoutineDay, WorkoutExercise } from '../types/routine';

/**
 * Lógica de entrenamiento avanzada:
 * - Selección aleatoria multimuscular.
 * - Generación de supersets (ejercicios combinados).
 * - Estructuras de entrenamiento flexibles (3 y 5 días).
 */
export class RoutineGenerator {
    private exercises: Exercise[];

    constructor(exercises: Exercise[]) {
        this.exercises = exercises;
    }

    public generate(config: {
        goal: Goal;
        daysPerWeek: number;
        level: Level;
        equipment: Equipment;
        sessionDuration: number;
    }): Routine {
        const { goal, daysPerWeek, level, equipment } = config;

        let routineDays: RoutineDay[] = [];

        if (daysPerWeek === 3) {
            // Estructura de 3 días: Alternancia de Full Body o PPL
            const split = level === 'beginner' ? 'Full Body' : 'PPL';
            routineDays = this.generate3DaySplit(split, goal, equipment, level);
        } else {
            // Estructura de 5 días: Upper/Lower + PPL o similar
            routineDays = this.generate5DaySplit(goal, equipment, level);
        }

        return {
            name: `Rutina de ${this.getGoalName(goal)}`,
            goal,
            level,
            daysPerWeek,
            config: { equipment, sessionDuration: config.sessionDuration },
            routineDays,
            createdAt: new Date().toISOString(),
        };
    }

    private generate3DaySplit(split: string, goal: Goal, equipment: Equipment, level: Level): RoutineDay[] {
        const days: RoutineDay[] = [];
        const usedExerciseIds = new Set<string>();

        if (split === 'Full Body') {
            const daysNames = ['Lunes', 'Miércoles', 'Viernes'];
            daysNames.forEach((name) => {
                const dayExercises = this.selectDiverseFullBody(goal, equipment, level, usedExerciseIds);
                days.push({
                    dayName: name,
                    focus: 'Cuerpo Completo',
                    exercises: this.injectSupersets(dayExercises, goal),
                });
            });
        } else {
            // PPL but with secondary muscles
            const config = [
                { name: 'Lunes (Empuje)', type: 'push', focus: 'Pecho, Hombros y Tríceps' },
                { name: 'Miércoles (Tracción)', type: 'pull', focus: 'Espalda y Bíceps' },
                { name: 'Viernes (Piernas)', type: 'legs', focus: 'Piernas y Core' }
            ];
            config.forEach(day => {
                const dayExercises = this.selectExercisesForMuscleGroups(day.type, goal, equipment, level, 6, usedExerciseIds);
                days.push({
                    dayName: day.name,
                    focus: day.focus,
                    exercises: this.injectSupersets(dayExercises, goal),
                });
            });
        }

        return days;
    }

    private generate5DaySplit(goal: Goal, equipment: Equipment, level: Level): RoutineDay[] {
        const days: RoutineDay[] = [];
        const usedExerciseIds = new Set<string>();

        const config = [
            { name: 'Lunes (Empuje)', type: 'push', focus: 'Pecho y Tríceps' },
            { name: 'Martes (Tracción)', type: 'pull', focus: 'Espalda y Bíceps' },
            { name: 'Miércoles (Piernas)', type: 'legs', focus: 'Cuádriceps y Glúteos' },
            { name: 'Viernes (Tren Superior)', type: 'upper', focus: 'Pecho, Espalda y Hombros' },
            { name: 'Sábado (Tren Inferior)', type: 'lower', focus: 'Isquios, Pantorrillas y Core' }
        ];

        config.forEach(day => {
            const dayExercises = this.selectExercisesForMuscleGroups(day.type, goal, equipment, level, 6, usedExerciseIds);
            days.push({
                dayName: day.name,
                focus: day.focus,
                exercises: this.injectSupersets(dayExercises, goal),
            });
        });

        return days;
    }

    private selectDiverseFullBody(goal: Goal, equipment: Equipment, level: Level, usedIds: Set<string>): WorkoutExercise[] {
        const categories = [
            ['chest'],
            ['back'],
            ['quads', 'legs'],
            ['shoulders'],
            ['hamstrings', 'glutes'],
            ['core']
        ];

        const selected: Exercise[] = [];
        categories.forEach((muscles, i) => {
            const type = i < 3 ? 'compound' : undefined; // Priorizar compuestos para los primeros 3
            const exercise = this.findRandomExercise(muscles, type, equipment, level, usedIds);
            if (exercise) {
                selected.push(exercise);
                usedIds.add(exercise.id);
            }
        });

        return selected.map(ex => this.applyRepSchema(ex, goal));
    }

    private selectExercisesForMuscleGroups(category: string, goal: Goal, equipment: Equipment, level: Level, count: number, usedIds: Set<string>): WorkoutExercise[] {
        const muscleGroups = this.getMuscleGroupsForCategory(category);
        const selected: Exercise[] = [];

        // 1. Asegurar compuestos de los músculos principales
        const primaryMuscles = [muscleGroups[0]];
        for (let i = 0; i < 2; i++) {
            const ex = this.findRandomExercise(primaryMuscles, 'compound', equipment, level, usedIds);
            if (ex) {
                selected.push(ex);
                usedIds.add(ex.id);
            }
        }

        // 2. Completar con variados (aislamiento o compuestos secundarios)
        while (selected.length < count) {
            const currentMuscles = [muscleGroups[Math.floor(Math.random() * muscleGroups.length)]];
            const ex = this.findRandomExercise(currentMuscles, undefined, equipment, level, usedIds);
            if (!ex) {
                // Si no hay más de ese músculo, probar con cualquier músculo de la categoría
                const fallbackEx = this.findRandomExercise(muscleGroups, undefined, equipment, level, usedIds);
                if (!fallbackEx) break;
                selected.push(fallbackEx);
                usedIds.add(fallbackEx.id);
            } else {
                selected.push(ex);
                usedIds.add(ex.id);
            }
        }

        return selected.map(ex => this.applyRepSchema(ex, goal));
    }

    private injectSupersets(exercises: WorkoutExercise[], goal: Goal): WorkoutExercise[] {
        if (exercises.length < 4) return exercises;

        const result: WorkoutExercise[] = [...exercises];
        let supersetCounter = 1;

        // Intentar crear 1 o 2 supersets por día si no es modo Power (fuerza máxima)
        const maxSupersets = goal === 'power' ? 0 : (exercises.length > 5 ? 2 : 1);

        for (let s = 0; s < maxSupersets; s++) {
            let firstIdx = -1;
            let secondIdx = -1;

            for (let i = 1; i < result.length - 1; i++) {
                if (!result[i].supersetId && (result[i].type === 'isolation' || i > 2)) {
                    for (let j = i + 1; j < result.length; j++) {
                        if (!result[j].supersetId && (result[j].type === 'isolation' || j > 3)) {
                            firstIdx = i;
                            secondIdx = j;
                            break;
                        }
                    }
                }
                if (firstIdx !== -1) break;
            }

            if (firstIdx !== -1 && secondIdx !== -1) {
                const sid = `ss-${supersetCounter++}`;
                result[firstIdx].supersetId = sid;
                result[firstIdx].supersetLabel = `Combinado ${sid.split('-')[1]}`;
                result[secondIdx].supersetId = sid;
                result[secondIdx].supersetLabel = `Combinado ${sid.split('-')[1]}`;

                // Los descansos en supersets suelen ser más cortos o al final del bloque
                result[firstIdx].rest = '0s'; // Pasar directo al siguiente
            }
        }

        return result;
    }

    private findRandomExercise(muscles: string[], type: string | undefined, equipment: Equipment, level: Level, excludeIds: Set<string>): Exercise | null {
        let pool = this.exercises.filter(ex =>
            muscles.includes(ex.muscle_group) &&
            (type === undefined || ex.type === type) &&
            ex.equipment.includes(equipment) &&
            !excludeIds.has(ex.id)
        );

        if (pool.length === 0 && excludeIds.size > 0) {
            pool = this.exercises.filter(ex =>
                muscles.includes(ex.muscle_group) &&
                (type === undefined || ex.type === type) &&
                ex.equipment.includes(equipment)
            );
        }

        if (pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    private getMuscleGroupsForCategory(cat: string): string[] {
        const map: Record<string, string[]> = {
            push: ['chest', 'shoulders', 'triceps'],
            pull: ['back', 'biceps', 'shoulders'],
            legs: ['quads', 'hamstrings', 'glutes', 'calves', 'legs'],
            upper: ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
            lower: ['quads', 'hamstrings', 'glutes', 'calves', 'core', 'legs']
        };
        return map[cat] || ['full_body'];
    }

    private applyRepSchema(ex: Exercise, goal: Goal): WorkoutExercise {
        let sets = 3;
        let reps = '10-12';
        let rest = '90s';

        if (goal === 'power') {
            sets = ex.type === 'compound' ? 5 : 3;
            reps = ex.type === 'compound' ? '3-5' : '8-10';
            rest = ex.type === 'compound' ? '3 min' : '90s';
        } else if (goal === 'volume') {
            sets = ex.type === 'compound' ? 4 : 3;
            reps = '8-12';
            rest = '60-90s';
        } else if (goal === 'functional') {
            sets = 3;
            reps = '12-15';
            rest = '45s';
        }

        return { ...ex, sets, reps, rest };
    }

    private getGoalName(goal: Goal): string {
        const names: Record<string, string> = {
            volume: 'Volumen',
            definition: 'Definición',
            power: 'Fuerza',
            functional: 'Funcional'
        };
        return names[goal] || goal;
    }
}
