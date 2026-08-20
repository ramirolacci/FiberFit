export interface RecipeModalInfo {
    id: string;
    title: string;
    image: string;
    description: string;
    prepTime: string;
    difficulty: string;
    calories: number;
    macros: { protein: string; carbs: string; fat: string };
    ingredients: string[];
    steps: string[];
}

export const RECIPES_DATA: Record<string, RecipeModalInfo[]> = {
    ganancia: [
        {
            id: 'gm_1',
            title: 'Tortilla de Claras con Espinacas y Champiñones',
            image: '/Comidas/tortilla_claras.png',
            description: 'Opción proteica y ligera cargada de micronutrientes, perfecta para el desarrollo muscular y la recuperación.',
            prepTime: '10 min',
            difficulty: 'Fácil',
            calories: 220,
            macros: { protein: '26g', carbs: '6g', fat: '4g' },
            ingredients: [
                '4 claras de huevo',
                '1 taza de espinacas frescas',
                '1/2 taza de champiñones en rodajas',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Calienta una sartén antiadherente a fuego medio.',
                'Añade las claras de huevo a la sartén.',
                'Cocina las claras durante 1-2 minutos hasta que empiecen a cuajar.',
                'Añade las espinacas y los champiñones a la sartén.',
                'Cocina por otros 2-3 minutos, removiendo ocasionalmente, hasta que las verduras estén tiernas y las claras estén completamente cocidas.',
                'Sazona con sal y pimienta al gusto y sirve caliente.'
            ]
        },
        {
            id: 'gm_2',
            title: 'Batido Verde Detox',
            image: '/Comidas/batido_verde.png',
            description: 'Batido lleno de vitaminas, antioxidantes e hidratación para acompañar tu alimentación de rendimiento.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 140,
            macros: { protein: '3g', carbs: '32g', fat: '1g' },
            ingredients: [
                '1 taza de espinacas',
                '1/2 pepino',
                '1 manzana verde',
                '1/2 limón (jugo)',
                '1 taza de agua'
            ],
            steps: [
                'Lava bien las espinacas, el pepino y la manzana.',
                'Pela el pepino si lo deseas.',
                'Corta el pepino y la manzana en trozos pequeños.',
                'Coloca en la licuadora las espinacas, el pepino, la manzana, el jugo de 1/2 limón y el agua.',
                'Licúa todo hasta obtener una mezcla homogénea y suave.',
                'Sirve frío. Puedes añadir hielo si lo prefieres.'
            ]
        },
        {
            id: 'gm_3',
            title: 'Pollo a la Plancha con Quinoa y Brócoli',
            image: '/Comidas/pollo_quinoa.png',
            description: 'Plato clásico anabólico: proteína magra de alta calidad combinada con carbohidratos complejos y fibra.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 520,
            macros: { protein: '48g', carbs: '45g', fat: '14g' },
            ingredients: [
                '200g de pechuga de pollo',
                '1 taza de quinoa cocida',
                '1 taza de brócoli cocido',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Calienta una sartén a fuego medio y añade el aceite de oliva.',
                'Cocina la pechuga de pollo por 5-7 minutos de cada lado o hasta que esté completamente cocida.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Sirve el pollo junto con la quinoa y el brócoli cocido.'
            ]
        },
        {
            id: 'gm_4',
            title: 'Batido de Proteína con Avena y Banana',
            image: '/Comidas/batido_proteina.png',
            description: 'Batido hipercalórico y proteico perfecto como pre/post entrenamiento para ganar volumen muscular.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 580,
            macros: { protein: '38g', carbs: '72g', fat: '16g' },
            ingredients: [
                '1 banana',
                '1 taza de leche (almendras, soja o descremada)',
                '1/2 taza de avena',
                '1 cucharada de mantequilla de almendra o maní',
                '1 scoop de proteína en polvo (sabor a elección)'
            ],
            steps: [
                'Coloca todos los ingredientes en una licuadora.',
                'Licúa hasta obtener una mezcla homogénea.',
                'Sirve en un vaso y disfruta.'
            ]
        },
        {
            id: 'gm_5',
            title: 'Tacos de Pavo/Pollo con Aguacate/Palta',
            image: '/Comidas/tacos_pavo.png',
            description: 'Tacos sabrosos ricos en proteína magra y grasas monoinsaturadas saludables para la hipertrofia.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 560,
            macros: { protein: '44g', carbs: '42g', fat: '22g' },
            ingredients: [
                '200g de pavo/pollo molido',
                '1 aguacate/palta',
                '4 tortillas de maíz',
                '1/2 cebolla picada',
                '1 tomate picado',
                '1 diente de ajo picado',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón',
                'Cilantro picado al gusto'
            ],
            steps: [
                'En una sartén, cocina el pavo/pollo molido con la cebolla y el ajo hasta que esté dorado.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Calienta las tortillas en una sartén aparte.',
                'Sirve el pavo en las tortillas y añade tomate, aguacate/palta y cilantro picado por encima.'
            ]
        },
        {
            id: 'gm_6',
            title: 'Huevos Revueltos con Aguacate/Palta y Pan Integral',
            image: '/Comidas/huevos_revueltos.png',
            description: 'Desayuno completo y cargado de energía de lenta absorción y proteínas de alto valor biológico.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 540,
            macros: { protein: '28g', carbs: '34g', fat: '32g' },
            ingredients: [
                '4 huevos',
                '1 aguacate/palta',
                '2 rebanadas de pan integral',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Pizca de pimentón dulce (opcional)'
            ],
            steps: [
                'En un tazón, bate los huevos con sal y pimienta.',
                'Calienta una sartén a fuego medio y añade el aceite de oliva.',
                'Cocina los huevos, removiendo constantemente, hasta que estén revueltos y cocidos.',
                'Tosta las rebanadas de pan integral.',
                'Sirve los huevos revueltos sobre el pan tostado y añade aguacate/palta en rodajas por encima.',
                'Espolvorea con pimentón dulce si lo deseas.'
            ]
        }
    ],
    veganas: [
        {
            id: 'v_1',
            title: 'Tazón de Quinoa y Verduras Asadas',
            image: '/Comidas/tazon_quinoa.png',
            description: 'Bowl completo cargado de antioxidantes, fibra y proteínas vegetales de alta calidad.',
            prepTime: '25 min',
            difficulty: 'Fácil',
            calories: 410,
            macros: { protein: '14g', carbs: '64g', fat: '12g' },
            ingredients: [
                '1 taza de quinoa cocida',
                '1 pimiento rojo en trozos',
                '1 calabacín en rodajas',
                '1 zanahoria en rodajas',
                '1/2 cebolla roja en rodajas',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Precalienta el horno a 200°C (400°F).',
                'Coloca el pimiento, el calabacín, la zanahoria y la cebolla en una bandeja para hornear y rocíalos con aceite de oliva.',
                'Sazona con sal y pimienta al gusto y hornea por 20-25 minutos, hasta que las verduras estén tiernas.',
                'Mezcla las verduras asadas con la quinoa cocida y rocía con el jugo de limón antes de servir.'
            ]
        },
        {
            id: 'v_2',
            title: 'Ensalada de Garbanzos y Aguacate',
            image: '/Comidas/ensalada_atun.png',
            description: 'Ensalada fresca, saciante y llena de proteínas vegetales e hidratos de lenta absorción.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 460,
            macros: { protein: '16g', carbs: '48g', fat: '24g' },
            ingredients: [
                '1 lata de garbanzos cocidos, escurridos y enjuagados',
                '1 aguacate en cubos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1/4 de cebolla roja picada',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla los garbanzos, el aguacate, el pimiento, el pepino y la cebolla.',
                'Añade el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'v_3',
            title: 'Tacos de Lechuga con Frijoles Negros',
            image: '/Comidas/tacos_pavo.png',
            description: 'Opción ligera y refrescante baja en carbohidratos simples, repleta de proteínas de frijoles.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 340,
            macros: { protein: '15g', carbs: '42g', fat: '14g' },
            ingredients: [
                '1 lata de frijoles negros, escurridos y enjuagados',
                '8 hojas grandes de lechuga',
                '1 tomate picado',
                '1/2 cebolla roja picada',
                '1/2 pimiento rojo picado',
                '1 aguacate en rodajas',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón, mezcla los frijoles negros, el tomate, la cebolla y el pimiento.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Rellena las hojas de lechuga con la mezcla de frijoles y añade las rodajas de aguacate por encima.'
            ]
        },
        {
            id: 'v_4',
            title: 'Sopa de Lentejas y Espinacas',
            image: '/Comidas/sopa_lentejas.png',
            description: 'Sopa reconfortante rica en hierro, proteínas vegetales y folatos para recargar energía.',
            prepTime: '25 min',
            difficulty: 'Fácil',
            calories: 320,
            macros: { protein: '20g', carbs: '48g', fat: '6g' },
            ingredients: [
                '1 taza de lentejas cocidas',
                '1 taza de espinacas frescas',
                '1 zanahoria en rodajas',
                '1 tallo de apio en rodajas',
                '1 cebolla picada',
                '1 diente de ajo picado',
                '1 litro de caldo de verduras',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En una olla grande, calienta el aceite de oliva a fuego medio.',
                'Añade la cebolla, el ajo, la zanahoria y el apio, y cocina hasta que estén tiernos.',
                'Agrega las lentejas cocidas y el caldo de verduras, y lleva a ebullición.',
                'Reduce el fuego y añade las espinacas.',
                'Cocina a fuego lento durante 10-15 minutos.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'v_5',
            title: 'Curry de Garbanzos y Espinacas',
            image: '/Comidas/curry_garbanzos.png',
            description: 'Plato aromático y cremoso de la cocina oriental cargado de especias digestivas y proteínas.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 450,
            macros: { protein: '17g', carbs: '52g', fat: '20g' },
            ingredients: [
                '1 lata de garbanzos cocidos, escurridos y enjuagados',
                '2 tazas de espinacas frescas',
                '1 cebolla picada',
                '2 dientes de ajo picados',
                '1 cucharada de pasta de curry',
                '1 taza de leche de coco',
                '1 cucharada de aceite de coco',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En una sartén grande, calienta el aceite de coco a fuego medio.',
                'Añade la cebolla y el ajo, y cocina hasta que estén tiernos.',
                'Agrega la pasta de curry y cocina por 1-2 minutos.',
                'Añade los garbanzos y la leche de coco, y cocina a fuego lento durante 10 minutos.',
                'Añade las espinacas y cocina hasta que estén tiernas.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'v_6',
            title: 'Burritos de Frijoles y Aguacate',
            image: '/Comidas/burritos_frijoles.png',
            description: 'Wrap energético perfecto para almuerzos o cenas rápidas cargadas de fibra y proteínas de legumes.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 490,
            macros: { protein: '18g', carbs: '65g', fat: '18g' },
            ingredients: [
                '1 lata de frijoles negros, escurridos y enjuagados',
                '1 aguacate en rodajas',
                '1 tomate picado',
                '1/2 cebolla roja picada',
                '1 taza de espinacas frescas',
                '2 tortillas de trigo integral',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón, mezcla los frijoles negros, el tomate y la cebolla.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Coloca la mezcla de frijoles, las rodajas de aguacate y las espinacas en las tortillas.',
                'Enrolla las tortillas y corta por la mitad antes de servir.'
            ]
        },
        {
            id: 'v_7',
            title: 'Ensalada de Quinua y Verduras',
            image: '/Comidas/ensalada_quinua_verduras.png',
            description: 'Ensalada fría muy digestiva que aporta todos los aminoácidos esenciales de la quinua.',
            prepTime: '15 min',
            difficulty: 'Muy Fácil',
            calories: 380,
            macros: { protein: '13g', carbs: '58g', fat: '12g' },
            ingredients: [
                '1 taza de quinua cocida',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1/2 cebolla roja picada',
                '1 taza de espinacas frescas',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla la quinua, el pimiento, el pepino, la cebolla y las espinacas.',
                'Añade el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'v_8',
            title: 'Pasta con Salsa de Tomate y Albahaca',
            image: '/Comidas/pasta_tomate_albahaca.png',
            description: 'Clásica pasta italiana 100% vegana, ideal para recargar carbohidratos complejos post-entrenamiento.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 430,
            macros: { protein: '15g', carbs: '78g', fat: '8g' },
            ingredients: [
                '200g de pasta de trigo integral',
                '1 lata de tomates triturados',
                '2 dientes de ajo picados',
                '1/2 cebolla picada',
                '1/4 taza de albahaca fresca picada',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Cocina la pasta según las instrucciones del paquete y escúrrela.',
                'En una sartén grande, calienta el aceite de oliva a fuego medio.',
                'Añade la cebolla y el ajo, y cocina hasta que estén tiernos.',
                'Añade los tomates triturados y cocina a fuego lento durante 10-15 minutos.',
                'Añade la albahaca y sazona con sal y pimienta al gusto.',
                'Mezcla la salsa con la pasta cocida antes de servir.'
            ]
        },
        {
            id: 'v_9',
            title: 'Sándwich de Hummus y Vegetales',
            image: '/Comidas/huevos_revueltos.png',
            description: 'Sándwich crujiente y nutritivo rico en grasas saludables, fibra e hidratos de carbono complejos.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 360,
            macros: { protein: '14g', carbs: '52g', fat: '12g' },
            ingredients: [
                '2 rebanadas de pan integral',
                '2 cucharadas de hummus',
                '1/2 pepino en rodajas',
                '1/2 pimiento rojo en rodajas',
                '1/4 de cebolla roja en rodajas',
                '1 taza de espinacas frescas',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Unta el hummus en las rebanadas de pan.',
                'Coloca el pepino, el pimiento, la cebolla y las espinacas en una de las rebanadas de pan.',
                'Sazona con sal y pimienta al gusto.',
                'Cubre con la otra rebanada de pan antes de servir.'
            ]
        }
    ],
    perdida: [
        {
            id: 'p_1',
            title: 'Ensalada de Pollo y Aguacate',
            image: '/Comidas/ensalada_pollo.png',
            description: 'Ensalada fresca e hipocalórica rica en proteínas magras y grasas saludables para déficit calórico.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 340,
            macros: { protein: '38g', carbs: '12g', fat: '16g' },
            ingredients: [
                '150g de pechuga de pollo a la parrilla',
                '1 aguacate',
                '1 taza de mezcla de hojas verdes (espinacas, lechuga, rúcula)',
                '1/2 cebolla roja en rodajas finas',
                '1 tomate picado',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Corta la pechuga de pollo en tiras.',
                'En un tazón grande, mezcla las hojas verdes, la cebolla, el tomate y el aguacate.',
                'Añade el pollo a la ensalada.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'p_2',
            title: 'Salmón al Horno con Espárragos',
            image: '/Comidas/salmon_horno.png',
            description: 'Plato cetogénico/hipocalórico cargado de omega-3 y fibra para máxima pérdida de grasa.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 390,
            macros: { protein: '36g', carbs: '8g', fat: '22g' },
            ingredients: [
                '200g de filete de salmón',
                '1 manojo de espárragos',
                '1 limón en rodajas',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Eneldo fresco (opcional)'
            ],
            steps: [
                'Precalienta el horno a 200°C (400°F).',
                'Coloca el salmón en una bandeja para hornear y sazona con sal, pimienta y rodajas de limón.',
                'Acomoda los espárragos alrededor del salmón y rocíalos con aceite de oliva.',
                'Hornea por 15-20 minutos o hasta que el salmón esté completamente cocido y los espárragos estén tiernos.',
                'Sirve con eneldo fresco si lo deseas.'
            ]
        },
        {
            id: 'p_3',
            title: 'Tazón de Quinoa con Garbanzos y Verduras',
            image: '/Comidas/tazon_quinoa.png',
            description: 'Bowl saciante con bajo índice glucémico y alto contenido de fibra para controlar el apetito.',
            prepTime: '15 min',
            difficulty: 'Muy Fácil',
            calories: 360,
            macros: { protein: '14g', carbs: '54g', fat: '10g' },
            ingredients: [
                '1 taza de quinoa cocida',
                '1/2 taza de garbanzos cocidos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1 zanahoria rallada',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla la quinoa cocida, los garbanzos, el pimiento rojo, el pepino y la zanahoria.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'p_4',
            title: 'Omelette de Claras con Espinacas y Tomate',
            image: '/Comidas/omelette_tomate.png',
            description: 'Desayuno o cena ultrapotente para déficit calórico con solo 180 kcal por porción.',
            prepTime: '10 min',
            difficulty: 'Fácil',
            calories: 180,
            macros: { protein: '24g', carbs: '6g', fat: '6g' },
            ingredients: [
                '4 claras de huevo',
                '1 taza de espinacas frescas',
                '1 tomate picado',
                '1/2 cebolla picada',
                'Sal y pimienta al gusto',
                '1 cucharada de aceite de oliva'
            ],
            steps: [
                'Calienta una sartén antiadherente a fuego medio y añade el aceite de oliva.',
                'Cocina la cebolla hasta que esté transparente.',
                'Añade las claras de huevo y cocina por 1-2 minutos.',
                'Agrega las espinacas y el tomate, y cocina hasta que las claras estén completamente cocidas.',
                'Sazona con sal y pimienta al gusto y sirve caliente.'
            ]
        },
        {
            id: 'p_5',
            title: 'Ensalada de Atún con Garbanzos',
            image: '/Comidas/ensalada_atun.png',
            description: 'Comida rápida proteica rica en hierro y fibra con baja densidad calórica.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 350,
            macros: { protein: '34g', carbs: '32g', fat: '9g' },
            ingredients: [
                '1 lata de atún en agua, escurrido',
                '1 taza de garbanzos cocidos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1/4 de cebolla roja picada',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla el atún, los garbanzos, el pimiento rojo, el pepino y la cebolla.',
                'Añade el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'p_6',
            title: 'Brochetas de Pollo y Vegetales',
            image: '/Comidas/brochetas_pollo.png',
            description: 'Proteína magra a la parrilla combinada con vegetales asados bajos en calorías.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 310,
            macros: { protein: '42g', carbs: '14g', fat: '9g' },
            ingredients: [
                '200g de pechuga de pollo en cubos',
                '1 pimiento rojo en trozos',
                '1 pimiento verde en trozos',
                '1 calabacín en rodajas',
                '1 cebolla roja en trozos',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto',
                'Palillos para brochetas'
            ],
            steps: [
                'Precalienta la parrilla a fuego medio.',
                'Ensarta el pollo y los vegetales en los palillos para brochetas.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto.',
                'Asa las brochetas durante 10-12 minutos, girándolas ocasionalmente, hasta que el pollo esté completamente cocido.'
            ]
        },
        {
            id: 'p_7',
            title: 'Merluza a la Plancha con Verduras Salteadas',
            image: '/Comidas/merluza_plancha.png',
            description: 'Pescado blanco magro fácil de digerir con abundante fibra vegetal para cenas livianas.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 280,
            macros: { protein: '38g', carbs: '10g', fat: '8g' },
            ingredients: [
                '200g de filete de merluza',
                '1 taza de espinacas frescas',
                '1/2 pimiento amarillo en rodajas',
                '1 zanahoria en tiras',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Calienta una sartén a fuego medio y añade el aceite de oliva.',
                'Cocina el filete de merluza por 4-5 minutos de cada lado o hasta que esté completamente cocido.',
                'Sazona con sal, pimienta y jugo de limón.',
                'En la misma sartén, saltea las espinacas, el pimiento y la zanahoria hasta que estén tiernos.',
                'Sirve la merluza con las verduras salteadas.'
            ]
        },
        {
            id: 'p_8',
            title: 'Tacos de Lechuga con Pollo',
            image: '/Comidas/tacos_pavo.png',
            description: 'Sustituto de tortillas por hojas de lechuga para reducir drásticamente los carbohidratos.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 290,
            macros: { protein: '40g', carbs: '8g', fat: '10g' },
            ingredients: [
                '200g de pechuga de pollo desmenuzada',
                '8 hojas grandes de lechuga',
                '1/2 pimiento rojo picado',
                '1/2 cebolla roja picada',
                '1 tomate picado',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón',
                'Cilantro picado al gusto'
            ],
            steps: [
                'En una sartén, cocina el pollo desmenuzado con el pimiento y la cebolla hasta que estén tiernos.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Rellena las hojas de lechuga con la mezcla de pollo y añade el tomate y el cilantro por encima.'
            ]
        },
        {
            id: 'p_9',
            title: 'Sopa de Verduras y Pollo',
            image: '/Comidas/merluza_plancha.png',
            description: 'Sopa termogénica e hidratante muy baja en calorías y rica en micronutrientes.',
            prepTime: '25 min',
            difficulty: 'Fácil',
            calories: 260,
            macros: { protein: '35g', carbs: '14g', fat: '7g' },
            ingredients: [
                '200g de pechuga de pollo cocida y desmenuzada',
                '1 zanahoria en rodajas',
                '1 tallo de apio en rodajas',
                '1 calabacín en rodajas',
                '1 taza de espinacas frescas',
                '1 litro de caldo de pollo bajo en sodio',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En una olla grande, calienta el aceite de oliva a fuego medio.',
                'Añade la zanahoria, el apio y el calabacín, y cocina hasta que estén tiernos.',
                'Agrega el caldo de pollo y lleva a ebullición.',
                'Reduce el fuego y añade el pollo desmenuzado y las espinacas.',
                'Cocina a fuego lento durante 10-15 minutos.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'p_10',
            title: 'Wrap de Pavo y Verduras',
            image: '/Comidas/tacos_pavo.png',
            description: 'Wrap saludable ideal para almuerzos de oficina o sobre la marcha.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 340,
            macros: { protein: '30g', carbs: '36g', fat: '9g' },
            ingredients: [
                '150g de pechuga de pavo en rodajas',
                '1 tortilla integral',
                '1/2 pimiento rojo en tiras',
                '1/2 pepino en rodajas',
                '1 zanahoria rallada',
                '1 cucharada de hummus',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Calienta la tortilla en una sartén durante 1-2 minutos.',
                'Unta el hummus en la tortilla.',
                'Coloca las rodajas de pavo, el pimiento, el pepino y la zanahoria en la tortilla.',
                'Sazona con sal y pimienta al gusto.',
                'Enrolla la tortilla y corta por la mitad antes de servir.'
            ]
        }
    ],
    definicion: [
        {
            id: 'd_1',
            title: 'Ensalada de Pollo y Aguacate',
            image: '/Comidas/ensalada_pollo.png',
            description: 'Proteínas magras y grasas monoinsaturadas ideales para la preservación de masa muscular en fase de definición.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 340,
            macros: { protein: '38g', carbs: '12g', fat: '16g' },
            ingredients: [
                '150g de pechuga de pollo a la parrilla',
                '1 aguacate',
                '1 taza de mezcla de hojas verdes (espinacas, lechuga, rúcula)',
                '1/2 cebolla roja en rodajas finas',
                '1 tomate picado',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Corta la pechuga de pollo en tiras.',
                'En un tazón grande, mezcla las hojas verdes, la cebolla, el tomate y el aguacate.',
                'Añade el pollo a la ensalada.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'd_2',
            title: 'Salmón al Horno con Espárragos',
            image: '/Comidas/salmon_horno.png',
            description: 'Aporte óptimo de omega-3 y proteínas magras para mantener dureza muscular y acelerar la quema de grasa.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 390,
            macros: { protein: '36g', carbs: '8g', fat: '22g' },
            ingredients: [
                '200g de filete de salmón',
                '1 manojo de espárragos',
                '1 limón en rodajas',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Eneldo fresco (opcional)'
            ],
            steps: [
                'Precalienta el horno a 200°C (400°F).',
                'Coloca el salmón en una bandeja para hornear y sazona con sal, pimienta y rodajas de limón.',
                'Acomoda los espárragos alrededor del salmón y rocíalos con aceite de oliva.',
                'Hornea por 15-20 minutos o hasta que el salmón esté completamente cocido y los espárragos estén tiernos.',
                'Sirve con eneldo fresco si lo deseas.'
            ]
        },
        {
            id: 'd_3',
            title: 'Tazón de Quinoa con Garbanzos y Verduras',
            image: '/Comidas/tazon_quinoa.png',
            description: 'Recarga limpia de carbohidratos complejos de bajo índice glucémico previa o posterior al entreno.',
            prepTime: '15 min',
            difficulty: 'Muy Fácil',
            calories: 360,
            macros: { protein: '14g', carbs: '54g', fat: '10g' },
            ingredients: [
                '1 taza de quinoa cocida',
                '1/2 taza de garbanzos cocidos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1 zanahoria rallada',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla la quinoa cocida, los garbanzos, el pimiento rojo, el pepino y la zanahoria.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'd_4',
            title: 'Omelette de Claras con Espinacas y Tomate',
            image: '/Comidas/omelette_tomate.png',
            description: 'Comida ultra limpia sin grasas saturadas, perfecta para cenas o desayunos de corte.',
            prepTime: '10 min',
            difficulty: 'Fácil',
            calories: 180,
            macros: { protein: '24g', carbs: '6g', fat: '6g' },
            ingredients: [
                '4 claras de huevo',
                '1 taza de espinacas frescas',
                '1 tomate picado',
                '1/2 cebolla picada',
                'Sal y pimienta al gusto',
                '1 cucharada de aceite de oliva'
            ],
            steps: [
                'Calienta una sartén antiadherente a fuego medio y añade el aceite de oliva.',
                'Cocina la cebolla hasta que esté transparente.',
                'Añade las claras de huevo y cocina por 1-2 minutos.',
                'Agrega las espinacas y el tomate, y cocina hasta que las claras estén completamente cocidas.',
                'Sazona con sal y pimienta al gusto y sirve caliente.'
            ]
        },
        {
            id: 'd_5',
            title: 'Ensalada de Atún con Garbanzos',
            image: '/Comidas/ensalada_atun.png',
            description: 'Mezcla ligera y fresca con alto poder de saciedad gracias a su densidad de proteína magra.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 350,
            macros: { protein: '34g', carbs: '32g', fat: '9g' },
            ingredients: [
                '1 lata de atún en agua, escurrido',
                '1 taza de garbanzos cocidos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1/4 de cebolla roja picada',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla el atún, los garbanzos, el pimiento rojo, el pepino y la cebolla.',
                'Añade el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'd_6',
            title: 'Brochetas de Pollo y Vegetales',
            image: '/Comidas/brochetas_pollo.png',
            description: 'Opción proteica a la parrilla con volumen de vegetales magros para déficit calórico.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 310,
            macros: { protein: '42g', carbs: '14g', fat: '9g' },
            ingredients: [
                '200g de pechuga de pollo en cubos',
                '1 pimiento rojo en trozos',
                '1 pimiento verde en trozos',
                '1 calabacín en rodajas',
                '1 cebolla roja en trozos',
                '1 cucharada de aceite de oliva',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto',
                'Palillos para brochetas'
            ],
            steps: [
                'Precalienta la parrilla a fuego medio.',
                'Ensarta el pollo y los vegetales en los palillos para brochetas.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto.',
                'Asa las brochetas durante 10-12 minutos, girándolas ocasionalmente, hasta que el pollo esté completamente cocido.'
            ]
        },
        {
            id: 'd_7',
            title: 'Merluza a la Plancha con Verduras Salteadas',
            image: '/Comidas/merluza_plancha.png',
            description: 'Pescado blanco magro rico en aminoácidos para cenas limpias sin retención de líquidos.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 280,
            macros: { protein: '38g', carbs: '10g', fat: '8g' },
            ingredients: [
                '200g de filete de merluza',
                '1 taza de espinacas frescas',
                '1/2 pimiento amarillo en rodajas',
                '1 zanahoria en tiras',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Calienta una sartén a fuego medio y añade el aceite de oliva.',
                'Cocina el filete de merluza por 4-5 minutos de cada lado o hasta que esté completamente cocido.',
                'Sazona con sal, pimienta y jugo de limón.',
                'En la misma sartén, saltea las espinacas, el pimiento y la zanahoria hasta que estén tiernos.',
                'Sirve la merluza con las verduras salteadas.'
            ]
        },
        {
            id: 'd_8',
            title: 'Tacos de Lechuga con Pollo',
            image: '/Comidas/tacos_pavo.png',
            description: 'Tacos crujientes keto/low-carb ideales para definición extrema.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 290,
            macros: { protein: '40g', carbs: '8g', fat: '10g' },
            ingredients: [
                '200g de pechuga de pollo desmenuzada',
                '8 hojas grandes de lechuga',
                '1/2 pimiento rojo picado',
                '1/2 cebolla roja picada',
                '1 tomate picado',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón',
                'Cilantro picado al gusto'
            ],
            steps: [
                'En una sartén, cocina el pollo desmenuzado con el pimiento y la cebolla hasta que estén tiernos.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Rellena las hojas de lechuga con la mezcla de pollo y añade el tomate y el cilantro por encima.'
            ]
        }
    ],
    gluten: [
        {
            id: 'sg_1',
            title: 'Pollo a la Parrilla con Verduras Asadas',
            image: '/Comidas/brochetas_pollo.png',
            description: 'Plato clásico libre de gluten, alto en proteínas magras y vegetales asados.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 410,
            macros: { protein: '44g', carbs: '18g', fat: '14g' },
            ingredients: [
                '200g de pechuga de pollo',
                '1 pimiento rojo en trozos',
                '1 calabacín en rodajas',
                '1 zanahoria en rodajas',
                '1/2 cebolla roja en rodajas',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Precalienta la parrilla a fuego medio.',
                'Sazona el pollo con sal, pimienta y jugo de limón.',
                'Asa el pollo durante 5-7 minutos por cada lado, o hasta que esté completamente cocido.',
                'Mientras tanto, calienta el aceite de oliva en una sartén y saltea las verduras hasta que estén tiernas.',
                'Sirve el pollo con las verduras asadas.'
            ]
        },
        {
            id: 'sg_2',
            title: 'Ensalada de Quinoa y Aguacate',
            image: '/Comidas/tazon_quinoa.png',
            description: 'Ensalada naturalmente libre de gluten rica en aminoácidos esenciales y grasas saludables.',
            prepTime: '15 min',
            difficulty: 'Muy Fácil',
            calories: 420,
            macros: { protein: '12g', carbs: '52g', fat: '20g' },
            ingredients: [
                '1 taza de quinoa cocida',
                '1 aguacate en cubos',
                '1/2 pimiento rojo picado',
                '1/2 pepino en rodajas',
                '1/4 de cebolla roja picada',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón grande, mezcla la quinoa, el aguacate, el pimiento, el pepino y la cebolla.',
                'Añade el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'sg_3',
            title: 'Tacos de Lechuga con Pollo y Salsa de Mango',
            image: '/Comidas/tacos_pavo.png',
            description: 'Tacos frescos e hidratos naturales de fruta sin harinas ni gluten.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 320,
            macros: { protein: '38g', carbs: '24g', fat: '8g' },
            ingredients: [
                '200g de pechuga de pollo desmenuzada',
                '8 hojas grandes de lechuga',
                '1 mango en cubos',
                '1/2 pimiento rojo picado',
                '1/4 de cebolla roja picada',
                'Jugo de 1/2 limón',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un tazón, mezcla el mango, el pimiento y la cebolla.',
                'Sazona con sal, pimienta y jugo de limón.',
                'Rellena las hojas de lechuga con el pollo desmenuzado y añade la salsa de mango por encima.'
            ]
        },
        {
            id: 'sg_4',
            title: 'Sopa de Lentejas y Espinacas',
            image: '/Comidas/sopa_lentejas.png',
            description: 'Sopa reconfortante libre de trigo rica en fibra e hierro.',
            prepTime: '25 min',
            difficulty: 'Fácil',
            calories: 320,
            macros: { protein: '20g', carbs: '48g', fat: '6g' },
            ingredients: [
                '1 taza de lentejas cocidas',
                '1 taza de espinacas frescas',
                '1 zanahoria en rodajas',
                '1 tallo de apio en rodajas',
                '1 cebolla picada',
                '1 diente de ajo picado',
                '1 litro de caldo de verduras',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En una olla grande, calienta el aceite de oliva a fuego medio.',
                'Añade la cebolla, el ajo, la zanahoria y el apio, y cocina hasta que estén tiernos.',
                'Agrega las lentejas cocidas y el caldo de verduras, y lleva a ebullición.',
                'Reduce el fuego y añade las espinacas.',
                'Cocina a fuego lento durante 10-15 minutos.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'sg_5',
            title: 'Curry de Garbanzos y Espinacas',
            image: '/Comidas/curry_garbanzos.png',
            description: 'Curry asiático espeso sin lácteos ni gluten cargado de sabor.',
            prepTime: '20 min',
            difficulty: 'Fácil',
            calories: 450,
            macros: { protein: '17g', carbs: '52g', fat: '20g' },
            ingredients: [
                '1 lata de garbanzos cocidos, escurridos y enjuagados',
                '2 tazas de espinacas frescas',
                '1 cebolla picada',
                '2 dientes de ajo picados',
                '1 cucharada de pasta de curry',
                '1 taza de leche de coco',
                '1 cucharada de aceite de coco',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En una sartén grande, calienta el aceite de coco a fuego medio.',
                'Añade la cebolla y el ajo, y cocina hasta que estén tiernos.',
                'Agrega la pasta de curry y cocina por 1-2 minutos.',
                'Añade los garbanzos y la leche de coco, y cocina a fuego lento durante 10 minutos.',
                'Añade las espinacas y cocina hasta que estén tiernas.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'sg_6',
            title: 'Ensalada de Pollo y Aguacate',
            image: '/Comidas/ensalada_pollo.png',
            description: 'Ensalada completa y nutritiva 100% gluten free.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 340,
            macros: { protein: '38g', carbs: '12g', fat: '16g' },
            ingredients: [
                '150g de pechuga de pollo a la parrilla',
                '1 aguacate en cubos',
                '1 taza de mezcla de hojas verdes (espinacas, lechuga, rúcula)',
                '1/2 cebolla roja en rodajas finas',
                '1 tomate picado',
                'Jugo de 1/2 limón',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Corta la pechuga de pollo en tiras.',
                'En un tazón grande, mezcla las hojas verdes, la cebolla, el tomate y el aguacate.',
                'Añade el pollo a la ensalada.',
                'Rocía con el jugo de limón y el aceite de oliva.',
                'Sazona con sal y pimienta al gusto y mezcla bien antes de servir.'
            ]
        },
        {
            id: 'sg_7',
            title: 'Pimientos Rellenos de Quinoa y Verduras',
            image: '/Comidas/tazon_quinoa.png',
            description: 'Plato vistoso horneado libre de gluten repleto de antioxidantes y fibra.',
            prepTime: '35 min',
            difficulty: 'Intermedio',
            calories: 380,
            macros: { protein: '14g', carbs: '62g', fat: '10g' },
            ingredients: [
                '4 pimientos rojos',
                '1 taza de quinoa cocida',
                '1/2 cebolla picada',
                '1 calabacín en cubos',
                '1 zanahoria en cubos',
                '1 lata de tomates triturados',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Precalienta el horno a 180°C (350°F).',
                'Corta la parte superior de los pimientos y retira las semillas.',
                'En una sartén grande, calienta el aceite de oliva a fuego medio y cocina la cebolla, el calabacín y la zanahoria hasta que estén tiernos.',
                'Añade la quinoa cocida y los tomates triturados, y cocina por 5 minutos más.',
                'Rellena los pimientos con la mezcla de quinoa y verduras.',
                'Coloca los pimientos en una bandeja para hornear y hornea por 25-30 minutos.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'sg_8',
            title: 'Tazón de Frutas y Yogur de Coco',
            image: '/Comidas/batido_verde.png',
            description: 'Desayuno o snack probiótico libre de lactosa y gluten.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 290,
            macros: { protein: '6g', carbs: '46g', fat: '11g' },
            ingredients: [
                '1 taza de yogur de coco',
                '1/2 taza de fresas en rodajas',
                '1/2 taza de arándanos',
                '1 plátano en rodajas',
                '1 cucharada de semillas de chía',
                '1 cucharada de miel (opcional)'
            ],
            steps: [
                'En un tazón grande, coloca el yogur de coco.',
                'Añade las fresas, los arándanos y el plátano.',
                'Espolvorea con las semillas de chía y rocía con miel si lo deseas.',
                'Mezcla bien antes de servir.'
            ]
        },
        {
            id: 'sg_9',
            title: 'Fajitas de Pollo sin Tortilla',
            image: '/Comidas/brochetas_pollo.png',
            description: 'Fajitas tradicionales salteadas con vegetales al sartén sin gluten.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 330,
            macros: { protein: '42g', carbs: '14g', fat: '12g' },
            ingredients: [
                '200g de pechuga de pollo en tiras',
                '1 pimiento rojo en tiras',
                '1 pimiento verde en tiras',
                '1 cebolla en tiras',
                '1 cucharada de aceite de oliva',
                '1 cucharada de jugo de limón',
                'Sal y pimienta al gusto',
                '1/2 cucharadita de comino en polvo'
            ],
            steps: [
                'Calienta el aceite de oliva en una sartén grande a fuego medio.',
                'Añade el pollo y cocina hasta que esté dorado.',
                'Agrega los pimientos y la cebolla, y cocina hasta que estén tiernos.',
                'Sazona con sal, pimienta, jugo de limón y comino en polvo.',
                'Sirve caliente.'
            ]
        }
    ],
    rapidas: [
        {
            id: 'rf_1',
            title: 'Pasta con Salsa de Tomate y Albahaca',
            image: '/Comidas/pasta_tomate_albahaca.png',
            description: 'Receta exprés mediterránea llena de sabor para almuerzos de menos de 15 minutos.',
            prepTime: '15 min',
            difficulty: 'Muy Fácil',
            calories: 430,
            macros: { protein: '15g', carbs: '78g', fat: '8g' },
            ingredients: [
                '200g de pasta de trigo integral',
                '1 lata de tomates triturados',
                '2 dientes de ajo picados',
                '1/4 taza de albahaca fresca picada',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Cocina la pasta según las instrucciones del paquete y escúrrela.',
                'En una sartén grande, calienta el aceite de oliva a fuego medio.',
                'Añade el ajo y cocina hasta que esté dorado.',
                'Añade los tomates triturados y cocina a fuego lento durante 10 minutos.',
                'Añade la albahaca y sazona con sal y pimienta al gusto.',
                'Mezcla la salsa con la pasta cocida antes de servir.'
            ]
        },
        {
            id: 'rf_2',
            title: 'Sándwich de Pavo y Queso',
            image: '/Comidas/sandwich_pavo.png',
            description: 'Sándwich clásico equilibrado perfecto para llevar al trabajo o estudio.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 380,
            macros: { protein: '28g', carbs: '36g', fat: '14g' },
            ingredients: [
                '2 rebanadas de pan integral',
                '100g de pavo cocido en rodajas',
                '2 rebanadas de queso cheddar',
                '1 cucharada de mayonesa',
                '1 hoja de lechuga',
                '1 rodaja de tomate'
            ],
            steps: [
                'Unta la mayonesa en las rebanadas de pan.',
                'Coloca el pavo, el queso, la lechuga y el tomate en una de las rebanadas.',
                'Cubre con la otra rebanada de pan y corta por la mitad antes de servir.'
            ]
        },
        {
            id: 'rf_3',
            title: 'Ensalada Caprese',
            image: '/Comidas/ensalada_caprese_hd.png',
            description: 'Ensalada italiana fresca y baja en hidratos de preparación inmediata.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 280,
            macros: { protein: '14g', carbs: '6g', fat: '22g' },
            ingredients: [
                '2 tomates en rodajas',
                '1 bola de mozzarella fresca en rodajas',
                '1/4 taza de albahaca fresca',
                '1 cucharada de aceite de oliva',
                '1 cucharada de vinagre balsámico',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'En un plato grande, alterna las rodajas de tomate y mozzarella.',
                'Añade las hojas de albahaca entre las rodajas.',
                'Rocía con aceite de oliva y vinagre balsámico.',
                'Sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'rf_4',
            title: 'Omelette de Jamón y Queso',
            image: '/Comidas/huevos_revueltos.png',
            description: 'Solución proteica exprés rica en sabor y muy fácil de preparar.',
            prepTime: '8 min',
            difficulty: 'Muy Fácil',
            calories: 320,
            macros: { protein: '26g', carbs: '3g', fat: '22g' },
            ingredients: [
                '2 huevos',
                '50g de jamón picado',
                '50g de queso rallado',
                'Sal y pimienta al gusto',
                '1 cucharada de aceite de oliva'
            ],
            steps: [
                'Bate los huevos en un tazón y sazona con sal y pimienta.',
                'Calienta el aceite de oliva en una sartén a fuego medio.',
                'Añade los huevos batidos y cocina hasta que empiecen a cuajar.',
                'Añade el jamón y el queso a la mitad del omelette.',
                'Dobla el omelette por la mitad y cocina hasta que el queso se derrita.',
                'Sirve caliente.'
            ]
        },
        {
            id: 'rf_5',
            title: 'Pollo al Limón',
            image: '/Comidas/brochetas_pollo.png',
            description: 'Pechugas de pollo jugosas salteadas al limón listas en minutos.',
            prepTime: '15 min',
            difficulty: 'Fácil',
            calories: 330,
            macros: { protein: '46g', carbs: '4g', fat: '14g' },
            ingredients: [
                '2 pechugas de pollo',
                'Jugo de 1 limón',
                '2 dientes de ajo picados',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto'
            ],
            steps: [
                'Sazona el pollo con sal y pimienta.',
                'En una sartén grande, calienta el aceite de oliva a fuego medio.',
                'Añade el ajo y cocina hasta que esté dorado.',
                'Añade el pollo y cocina por 5-7 minutos por cada lado, o hasta que esté completamente cocido.',
                'Añade el jugo de limón y cocina por 1-2 minutos más.',
                'Sirve caliente.'
            ]
        },
        {
            id: 'rf_6',
            title: 'Batido de Banana y Frutilla',
            image: '/Comidas/batido_proteina.png',
            description: 'Smoothie dulce, energizante y refrescante para meriendas o desayunos rápidos.',
            prepTime: '3 min',
            difficulty: 'Muy Fácil',
            calories: 230,
            macros: { protein: '8g', carbs: '44g', fat: '4g' },
            ingredients: [
                '1 banana',
                '1 taza de frutillas',
                '1 taza de leche',
                '1 cucharada de miel (opcional)'
            ],
            steps: [
                'Coloca todos los ingredientes en una licuadora.',
                'Mezcla hasta obtener una consistencia suave.',
                'Sirve frío.'
            ]
        },
        {
            id: 'rf_7',
            title: 'Tostada de Aguacate',
            image: '/Comidas/huevos_revueltos.png',
            description: 'Tostada clásica rica en grasas saludables y fibra.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 270,
            macros: { protein: '6g', carbs: '28g', fat: '16g' },
            ingredients: [
                '2 rebanadas de pan integral',
                '1 aguacate maduro',
                '1 cucharada de aceite de oliva',
                'Sal y pimienta al gusto',
                'Jugo de 1/2 limón'
            ],
            steps: [
                'Tuesta las rebanadas de pan.',
                'Machaca el aguacate en un tazón y añade el jugo de limón.',
                'Unta el aguacate en las rebanadas de pan tostado.',
                'Rocía con aceite de oliva y sazona con sal y pimienta al gusto antes de servir.'
            ]
        },
        {
            id: 'rf_8',
            title: 'Brochetas de Frutas',
            image: '/Comidas/brochetas_frutas.png',
            description: 'Postre o snack frutal colorido, ligero y lleno de vitaminas.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 140,
            macros: { protein: '2g', carbs: '34g', fat: '1g' },
            ingredients: [
                '1 taza de fresas',
                '1 taza de uvas',
                '1 taza de trozos de piña',
                '1 taza de trozos de melón',
                'Palitos para brochetas'
            ],
            steps: [
                'Ensarta las frutas en los palitos para brochetas, alternando las diferentes frutas.',
                'Sirve fresco.'
            ]
        },
        {
            id: 'rf_9',
            title: 'Quesadillas de Queso',
            image: '/Comidas/quesadillas_queso.png',
            description: 'Quesadilla dorada al sartén con queso derretido lista en 5 minutos.',
            prepTime: '5 min',
            difficulty: 'Muy Fácil',
            calories: 360,
            macros: { protein: '16g', carbs: '32g', fat: '18g' },
            ingredients: [
                '2 tortillas de trigo',
                '1 taza de queso rallado',
                '1 cucharada de aceite de oliva'
            ],
            steps: [
                'Calienta el aceite de oliva en una sartén grande a fuego medio.',
                'Coloca una tortilla en la sartén y añade el queso rallado.',
                'Cubre con la otra tortilla y cocina hasta que el queso se derrita y las tortillas estén doradas.',
                'Voltea la quesadilla y cocina por el otro lado hasta que esté dorada.',
                'Corta en triángulos y sirve caliente.'
            ]
        },
        {
            id: 'rf_10',
            title: 'Gazpacho',
            image: '/Comidas/gazpacho.png',
            description: 'Sopa fría tradicional española super refrescante e hidratante.',
            prepTime: '10 min',
            difficulty: 'Muy Fácil',
            calories: 160,
            macros: { protein: '3g', carbs: '16g', fat: '10g' },
            ingredients: [
                '4 tomates maduros',
                '1 pepino',
                '1 pimiento verde',
                '1 diente de ajo',
                '2 cucharadas de aceite de oliva',
                '2 cucharadas de vinagre',
                'Sal y pimienta al gusto',
                '1 taza de agua fría'
            ],
            steps: [
                'Pela y corta los tomates, el pepino y el pimiento.',
                'Coloca todos los ingredientes en una licuadora y mezcla hasta obtener una consistencia suave.',
                'Sazona con sal y pimienta al gusto.',
                'Refrigera por al menos una hora antes de servir.',
                'Sirve frío.'
            ]
        }
    ]
};
