import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NutritionUserProfile, ACTIVITY_LEVEL_MAP, DIET_TYPE_MAP, MealPlan } from '../types/nutrition';
import { calculateMacros, generateMealPlan } from '../services/nutritionCalculator';
import { RECIPES_DATA, RecipeModalInfo } from '../data/recipesData';
import { Flame, Activity, Utensils, Download, ChevronRight, ChevronLeft, Apple, Sparkles, Scale, X, Clock, ChefHat, Info } from 'lucide-react';
import { jsPDF } from 'jspdf';

const IDEA_CARDS = [
    { id: 'ganancia', label: 'Ganancia\nde Masa', image: '/Comidas/GananciaDeMasa.png' },
    { id: 'veganas', label: 'Veganas', image: '/Comidas/Veganas.png' },
    { id: 'perdida', label: 'Pérdida\nde peso', image: '/Comidas/PerdidaDePeso.png' },
    { id: 'definicion', label: 'Definición', image: '/Comidas/Definicion.png' },
    { id: 'gluten', label: 'Sin Gluten', image: '/Comidas/Sin Gluten.png' },
    { id: 'rapidas', label: 'Rápidas\ny fáciles', image: '/Comidas/RapidasYFaciles.png' },
];

export const NutritionView: React.FC = () => {
    const [profile, setProfile] = useState<NutritionUserProfile>(() => {
        const saved = localStorage.getItem('fiberfit_nutrition_profile');
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return {
            gender: 'male',
            age: 26,
            weightKg: 75,
            heightCm: 175,
            activityLevel: 'moderate',
            goal: 'definition',
            dietType: 'standard'
        };
    });

    const [activeTab, setActiveTab] = useState<'calculator' | 'plan'>('plan');
    const [calculatedResults, setCalculatedResults] = useState<{ bmr: number; tdee: number; target: any } | null>(null);
    const [mealPlan, setMealPlan] = useState<MealPlan | null>(null);
    const [selectedCategoryRecipes, setSelectedCategoryRecipes] = useState<{ title: string; recipes: RecipeModalInfo[] } | null>(null);
    const [activeRecipeIndex, setActiveRecipeIndex] = useState<number>(0);
    const [mobileViewStep, setMobileViewStep] = useState<'list' | 'detail'>('list');

    const containerRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Save profile and calculate on profile change
    useEffect(() => {
        localStorage.setItem('fiberfit_nutrition_profile', JSON.stringify(profile));
        const res = calculateMacros(profile);
        setCalculatedResults(res);
        const plan = generateMealPlan(profile, res.target.calories);
        setMealPlan(plan);
    }, [profile]);

    // Entrance Animation
    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Animate results on change
    useEffect(() => {
        if (resultsRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo('.stat-card',
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.1 }
                );
            }, resultsRef);
            return () => ctx.revert();
        }
    }, [calculatedResults, activeTab]);

    const handleInputChange = (field: keyof NutritionUserProfile, value: any) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleOpenCategory = (categoryId: string, label: string) => {
        const recipes = RECIPES_DATA[categoryId] || [];
        setSelectedCategoryRecipes({ title: label.replace('\n', ' '), recipes });
        setActiveRecipeIndex(0);
        setMobileViewStep('list');

        // Pre-carga proactiva en memoria de todas las imágenes de la categoría para velocidad instantánea
        recipes.forEach(r => {
            if (r.image) {
                const img = new Image();
                img.src = r.image;
            }
        });
    };

    const exportNutritionPDF = () => {
        if (!calculatedResults || !mealPlan) return;
        const doc = new jsPDF('p', 'mm', 'a4');
        let yPos = 20;

        doc.setFontSize(22);
        doc.setTextColor(5, 150, 105);
        doc.text("FiberFit - Plan de Nutrición y Macros", 20, yPos);
        yPos += 10;

        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(`Perfil: ${profile.gender === 'male' ? 'Masculino' : 'Femenino'} | ${profile.age} años | ${profile.weightKg} kg | ${profile.heightCm} cm`, 20, yPos);
        yPos += 7;

        const goalName = profile.goal === 'definition' ? 'Definición / Déficit' : profile.goal === 'volume' ? 'Volumen / Superávit' : profile.goal === 'recomp' ? 'Recomposición' : 'Mantenimiento';
        doc.text(`Objetivo: ${goalName} | Dieta: ${DIET_TYPE_MAP[profile.dietType].label}`, 20, yPos);
        yPos += 12;

        // Box for Calories & Macros
        doc.setFillColor(240, 253, 244);
        doc.rect(20, yPos, 170, 32, 'F');
        doc.setFontSize(12);
        doc.setTextColor(4, 120, 87);
        doc.text(`Calorías Objetivo: ${calculatedResults.target.calories} kcal/día`, 25, yPos + 8);
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text(`TMB: ${calculatedResults.bmr} kcal | TDEE: ${calculatedResults.tdee} kcal`, 25, yPos + 15);
        doc.text(`Proteínas: ${calculatedResults.target.proteinGrams}g (${calculatedResults.target.proteinPct}%)  |  Carbohidratos: ${calculatedResults.target.carbsGrams}g (${calculatedResults.target.carbsPct}%)  |  Grasas: ${calculatedResults.target.fatGrams}g (${calculatedResults.target.fatPct}%)`, 25, yPos + 24);

        yPos += 42;

        // Meals
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text("Plan de Comidas Sugerido", 20, yPos);
        yPos += 8;

        mealPlan.meals.forEach(m => {
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
            doc.setFontSize(11);
            doc.setTextColor(5, 150, 105);
            doc.text(`${m.mealName} (${m.suggestedTime}) - ~${m.totalCalories} kcal`, 20, yPos);
            yPos += 6;

            m.items.forEach(item => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                doc.setFontSize(9);
                doc.setTextColor(40, 40, 40);
                doc.text(`• ${item.name} (${item.portion})`, 25, yPos);
                doc.setTextColor(120, 120, 120);
                doc.text(`P: ${item.protein}g | C: ${item.carbs}g | G: ${item.fat}g`, 150, yPos);
                yPos += 5;
            });
            yPos += 4;
        });

        doc.save(`FiberFit_Nutricion_${profile.goal}.pdf`);
    };

    return (
        <div ref={containerRef} className={`mx-auto w-full ${selectedCategoryRecipes ? 'max-w-full p-0 sm:py-6 sm:px-4' : 'max-w-6xl py-8 px-4'}`}>
            {/* Header Title (se oculta en mobile al abrir receta para aprovechar el 100% del espacio) */}
            <div className={`text-center mb-8 ${selectedCategoryRecipes ? 'hidden md:block' : 'block'}`}>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full text-green-400 font-bold text-xs uppercase tracking-widest mb-3">
                    <Apple size={14} /> Módulo de Nutrición Deportiva
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                    Plan <span className="text-green-500">Alimenticio</span> & Recetas
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm">
                    Optimiza tu energía, pérdida de grasa o ganancia muscular con precisión metabólica basada en ciencia.
                </p>

                {/* Subnav Tabs */}
                <div className="flex justify-center gap-3 mt-6">
                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs md:text-sm transition-all ${activeTab === 'plan' ? 'bg-green-600 text-white shadow-lg shadow-green-500/20 scale-105' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <Utensils size={16} /> Plan Alimenticio & Recetas
                    </button>
                    <button
                        onClick={() => setActiveTab('calculator')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs md:text-sm transition-all ${activeTab === 'calculator' ? 'bg-green-600 text-white shadow-lg shadow-green-500/20 scale-105' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <Scale size={16} /> Calculadora de Macros
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            {activeTab === 'plan' ? (
                <div className={`${selectedCategoryRecipes ? 'space-y-0' : 'space-y-6'}`}>
                    {/* Si no hay categoría seleccionada se muestran las tarjetas */}
                    {!selectedCategoryRecipes && (
                        <div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-white tracking-tight">Ideas para Cocinar</h3>
                                <p className="text-gray-400 text-sm mt-1">Te brindamos algunas recetas útiles para tu alimentación</p>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                        {IDEA_CARDS.map((card) => (
                                    <div
                                        key={card.id}
                                        onClick={() => handleOpenCategory(card.id, card.label)}
                                        className="group relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-emerald-950/80 hover:border-green-500 cursor-pointer shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 aspect-[4/5] flex flex-col justify-end p-4"
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.label}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* VISTA DE PANTALLA COMPLETA DE RECETAS (100% DE ANCHO EDGE-TO-EDGE EN MOBILE) */}
                    {selectedCategoryRecipes && selectedCategoryRecipes.recipes.length > 0 ? (
                        <div className="w-full">
                            <div className="bg-gray-950 border-0 lg:border border-white/10 rounded-none lg:rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden min-h-screen lg:min-h-[80vh]">
                                
                                {/* COLUMNA IZQUIERDA: LISTA DE RECETAS */}
                                <div className={`w-full lg:w-96 bg-gray-900/90 border-b lg:border-b-0 lg:border-r border-white/10 p-4 lg:p-6 flex flex-col gap-4 shrink-0 ${mobileViewStep === 'detail' ? 'hidden lg:flex' : 'flex'}`}>
                                    {/* Header de la categoría con botón para volver a Categorías en Mobile */}
                                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => setSelectedCategoryRecipes(null)}
                                                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl border border-white/10 transition-all"
                                                title="Volver a Categorías"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Recetario</span>
                                                <h4 className="text-base font-black text-white">{selectedCategoryRecipes.title}</h4>
                                            </div>
                                        </div>
                                        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                                            {selectedCategoryRecipes.recipes.length} ops
                                        </span>
                                    </div>

                                    <div className="space-y-2.5 pr-1 flex-1">
                                        {selectedCategoryRecipes.recipes.map((recipe, idx) => (
                                            <div
                                                key={recipe.id}
                                                onClick={() => {
                                                    setActiveRecipeIndex(idx);
                                                    setMobileViewStep('detail');
                                                }}
                                                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 w-full ${activeRecipeIndex === idx
                                                    ? 'bg-gradient-to-r from-green-950/80 to-emerald-900/40 border-green-500 shadow-lg shadow-green-500/10'
                                                    : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                                                    }`}
                                            >
                                                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 relative bg-black/40 border border-white/10">
                                                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className={`text-xs font-bold truncate ${activeRecipeIndex === idx ? 'text-green-400' : 'text-gray-200'}`}>
                                                        {recipe.title}
                                                    </h5>
                                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                                                        <span className="flex items-center gap-0.5"><Clock size={10} className="text-green-500" /> {recipe.prepTime}</span>
                                                        <span>•</span>
                                                        <span className="text-gray-300 font-semibold">{recipe.calories} kcal</span>
                                                    </div>
                                                </div>
                                                <ChevronRight size={16} className={activeRecipeIndex === idx ? 'text-green-400' : 'text-gray-600'} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* COLUMNA DERECHA: DETALLE COMPLETO DE LA RECETA */}
                                <div className={`flex-1 flex-col relative bg-gray-900 ${mobileViewStep === 'list' ? 'hidden lg:flex' : 'flex'}`}>
                                    {/* En mobile: Barra superior para volver a la Lista de Recetas de la categoría */}
                                    <div className="lg:hidden p-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
                                        <button
                                            onClick={() => setMobileViewStep('list')}
                                            className="text-green-400 font-bold text-xs flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10"
                                        >
                                            <ChevronLeft size={16} /> Volver a {selectedCategoryRecipes.title}
                                        </button>
                                        <button
                                            onClick={() => setSelectedCategoryRecipes(null)}
                                            className="text-gray-400 hover:text-white p-1.5 bg-white/5 rounded-xl border border-white/10"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>

                                    {/* Header con Fotografía HD */}
                                    <div className="relative h-56 md:h-64 overflow-hidden shrink-0 bg-gray-950">
                                        <img
                                            src={selectedCategoryRecipes.recipes[activeRecipeIndex].image}
                                            alt={selectedCategoryRecipes.recipes[activeRecipeIndex].title}
                                            loading="eager"
                                            decoding="async"
                                            // @ts-ignore
                                            fetchpriority="high"
                                            className="w-full h-full object-cover filter brightness-[0.75]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                                        <div className="absolute bottom-4 left-5 right-5">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-green-400 bg-green-500/20 border border-green-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                    Opción {activeRecipeIndex + 1} de {selectedCategoryRecipes.recipes.length}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-4xl font-black text-white mt-1 leading-tight drop-shadow-md">
                                                {selectedCategoryRecipes.recipes[activeRecipeIndex].title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Información Detallada del Plato */}
                                    <div className="p-5 md:p-8 space-y-6 text-sm">
                                        {/* Barra de metadatos */}
                                        <div className="flex flex-wrap gap-3 md:gap-4 text-xs font-semibold text-gray-400 bg-black/40 p-3 rounded-2xl border border-white/5">
                                            <div className="flex items-center gap-1.5"><Clock size={15} className="text-green-500" /> {selectedCategoryRecipes.recipes[activeRecipeIndex].prepTime}</div>
                                            <div className="flex items-center gap-1.5"><ChefHat size={15} className="text-green-500" /> Dificultad: {selectedCategoryRecipes.recipes[activeRecipeIndex].difficulty}</div>
                                            <div className="flex items-center gap-1.5"><Flame size={15} className="text-green-500" /> ~{selectedCategoryRecipes.recipes[activeRecipeIndex].calories} kcal</div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {selectedCategoryRecipes.recipes[activeRecipeIndex].description}
                                        </p>

                                        {/* Desglose de Macros */}
                                        <div className="grid grid-cols-3 gap-3 text-center">
                                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                                <span className="block text-[10px] uppercase font-bold text-gray-400">Proteínas</span>
                                                <span className="text-base font-black text-red-400">{selectedCategoryRecipes.recipes[activeRecipeIndex].macros.protein}</span>
                                            </div>
                                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                                <span className="block text-[10px] uppercase font-bold text-gray-400">Carbohidratos</span>
                                                <span className="text-base font-black text-amber-400">{selectedCategoryRecipes.recipes[activeRecipeIndex].macros.carbs}</span>
                                            </div>
                                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                                <span className="block text-[10px] uppercase font-bold text-gray-400">Grasas</span>
                                                <span className="text-base font-black text-blue-400">{selectedCategoryRecipes.recipes[activeRecipeIndex].macros.fat}</span>
                                            </div>
                                        </div>

                                        {/* Ingredientes */}
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                                🥗 Ingredientes Requeridos
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                                                {selectedCategoryRecipes.recipes[activeRecipeIndex].ingredients.map((ing, i) => (
                                                    <div key={i} className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
                                                        <span>{ing}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Instrucciones */}
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                                👨‍🍳 Instrucciones Paso a Paso
                                            </h4>
                                            <ol className="space-y-3 text-xs md:text-sm text-gray-300">
                                                {selectedCategoryRecipes.recipes[activeRecipeIndex].steps.map((step, i) => (
                                                    <li key={i} className="flex gap-3 items-start bg-black/30 p-3 rounded-2xl border border-white/5">
                                                        <span className="bg-green-500/20 text-green-400 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs border border-green-500/30">
                                                            {i + 1}
                                                        </span>
                                                        <p className="leading-relaxed pt-0.5">{step}</p>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : (
                /* CALCULATOR TAB */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Form (5 cols) */}
                    <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity size={20} className="text-green-500" /> Datos Biométricos
                        </h3>

                        <div className="space-y-5">
                            {/* Gender */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Género</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => handleInputChange('gender', 'male')}
                                        className={`py-2.5 rounded-xl font-semibold text-sm border transition-all ${profile.gender === 'male' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
                                    >
                                        👨 Hombre
                                    </button>
                                    <button
                                        onClick={() => handleInputChange('gender', 'female')}
                                        className={`py-2.5 rounded-xl font-semibold text-sm border transition-all ${profile.gender === 'female' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
                                    >
                                        👩 Mujer
                                    </button>
                                </div>
                            </div>

                            {/* Age, Weight, Height */}
                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Edad</label>
                                    <input
                                        type="number"
                                        value={profile.age}
                                        onChange={(e) => handleInputChange('age', Number(e.target.value))}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white font-semibold focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Peso (kg)</label>
                                    <input
                                        type="number"
                                        value={profile.weightKg}
                                        onChange={(e) => handleInputChange('weightKg', Number(e.target.value))}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white font-semibold focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Altura (cm)</label>
                                    <input
                                        type="number"
                                        value={profile.heightCm}
                                        onChange={(e) => handleInputChange('heightCm', Number(e.target.value))}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white font-semibold focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Activity Level */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nivel de Actividad Diaria</label>
                                <select
                                    value={profile.activityLevel}
                                    onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white font-medium focus:border-green-500 focus:outline-none"
                                >
                                    {Object.entries(ACTIVITY_LEVEL_MAP).map(([key, val]) => (
                                        <option key={key} value={key} className="bg-gray-900 text-white">
                                            {val.label} - {val.description}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Goal */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Objetivo Nutricional</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { id: 'definition', label: '✂️ Definición (Déficit)' },
                                        { id: 'maintenance', label: '⚖️ Mantenimiento' },
                                        { id: 'volume', label: '💪 Volumen (Superávit)' },
                                        { id: 'recomp', label: '🔥 Recomposición' }
                                    ].map(g => (
                                        <button
                                            key={g.id}
                                            onClick={() => handleInputChange('goal', g.id)}
                                            className={`p-2.5 rounded-xl font-semibold text-xs border text-left transition-all ${profile.goal === g.id ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
                                        >
                                            {g.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Diet Type */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Estilo / Tipo de Dieta</label>
                                <select
                                    value={profile.dietType}
                                    onChange={(e) => handleInputChange('dietType', e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-white font-medium focus:border-green-500 focus:outline-none"
                                >
                                    {Object.entries(DIET_TYPE_MAP).map(([key, val]) => (
                                        <option key={key} value={key} className="bg-gray-900 text-white">
                                            {val.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Results (7 cols) */}
                    <div ref={resultsRef} className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        {calculatedResults && (
                            <>
                                {/* Main Target Calories Card */}
                                <div className="bg-gradient-to-br from-green-950/60 via-gray-900 to-black border border-green-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <Flame size={120} className="text-green-500" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                                        Tu Meta Calórica Diaria
                                    </span>
                                    <div className="flex items-baseline gap-3 my-4">
                                        <span className="text-5xl md:text-6xl font-black text-white">{calculatedResults.target.calories}</span>
                                        <span className="text-xl font-bold text-green-500">kcal / día</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10 text-sm">
                                        <div>
                                            <p className="text-gray-400 text-xs">Tasa Metabólica Basal (TMB):</p>
                                            <p className="text-white font-bold text-base">{calculatedResults.bmr} kcal</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Gasto Total Diario (TDEE):</p>
                                            <p className="text-white font-bold text-base">{calculatedResults.tdee} kcal</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Macros Breakdown Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Protein */}
                                    <div className="stat-card bg-white/5 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-red-500/40 transition-colors">
                                        <div className="text-red-400 font-bold text-xs uppercase mb-1">Proteínas</div>
                                        <div className="text-3xl font-black text-white">{calculatedResults.target.proteinGrams}<span className="text-sm font-semibold text-gray-400">g</span></div>
                                        <div className="text-xs text-gray-500 mt-1 font-medium">{calculatedResults.target.proteinPct}% del total</div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-red-500 h-full" style={{ width: `${calculatedResults.target.proteinPct}%` }} />
                                        </div>
                                    </div>

                                    {/* Carbs */}
                                    <div className="stat-card bg-white/5 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-amber-500/40 transition-colors">
                                        <div className="text-amber-400 font-bold text-xs uppercase mb-1">Carbohidratos</div>
                                        <div className="text-3xl font-black text-white">{calculatedResults.target.carbsGrams}<span className="text-sm font-semibold text-gray-400">g</span></div>
                                        <div className="text-xs text-gray-500 mt-1 font-medium">{calculatedResults.target.carbsPct}% del total</div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-amber-500 h-full" style={{ width: `${calculatedResults.target.carbsPct}%` }} />
                                        </div>
                                    </div>

                                    {/* Fats */}
                                    <div className="stat-card bg-white/5 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                                        <div className="text-blue-400 font-bold text-xs uppercase mb-1">Grasas</div>
                                        <div className="text-3xl font-black text-white">{calculatedResults.target.fatGrams}<span className="text-sm font-semibold text-gray-400">g</span></div>
                                        <div className="text-xs text-gray-500 mt-1 font-medium">{calculatedResults.target.fatPct}% del total</div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-blue-500 h-full" style={{ width: `${calculatedResults.target.fatPct}%` }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setActiveTab('plan')}
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all hover:scale-102"
                                    >
                                        Ver Plan de Comidas Recomendado <ChevronRight size={18} />
                                    </button>
                                    <button
                                        onClick={exportNutritionPDF}
                                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold py-3.5 px-5 rounded-2xl flex items-center gap-2 transition-all"
                                    >
                                        <Download size={18} /> PDF
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
