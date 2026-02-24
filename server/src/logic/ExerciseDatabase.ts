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
    { id: 'tr1', name: 'Press Francés con Barra Z', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop' },
    { id: 'tr2', name: 'Extensión de Tríceps en Polea Alta', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop' }, // Cable tricep
    { id: 'tr3', name: 'Copa de Tríceps (Sentado)', muscle_group: 'triceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1583454102339-06d2460d6934?q=80&w=600&auto=format&fit=crop' },
    { id: 'tr4', name: 'Fondos en Paralelas (Tríceps)', muscle_group: 'triceps', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: 'https://images.unsplash.com/photo-1591948972141-aa6052f5371c?q=80&w=600&auto=format&fit=crop' },

    // PULL - ESPALDA
    { id: 'bk1', name: 'Dominadas Prinas (Pull Ups)', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: '/assets/espalda/Dominadas Prinas (Pull Ups).gif' },
    { id: 'bk2', name: 'Jalón al Pecho', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Jalón al Pecho.jpg' },
    { id: 'bk3', name: 'Remo con Barra T', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate', image_url: '/assets/espalda/Remo con Barra T.gif' },
    { id: 'bk4', name: 'Remo con Mancuerna a una mano', muscle_group: 'back', type: 'compound', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Remo con Mancuerna a una mano.gif' },
    { id: 'bk5', name: 'Remo en Polea Baja', muscle_group: 'back', type: 'compound', equipment: ['full-gym'], difficulty: 'beginner', image_url: '/assets/espalda/Remo en Polea Baja.gif' },
    { id: 'bk6', name: 'Pull Over en Polea Alta', muscle_group: 'back', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: '/assets/espalda/Pull Over en Polea Alta.gif' },

    // PULL - BÍCEPS
    { id: 'bi1', name: 'Curl de Bíceps con Barra', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop' },
    { id: 'bi2', name: 'Curl Martillo con Mancuernas', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only', 'home-gym'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1583454102339-06d2460d6934?q=80&w=600&auto=format&fit=crop' },
    { id: 'bi3', name: 'Curl Predicador (Scott)', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: 'https://images.unsplash.com/photo-1603503363848-69525281866e?q=80&w=600&auto=format&fit=crop' },
    { id: 'bi4', name: 'Curl Concentrado', muscle_group: 'biceps', type: 'isolation', equipment: ['full-gym', 'dumbbells-only'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1583454102339-06d2460d6934?q=80&w=600&auto=format&fit=crop' },

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
    { id: 'cr1', name: 'Plancha Abdominal (Plank)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym', 'bodyweight'], difficulty: 'beginner', image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop' }, // Plank
    { id: 'cr2', name: 'Crunch con Cable', muscle_group: 'core', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate', image_url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop' },
    { id: 'cr3', name: 'Elevación de Piernas Colgado', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'bodyweight'], difficulty: 'intermediate', image_url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop' }, // Pullup bar setup
    { id: 'cr4', name: 'Rueda Abdominal (Ab Wheel)', muscle_group: 'core', type: 'isolation', equipment: ['full-gym', 'home-gym'], difficulty: 'advanced', image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop' },
];
