import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Routine, RoutineDay, GOAL_MAP, LEVEL_MAP, TYPE_MAP, MUSCLE_GROUP_MAP } from '../types/routine';

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
        <div ref={containerRef} className="w-full max-w-[1600px] mx-auto py-12 px-4" style={{ perspective: '1000px' }}>
            <div className="text-center mb-12">
                <h2 className="routine-title text-4xl font-extrabold text-white mb-2">{routine.name}</h2>
                <p className="routine-subtitle text-gray-500 text-lg">
                    Objetivo: <span className="text-green-500 capitalize font-semibold">{GOAL_MAP[routine.goal] || routine.goal}</span> •
                    Nivel: <span className="text-green-500 capitalize font-semibold">{LEVEL_MAP[routine.level] || routine.level}</span>
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pb-10">
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
            className="day-card bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-white/20 transition-colors w-[460px] min-h-[620px] flex-shrink-0 flex flex-col"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="bg-white/5 p-6 border-b border-white/10 relative overflow-hidden">
                {/* Subtle green glow in card header */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold text-white relative z-10">{day.dayName}</h3>
                <p className="text-green-500 text-sm font-medium relative z-10">{day.focus}</p>
            </div>

            <div className="p-6">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <th className="pb-4 w-[40px]"></th>
                            <th className="pb-4 w-[45%]">Ejercicio</th>
                            <th className="pb-4 text-center w-[25%] px-2">S×R</th>
                            <th className="pb-4 text-right w-[20%]">Desc.</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {day.exercises.map((ex, i) => {
                            const isSuperset = !!ex.supersetId;
                            const nextIsSameSuperset = isSuperset && day.exercises[i + 1]?.supersetId === ex.supersetId;
                            const prevIsSameSuperset = isSuperset && day.exercises[i - 1]?.supersetId === ex.supersetId;
                            const isSupersetStart = isSuperset && !prevIsSameSuperset;
                            const supersetCount = isSupersetStart ? day.exercises.filter(e => e.supersetId === ex.supersetId).length : 0;

                            return (
                                <tr
                                    key={i}
                                    className={`exercise-row group transition-colors ${isSuperset ? 'bg-green-500/5' : ''} ${isSuperset && !nextIsSameSuperset ? 'border-b-gray-800' : ''}`}
                                >
                                    {isSuperset ? (
                                        isSupersetStart ? (
                                            <td
                                                rowSpan={supersetCount}
                                                className="relative w-[40px] border-l-2 border-green-500 overflow-hidden bg-green-500/10"
                                            >
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center p-1"
                                                >
                                                    <span
                                                        className="text-[9px] font-black text-green-500 uppercase tracking-widest whitespace-nowrap transform -rotate-90 origin-center"
                                                        style={{ minWidth: '100px' }}
                                                    >
                                                        EJERCICIO COMBINADO
                                                    </span>
                                                </div>
                                            </td>
                                        ) : null
                                    ) : (
                                        <td className="w-[40px]"></td>
                                    )}
                                    <td className="py-4 px-2">
                                        <div className="pl-2">
                                            <p className="font-semibold text-gray-200 group-hover:text-green-500 transition-colors duration-200">{ex.name}</p>
                                            <p className="text-xs text-gray-500 capitalize">{TYPE_MAP[ex.type] || ex.type} • {MUSCLE_GROUP_MAP[ex.muscle_group.toLowerCase()] || ex.muscle_group}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 text-center font-medium text-gray-400">
                                        {ex.sets} × {ex.reps}
                                    </td>
                                    <td className="py-4 text-right text-sm text-gray-500">
                                        {ex.rest === '0s' ? 'Sigue →' : ex.rest}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 bg-white/5 border-t border-white/10 mt-auto">
                <button className="text-sm font-semibold text-green-500 hover:text-green-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">
                    Ver guía de ejecución →
                </button>
            </div>
        </div>
    );
};

export default RoutineView;
