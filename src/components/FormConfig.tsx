import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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

    const formRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Form entrance animation
    useEffect(() => {
        if (!formRef.current) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.8 })

            // Container slides up with scale
            tl.fromTo(formRef.current,
                { y: 80, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
            )

            // Title reveal
            tl.fromTo('.form-title',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.4'
            )

            // Form fields stagger in
            tl.fromTo('.form-field',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.1 },
                '-=0.2'
            )

            // Slider reveal
            tl.fromTo('.form-slider',
                { x: -40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.1'
            )

            // Button bounces in
            tl.fromTo('.form-submit',
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
                '-=0.2'
            )

            // Subtle pulse on the container border
            gsap.to(formRef.current, {
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2
            })
        }, formRef.current)
        return () => ctx.revert()
    }, [])

    // Button loading animation
    useEffect(() => {
        if (!buttonRef.current) return;
        if (loading) {
            gsap.to(buttonRef.current, {
                scale: 0.97,
                duration: 0.3,
                ease: 'power2.inOut'
            })
            // Pulse while loading
            gsap.to(buttonRef.current, {
                opacity: 0.8,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        } else {
            gsap.killTweensOf(buttonRef.current)
            gsap.to(buttonRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            })
        }
    }, [loading])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Button click animation
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                { scale: 0.95 },
                { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' }
            )
        }

        onGenerate(formData);
    };

    const inputClasses = "w-full p-3 mt-1 bg-white/5 border border-white/10 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none text-gray-100 hover:border-white/30 duration-300 backdrop-blur-sm";
    const labelClasses = "text-sm font-semibold text-gray-400 ml-1";

    const formatDuration = (minutes: number) => {
        if (minutes < 60) return `${minutes} min`;
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return m > 0 ? `${h}h ${m}min` : `${h}h`;
    };

    return (
        <div ref={formRef} className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/50" style={{ opacity: 0 }}>
            <h2 className="form-title text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                Configura tu Entrenamiento
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Objetivo */}
                    <div className="form-field">
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
                    <div className="form-field">
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
                    <div className="form-field">
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
                    <div className="form-field">
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
                <div className="form-slider">
                    <label className={labelClasses}>Tiempo por sesión: {formatDuration(formData.sessionDuration)}</label>
                    <input
                        type="range"
                        min="30"
                        max="120"
                        step="15"
                        value={formData.sessionDuration}
                        onChange={(e) => setFormData({ ...formData, sessionDuration: Number(e.target.value) })}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500 mt-4"
                    />
                </div>

                <button
                    ref={buttonRef}
                    type="submit"
                    disabled={loading}
                    className={`form-submit w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${loading ? 'bg-gray-700' : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-green-500/25 hover:shadow-xl'
                        }`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-3">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Generando Rutina...
                        </span>
                    ) : 'Generar Mi Rutina'}
                </button>
            </form>
        </div>
    );
};

export default FormConfig;
