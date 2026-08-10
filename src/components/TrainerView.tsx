import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MUSCLE_GROUPS_DATA, MuscleGroupData, ExerciseDetail } from '../data/trainerData';
import { BodyDiagram } from './BodyDiagram';
import { ChevronDown, ChevronUp, ArrowLeft, Play, Sparkles, HelpCircle, ChevronRight, Dumbbell, Layers, Flame, User, Clock } from 'lucide-react';

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

const BarbellIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12h20" />
        <rect x="5" y="6" width="2.5" height="12" rx="0.5" fill="currentColor" fillOpacity="0.2" />
        <rect x="16.5" y="6" width="2.5" height="12" rx="0.5" fill="currentColor" fillOpacity="0.2" />
        <rect x="3.5" y="8" width="1.5" height="8" rx="0.5" />
        <rect x="19" y="8" width="1.5" height="8" rx="0.5" />
    </svg>
);

const CableMachineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="4.5" r="1.5" />
        <path d="M12 6v12" />
        <rect x="7" y="10" width="10" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
        <path d="M5 20h14" />
        <path d="M7 8h10" />
    </svg>
);

const BodyweightIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="4" r="2" />
        <path d="M5 14l4-3 3 2 5-4" />
        <path d="M9 11v6l-2 3" />
        <path d="M12 13v4l2 3" />
    </svg>
);

const getCategoryIcon = (catName: string, catId: string) => {
    const nameLower = catName.toLowerCase();
    const idLower = catId.toLowerCase();

    if (nameLower.includes('mancuerna') || idLower.includes('mancuerna')) return <Dumbbell size={16} />;
    if (nameLower.includes('barra') || idLower.includes('barra')) return <BarbellIcon size={16} />;
    if (nameLower.includes('polea') || nameLower.includes('máquina') || nameLower.includes('maquina') || idLower.includes('polea')) return <CableMachineIcon size={16} />;
    if (nameLower.includes('corporal') || nameLower.includes('calistenia') || idLower.includes('corporal')) return <BodyweightIcon size={16} />;
    return <Dumbbell size={16} />;
};

