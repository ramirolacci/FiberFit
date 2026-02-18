import express, { Request, Response } from 'express';
import cors from 'cors';
import { RoutineGenerator } from './logic/RoutineGenerator';
import { Goal, Equipment, Level } from './types/routine';

const app = express();
app.use(cors());
app.use(express.json());

// En una app real, esto vendría de Supabase
const mockExercises: any[] = [
    // ... lista de ejercicios reales cargados desde la DB
];

app.post('/generate-routine', (req: Request, res: Response) => {
    try {
        const { goal, daysPerWeek, level, equipment, sessionDuration } = req.body;

        // Validación básica
        if (!goal || !daysPerWeek || !level) {
            return res.status(400).json({ error: 'Faltan parámetros de configuración.' });
        }

        const generator = new RoutineGenerator(mockExercises);
        const routine = generator.generate({
            goal: goal as Goal,
            daysPerWeek: Number(daysPerWeek),
            level: level as Level,
            equipment: equipment as Equipment,
            sessionDuration: Number(sessionDuration),
        });

        res.json(routine);
    } catch (error) {
        console.error('Error generating routine:', error);
        res.status(500).json({ error: 'Error interno al generar la rutina.' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor de Rutinas corriendo en puerto ${PORT}`);
});
