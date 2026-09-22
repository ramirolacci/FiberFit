export type Gender = 'male' | 'female';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'intense' | 'very_intense';

export type DietType = 'standard' | 'high_protein' | 'vegetarian' | 'low_carb';

export interface NutritionUserProfile {
    gender: Gender;
    age: number;
    weightKg: number;
    heightCm: number;
    activityLevel: ActivityLevel;
    goal: 'definition' | 'maintenance' | 'volume' | 'recomp';
    dietType: DietType;
}

export interface MacroSplit {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    proteinPct: number;
    carbsPct: number;
    fatPct: number;
}

export interface MealItem {
    name: string;
    portion: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    category?: string;
}

export interface Meal {
    mealName: string;
    suggestedTime: string;
    icon: string;
    items: MealItem[];
    totalCalories: number;
    totalProtein: number;
    totalCarbs: number;
    totalFat: number;
}

export interface MealPlan {
    dietType: DietType;
    goal: string;
    targetCalories: number;
    meals: Meal[];
    tips: string[];
}

export const ACTIVITY_LEVEL_MAP: Record<ActivityLevel, { label: string; description: string; factor: number }> = {
    sedentary: { label: 'Sedentario', description: 'Poco o ningún ejercicio, trabajo de escritorio', factor: 1.2 },
    light: { label: 'Ligero', description: 'Ejercicio ligero 1-3 días a la semana', factor: 1.375 },
    moderate: { label: 'Moderado', description: 'Ejercicio moderado 3-5 días a la semana', factor: 1.55 },
    intense: { label: 'Intenso', description: 'Entrenamiento fuerte 6-7 días a la semana', factor: 1.725 },
    very_intense: { label: 'Muy Intenso', description: 'Entrenamiento doble o trabajo muy físico', factor: 1.9 }
};

export const DIET_TYPE_MAP: Record<DietType, { label: string; description: string }> = {
    standard: { label: 'Equilibrada / Estándar', description: 'Balance óptimo de macronutrientes para deportistas' },
    high_protein: { label: 'Alta en Proteínas', description: 'Ideal para máxima retención/ganancia de masa muscular' },
    vegetarian: { label: 'Vegetariana / Plant-based', description: 'Enfocada en fuentes vegetales de proteína y fibra' },
    low_carb: { label: 'Baja en Carbohidratos', description: 'Reducción moderada de carbs priorizando grasas saludables y proteínas' }
};