export const TrainerView: React.FC = () => {
    const [selectedMuscleKey, setSelectedMuscleKey] = useState<string | null>(null);
    const [openCategory, setOpenCategory] = useState<string | null>('mancuernas');
    const [selectedExercise, setSelectedExercise] = useState<ExerciseDetail | null>(null);

    // Recently viewed state synced with localStorage
    const [lastMuscleKey, setLastMuscleKey] = useState<string | null>(() => localStorage.getItem('trainer_last_muscle'));
    const [lastExerciseId, setLastExerciseId] = useState<string | null>(() => localStorage.getItem('trainer_last_exercise'));

    const savedScrollYRef = useRef<number>(0);

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
        setLastMuscleKey(key);
        localStorage.setItem('trainer_last_muscle', key);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const muscleData = MUSCLE_GROUPS_DATA[key];
        if (muscleData && muscleData.equipmentCategories.length > 0) {
            setOpenCategory(muscleData.equipmentCategories[0].id);
        } else {
            setOpenCategory(null);
        }
    };

    const handleSelectExercise = (exercise: ExerciseDetail) => {
        savedScrollYRef.current = window.scrollY;
        setSelectedExercise(exercise);
        setLastExerciseId(exercise.id);
        localStorage.setItem('trainer_last_exercise', exercise.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToMuscleView = () => {
        setSelectedExercise(null);
        const restoreY = savedScrollYRef.current;
        setTimeout(() => {
            window.scrollTo({ top: restoreY, behavior: 'smooth' });
        }, 50);
    };

    const handleBackToMusclesList = () => {
        setSelectedMuscleKey(null);
        setSelectedExercise(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto px-1 sm:px-4 py-3 md:py-8 text-gray-100">
            {/* STAGE 3: EXERCISE DETAIL VIEW */}
            {selectedExercise && selectedMuscle ? (
                <div className="bg-gray-900/90 sm:bg-gray-900/80 backdrop-blur-md -mx-5 sm:mx-0 rounded-none sm:rounded-2xl p-3 sm:p-6 md:p-8 border-x-0 sm:border border-gray-800 shadow-2xl">
                    <button
                        onClick={handleBackToMuscleView}
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-950/80 hover:bg-gray-800 text-green-400 hover:text-green-300 border border-gray-800 hover:border-green-500/50 text-xs md:text-sm font-bold transition-all duration-200 shadow-md group mb-5"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-green-400" />
                        <span>Volver a {selectedMuscle.name}</span>
                    </button>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 text-center tracking-wide px-2">
                        {selectedExercise.name}
                    </h2>

                    {/* Image Preview (If available) */}
                    {selectedExercise.imageUrl && (
                        <div className="w-full max-w-3xl mx-auto rounded-none sm:rounded-xl overflow-hidden border-x-0 sm:border border-gray-800 bg-gray-950 shadow-xl mb-5 flex justify-center items-center -mx-3 sm:mx-auto w-[calc(100%+1.5rem)] sm:w-full">
                            <img
                                src={selectedExercise.imageUrl}
                                alt={selectedExercise.name}
                                className="w-full h-auto max-h-[500px] object-contain"
                            />
                        </div>
                    )}

                    {/* Media / Video Container */}
                    {selectedExercise.videoUrl && (
                        <div className="w-full max-w-3xl mx-auto rounded-none sm:rounded-xl overflow-hidden border-x-0 sm:border border-gray-800 bg-black shadow-xl mb-6 flex justify-center items-center -mx-3 sm:mx-auto w-[calc(100%+1.5rem)] sm:w-full">
                            {selectedExercise.videoUrl.endsWith('.gif') || selectedExercise.videoUrl.endsWith('.jpg') || selectedExercise.videoUrl.endsWith('.png') ? (
                                <img
                                    src={selectedExercise.videoUrl}
                                    alt={selectedExercise.name}
                                    className="w-full h-auto max-h-[550px] object-cover sm:object-contain"
                                />
                            ) : (
                                <video
                                    src={selectedExercise.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto max-h-[550px] object-cover sm:object-contain pointer-events-none"
                                />
                            )}
                        </div>
                    )}

                    {/* Steps / Explanation */}
                    <div className="max-w-3xl mx-auto bg-gray-950/60 rounded-xl p-4 sm:p-6 border border-gray-800/80">
                        <h3 className="text-base sm:text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                            <Sparkles size={18} /> Explicación del Entrenamiento
                        </h3>
                        <ul className="space-y-3 text-sm md:text-base text-gray-200 leading-relaxed">
                            {selectedExercise.steps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                    <span className="text-green-500 font-bold text-base select-none shrink-0">•</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Extra Note / Advice */}
                        {selectedExercise.note && (
                            <div className="mt-5 pt-4 border-t border-gray-800 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed italic bg-green-950/20 p-3.5 sm:p-4 rounded-lg border-l-4 border-green-500">
                                {selectedExercise.note}
                            </div>
                        )}
                    </div>

                    {/* Bottom Back Button */}
                    <div className="max-w-3xl mx-auto mt-6 flex justify-center px-1">
                        <button
                            onClick={handleBackToMuscleView}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gray-950/80 hover:bg-gray-800 text-green-400 hover:text-green-300 border border-gray-800 hover:border-green-500/50 font-bold text-sm md:text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Volver a {selectedMuscle.name}
                        </button>
                    </div>
                </div>
            ) : selectedMuscle ? (
                /* STAGE 2: SELECTED MUSCLE VIEW */
                <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-3 sm:p-6 md:p-8 border border-gray-800 shadow-2xl">
                    <button
                        onClick={handleBackToMusclesList}
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-950/80 hover:bg-gray-800 text-green-400 hover:text-green-300 border border-gray-800 hover:border-green-500/50 text-xs md:text-sm font-bold transition-all duration-200 shadow-md group mb-6"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-green-400" />
                        <span>Volver a todos los grupos musculares</span>
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
                            ¿Con qué equipamiento querés entrenar?
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Elegí una categoría para ver los ejercicios disponibles</p>
                    </div>

                    {/* Equipment Category Tabs */}
                    {(() => {
                        const activeCatId = openCategory || selectedMuscle.equipmentCategories[0]?.id;
                        const activeCat = selectedMuscle.equipmentCategories.find(c => c.id === activeCatId) || selectedMuscle.equipmentCategories[0];

                        return (
                            <div className="max-w-4xl mx-auto">
                                {/* Segmented Tab Bar */}
                                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8">
                                    {selectedMuscle.equipmentCategories.map(category => {
                                        const isSelected = activeCatId === category.id;
                                        const icon = getCategoryIcon(category.name, category.id);
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => setOpenCategory(category.id)}
                                                className={`px-5 py-3.5 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2.5 border shadow-lg ${
                                                    isSelected
                                                        ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white border-green-400 shadow-[0_4px_20px_rgba(34,197,94,0.35)] scale-105'
                                                        : 'bg-gray-900/90 text-gray-300 hover:text-white border-gray-800 hover:border-gray-700 hover:bg-gray-800/90 backdrop-blur-md'
                                                }`}
                                            >
                                                <span className={isSelected ? 'text-white' : 'text-green-400'}>{icon}</span>
                                                <span>{category.name}</span>
                                                <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold transition-colors ${
                                                    isSelected ? 'bg-black/30 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700/50'
                                                }`}>
                                                    {category.exercises.length}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Exercises Grid for Active Category */}
                                {activeCat && (
                                    <>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {activeCat.exercises.map(exercise => {
                                                const isLastExercise = exercise.id === lastExerciseId;
                                                return (
                                                    <button
                                                        key={exercise.id}
                                                        onClick={() => handleSelectExercise(exercise)}
                                                        className={`group relative flex items-center justify-between p-5 bg-gray-900/60 hover:bg-gray-900/90 backdrop-blur-md rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 text-left overflow-hidden shadow-xl ${
                                                            isLastExercise
                                                                ? 'border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                                                                : 'border-gray-800 hover:border-green-500/50'
                                                        }`}
                                                    >
                                                        <div className="flex flex-col gap-1 pr-3">
                                                            {isLastExercise && (
                                                                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full w-fit mb-0.5">
                                                                    <Clock size={10} className="animate-pulse" /> Visto recientemente
                                                                </span>
                                                            )}
                                                            <h4 className="text-base md:text-lg font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                                                                {exercise.name}
                                                            </h4>
                                                            <span className="text-xs text-gray-400 font-medium">
                                                                {exercise.steps.length} pasos explicados
                                                            </span>
                                                        </div>
                                                        <div className="w-10 h-10 rounded-xl bg-gray-800/80 group-hover:bg-green-500 text-gray-400 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-md">
                                                            <Play size={18} className="fill-current transform group-hover:translate-x-0.5 transition-transform" />
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Scroll to top button if more than 5 exercises */}
                                        {activeCat.exercises.length > 5 && (
                                            <div className="mt-8 flex justify-center">
                                                <button
                                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-950/80 hover:bg-gray-800 text-green-400 hover:text-green-300 border border-gray-800 hover:border-green-500/50 text-xs md:text-sm font-bold transition-all duration-200 shadow-xl group"
                                                >
                                                    <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform text-green-400" />
                                                    <span>Volver arriba</span>
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })()}
                </div>
            ) : (
                /* STAGE 1: MUSCLE SELECTION GRID */
                <div>
                    {/* Top Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-800/80 pb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                Guía Práctica de Entrenamiento
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                ¿Qué grupo muscular querés entrenar?
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base mt-2">
                                Seleccioná una categoría para explorar técnicas, variantes y videos demostrativos.
                            </p>
                        </div>
                    </div>
                    {/* Grid of Minimalist Cards */}
                    <div
                        ref={cardsGridRef}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6"
                    >
                        {MUSCLE_KEYS.map(({ key, name }) => {
                            const muscleData = MUSCLE_GROUPS_DATA[key];
                            const isLastMuscle = key === lastMuscleKey;

                            return (
                                <button
                                    key={key}
                                    onClick={() => handleSelectMuscle(key)}
                                    className={`group relative flex flex-col items-center bg-gray-900/60 backdrop-blur-md border rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden ${
                                        isLastMuscle
                                            ? 'border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.12)]'
                                            : 'border-gray-800 hover:border-green-500/60'
                                    }`}
                                >
                                    {/* Ambient Glow Background */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    {/* Top Green Glow Line */}
                                    <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-transparent group-hover:bg-gradient-to-r from-transparent via-green-500 to-transparent transition-all duration-300" />

                                    {/* Muscle Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-white transition-colors text-center tracking-wide mb-3">
                                        {name}
                                    </h3>

                                    {/* Image / Body Diagram Container */}
                                    <div className="w-full flex justify-center items-center py-1 h-40 md:h-44 relative overflow-hidden">
                                        {muscleData?.cardImageUrl ? (
                                            <img
                                                src={muscleData.cardImageUrl}
                                                alt={name}
                                                className="h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                                                onError={(e) => {
                                                    (e.target as HTMLElement).style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-out">
                                                <BodyDiagram
                                                    highlightedMuscle={key}
                                                    showFront={muscleData?.frontHighlight !== false}
                                                    showBack={muscleData?.frontHighlight === false}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Recently Viewed Label (Bottom & Super Subtle) */}
                                    {isLastMuscle && (
                                        <div className="mt-2 text-[10px] text-green-400/80 font-medium tracking-wide flex items-center gap-1 opacity-90 select-none">
                                            <Clock size={10} className="text-green-500/80" />
                                            <span>Visto recientemente</span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

