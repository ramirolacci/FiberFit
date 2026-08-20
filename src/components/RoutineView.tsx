import React, { useEffect, useRef, useState } from 'react';
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
    const [hoveredExercise, setHoveredExercise] = useState<string | null>(null);
    const previewRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    return (
        <div
            ref={cardRef}
            className="day-card bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl shadow-black/80 border border-white/10 w-full max-w-[500px] md:w-[460px] min-h-[580px] md:min-h-[620px] flex-shrink-0 flex flex-col overflow-hidden"
        >
            <div className="bg-white/5 p-4 md:p-6 border-b border-white/10 relative overflow-hidden">
                {/* Subtle green glow in card header */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold text-white relative z-10">{day.dayName}</h3>
                <p className="text-green-500 text-sm font-medium relative z-10">{day.focus}</p>
            </div>

            <div className="p-4 md:p-6 relative z-20">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <th className="pb-4 w-[30px] md:w-[40px]"></th>
                            <th className="pb-4 w-[45%]">Ejercicio</th>
                            <th className="pb-4 text-center w-[25%] px-1 md:px-2">S×R</th>
                            <th className="pb-4 text-right w-[20%]">Desc.</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {day.exercises.map((ex, i) => {
                            const isSuperset = !!ex.supersetId;
                            const isSupersetStart = isSuperset && (i === 0 || !day.exercises[i - 1]?.supersetId);

                            const imageUrl = ex.image_url;

                            let supersetCount = 0;
                            if (isSupersetStart) {
                                for (let j = i; j < day.exercises.length; j++) {
                                    if (day.exercises[j].supersetId) {
                                        supersetCount++;
                                    } else {
                                        break;
                                    }
                                }
                            }

                            const nextIsSameSuperset = isSuperset && !!day.exercises[i + 1]?.supersetId;

                            return (
                                <tr
                                    key={i}
                                    className={`exercise-row group transition-colors ${isSuperset ? 'bg-green-500/5' : ''} ${isSuperset && !nextIsSameSuperset ? 'border-b-white/10' : 'border-b-transparent'}`}
                                >
                                    {isSuperset ? (
                                        isSupersetStart ? (
                                            <td
                                                rowSpan={supersetCount}
                                                className="relative w-[30px] md:w-[40px] border-l-2 border-green-500 overflow-hidden bg-green-500/10"
                                            >
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center p-1"
                                                >
                                                    <span
                                                        className="text-[8px] md:text-[9px] font-black text-green-500 uppercase tracking-widest whitespace-nowrap transform -rotate-90 origin-center"
                                                        style={{ minWidth: '60px' }}
                                                    >
                                                        COMBINADO
                                                    </span>
                                                </div>
                                            </td>
                                        ) : null
                                    ) : (
                                        <td className="w-[30px] md:w-[40px]"></td>
                                    )}
                                    <td className="py-4 px-2">
                                        <div className="pl-2 relative">
                                            <p
                                                className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-green-500 transition-colors duration-200 cursor-help"
                                                onMouseEnter={() => setHoveredExercise(ex.id + i)}
                                                onMouseLeave={() => setHoveredExercise(null)}
                                            >
                                                {ex.name}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-gray-500 capitalize">{TYPE_MAP[ex.type] || ex.type} • {MUSCLE_GROUP_MAP[ex.muscle_group.toLowerCase()] || ex.muscle_group}</p>

                                            {/* Hover Preview Tooltip */}
                                            {imageUrl && (
                                                <div
                                                    ref={el => previewRefs.current[ex.id + i] = el}
                                                    className={`absolute left-0 bottom-full mb-2 z-50 w-48 overflow-hidden rounded-2xl border border-white/20 bg-gray-900/90 backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-none ${hoveredExercise === ex.id + i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
                                                >
                                                    <div className="p-2">
                                                        <img
                                                            src={imageUrl}
                                                            alt={ex.name}
                                                            className="w-full h-32 object-cover rounded-xl border border-white/10"
                                                            onError={(e) => {
                                                                // If image fails, hide it or use a default one
                                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop';
                                                            }}
                                                        />
                                                        <div className="mt-2 px-1">
                                                            <p className="text-[10px] font-bold text-white uppercase tracking-wider">{ex.name}</p>
                                                            <p className="text-[8px] text-green-500 font-semibold">{MUSCLE_GROUP_MAP[ex.muscle_group.toLowerCase()]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 text-center text-xs md:text-sm font-medium text-gray-400">
                                        {ex.sets} × {ex.reps}
                                    </td>
                                    <td className="py-4 text-right text-[10px] md:text-sm text-gray-500">
                                        {ex.rest === '0s' ? 'Sigue →' : ex.rest}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default RoutineView;
