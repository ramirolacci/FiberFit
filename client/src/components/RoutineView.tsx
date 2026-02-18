import React from 'react';
import { Routine, RoutineDay } from '../types/routine';

interface Props {
    routine: Routine;
}

const RoutineView: React.FC<Props> = ({ routine }) => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{routine.name}</h2>
                <p className="text-gray-500 text-lg">
                    Objetivo: <span className="text-blue-600 capitalize font-semibold">{routine.goal}</span> •
                    Nivel: <span className="text-blue-600 capitalize font-semibold">{routine.level}</span>
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
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                <h3 className="text-xl font-bold text-white">{day.dayName}</h3>
                <p className="text-blue-400 text-sm font-medium">{day.focus}</p>
            </div>

            <div className="p-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <th className="pb-4">Ejercicio</th>
                            <th className="pb-4 text-center">S×R</th>
                            <th className="pb-4 text-right">Desc.</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {day.exercises.map((ex, i) => (
                            <tr key={i} className="group">
                                <td className="py-4">
                                    <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{ex.name}</p>
                                    <p className="text-xs text-gray-500 capitalize">{ex.type} • {ex.muscle_group}</p>
                                </td>
                                <td className="py-4 text-center font-medium text-gray-700">
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

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    Ver guía de ejecución →
                </button>
            </div>
        </div>
    );
};

export default RoutineView;
