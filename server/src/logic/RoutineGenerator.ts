import { Exercise, Goal, Level, Equipment, Routine, RoutineDay, WorkoutExercise } from '../types/routine';

/**
 * Lógica de entrenamiento mejorada:
 * - Selección aleatoria de ejercicios para evitar repetición.
 * - Ajuste dinámico de series y repeticiones según el objetivo.
 * - Soporte para diferentes niveles de equipamiento.
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
            // Estructura de 3 días: Alternancia de Full Body o PPL simplificado
            const split = level === 'advanced' ? 'PPL' : 'Full Body';
            routineDays = this.generate3DaySplit(split, goal, equipment, level);
        } else {
            // Estructura de 5 días: PPL + Upper/Lower
            routineDays = this.generate5DaySplit(goal, equipment, level);
        }

        return {
            name: `Rutina Pro - ${this.capitalize(goal)}`,
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
                days.push({
                    dayName: name,
                    focus: 'Cuerpo Completo',
                    exercises: this.selectDiverseFullBody(goal, equipment, level, usedExerciseIds),
                });
            });
        } else {
            const daysNames = ['Lunes (Empuje)', 'Miércoles (Tracción)', 'Viernes (Piernas)'];
            const types = ['push', 'pull', 'legs'];
            daysNames.forEach((name, i) => {
                days.push({
                    dayName: name,
                    focus: this.capitalize(types[i]),
                    exercises: this.selectExercisesForMuscleGroups(types[i], goal, equipment, level, 5, usedExerciseIds),
                });
            });
        }

        return days;
    }

    private generate5DaySplit(goal: Goal, equipment: Equipment, level: Level): RoutineDay[] {
        const days: RoutineDay[] = [];
        const usedExerciseIds = new Set<string>();

        const config = [
            { name: 'Lunes (Empuje)', type: 'push' },
            { name: 'Martes (Tracción)', type: 'pull' },
            { name: 'Miércoles (Piernas)', type: 'legs' },
            { name: 'Viernes (Tren Superior)', type: 'upper' },
            { name: 'Sábado (Tren Inferior)', type: 'lower' }
        ];

        config.forEach(day => {
            days.push({
                dayName: day.name,
                focus: this.capitalize(day.type),
                exercises: this.selectExercisesForMuscleGroups(day.type, goal, equipment, level, 5, usedExerciseIds),
            });
        });

        return days;
    }

    private selectDiverseFullBody(goal: Goal, equipment: Equipment, level: Level, usedIds: Set<string>): WorkoutExercise[] {
        const groups = [
            { muscle: ['chest', 'shoulders'], type: 'compound' },
            { muscle: ['back'], type: 'compound' },
            { muscle: ['quads', 'legs'], type: 'compound' },
            { muscle: ['hamstrings', 'glutes'], type: 'compound' },
            { muscle: ['core'], type: 'isolation' }
        ];

        const selected: Exercise[] = [];
        groups.forEach(group => {
            const exercise = this.findRandomExercise(group.muscle, group.type, equipment, level, usedIds);
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

        // Asegurar al menos 2 compuestos
        for (let i = 0; i < 2; i++) {
            const ex = this.findRandomExercise(muscleGroups, 'compound', equipment, level, usedIds);
            if (ex) {
                selected.push(ex);
                usedIds.add(ex.id);
            }
        }

        // El resto variados
        while (selected.length < count) {
            const ex = this.findRandomExercise(muscleGroups, undefined, equipment, level, usedIds);
            if (!ex) break;
            selected.push(ex);
            usedIds.add(ex.id);
        }

        return selected.map(ex => this.applyRepSchema(ex, goal));
    }

    private findRandomExercise(muscles: string[], type: string | undefined, equipment: Equipment, level: Level, excludeIds: Set<string>): Exercise | null {
        let pool = this.exercises.filter(ex =>
            muscles.includes(ex.muscle_group) &&
            (type === undefined || ex.type === type) &&
            ex.equipment.includes(equipment) &&
            !excludeIds.has(ex.id)
        );

        // Si no hay ejercicios excluyendo los usados, permitimos repetición si es necesario
        if (pool.length === 0) {
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
            upper: ['chest', 'back', 'shoulders', 'arms'],
            lower: ['quads', 'hamstrings', 'glutes', 'core', 'legs']
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

    private capitalize(s: string) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
