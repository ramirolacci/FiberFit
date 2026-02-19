import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Routine, RoutineDay } from '../types/routine';

interface Props {
    routine: Routine;
}

const RoutineView: React.FC<Props> = ({ routine }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            // Title entrance
            tl.fromTo('.routine-title',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
            )
            tl.fromTo('.routine-subtitle',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.3'
            )

            // Cards stagger in with 3D effect
            tl.fromTo('.day-card',
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.9,
                    rotateX: 10,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: {
                        each: 0.15,
                        from: 'start'
                    }
                },
                '-=0.2'
            )
        }, containerRef.current)
        return () => ctx.revert()
    }, [routine])

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto py-12 px-4" style={{ perspective: '1000px' }}>
            <div className="text-center mb-12">
                <h2 className="routine-title text-4xl font-extrabold text-white mb-2">{routine.name}</h2>
                <p className="routine-subtitle text-gray-500 text-lg">
                    Objetivo: <span className="text-green-500 capitalize font-semibold">{routine.goal}</span> •
                    Nivel: <span className="text-green-500 capitalize font-semibold">{routine.level}</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {routine.routineDays.map((day, idx) => (
                    <DayCard key={idx} day={day} index={idx} />
                ))}
            </div>
        </div>
    );
};

const DayCard: React.FC<{ day: RoutineDay; index: number }> = ({ day, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        gsap.to(cardRef.current, {
            y: -8,
            scale: 1.02,
            boxShadow: '0 20px 60px rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)',
            duration: 0.35,
            ease: 'power2.out'
        })
        // Animate rows on hover
        gsap.to(cardRef.current.querySelectorAll('.exercise-row'), {
            x: 4,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.03
        })
    }

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        gsap.to(cardRef.current, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.35,
            ease: 'power2.out'
        })
        gsap.to(cardRef.current.querySelectorAll('.exercise-row'), {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.03
        })
    }

    return (
        <div
            ref={cardRef}
            className="day-card bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-green-900/20 transition-colors"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 border-b border-green-900/30 relative overflow-hidden">
                {/* Subtle green glow in card header */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold text-white relative z-10">{day.dayName}</h3>
                <p className="text-green-500 text-sm font-medium relative z-10">{day.focus}</p>
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
                            <tr key={i} className="exercise-row group">
                                <td className="py-4">
                                    <p className="font-semibold text-gray-200 group-hover:text-green-500 transition-colors duration-200">{ex.name}</p>
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
                <button className="text-sm font-semibold text-green-500 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">
                    Ver guía de ejecución →
                </button>
            </div>
        </div>
    );
};

export default RoutineView;
