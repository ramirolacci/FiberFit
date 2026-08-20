import { NutritionUserProfile, MacroSplit, MealPlan, Meal, MealItem } from '../types/nutrition';

// Mifflin-St Jeor Formula for BMR
export function calculateBMR(gender: 'male' | 'female', weightKg: number, heightCm: number, age: number): number {
    if (gender === 'male') {
        return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
        return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }
}

// Activity Factors
const activityFactors: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    intense: 1.725,
    very_intense: 1.9,
};

export function calculateTDEE(bmr: number, activityLevel: keyof typeof activityFactors): number {
    const factor = activityFactors[activityLevel] || 1.55;
    return Math.round(bmr * factor);
}

export function calculateMacros(profile: NutritionUserProfile): { bmr: number; tdee: number; target: MacroSplit } {
    const bmr = Math.round(calculateBMR(profile.gender, profile.weightKg, profile.heightCm, profile.age));
    const tdee = calculateTDEE(bmr, profile.activityLevel);

    let targetCalories = tdee;
    if (profile.goal === 'definition') {
        targetCalories = Math.round(tdee * 0.80); // 20% deficit
    } else if (profile.goal === 'volume') {
        targetCalories = Math.round(tdee * 1.15); // 15% surplus
    } else if (profile.goal === 'recomp') {
        targetCalories = Math.round(tdee * 0.95); // 5% deficit
    }

    // Macro Ratios based on dietType and goal
    let pPct = 0.30;
    let cPct = 0.45;
    let fPct = 0.25;

    if (profile.dietType === 'high_protein' || profile.goal === 'definition') {
        pPct = 0.35;
        cPct = 0.40;
        fPct = 0.25;
    } else if (profile.dietType === 'low_carb') {
        pPct = 0.35;
        cPct = 0.20;
        fPct = 0.45;
    } else if (profile.dietType === 'vegetarian') {
        pPct = 0.25;
        cPct = 0.50;
        fPct = 0.25;
    }

    const proteinGrams = Math.round((targetCalories * pPct) / 4);
    const carbsGrams = Math.round((targetCalories * cPct) / 4);
    const fatGrams = Math.round((targetCalories * fPct) / 9);

    return {
        bmr,
        tdee,
        target: {
            calories: targetCalories,
            proteinGrams,
            carbsGrams,
            fatGrams,
            proteinPct: Math.round(pPct * 100),
            carbsPct: Math.round(cPct * 100),
            fatPct: Math.round(fPct * 100),
        }
    };
}

