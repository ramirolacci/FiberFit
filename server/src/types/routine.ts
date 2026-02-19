export type Goal = 'volume' | 'definition' | 'power' | 'functional';
export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Equipment = 'full-gym' | 'dumbbells-only' | 'bodyweight' | 'home-gym';
export type WorkoutSplit = 'full-body' | 'upper-lower' | 'ppl' | 'bro-split';

export interface Exercise {
    id: string;
    name: string;
    muscle_group: string;
    type: 'compound' | 'isolation';
    equipment: Equipment[];
    difficulty: Level;
    video_url?: string;
}

export interface WorkoutExercise extends Exercise {
    sets: number;
    reps: string;
    rest: string; // e.g., "90s"
    supersetId?: string;
    supersetLabel?: string;
}

export interface RoutineDay {
    dayName: string;
    exercises: WorkoutExercise[];
    focus: string;
}

export interface Routine {
    id?: string;
    userId?: string;
    name: string;
    goal: Goal;
    level: Level;
    daysPerWeek: number;
    config: {
        equipment: Equipment;
        sessionDuration: number;
    };
    routineDays: RoutineDay[];
    createdAt: string;
}
