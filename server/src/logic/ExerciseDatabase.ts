import { Exercise } from '../types/routine';

export const EXERCISE_DATABASE: Exercise[] = [
    // PUSH - PECHO
    { id: 'ch1', name: 'Press de Banca Plano con Barra', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner' },
    { id: 'ch2', name: 'Press Superior con Mancuernas', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'ch3', name: 'Aperturas en Polea Alta', muscle_group: 'chest', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate' },
    { id: 'ch4', name: 'Push Ups (Flexiones)', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only', 'bodyweight'], difficulty: 'beginner' },
    { id: 'ch5', name: 'Fondos de Pecho (Dips)', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'advanced' },
    { id: 'ch6', name: 'Press en Máquina Hammer', muscle_group: 'chest', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner' },

    // PUSH - HOMBROS
    { id: 'sh1', name: 'Press Militar de Pie con Barra', muscle_group: 'shoulders', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { id: 'sh2', name: 'Press de Hombros con Mancuernas', muscle_group: 'shoulders', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'sh3', name: 'Vuelos Laterales con Mancuernas', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'sh4', name: 'Vuelos Frontales', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'sh5', name: 'Face Pulls', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner' },

    // PUSH - TRÍCEPS
    { id: 'tr1', name: 'Press Francés con Barra Z', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { id: 'tr2', name: 'Extensión de Tríceps en Polea Alta', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'tr3', name: 'Copa de Tríceps (Sentado)', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'tr4', name: 'Fondos en Paralelas (Tríceps)', muscle_group: 'triceps', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate' },

    // PULL - ESPALDA
    { id: 'bk1', name: 'Dominadas Prinas (Pull Ups)', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate' },
    { id: 'bk2', name: 'Jalón al Pecho', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'bk3', name: 'Remo con Barra T', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { id: 'bk4', name: 'Remo con Mancuerna a una mano', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'bk5', name: 'Remo en Polea Baja', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'bk6', name: 'Pull Over en Polea Alta', muscle_group: 'back', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate' },

    // PULL - BÍCEPS
    { id: 'bi1', name: 'Curl de Bíceps con Barra', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner' },
    { id: 'bi2', name: 'Curl Martillo con Mancuernas', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'bi3', name: 'Curl Predicador (Scott)', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate' },
    { id: 'bi4', name: 'Curl Concentrado', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only'], difficulty: 'beginner' },

    // LEGS - PIERNAS
    { id: 'lg1', name: 'Sentadilla Trasera con Barra', muscle_group: 'quads', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { id: 'lg2', name: 'Prensa Inclinada 45°', muscle_group: 'quads', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'lg3', name: 'Estocadas con Mancuernas', muscle_group: 'legs', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner' },
    { id: 'lg4', name: 'Extensión de Cuádriceps', muscle_group: 'quads', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'lg5', name: 'Peso Muerto Rumano', muscle_group: 'hamstrings', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'intermediate' },
    { id: 'lg6', name: 'Curl Femoral Tumbado', muscle_group: 'hamstrings', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner' },
    { id: 'lg7', name: 'Hip Thrust (Empuje de Cadera)', muscle_group: 'glutes', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner' },
    { id: 'lg8', name: 'Elevación de Talones (Calf Raise)', muscle_group: 'calves', type: 'isolation', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'beginner' },

    // CORE
    { id: 'cr1', name: 'Plancha Abdominal (Plank)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym', 'bodyweight'], difficulty: 'beginner' },
    { id: 'cr2', name: 'Crunch con Cable', muscle_group: 'core', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate' },
    { id: 'cr3', name: 'Elevación de Piernas Colgado', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate' },
    { id: 'cr4', name: 'Rueda Abdominal (Ab Wheel)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'advanced' },
];
