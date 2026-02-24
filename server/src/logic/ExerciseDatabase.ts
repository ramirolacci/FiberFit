import { Exercise } from '../types/routine';

export const EXERCISE_DATABASE: Exercise[] = [
    // PUSH - PECHO
    { id: 'ch1', name: 'Press de Banca Plano con Barra', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner', image_url: '/assets/pecho/Press de Banca Plano con Barra.gif' },
    { id: 'ch2', name: 'Press Superior con Mancuernas', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/pecho/Press Superior con Mancuernas.gif' },
    { id: 'ch3', name: 'Aperturas en Polea Alta', muscle_group: 'chest', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: '/assets/pecho/Aperturas en Polea Alta.gif' },
    { id: 'ch4', name: 'Push Ups (Flexiones)', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only', 'bodyweight'], difficulty: 'beginner', image_url: '/assets/pecho/f91e252ccec48090bf58266cc20b0742.gif' },
    { id: 'ch5', name: 'Fondos de Pecho (Dips)', muscle_group: 'chest', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'advanced', image_url: '/assets/pecho/Fondos de Pecho (Dips).gif' },
    { id: 'ch6', name: 'Press en Máquina Hammer', muscle_group: 'chest', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/pecho/Press en Máquina Hammer.gif' },

    // PUSH - HOMBROS
    { id: 'sh1', name: 'Press Militar de Pie con Barra', muscle_group: 'shoulders', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: '/assets/hombros/Press Militar de Pie con Barra.gif' },
    { id: 'sh2', name: 'Press de Hombros con Mancuernas', muscle_group: 'shoulders', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/hombros/Press de Hombros con Mancuernas.gif' },
    { id: 'sh3', name: 'Vuelos Laterales con Mancuernas', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/hombros/Vuelos Laterales con Mancuernas.gif' },
    { id: 'sh4', name: 'Vuelos Frontales', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/hombros/Vuelos Frontales.gif' },
    { id: 'sh5', name: 'Face Pulls', muscle_group: 'shoulders', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/hombros/Face Pulls.gif' },

    // PUSH - TRÍCEPS
    { id: 'tr1', name: 'Press Francés con Barra Z', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: '/assets/biceps y triceps/Press Francés con Barra Z.gif' },
    { id: 'tr2', name: 'Extensión de Tríceps en Polea Alta', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/biceps y triceps/Extensión de Tríceps en Polea Alta.gif' }, // Cable tricep
    { id: 'tr3', name: 'Copa de Tríceps (Sentado)', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/biceps y triceps/Copa de Tríceps (Sentado.gif' },
    { id: 'tr4', name: 'Fondos en Paralelas (Tríceps)', muscle_group: 'triceps', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: '/assets/biceps y triceps/Fondos en Paralelas (Tríceps).gif' },

    // PULL - ESPALDA
    { id: 'bk1', name: 'Dominadas Prinas (Pull Ups)', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: '/assets/espalda/Dominadas Prinas (Pull Ups).gif' },
    { id: 'bk2', name: 'Jalón al Pecho', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Jalón al Pecho.jpg' },
    { id: 'bk3', name: 'Remo con Barra T', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: '/assets/espalda/Remo con Barra T.gif' },
    { id: 'bk4', name: 'Remo con Mancuerna a una mano', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Remo con Mancuerna a una mano.gif' },
    { id: 'bk5', name: 'Remo en Polea Baja', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Remo en Polea Baja.gif' },
    { id: 'bk6', name: 'Pull Over en Polea Alta', muscle_group: 'back', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: '/assets/espalda/Pull Over en Polea Alta.gif' },

    // PULL - BÍCEPS
    { id: 'bi1', name: 'Curl de Bíceps con Barra', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner', image_url: '/assets/biceps y triceps/Curl de Bíceps con Barra.gif' },
    { id: 'bi2', name: 'Curl Martillo con Mancuernas', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/biceps y triceps/Curl Martillo con Mancuernas.gif' },
    { id: 'bi3', name: 'Curl Predicador (Scott)', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: '/assets/biceps y triceps/Curl Predicador (Scott).gif' },
    { id: 'bi4', name: 'Curl Concentrado', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only'], difficulty: 'beginner', image_url: '/assets/biceps y triceps/Curl Concentrado.gif' },

    // LEGS - PIERNAS
    { id: 'lg1', name: 'Sentadilla Trasera con Barra', muscle_group: 'quads', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: '/assets/piernas y gluteos/Sentadilla Trasera con Barra.gif' }, // Correct Squat/Barbell visual
    { id: 'lg2', name: 'Prensa Inclinada 45°', muscle_group: 'quads', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Prensa Inclinada 45°.gif' }, // Leg machine
    { id: 'lg3', name: 'Estocadas con Mancuernas', muscle_group: 'legs', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Estocadas con Mancuernas.gif' },
    { id: 'lg4', name: 'Extensión de Cuádriceps', muscle_group: 'quads', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Extensión de Cuádriceps.gif' },
    { id: 'lg5', name: 'Peso Muerto Rumano', muscle_group: 'hamstrings', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'intermediate', image_url: '/assets/piernas y gluteos/Peso Muerto Rumano.gif' }, // RDL Barbell
    { id: 'lg6', name: 'Curl Femoral Tumbado', muscle_group: 'hamstrings', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Curl Femoral Tumbado.gif' },
    { id: 'lg7', name: 'Hip Thrust (Empuje de Cadera)', muscle_group: 'glutes', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Hip Thrust (Empuje de Cadera).gif' }, // Hip thrust barbell visualization
    { id: 'lg8', name: 'Elevación de Talones (Calf Raise)', muscle_group: 'calves', type: 'isolation', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'beginner', image_url: '/assets/piernas y gluteos/Elevación de Talones (Calf Raise).gif' },

    // CORE
    { id: 'cr1', name: 'Plancha Abdominal (Plank)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym', 'bodyweight'], difficulty: 'beginner', image_url: '/assets/core/Plancha Abdominal (Plank).jpg' }, // Plank
    { id: 'cr2', name: 'Crunch con Cable', muscle_group: 'core', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: '/assets/core/Crunch con Cable.gif' },
    { id: 'cr3', name: 'Elevación de Piernas Colgado', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: '/assets/core/Elevación de Piernas Colgado.gif' }, // Pullup bar setup
    { id: 'cr4', name: 'Rueda Abdominal (Ab Wheel)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'advanced', image_url: '/assets/core/Rueda Abdominal (Ab Wheel).gif' },
];
