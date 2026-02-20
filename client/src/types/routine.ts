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
  image_url?: string;
}

export interface WorkoutExercise extends Exercise {
  sets: number;
  reps: string;
  rest: string; // e.g., "90s"
  supersetId?: string; // If present, exercises with the same ID are performed together
  supersetLabel?: string; // e.g., "Superset A"
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

export const GOAL_MAP: Record<string, string> = {
  volume: 'Volumen',
  definition: 'Definición',
  power: 'Fuerza/Potencia',
  functional: 'Funcional'
};

export const LEVEL_MAP: Record<string, string> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado'
};

export const EQUIPMENT_MAP: Record<string, string> = {
  'full-gym': 'Gimnasio Completo',
  'dumbbells-only': 'Solo Mancuernas',
  'bodyweight': 'Peso Corporal',
  'home-gym': 'Gimnasio en Casa'
};

export const MUSCLE_GROUP_MAP: Record<string, string> = {
  chest: 'Pecho',
  back: 'Espalda',
  legs: 'Piernas',
  shoulders: 'Hombros',
  arms: 'Brazos',
  core: 'Core',
  full_body: 'Cuerpo Completo',
  glutes: 'Glúteos',
  quads: 'Cuádriceps',
  hamstrings: 'Isquios',
  calves: 'Pantorrillas',
  triceps: 'Tríceps',
  biceps: 'Bíceps',
  forearms: 'Antebrazos'
};

export const TYPE_MAP: Record<string, string> = {
  compound: 'Compuesto',
  isolation: 'Aislado'
};
