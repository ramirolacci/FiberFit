import { Exercise, Goal, Level, Equipment, Routine, RoutineDay, WorkoutExercise } from '../types/routine';

/**
 * Lógica de entrenamiento:
 * 
 * - Volumen: 8-12 reps. Énfasis en la carga total y tiempo bajo tensión.
 * - Fuerza (Power): 3-6 reps. Énfasis en la intensidad relativa y descanso largo.
 * - Funcional: 10-15 reps. Énfasis en movimientos multiplanares y core.
 * - Definición: 10-15 reps. Volumen similar a hipertrofia pero con descansos más cortos (metabólico).
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

        let split: string;
        let routineDays: RoutineDay[] = [];

        if (daysPerWeek === 3) {
            // Para 3 días, Full Body es lo más eficiente para principiantes/intermedios.
            // PPL también es una opción para avanzados.
            split = level === 'advanced' ? 'PPL' : 'Full Body';
            routineDays = this.generate3DaySplit(split, goal, equipment);
        } else {
            // Para 5 días, PPL + Upper/Lower es un estándar de oro.
            split = 'PPL + Upper/Lower';
            routineDays = this.generate5DaySplit(split, goal, equipment);
        }

        return {
            name: `Rutina Personalizada - ${goal.toUpperCase()}`,
            goal,
            level,
            daysPerWeek,
            config: { equipment, sessionDuration: config.sessionDuration },
            routineDays,
            createdAt: new Date().toISOString(),
        };
    }

    private generate3DaySplit(split: string, goal: Goal, equipment: Equipment): RoutineDay[] {
        const days: RoutineDay[] = [];

        if (split === 'Full Body') {
            const daysNames = ['Lunes', 'Miércoles', 'Viernes'];
            daysNames.forEach((name) => {
                days.push({
                    dayName: name,
                    focus: 'Cuerpo Completo',
                    exercises: this.selectExercisesForFullBody(goal, equipment),
                });
            });
        } else {
            // PPL split
            const daysNames = ['Lunes (Push)', 'Miércoles (Pull)', 'Viernes (Legs)'];
            const focus = ['Empuje', 'Tracción', 'Piernas'];
            daysNames.forEach((name, i) => {
                days.push({
                    dayName: name,
                    focus: focus[i],
                    exercises: this.selectExercisesForMuscleGroups(focus[i], goal, equipment),
                });
            });
        }

        return days;
    }

    private generate5DaySplit(split: string, goal: Goal, equipment: Equipment): RoutineDay[] {
        const days: RoutineDay[] = [];
        const names = ['Lunes (Push)', 'Martes (Pull)', 'Miércoles (Legs)', 'Jueves (Descanso)', 'Viernes (Upper)', 'Sábado (Lower)'];

        names.forEach((name) => {
            if (name.includes('Descanso')) return;

            let focus = '';
            if (name.includes('Push')) focus = 'Push';
            if (name.includes('Pull')) focus = 'Pull';
            if (name.includes('Legs')) focus = 'Legs';
            if (name.includes('Upper')) focus = 'Upper';
            if (name.includes('Lower')) focus = 'Lower';

            days.push({
                dayName: name,
                focus,
                exercises: this.selectExercisesForMuscleGroups(focus, goal, equipment),
            });
        });

        return days;
    }

    private selectExercisesForFullBody(goal: Goal, equipment: Equipment): WorkoutExercise[] {
        // Selección simplificada: 1 Empuje, 1 Tracción, 1 Pierna (Dominante rodilla), 1 Pierna (Dominante cadera), 1 Core
        const result: WorkoutExercise[] = [];

        // Aquí filtraríamos de this.exercises según equipo y grupo muscular
        // Simulamos selección:
        const selected = [
            { name: 'Sentadillas', muscle: 'Quads', type: 'compound' },
            { name: 'Press de Banca', muscle: 'Pecho', type: 'compound' },
            { name: 'Remo con Barra', muscle: 'Espalda', type: 'compound' },
            { name: 'Peso Muerto Rumano', muscle: 'Isquios', type: 'compound' },
            { name: 'Press Militar', muscle: 'Hombros', type: 'compound' },
        ];

        return selected.map(ex => this.applyRepSchema(ex, goal));
    }

    private selectExercisesForMuscleGroups(focus: string, goal: Goal, equipment: Equipment): WorkoutExercise[] {
        // Lógica para filtrar ejercicios por enfoque (Push/Pull/Legs/etc)
        // Para simplificar el ejemplo, devolvemos una lista estática ajustada
        const demoMap: Record<string, any[]> = {
            'Push': [
                { name: 'Press de Banca', type: 'compound' },
                { name: 'Press Militar', type: 'compound' },
                { name: 'Aperturas', type: 'isolation' },
                { name: 'Extensiones Tríceps', type: 'isolation' }
            ],
            'Pull': [
                { name: 'Dominadas', type: 'compound' },
                { name: 'Remo con Barra', type: 'compound' },
                { name: 'Facepulls', type: 'isolation' },
                { name: 'Curl de Bíceps', type: 'isolation' }
            ],
            'Legs': [
                { name: 'Sentadillas', type: 'compound' },
                { name: 'Prensa', type: 'compound' },
                { name: 'Leg Curl', type: 'isolation' },
                { name: 'Elevación Talones', type: 'isolation' }
            ],
            'Upper': [
                { name: 'Press Inclinado', type: 'compound' },
                { name: 'Remo Kroc', type: 'compound' },
                { name: 'Laterales Hombro', type: 'isolation' }
            ],
            'Lower': [
                { name: 'Peso Muerto', type: 'compound' },
                { name: 'Zancadas', type: 'compound' },
                { name: 'Core Plank', type: 'isolation' }
            ]
        };

        const exList = demoMap[focus] || demoMap['Push'];
        return exList.map(ex => this.applyRepSchema(ex, goal));
    }

    private applyRepSchema(ex: any, goal: Goal): WorkoutExercise {
        let sets = 3;
        let reps = '10-12';
        let rest = '90s';

        if (goal === 'power') {
            sets = ex.type === 'compound' ? 5 : 3;
            reps = ex.type === 'compound' ? '3-5' : '8-10';
            rest = ex.type === 'compound' ? '3-5 min' : '90s';
        } else if (goal === 'volume') {
            sets = 4;
            reps = '8-12';
            rest = '60-90s';
        } else if (goal === 'functional') {
            sets = 3;
            reps = '12-15';
            rest = '45s';
        }

        return {
            ...ex,
            id: Math.random().toString(),
            muscle_group: ex.muscle || 'Varios',
            difficulty: 'intermediate',
            equipment: ['full-gym'],
            sets,
            reps,
            rest
        };
    }
}
