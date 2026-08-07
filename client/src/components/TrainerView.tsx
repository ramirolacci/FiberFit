import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MUSCLE_GROUPS_DATA, MuscleGroupData, ExerciseDetail } from '../data/trainerData';
import { BodyDiagram } from './BodyDiagram';
import { ChevronDown, ChevronUp, ArrowLeft, Play, Sparkles, HelpCircle } from 'lucide-react';

const MUSCLE_KEYS = [
    { key: 'abdominales', name: 'Abdominales' },
    { key: 'biceps', name: 'Bíceps' },
    { key: 'quadriceps', name: 'Cuádriceps' },
    { key: 'espalda', name: 'Espalda' },
    { key: 'femorales', name: 'Femorales' },
    { key: 'gluteos', name: 'Glúteos' },
    { key: 'pecho', name: 'Pecho' },
    { key: 'hombros', name: 'Hombros' },
    { key: 'triceps', name: 'Tríceps' },
];

export const TrainerView: React.FC = () => {
    const [selectedMuscleKey, setSelectedMuscleKey] = useState<string | null>(null);
    const [openCategory, setOpenCategory] = useState<string | null>('mancuernas');
    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const cardsGridRef = useRef<HTMLDivElement>(null);

    const selectedMuscle: MuscleGroupData | null = selectedMuscleKey ? MUSCLE_GROUPS_DATA[selectedMuscleKey] || null : null;

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [selectedMuscleKey, selectedExercise]);

    const handleSelectMuscle = (key: string) => {
        setSelectedMuscleKey(key);
        setSelectedExercise(null);
        const muscleData = MUSCLE_GROUPS_DATA[key];
        if (muscleData && muscleData.equipmentCategories.length > 0) {
            setOpenCategory(muscleData.equipmentCategories[0].id);
        } else {
            setOpenCategory(null);
        }
    };

    const handleToggleCategory = (catId: string) => {
        setOpenCategory(prev => (prev === catId ? null : catId));
    };

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 py-8 text-gray-100">
            {/* STAGE 3: EXERCISE DETAIL VIEW */}
            {selectedExercise && selectedMuscle ? (
                <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-800 shadow-2xl">
                    <button
                        onClick={() => setSelectedExercise(null)}
                        className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors mb-6 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Volver a {selectedMuscle.name}
                    </button>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
                        {selectedExercise.name}
                    </h2>

                    {/* Image Preview (If available) */}
                    {selectedExercise.imageUrl && (
                        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 bg-gray-950 shadow-xl mb-6 flex justify-center items-center">
                            <img
                                src={selectedExercise.imageUrl}
                                alt={selectedExercise.name}
                                className="w-full max-h-[400px] object-contain rounded-xl"
                            />
                        </div>
                    )}

                    {/* Media / Video Container */}
                    {selectedExercise.videoUrl && (
                        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 bg-black shadow-xl mb-8 flex justify-center items-center min-h-[300px]">
                            {selectedExercise.videoUrl.endsWith('.gif') || selectedExercise.videoUrl.endsWith('.jpg') || selectedExercise.videoUrl.endsWith('.png') ? (
                                <img
                                    src={selectedExercise.videoUrl}
                                    alt={selectedExercise.name}
                                    className="w-full max-h-[450px] object-contain rounded-xl"
                                />
                            ) : (
                                <video
                                    src={selectedExercise.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full max-h-[450px] object-contain rounded-xl pointer-events-none"
                                />
                            )}
                        </div>
                    )}

                    {/* Steps / Explanation */}
                    <div className="max-w-3xl mx-auto bg-gray-950/60 rounded-xl p-6 border border-gray-800/80">
                        <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                            <Sparkles size={20} /> Explicación del Entrenamiento
                        </h3>
                        <ul className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
                            {selectedExercise.steps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-lg select-none">-</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Extra Note / Advice */}
                        {selectedExercise.note && (
                            <div className="mt-6 pt-4 border-t border-gray-800 text-sm md:text-base text-gray-300 leading-relaxed italic bg-green-950/20 p-4 rounded-lg border-l-4 border-green-500">
                                {selectedExercise.note}
                            </div>
                        )}
                    </div>
                </div>
            ) : selectedMuscle ? (
                /* STAGE 2: SELECTED MUSCLE VIEW */
                <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-800 shadow-2xl">
                    <button
                        onClick={() => setSelectedMuscleKey(null)}
                        className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors mb-6 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Volver a todos los grupos musculares
                    </button>

                    {/* Header Title */}
                    <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-4 tracking-tight">
                        {selectedMuscle.name}
                    </h2>

                    {/* Main Muscle Illustration / Image */}
                    <div className="bg-gray-950/70 rounded-xl p-4 mb-8 border border-gray-800/60 flex justify-center items-center">
                        {(selectedMuscle.detailImageUrl || selectedMuscle.cardImageUrl) ? (
                            <img
                                src={selectedMuscle.detailImageUrl || selectedMuscle.cardImageUrl}
                                alt={selectedMuscle.name}
                                className="max-h-[350px] object-contain rounded-lg"
                                onError={(e) => {
                                    // Fallback to BodyDiagram if image fails
                                    (e.target as HTMLElement).style.display = 'none';
                                }}
                            />
                        ) : (
                            <BodyDiagram
                                highlightedMuscle={selectedMuscle.id}
                                showFront={selectedMuscle.frontHighlight !== false}
                                showBack={selectedMuscle.backHighlight !== false}
                            />
                        )}
                    </div>

                    {/* Subtitle Question */}
                    <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                            <HelpCircle className="text-green-500" size={24} />
                            ¿Con qué querés entrenar?
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Selecciona una categoría de equipamiento</p>
                    </div>

                    {/* Accordions by Equipment */}
                    <div className="max-w-2xl mx-auto space-y-4">
                        {selectedMuscle.equipmentCategories.map(category => {
                            const isOpen = openCategory === category.id;
                            return (
                                <div
                                    key={category.id}
                                    className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-200"
                                >
                                    <button
                                        onClick={() => handleToggleCategory(category.id)}
                                        className="w-full px-6 py-4 flex items-center justify-between font-bold text-lg text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className={isOpen ? 'text-red-600' : 'text-gray-800'}>
                                            {category.name}
                                        </span>
                                        {isOpen ? (
                                            <ChevronUp className="text-red-600" size={22} />
                                        ) : (
                                            <ChevronDown className="text-gray-500" size={22} />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="bg-gray-100 p-4 pt-2 border-t border-gray-200 space-y-2">
                                            {category.exercises.map(exercise => (
                                                <button
                                                    key={exercise.id}
                                                    onClick={() => setSelectedExercise(exercise)}
                                                    className="w-full text-center py-3 px-4 bg-white rounded-lg font-medium text-gray-800 shadow-sm hover:bg-red-50 hover:text-red-600 border border-gray-200 hover:border-red-300 transition-all text-sm md:text-base flex items-center justify-center gap-2"
                                                >
                                                    <span>{exercise.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                /* STAGE 1: MUSCLE SELECTION GRID */
                <div>
                    {/* Top Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-800 pb-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                                ¿Querés ideas para tu entrenamiento?
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base mt-1">
                                Guía práctica por grupo muscular
                            </p>
                        </div>
                    </div>

                    {/* Grid of Cards */}
                    <div
                        ref={cardsGridRef}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4"
                    >
                        {MUSCLE_KEYS.map(({ key, name }) => {
                            const muscleData = MUSCLE_GROUPS_DATA[key];
                            return (
                                <button
                                    key={key}
                                    onClick={() => handleSelectMuscle(key)}
                                    className="group relative flex flex-col items-center bg-gray-900/90 border-2 border-gray-800 hover:border-red-500 rounded-3xl p-3 shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Phone Notch Header */}
                                    <div className="w-12 h-1.5 bg-gray-800 rounded-full mb-3 group-hover:bg-red-500/50 transition-colors" />

                                    {/* Top Bar Label */}
                                    <div className="w-full flex justify-between items-center px-1 mb-1">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider group-hover:text-red-400 transition-colors">
                                            Ver
                                        </span>
                                        <div className="w-2 h-0.5 bg-gray-600 rounded-full" />
                                    </div>

                                    {/* Muscle Title */}
                                    <h3 className="text-xs md:text-sm font-black text-amber-500 group-hover:text-red-500 transition-colors text-center truncate w-full mb-2">
                                        {name}
                                    </h3>

                                    {/* Card Illustration / Image */}
                                    <div className="w-full flex justify-center items-center py-1 min-h-[140px]">
                                        {muscleData?.cardImageUrl ? (
                                            <img
                                                src={muscleData.cardImageUrl}
                                                alt={name}
                                                className="w-full max-h-36 object-contain rounded-lg group-hover:scale-105 transition-transform"
                                                onError={(e) => {
                                                    // Fallback to BodyDiagram if image fails
                                                    (e.target as HTMLElement).style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <BodyDiagram
                                                highlightedMuscle={key}
                                                showFront={muscleData?.frontHighlight !== false}
                                                showBack={muscleData?.frontHighlight === false}
                                            />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
