import React from 'react';
import { Routine, RoutineDay } from '../types/routine';

interface Props {
    routine: Routine;
}

const RoutineView: React.FC<Props> = ({ routine }) => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-white mb-2">{routine.name}</h2>
                <p className="text-gray-500 text-lg">
                    Objetivo: <span className="text-green-500 capitalize font-semibold">{routine.goal}</span> •
                    Nivel: <span className="text-green-500 capitalize font-semibold">{routine.level}</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {routine.routineDays.map((day, idx) => (
                    <DayCard key={idx} day={day} />
                ))}
            </div>
        </div>
    );
};

const DayCard: React.FC<{ day: RoutineDay }> = ({ day }) => {
    return (
        <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-green-900/20 transition-all hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 border-b border-green-900/30">
                <h3 className="text-xl font-bold text-white">{day.dayName}</h3>
                <p className="text-green-500 text-sm font-medium">{day.focus}</p>
            </div>

            <div className="p-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <th className="pb-4">Ejercicio</th>
                            <th className="pb-4 text-center">S×R</th>
                            <th className="pb-4 text-right">Desc.</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {day.exercises.map((ex, i) => (
                            <tr key={i} className="group">
                                <td className="py-4">
                                    <p className="font-semibold text-gray-200 group-hover:text-green-500 transition-colors">{ex.name}</p>
                                    <p className="text-xs text-gray-500 capitalize">{ex.type} • {ex.muscle_group}</p>
                                </td>
                                <td className="py-4 text-center font-medium text-gray-400">
                                    {ex.sets} × {ex.reps}
                                </td>
                                <td className="py-4 text-right text-sm text-gray-500">
                                    {ex.rest}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 bg-gray-950 border-t border-green-900/20">
                <button className="text-sm font-semibold text-green-500 hover:text-green-400 transition-colors">
                    Ver guía de ejecución →
                </button>
            </div>
        </div>
    );
};

export default RoutineView;
