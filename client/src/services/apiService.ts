import { Routine } from '../types/routine';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const apiService = {
    /**
     * Genera una rutina basada en la configuración del usuario.
     */
    generateRoutine: async (config: {
        goal: string;
        daysPerWeek: number;
        level: string;
        equipment: string;
        sessionDuration: number;
    }): Promise<Routine> => {
        try {
            const response = await fetch(`${API_URL}/generate-routine`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(config),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al generar la rutina');
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    /**
     * (Opcional) Obtiene ejercicios directamente desde Supabase
     */
    getExercises: async () => {
        // Aquí usaríamos supabaseClient para fetch('exercises')
        // return await supabase.from('exercises').select('*');
    }
};
