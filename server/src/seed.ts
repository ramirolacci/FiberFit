import { supabase } from './lib/supabase';

const initialExercises = [
    { name: 'Sentadillas', muscle_group: 'Quads', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner' },
    { name: 'Press de Banca', muscle_group: 'Pecho', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'beginner' },
    { name: 'Remo con Barra', muscle_group: 'Espalda', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { name: 'Peso Muerto Rumano', muscle_group: 'Isquios', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'intermediate' },
    { name: 'Press Militar', muscle_group: 'Hombros', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'beginner' },
    { name: 'Dominadas', muscle_group: 'Espalda', type: 'compound', equipment: ['full-gym', 'home-gym'], difficulty: 'intermediate' },
    { name: 'Zancadas', muscle_group: 'Piernas', type: 'compound', equipment: ['full-gym', 'home-gym', 'dumbbells-only'], difficulty: 'beginner' },
    { name: 'Aperturas Pecho', muscle_group: 'Pecho', type: 'isolation', equipment: ['full-gym', 'dumbbells-only'], difficulty: 'beginner' },
    { name: 'Facepulls', muscle_group: 'Hombros', type: 'isolation', equipment: ['full-gym'], difficulty: 'intermediate' },
];

async function seed() {
    console.log('Sembrando ejercicios...');
    const { data, error } = await supabase
        .from('exercises')
        .insert(initialExercises);

    if (error) {
        console.error('Error sembrando ejercicios:', error);
    } else {
        console.log('Ejercicios sembrados con éxito!');
    }
}

seed();
