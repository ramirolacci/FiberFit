import { Routine, Exercise, Goal, Level, Equipment } from '../types/routine';
import { supabase } from '../lib/supabase';
import { RoutineGenerator } from '../lib/RoutineGenerator';
import { EXERCISE_DATABASE } from '../lib/ExerciseDatabase';

export const apiService = {
    /**
     * Genera una rutina basada en la configuración del usuario.
     * Intenta obtener ejercicios de Supabase; si no están disponibles,
     * utiliza la base de datos estática local.
     */
    generateRoutine: async (config: {
        goal: string;
        daysPerWeek: number;
        level: string;
        equipment: string;
        sessionDuration: number;
    }): Promise<Routine> => {
        try {
            let exercises: Exercise[] = [];

            // Intentar cargar ejercicios desde Supabase
            try {
                const { data, error } = await supabase
                    .from('exercises')
                    .select('*');

                if (error) {
                    console.warn('Error fetching exercises from Supabase, using local fallback:', error.message);
                } else if (data && data.length > 0) {
                    // Mapeamos los datos recibidos de Supabase para cumplir con la interfaz Exercise
                    exercises = data.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                        muscle_group: item.muscle_group,
                        type: item.type,
                        equipment: item.equipment as Equipment[],
                        difficulty: item.difficulty as Level,
                        video_url: item.video_url,
                        image_url: item.image_url // Por si la añaden después
                    }));
                    console.log(`Cargados ${exercises.length} ejercicios desde Supabase.`);
                }
            } catch (dbErr) {
                console.warn('Failed connection to Supabase database. Falling back to local data.', dbErr);
            }

            // Si no se cargaron ejercicios de Supabase, usar el fallback local
            if (exercises.length === 0) {
                exercises = EXERCISE_DATABASE;
                console.log(`Usando base de datos de ejercicios local (${exercises.length} ejercicios).`);
            }

            const generator = new RoutineGenerator(exercises);
            const routine = generator.generate({
                goal: config.goal as Goal,
                daysPerWeek: Number(config.daysPerWeek),
                level: config.level as Level,
                equipment: config.equipment as Equipment,
                sessionDuration: Number(config.sessionDuration),
            });

            return routine;
        } catch (error) {
            console.error('Routine Generation Error:', error);
            throw error;
        }
    },

    /**
     * Obtiene ejercicios directamente desde Supabase.
     */
    getExercises: async (): Promise<Exercise[]> => {
        try {
            const { data, error } = await supabase
                .from('exercises')
                .select('*');

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching exercises:', error);
            return EXERCISE_DATABASE; // Fallback
        }
    }
};