export function generateMealPlan(profile: NutritionUserProfile, targetCalories: number): MealPlan {
    const isVeg = profile.dietType === 'vegetarian';
    const isLowCarb = profile.dietType === 'low_carb';

    let meals: Meal[] = [];

    if (isVeg) {
        meals = [
            {
                mealName: 'Desayuno Proteico Vegetal',
                suggestedTime: '08:00 hs',
                icon: '🍳',
                items: [
                    { name: 'Omelette de 3 claras y 1 huevo entero con espinacas y queso por salut', portion: '1 plato', calories: Math.round(targetCalories * 0.08), protein: 22, carbs: 4, fat: 10 },
                    { name: 'Tostada integral de masa madre con palta pisada', portion: '2 rebanadas (60g)', calories: Math.round(targetCalories * 0.09), protein: 6, carbs: 28, fat: 9 },
                    { name: 'Café o Té verde con leche vegetal de almendras o soya', portion: '1 taza (250ml)', calories: Math.round(targetCalories * 0.03), protein: 3, carbs: 4, fat: 2 }
                ],
                totalCalories: Math.round(targetCalories * 0.20),
                totalProtein: 31,
                totalCarbs: 36,
                totalFat: 21
            },
            {
                mealName: 'Almuerzo Energetico Veggie',
                suggestedTime: '13:00 hs',
                icon: '🥗',
                items: [
                    { name: 'Bowl de Quinoa hervida con garbanzos tostados y vegetales salteados', portion: '1 bowl grande (350g)', calories: Math.round(targetCalories * 0.16), protein: 20, carbs: 62, fat: 8 },
                    { name: 'Tofu marinado a la plancha con aceite de oliva y especias', portion: '150g', calories: Math.round(targetCalories * 0.12), protein: 18, carbs: 3, fat: 12 },
                    { name: 'Mix de hojas verdes con aceite de oliva extra virgen y semillas de girasol', portion: '1 plato', calories: Math.round(targetCalories * 0.07), protein: 3, carbs: 5, fat: 10 }
                ],
                totalCalories: Math.round(targetCalories * 0.35),
                totalProtein: 41,
                totalCarbs: 70,
                totalFat: 30
            },
            {
                mealName: 'Merienda / Snack Pre-Entreno',
                suggestedTime: '17:00 hs',
                icon: '🍌',
                items: [
                    { name: 'Yogur Griego o Vegano con proteína de soya/arveja en polvo', portion: '200g', calories: Math.round(targetCalories * 0.08), protein: 24, carbs: 12, fat: 3 },
                    { name: 'Banana madura con 1 cucharada de mantequilla de maní natural', portion: '1 unidad + 15g', calories: Math.round(targetCalories * 0.07), protein: 5, carbs: 27, fat: 8 }
                ],
                totalCalories: Math.round(targetCalories * 0.15),
                totalProtein: 29,
                totalCarbs: 39,
                totalFat: 11
            },
            {
                mealName: 'Cena Nutritiva Reparadora',
                suggestedTime: '21:00 hs',
                icon: '🍲',
                items: [
                    { name: 'Hamburguesas de Lentejas o Hamburguesa vegetal alta en proteína', portion: '2 unidades (200g)', calories: Math.round(targetCalories * 0.14), protein: 24, carbs: 38, fat: 8 },
                    { name: 'Ensalada multicolor de boniato asado, brócoli al vapor y tomates cherry', portion: '250g', calories: Math.round(targetCalories * 0.11), protein: 6, carbs: 32, fat: 4 },
                    { name: 'Puñado de almendras y nueces', portion: '25g', calories: Math.round(targetCalories * 0.05), protein: 5, carbs: 4, fat: 14 }
                ],
                totalCalories: Math.round(targetCalories * 0.30),
                totalProtein: 35,
                totalCarbs: 74,
                totalFat: 26
            }
        ];
    } else if (isLowCarb) {
        meals = [
            {
                mealName: 'Desayuno Keto / Low Carb',
                suggestedTime: '08:00 hs',
                icon: '🥑',
                items: [
                    { name: 'Huevos revueltos (3 huevos) con panceta o bacon magro y champiñones', portion: '1 plato', calories: Math.round(targetCalories * 0.12), protein: 24, carbs: 3, fat: 26 },
                    { name: 'Medio aguacate/palta en rebanadas con sal marina y aceite de oliva', portion: '100g', calories: Math.round(targetCalories * 0.08), protein: 2, carbs: 4, fat: 15 },
                    { name: 'Café negro con chorrito de crema de leche o aceite MCT', portion: '1 taza', calories: Math.round(targetCalories * 0.03), protein: 1, carbs: 1, fat: 6 }
                ],
                totalCalories: Math.round(targetCalories * 0.23),
                totalProtein: 27,
                totalCarbs: 8,
                totalFat: 47
            },
            {
                mealName: 'Almuerzo Proteico & Grasas Saludables',
                suggestedTime: '13:00 hs',
                icon: '🥩',
                items: [
                    { name: 'Bife de chorizo / Ojo de bife o Pechuga a la parrilla', portion: '250g', calories: Math.round(targetCalories * 0.18), protein: 52, carbs: 0, fat: 20 },
                    { name: 'Espárragos y brócoli salteados en mantequilla clarificada (Ghee)', portion: '200g', calories: Math.round(targetCalories * 0.08), protein: 6, carbs: 8, fat: 12 },
                    { name: 'Mix de hojas verdes con aderezo de vinagre de manzana y oliva', portion: '1 bowl', calories: Math.round(targetCalories * 0.04), protein: 2, carbs: 4, fat: 8 }
                ],
                totalCalories: Math.round(targetCalories * 0.30),
                totalProtein: 60,
                totalCarbs: 12,
                totalFat: 40
            },
            {
                mealName: 'Merienda Ceto / Proteica',
                suggestedTime: '17:00 hs',
                icon: '🧀',
                items: [
                    { name: 'Queso sardo / reggianito curado o muzzarella en cubos', portion: '60g', calories: Math.round(targetCalories * 0.09), protein: 16, carbs: 1, fat: 18 },
                    { name: 'Mix de frutos secos (nueces de pecán, almendras, avellanas)', portion: '30g', calories: Math.round(targetCalories * 0.08), protein: 5, carbs: 4, fat: 17 }
                ],
                totalCalories: Math.round(targetCalories * 0.17),
                totalProtein: 21,
                totalCarbs: 5,
                totalFat: 35
            },
            {
                mealName: 'Cena Ligera de Pescado / Mariscos',
                suggestedTime: '21:00 hs',
                icon: '🐟',
                items: [
                    { name: 'Filete de Salmón rosado o Merluza a la plancha con limón', portion: '220g', calories: Math.round(targetCalories * 0.18), protein: 44, carbs: 0, fat: 18 },
                    { name: 'Puré de coliflor con ajo asado y aceite de oliva extra virgen', portion: '200g', calories: Math.round(targetCalories * 0.07), protein: 4, carbs: 9, fat: 8 },
                    { name: 'Ensalada de espinacas frescas y semillas de zapallo', portion: '1 plato', calories: Math.round(targetCalories * 0.05), protein: 4, carbs: 4, fat: 7 }
                ],
                totalCalories: Math.round(targetCalories * 0.30),
                totalProtein: 52,
                totalCarbs: 13,
                totalFat: 33
            }
        ];
    } else {
        // Standard / High Protein Fit Diet
        meals = [
            {
                mealName: 'Desayuno Anabólico / Fitness',
                suggestedTime: '08:00 hs',
                icon: '🥞',
                items: [
                    { name: 'Pancakes de Avena (60g avena, 4 claras, 1 huevo entero, canela)', portion: '3 pancakes', calories: Math.round(targetCalories * 0.12), protein: 28, carbs: 42, fat: 7 },
                    { name: 'Frutos rojos (frutillas / arándanos) o 1/2 banana', portion: '80g', calories: Math.round(targetCalories * 0.04), protein: 1, carbs: 16, fat: 0 },
                    { name: 'Café o Infusión con edulcorante o miel', portion: '1 taza', calories: Math.round(targetCalories * 0.02), protein: 0, carbs: 5, fat: 0 }
                ],
                totalCalories: Math.round(targetCalories * 0.22),
                totalProtein: 29,
                totalCarbs: 63,
                totalFat: 7
            },
            {
                mealName: 'Almuerzo Magro & Completo',
                suggestedTime: '13:00 hs',
                icon: '🍗',
                items: [
                    { name: 'Pechuga de pollo a la plancha o Pollo grillado', portion: '200g', calories: Math.round(targetCalories * 0.14), protein: 46, carbs: 0, fat: 5 },
                    { name: 'Arroz integral, Basmati o Boniato/Camote al horno', portion: '180g cocido', calories: Math.round(targetCalories * 0.12), protein: 5, carbs: 48, fat: 2 },
                    { name: 'Vegetales al vapor o ensalada fresca con 1 cda de aceite de oliva', portion: '1 plato', calories: Math.round(targetCalories * 0.06), protein: 3, carbs: 10, fat: 9 }
                ],
                totalCalories: Math.round(targetCalories * 0.32),
                totalProtein: 54,
                totalCarbs: 58,
                totalFat: 16
            },
            {
                mealName: 'Merienda / Pre-workout',
                suggestedTime: '17:00 hs',
                icon: '🥤',
                items: [
                    { name: 'Batido de Proteína Whey (1 scoop) con agua o leche descremada', portion: '30g scoop', calories: Math.round(targetCalories * 0.07), protein: 24, carbs: 3, fat: 2 },
                    { name: 'Manzana verde o Banana con galletas de arroz integral', portion: '1 fruto + 3 galletas', calories: Math.round(targetCalories * 0.08), protein: 2, carbs: 30, fat: 1 }
                ],
                totalCalories: Math.round(targetCalories * 0.16),
                totalProtein: 26,
                totalCarbs: 33,
                totalFat: 3
            },
            {
                mealName: 'Cena Proteica de Digestión Lenta',
                suggestedTime: '21:00 hs',
                icon: '🥩',
                items: [
                    { name: 'Corte magro de carne vacuna (Lomo/Paciencia) o Pescado blanco', portion: '200g', calories: Math.round(targetCalories * 0.15), protein: 44, carbs: 0, fat: 8 },
                    { name: 'Calabaza asada o Puré de zapallo con especias', portion: '200g', calories: Math.round(targetCalories * 0.08), protein: 3, carbs: 24, fat: 1 },
                    { name: 'Ensalada de rúcula, tomate y paltas', portion: '1 bowl', calories: Math.round(targetCalories * 0.07), protein: 2, carbs: 6, fat: 10 }
                ],
                totalCalories: Math.round(targetCalories * 0.30),
                totalProtein: 49,
                totalCarbs: 30,
                totalFat: 19
            }
        ];
    }

    const tips = [
        '💧 **Hidratación**: Consume al menos 35-40 ml de agua por kg de peso corporal al día (aprox 2.5 a 3.5 litros).',
        '⏱️ **Timing de Nutrición**: Intenta realizar tu merienda o snack de 60 a 90 minutos antes de entrenar para optimizar el glucógeno muscular.',
        '🧂 **Electrolitos**: Añade una pizca de sal marina o rosada a tus comidas pre y post entrenamiento para evitar calambres y mejorar el bombeo.',
        '😴 **Descanso Nutricional**: Evita hacer comidas pesadas menos de 2 horas antes de dormir para maximizar la liberación de hormona del crecimiento nocturna.'
    ];

    return {
        dietType: profile.dietType,
        goal: profile.goal,
        targetCalories,
        meals,
        tips
    };
}
