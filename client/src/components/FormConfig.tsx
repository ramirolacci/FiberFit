import React, { useState } from 'react';
import { Goal, Level, Equipment } from '../types/routine';

interface FormProps {
    onGenerate: (config: any) => void;
    loading: boolean;
}

const FormConfig: React.FC<FormProps> = ({ onGenerate, loading }) => {
    const [formData, setFormData] = useState({
        goal: 'volume' as Goal,
        daysPerWeek: 3,
        level: 'intermediate' as Level,
        equipment: 'full-gym' as Equipment,
        sessionDuration: 60,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate(formData);
    };

    const inputClasses = "w-full p-3 mt-1 bg-gray-900 border border-gray-700 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-200";
    const labelClasses = "text-sm font-semibold text-gray-400 ml-1";

    return (
        <div className="max-w-2xl mx-auto p-8 bg-gray-900/80 backdrop-blur-md rounded-3xl border border-green-900/20 shadow-2xl shadow-green-900/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                Configura tu Entrenamiento
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Objetivo */}
                    <div>
                        <label className={labelClasses}>Objetivo</label>
                        <select
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value as Goal })}
                            className={inputClasses}
                        >
                            <option value="volume">Volumen (Hipertrofia)</option>
                            <option value="definition">Definición</option>
                            <option value="power">Power (Fuerza)</option>
                            <option value="functional">Funcional</option>
                        </select>
                    </div>

                    {/* Días por semana */}
                    <div>
                        <label className={labelClasses}>Días por semana</label>
                        <select
                            value={formData.daysPerWeek}
                            onChange={(e) => setFormData({ ...formData, daysPerWeek: Number(e.target.value) })}
                            className={inputClasses}
                        >
                            <option value={3}>3 días (Full Body / PPL)</option>
                            <option value={5}>5 días (PPL + Upper/Lower)</option>
                        </select>
                    </div>

                    {/* Nivel */}
                    <div>
                        <label className={labelClasses}>Nivel</label>
                        <select
                            value={formData.level}
                            onChange={(e) => setFormData({ ...formData, level: e.target.value as Level })}
                            className={inputClasses}
                        >
                            <option value="beginner">Principiante</option>
                            <option value="intermediate">Intermedio</option>
                            <option value="advanced">Avanzado</option>
                        </select>
                    </div>

                    {/* Equipamiento */}
                    <div>
                        <label className={labelClasses}>Equipo Disponible</label>
                        <select
                            value={formData.equipment}
                            onChange={(e) => setFormData({ ...formData, equipment: e.target.value as Equipment })}
                            className={inputClasses}
                        >
                            <option value="full-gym">Gimnasio Completo</option>
                            <option value="dumbbells-only">Solo Mancuernas</option>
                            <option value="home-gym">Home Gym Básico</option>
                        </select>
                    </div>
                </div>

                {/* Tiempo por sesión */}
                <div>
                    <label className={labelClasses}>Tiempo por sesión (minutos): {formData.sessionDuration} min</label>
                    <input
                        type="range"
                        min="30"
                        max="120"
                        step="15"
                        value={formData.sessionDuration}
                        onChange={(e) => setFormData({ ...formData, sessionDuration: Number(e.target.value) })}
                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 mt-4"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${loading ? 'bg-gray-700' : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-green-500/25'
                        }`}
                >
                    {loading ? 'Generando Rutina...' : 'Generar Mi Rutina'}
                </button>
            </form>
        </div>
    );
};

export default FormConfig;
