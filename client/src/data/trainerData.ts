export interface ExerciseDetail {
    id: string;
    name: string;
    imageUrl?: string;
    videoUrl?: string;
    posterUrl?: string;
    steps: string[];
    note?: string;
}

export interface EquipmentCategory {
    id: string;
    name: string;
    exercises: ExerciseDetail[];
}

export interface MuscleGroupData {
    id: string;
    name: string;
    subtitle: string;
    cardImageUrl?: string;
    detailImageUrl?: string;
    frontHighlight?: boolean;
    backHighlight?: boolean;
    equipmentCategories: EquipmentCategory[];
}

export const MUSCLE_GROUPS_DATA: Record<string, MuscleGroupData> = {
                abdominales: {
        id: 'abdominales',
        name: 'Abdominales',
        subtitle: 'Zona media y core',
        cardImageUrl: '/Entrenamientos/Abdominales/abdominalesmini.png',
        detailImageUrl: '/Entrenamientos/Abdominales/abdominales.png',
        frontHighlight: true,
        backHighlight: false,
        equipmentCategories: [
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "columpio-ruso",
                                        "name": "Columpio Ruso",
                                        "imageUrl": "/Entrenamientos/Abdominales/Mancuernas/Columpio Ruso/columpioRuso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Mancuernas/Columpio Ruso/arranqueConUnaMano.mp4",
                                        "steps": [
                                                  "Colócate de pie con los pies separados a la altura de los hombros y sostén una pesa rusa con una mano.",
                                                  "Empuja tus caderas hacia atrás y baja la pesa rusa hacia el suelo, manteniendo los brazos rectos.",
                                                  "Al llegar a la posición más baja, balancea la pesa rusa hacia atrás y entre tus piernas.",
                                                  "Utilizando la fuerza de las caderas y los glúteos, impulsa la pesa rusa hacia arriba mientras estiras el brazo. La pesa rusa debe terminar arriba de la cabeza.",
                                                  "Baja la pesa rusa de nuevo al suelo en un movimiento controlado y repite el movimiento."
                                        ],
                                        "note": "Asegúrate de mantener una buena postura durante todo el ejercicio, con el pecho hacia arriba, el abdomen contraído y las rodillas ligeramente flexionadas. También es importante prestar atención a la técnica de la elevación y bajada de la pesa rusa para evitar lesiones en la espalda."
                              }
                    ]
          },
          {
                    "id": "peso-corporal",
                    "name": "Peso Corporal",
                    "exercises": [
                              {
                                        "id": "abdominales-con-elevacion",
                                        "name": "Abdominales con Elevación",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales con Elevación/levantamientoTorsoPeso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales con Elevación/elevacionRusaConPesas.mp4",
                                        "steps": [
                                                  "Acuéstate en el suelo con los pies estirados.",
                                                  "Sostén la pesa con ambas manos y estira los brazos hacia adelante, manteniendo la pesa por encima del pecho.",
                                                  "Levanta tu torso sin flexionar los codos, empujando las pesas hacia arriba.",
                                                  "Baja lentamente a tu posición inicial.",
                                                  "Repite el movimiento para completar una serie."
                                        ],
                                        "note": "Es importante mantener una buena postura y controlar la respiración durante todo el ejercicio. Además, asegúrate de elegir una pesa que sea adecuada para tu nivel de fuerza y resistencia."
                              },
                              {
                                        "id": "abdominales-con-rueda",
                                        "name": "Abdominales con Rueda",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales con Rueda/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales con Rueda/abdominalesConRueda.mp4",
                                        "steps": [
                                                  "Siéntate sobre una colchoneta con las rodillas dobladas y los pies apoyados en el suelo.",
                                                  "Sostén la rueda de accesorio con ambas manos, colocándola frente a ti en el suelo.",
                                                  "Comienza el movimiento inclinando el torso hacia adelante y extendiendo los brazos para rodar la rueda hacia delante.",
                                                  "Mantén los brazos extendidos y el abdomen contraído mientras te inclinas hacia adelante.",
                                                  "Continúa rodando la rueda hacia adelante hasta que sientas que tus músculos abdominales están completamente contraídos y tus brazos estén estirados por encima de tu cabeza.",
                                                  "Mantén esta posición durante un segundo para maximizar la contracción en los músculos abdominales.",
                                                  "Controla el retorno de la rueda hacia ti, flexionando los abdominales para mantener el control del movimiento.",
                                                  "Evita dejar caer el cuerpo hacia el suelo y mantener la tensión en los abdominales durante todo el ejercicio.",
                                                  "Ajusta la dificultad del ejercicio ajustando la distancia que ruedas la rueda hacia adelante."
                                        ]
                              },
                              {
                                        "id": "abdominales-en-banco-declinado",
                                        "name": "Abdominales en Banco Declinado",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales en Banco Declinado/levantamientoTorso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales en Banco Declinado/elevacionesBanco.mp4",
                                        "steps": [
                                                  "Ajusta un banco declinado a un ángulo cómodo, generalmente entre 30 y 45 grados. Siéntate en el extremo superior del banco, asegurando los pies bajo las almohadillas o soportes para mantener el cuerpo estable durante el ejercicio.",
                                                  "Cruza los brazos sobre el pecho o coloca las manos detrás de la cabeza sin empujarla, manteniendo los codos abiertos. Evita usar las manos para jalar el cuello hacia adelante.",
                                                  "Inhala y, mientras exhalas, activa el core y comienza a levantar el torso, enrollando la columna hacia adelante. Mantén el movimiento controlado, concentrándote en contraer los músculos abdominales. Evita usar el impulso para elevar el torso.",
                                                  "Continúa levantando el torso hasta que los hombros estén cerca de las rodillas o hasta donde te sientas cómodo, manteniendo la contracción abdominal en todo momento.",
                                                  "Pausa brevemente en la parte superior del movimiento, asegurándote de mantener la contracción en los abdominales.",
                                                  "Inhala y baja el torso de manera controlada de regreso a la posición inicial, desenrollando lentamente la columna hasta que los hombros toquen el banco. Mantén los abdominales activados durante el descenso para evitar la relajación de los músculos."
                                        ],
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición. El movimiento debe ser fluido y constante, sin tirones ni rebotes."
                              },
                              {
                                        "id": "abdominales-en-l",
                                        "name": "Abdominales en L",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales en L/vUp.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales en L/abdominalesEnL.mp4",
                                        "steps": [
                                                  "Siéntate en el suelo con las piernas estiradas frente a ti y los pies juntos.",
                                                  "Levanta los brazos por encima de la cabeza, manteniendo los codos rectos y las manos extendidas hacia el techo.",
                                                  "Contrae los músculos abdominales y levanta las piernas del suelo, manteniéndolas juntas y extendidas.",
                                                  "Al mismo tiempo, inclina el torso hacia adelante y extiende los brazos hacia los pies.",
                                                  "Intenta tocar las puntas de los pies con las manos mientras mantienes las piernas y los brazos extendidos.",
                                                  "Mantén la posición durante un segundo, sintiendo la contracción en los músculos abdominales.",
                                                  "Controla el retorno a la posición inicial, bajando lentamente las piernas y el torso hacia el suelo.",
                                                  "Evita balancear el cuerpo o utilizar impulso; concéntrate en el trabajo específico de los músculos abdominales."
                                        ]
                              },
                              {
                                        "id": "abdominales-oblicuos-bicicleta",
                                        "name": "Abdominales Oblicuos (Bicicleta)",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales Oblicuos (Bicicleta)/giroRuso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales Oblicuos (Bicicleta)/bicicleta.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba en una esterilla con las manos detrás de la cabeza y las piernas extendidas.",
                                                  "Eleva la cabeza y los hombros del suelo, manteniendo el cuello en posición neutral y los codos abiertos hacia los lados.",
                                                  "Lleva una rodilla hacia el pecho al mismo tiempo que giras el tronco, acercando el codo opuesto a la rodilla que se acerca.",
                                                  "Extiende la pierna opuesta simultáneamente, manteniéndola elevada y a unos centímetros del suelo.",
                                                  "Alterna el movimiento, llevando la otra rodilla hacia el pecho mientras giras el tronco en dirección al codo opuesto.",
                                                  "Realiza el ejercicio con un movimiento fluido y controlado, manteniendo el abdomen contraído en todo momento.",
                                                  "Completa el mismo número de repeticiones en cada lado para trabajar ambos lados del abdomen de manera equitativa.",
                                                  "Este ejercicio trabaja los músculos abdominales, especialmente los oblicuos, y ayuda a fortalecer el core y mejorar la definición abdominal.",
                                                  "Puedes incorporar el \"bicycle crunch\" en tu rutina de entrenamiento de abdominales o incluirlo en un circuito de ejercicios para trabajar la zona central del cuerpo."
                                        ]
                              },
                              {
                                        "id": "abdominales-oblicuos-cruzados",
                                        "name": "Abdominales Oblicuos Cruzados",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales Oblicuos Cruzados/giroRuso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales Oblicuos Cruzados/abdominalOblicuoCruzado.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba sobre una colchoneta con las piernas extendidas y los brazos extendidos hacia los lados, formando una \"T\" con tu cuerpo.",
                                                  "Dobla una rodilla y levántala hacia el pecho, al mismo tiempo que giras el tronco y el codo opuesto hacia esa rodilla.",
                                                  "Intenta tocar la rodilla elevada con el codo contrario mientras contraes los abdominales oblicuos.",
                                                  "Mantén una contracción en los abdominales durante un breve momento en la posición contraída.",
                                                  "Vuelve lentamente a la posición inicial, bajando la pierna y girando el tronco hacia el centro.",
                                                  "Alterna el movimiento con la otra pierna y el codo opuesto.",
                                                  "Completa el número deseado de repeticiones en cada lado."
                                        ]
                              },
                              {
                                        "id": "abdominales-v-up-con-pierna-alternada",
                                        "name": "Abdominales V Up con Pierna Alternada",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales V Up con Pierna Alternada/vUp.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Abdominales V Up con Pierna Alternada/abdominalesVUpPiernaAlternada.mp4",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas y los brazos extendidos hacia arriba.",
                                                  "Levanta tu torso y al mismo tiempo levanta una pierna hasta que ambos se encuentren en un ángulo de 45 grados.",
                                                  "Mantén esa posición durante unos segundos y luego baja el torso y la pierna de regreso a la posición inicial.",
                                                  "Repite el movimiento, pero esta vez levantando la otra pierna.",
                                                  "Continúa alternando las piernas en cada repetición."
                                        ],
                                        "note": "Es importante mantener una buena postura y técnica durante todo el ejercicio. Asegúrate de mantener tu espalda recta, el cuello relajado y los abdominales contraídos. Puedes aumentar la intensidad del ejercicio sosteniendo una pesa o mancuerna en tus manos."
                              },
                              {
                                        "id": "crunch-abdominal",
                                        "name": "Crunch Abdominal",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Crunch Abdominal/levantamientoTorso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Crunch Abdominal/abdominalesConAnclajePies.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba en el suelo con las rodillas dobladas y los pies apoyados en el suelo. Los brazos pueden estar cruzados en el pecho o detrás de la cabeza.",
                                                  "Contrae los músculos abdominales y levanta los hombros y la cabeza del suelo, manteniendo la mirada hacia el techo y sin forzar el cuello.",
                                                  "Mantén la contracción de los músculos abdominales y baja lentamente hacia el suelo, manteniendo el control del movimiento en todo momento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "note": "Es importante recordar que no debes tirar del cuello ni forzarlo hacia adelante, ya que esto puede causar lesiones. Además, es recomendable respirar profundamente mientras se realiza el ejercicio y mantener una buena postura durante todo el movimiento."
                              },
                              {
                                        "id": "doble-crunch",
                                        "name": "Doble Crunch",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Doble Crunch/tuckUp.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Doble Crunch/tuckUp.mp4",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas y los brazos extendidos hacia arriba.",
                                                  "Levanta tu torso y al mismo tiempo levanta una pierna hasta que ambos se encuentren en un ángulo de 45 grados.",
                                                  "Mantén esa posición durante unos segundos y luego baja el torso y la pierna de regreso a la posición inicial.",
                                                  "Repite el movimiento, pero esta vez levantando la otra pierna.",
                                                  "Continúa alternando las piernas en cada repetición."
                                        ],
                                        "note": "Es importante mantener una buena postura y técnica durante todo el ejercicio. Asegúrate de mantener tu espalda recta, el cuello relajado y los abdominales contraídos. Puedes aumentar la intensidad del ejercicio sosteniendo una pesa o mancuerna en tus manos."
                              },
                              {
                                        "id": "elevaciones-con-peso",
                                        "name": "Elevaciones con Peso",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevaciones con Peso/levantamientoTorso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevaciones con Peso/elevacionesConPeso.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba en un colchoneta con las piernas dobladas y los pies apoyados en el suelo. Toma la mancuerna con ambas manos y mantenla sobre tu pecho.",
                                                  "Lentamente levanta la cabeza, los hombros y la parte superior de la espalda del suelo. Mantén los codos ligeramente flexionados y enfoca la contracción en tus abdominales.",
                                                  "Alcanza tu máxima contracción en la parte superior del movimiento y luego baja lentamente el torso de vuelta al suelo.",
                                                  "Repite el movimiento para completar una serie."
                                        ],
                                        "note": "Recuerda que debes realizar el ejercicio con control y sin hacer uso de la fuerza del impulso para evitar lesiones. Además, es importante mantener la postura correcta durante todo el ejercicio para maximizar el trabajo en los músculos abdominales."
                              },
                              {
                                        "id": "elevacion-de-piernas",
                                        "name": "Elevación de Piernas",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Piernas/levantamientoPierna.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Piernas/elevacionDePiernas.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba en una colchoneta o en el suelo con las piernas rectas y los brazos a los lados del cuerpo.",
                                                  "Manteniendo las piernas rectas y juntas, levántalas del suelo hasta que formen un ángulo de 90 grados con tu torso. Asegúrate de mantenerlas rectas durante todo el movimiento.",
                                                  "Mantén esta posición durante un segundo, luego baja lentamente las piernas hacia el suelo, manteniéndolas siempre rectas.",
                                                  "Una vez que tus pies estén a unos centímetros del suelo, levanta las piernas de nuevo para comenzar la siguiente repetición.",
                                                  "Repite el movimiento para completar una serie."
                                        ],
                                        "note": "Asegúrate de mantener tu espalda baja pegada al suelo durante todo el ejercicio y evitar balancearte para evitar lesiones. Para hacer el ejercicio más difícil, puedes agregar un peso entre los pies o hacer el movimiento más lento y controlado."
                              },
                              {
                                        "id": "elevacion-de-piernas-en-posicion-supina",
                                        "name": "Elevación de Piernas en Posición Supina",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Piernas en Posición Supina/levantamientoPierna.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Piernas en Posición Supina/elevacionDePiernasEnPosicionSupina.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba en una colchoneta o superficie acolchada. Coloca las manos debajo de los glúteos con las palmas hacia abajo para ayudar a mantener la estabilidad en la parte baja de la espalda o sujétate de alguna columna u objeto.",
                                                  "Levanta las piernas del suelo manteniéndolas juntas y estiradas. Puedes mantenerlas en posición vertical o ligeramente inclinadas hacia el cuerpo.",
                                                  "Mantén la posición durante unos segundos, asegurándote de mantener la contracción en la parte baja del abdomen.",
                                                  "Baja lentamente las piernas hacia el suelo, pero sin llegar a tocarlo, manteniéndolas siempre bajo control. Este es un movimiento controlado y lento.",
                                                  "Vuelve a levantar las piernas y repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "note": "Es importante recordar que debes mantener siempre una buena técnica y controlar bien el movimiento durante todo el ejercicio. También es importante que respetes tus limitaciones y vayas aumentando la intensidad del ejercicio gradualmente a medida que vayas ganando fuerza y resistencia."
                              },
                              {
                                        "id": "elevacion-de-rodillas-en-banco-plano",
                                        "name": "Elevación de Rodillas en Banco Plano",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Rodillas en Banco Plano/levantamientoPierna.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Elevación de Rodillas en Banco Plano/elevacionPiernasSujetoBanco.mp4",
                                        "steps": [
                                                  "Acuéstate sobre un banco plano con la espalda apoyada firmemente y las piernas extendidas.",
                                                  "Sujeta los bordes del banco con las manos para mantener la estabilidad.",
                                                  "Contrae los músculos abdominales y flexiona las rodillas mientras elevas las piernas hacia el pecho.",
                                                  "Mantén el movimiento controlado y evita balancear las piernas o usar impulso.",
                                                  "Exhala mientras elevas las rodillas y contraes los abdominales.",
                                                  "Lleva las rodillas hacia el pecho lo más que puedas sin levantar la parte baja de la espalda del banco.",
                                                  "Mantén la posición superior durante un segundo para maximizar la contracción en los abdominales.",
                                                  "Inhala mientras bajas lentamente las piernas de regreso a la posición inicial, extendiendo las rodillas.",
                                                  "Evita que las piernas caigan bruscamente; mantén el control en todo momento."
                                        ]
                              },
                              {
                                        "id": "enebrando-la-aguja",
                                        "name": "Enebrando la Aguja",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Enebrando la Aguja/abdominales.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Enebrando la Aguja/enebrandoAguja.mp4",
                                        "steps": [
                                                  "Comienza en una posición de plancha lateral con el brazo inferior apoyado en el suelo y el otro brazo estirado hacia arriba.",
                                                  "Lleva lentamente el brazo superior hacia el suelo y por debajo de tu cuerpo, como si estuvieras \"enebrando una aguja\".",
                                                  "Asegúrate de mantener tu cuerpo estable y en línea recta mientras realizas este movimiento. Evita balancearte hacia adelante o hacia atrás.",
                                                  "Luego, levanta lentamente el brazo de nuevo hacia arriba y regresa a la posición inicial de plancha lateral.",
                                                  "Completa el número deseado de repeticiones en un lado antes de cambiar de lado y repetir el ejercicio con el otro brazo."
                                        ],
                                        "note": "Es importante recordar mantener una buena postura y controlar el movimiento en todo momento para evitar lesiones y maximizar los beneficios del ejercicio."
                              },
                              {
                                        "id": "extension-de-piernas",
                                        "name": "Extensión de Piernas",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Extensión de Piernas/columpioRuso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Extensión de Piernas/extensionPiernasEnBanco.mp4",
                                        "steps": [
                                                  "Siéntate en el borde de un banco plano, apoyando las manos a los lados del cuerpo para mantener el equilibrio.",
                                                  "Inclínate ligeramente hacia atrás, manteniendo el torso recto y el core contraído. Tus pies deben estar juntos y ligeramente levantados del suelo.",
                                                  "Inicia el movimiento extendiendo las piernas hacia adelante, manteniéndolas juntas y en línea recta. Asegúrate de no arquear la espalda durante este movimiento.",
                                                  "Mantén una ligera flexión en las rodillas si es necesario, pero intenta mantener las piernas lo más rectas posible.",
                                                  "Desde la posición extendida, lleva las rodillas hacia el pecho mientras contraes los músculos abdominales. Evita balancearte hacia adelante y atrás; en su lugar, enfócate en usar los músculos del core para controlar el movimiento.",
                                                  "Mantén una breve pausa en la parte superior del movimiento, asegurándote de que los abdominales estén completamente contraídos.",
                                                  "Extiende nuevamente las piernas hacia adelante para volver a la posición inicial, controlando el movimiento y manteniendo la tensión en los abdominales durante todo el ejercicio."
                                        ],
                                        "note": "Completa el número deseado de repeticiones, manteniendo una buena técnica y control en cada repetición."
                              },
                              {
                                        "id": "giro-ruso",
                                        "name": "Giro Ruso",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Giro Ruso/giroRuso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Giro Ruso/giroRuso.mp4",
                                        "steps": [
                                                  "Siéntate en el suelo con las rodillas dobladas y los pies apoyados en el suelo. Inclínate ligeramente hacia atrás, manteniendo la espalda recta y el abdomen apretado.",
                                                  "Levanta los pies del suelo para que estén paralelos al suelo. Mantén las rodillas dobladas y las manos juntas frente a tu pecho.",
                                                  "Gira tu torso hacia la derecha, llevando tus manos hacia el lado derecho. Mantén los codos rectos y no te inclines hacia atrás.",
                                                  "Vuelve a la posición inicial y repite hacia el lado izquierdo.",
                                                  "Continúa alternando los giros hacia la izquierda y la derecha durante el número deseado de repeticiones."
                                        ],
                                        "note": "Es importante mantener la postura correcta y no forzar el movimiento, ya que esto puede provocar lesiones en la espalda. También se pueden usar pesas o una bola medicinal para aumentar la intensidad del ejercicio."
                              },
                              {
                                        "id": "levantamiento-de-piernas-con-giro",
                                        "name": "Levantamiento de Piernas con Giro",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Levantamiento de Piernas con Giro/levantamientoPierna.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Levantamiento de Piernas con Giro/levantamientoDePiernasConGiro.mp4",
                                        "steps": [
                                                  "Comienza acostado sobre una colchoneta en el suelo, boca arriba, con las piernas extendidas y los brazos a los lados del cuerpo.",
                                                  "Levanta las piernas rectas juntas del suelo, manteniendo los brazos pegados al suelo. Usa los músculos abdominales para levantar las piernas, no la inercia.",
                                                  "Una vez que las piernas estén en posición vertical, gira las caderas hacia un lado mientras mantienes las piernas rectas. El giro se realiza levantando una cadera del suelo mientras la otra permanece en contacto con él.",
                                                  "Baja las piernas controladamente hacia el suelo mientras vuelves a la posición inicial con las caderas apoyadas en el suelo. Este es un movimiento completo.",
                                                  "Repite el ejercicio levantando las piernas y girando las caderas hacia el otro lado en el siguiente movimiento.",
                                                  "Es importante mantener el control y no hacer movimientos bruscos durante todo el ejercicio para evitar lesiones. Además, es esencial no balancear las piernas o moverlas usando el impulso del movimiento. Recuerda que el movimiento debe provenir de los músculos abdominales y no de la inercia."
                                        ]
                              },
                              {
                                        "id": "levantamiento-de-torso",
                                        "name": "Levantamiento de Torso",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Levantamiento de Torso/levantamientoTorso.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Levantamiento de Torso/levantamientoDeTorso.mp4",
                                        "steps": [
                                                  "Acuéstate en el suelo boca arriba, con las piernas extendidas y los brazos estirados por encima de la cabeza.",
                                                  "Simultáneamente levanta las piernas y los brazos hacia arriba hasta que los dedos de las manos toquen los dedos de los pies.",
                                                  "Mantén los abdominales apretados y los brazos y piernas estirados mientras sostienes la posición por un segundo.",
                                                  "Baja lentamente las piernas y los brazos hasta la posición inicial mientras exhalas.",
                                                  "Repite el movimiento para el número deseado de repeticiones.",
                                                  "Recuerda que para hacer este ejercicio correctamente, es importante mantener los abdominales contraídos en todo momento y evitar arquear la espalda al levantar los hombros y las piernas."
                                        ]
                              },
                              {
                                        "id": "oblicuos-con-suspension",
                                        "name": "Oblicuos con Suspensión",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Oblicuos con Suspensión/vUp.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Oblicuos con Suspensión/oblicuosSujetoBanco.mp4",
                                        "steps": [
                                                  "Asegura tus pies bajo el soporte acolchado del banco plano.",
                                                  "Acomódate de modo que tu cuerpo quede en una posición diagonal, con las caderas y las piernas extendidas hacia un lado del banco y el torso hacia el otro lado.",
                                                  "Mantén las manos detrás de la cabeza o extendidas hacia adelante para equilibrar el movimiento, según tu preferencia.",
                                                  "Inhala y desciende el torso hacia el suelo, asegurándote de que el movimiento se realice de forma controlada.",
                                                  "Exhala mientras contraes los oblicuos y elevas el torso hacia la posición inicial.",
                                                  "Concentra la fuerza en los músculos oblicuos del lado hacia el que estás dirigiendo el movimiento.",
                                                  "Mantén los movimientos fluidos y controlados en todo momento, evitando el impulso."
                                        ]
                              },
                              {
                                        "id": "oblicuos-en-colchoneta",
                                        "name": "Oblicuos en Colchoneta",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Oblicuos en Colchoneta/vUp.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Oblicuos en Colchoneta/oblicuos.mp4",
                                        "steps": [
                                                  "Asegura tus pies bajo el soporte acolchado del banco plano.",
                                                  "Acomódate de modo que tu cuerpo quede en una posición diagonal, con las caderas y las piernas extendidas hacia un lado del banco y el torso hacia el otro lado.",
                                                  "Mantén las manos detrás de la cabeza o extendidas hacia adelante para equilibrar el movimiento, según tu preferencia.",
                                                  "Inhala y desciende el torso hacia el suelo, asegurándote de que el movimiento se realice de forma controlada.",
                                                  "Exhala mientras contraes los oblicuos y elevas el torso hacia la posición inicial.",
                                                  "Concentra la fuerza en los músculos oblicuos del lado hacia el que estás dirigiendo el movimiento.",
                                                  "Mantén los movimientos fluidos y controlados en todo momento, evitando el impulso."
                                        ]
                              },
                              {
                                        "id": "patada-mariposa",
                                        "name": "Patada Mariposa",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Patada Mariposa/patadaMariposa.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Patada Mariposa/patadaMariposa.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba sobre una esterilla o superficie cómoda. Extiende las piernas y despegalas apenas del suelo, con los dedos de los pies apuntando hacia el techo.",
                                                  "Coloca las manos debajo de los glúteos para ayudar a mantener la estabilidad. También puedes extender los brazos a los lados, pero asegúrate de que estén apoyados en el suelo.",
                                                  "Comienza a mover las piernas hacia arriba y hacia abajo en un patrón de patada continua y rítmica, manteniendo las piernas estiradas y juntas.",
                                                  "A medida que haces las patadas, asegúrate de mantener el abdomen y los músculos de la espalda baja tensos para ayudar a mantener la estabilidad y evitar lesiones.",
                                                  "Continúa haciendo las patadas durante el tiempo deseado o hasta que sientas una quemazón en los músculos abdominales."
                                        ],
                                        "note": "Recuerda que la técnica es muy importante en este ejercicio, así que asegúrate de mantener la espalda baja apoyada en el suelo en todo momento y evita hacer movimientos bruscos con las piernas."
                              },
                              {
                                        "id": "patada-mariposa-extendida",
                                        "name": "Patada Mariposa Extendida",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Patada Mariposa Extendida/patadaMariposaExtendida.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Patada Mariposa Extendida/patadaMariposaExtendido.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba sobre una esterilla o superficie cómoda. Extiende las piernas y despegalas apenas del suelo, con los dedos de los pies apuntando hacia el techo.",
                                                  "Levanta las manos y extiéndelas por arriba de tu cabeza, como si estarías en posición de estrella.",
                                                  "Comienza a mover las piernas hacia arriba y hacia abajo en un patrón de patada continua y rítmica, manteniendo las piernas estiradas y juntas.",
                                                  "A medida que haces las patadas, asegúrate de mantener el abdomen y los músculos de la espalda baja tensos para ayudar a mantener la estabilidad y evitar lesiones.",
                                                  "Continúa haciendo las patadas durante el tiempo deseado o hasta que sientas una quemazón en los músculos abdominales."
                                        ],
                                        "note": "Recuerda que la técnica es muy importante en este ejercicio, así que asegúrate de mantener la espalda baja apoyada en el suelo en todo momento y evita hacer movimientos bruscos con las piernas."
                              },
                              {
                                        "id": "plancha",
                                        "name": "Plancha",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha/plancha.mp4",
                                        "steps": [
                                                  "Comienza colocándote boca abajo en el suelo.",
                                                  "Levanta tu cuerpo apoyándote en tus antebrazos y en tus dedos de los pies.",
                                                  "Los antebrazos deben estar alineados con los hombros y los codos deben estar flexionados a 90 grados.",
                                                  "Mantén tu cuerpo en línea recta desde la cabeza hasta los talones, evitando que las caderas se hundan o que se levanten demasiado.",
                                                  "Mantén los músculos abdominales y glúteos contraídos para estabilizar tu cuerpo.",
                                                  "Mantén esta posición durante el tiempo deseado, comenzando con intervalos cortos y aumentando gradualmente a medida que tu fuerza y resistencia mejoren."
                                        ]
                              },
                              {
                                        "id": "plancha-con-deslizamiento",
                                        "name": "Plancha con Deslizamiento",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Deslizamiento/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Deslizamiento/planchaConDeslizamiento.mp4",
                                        "steps": [
                                                  "Coloca una mancuerna en un extremo de la esterilla o superficie donde realizarás el ejercicio.",
                                                  "Colócate en posición de plancha con las manos en el suelo a la altura de los hombros y los pies juntos detrás de ti.",
                                                  "Asegúrate de que tu cuerpo esté recto y en línea desde la cabeza hasta los talones.",
                                                  "Mantén la posición de la plancha mientras levantas una mano y la llevas hacia la mancuerna.",
                                                  "Agarra la mancuerna y llévala hacia el otro lado de tu cuerpo, pasándola por debajo de tu torso.",
                                                  "Coloca la mancuerna en el suelo en el otro extremo de la esterilla.",
                                                  "Repite el movimiento con la otra mano para volver a la posición inicial.",
                                                  "Continúa alternando los lados y desplazando la mancuerna hacia la izquierda y hacia la derecha mientras mantienes la posición de la plancha.",
                                                  "Recuerda mantener siempre la alineación correcta del cuerpo y el control del movimiento para evitar lesiones y maximizar los beneficios del ejercicio."
                                        ]
                              },
                              {
                                        "id": "plancha-con-elevacion-de-codo",
                                        "name": "Plancha con Elevación de Codo",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Elevación de Codo/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Elevación de Codo/planchaElevacionCodo.mp4",
                                        "steps": [
                                                  "Comienza en una posición de plancha estándar, con los antebrazos apoyados en el suelo, los codos debajo de los hombros y los dedos de los pies apoyados en el suelo, manteniendo una línea recta desde la cabeza hasta los talones.",
                                                  "Contrae los músculos abdominales y glúteos para estabilizar el cuerpo.",
                                                  "Desde esta posición, eleva uno de tus codos del suelo, extendiendo completamente el brazo hacia arriba.",
                                                  "Mantén la posición y repite con el segundo codo.",
                                                  "Mantén la posición unos segundos y baja el primer codo extendido",
                                                  "Baja el segundo codo a la posición inicial.",
                                                  "Repite el proceso, alternando entre los dos codos, elevándolos y bajándolos de manera controlada."
                                        ]
                              },
                              {
                                        "id": "plancha-con-extension-de-codo",
                                        "name": "Plancha con Extensión de Codo",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Extensión de Codo/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Extensión de Codo/planchaExtencionCodo.mp4",
                                        "steps": [
                                                  "Comienza en una posición de plancha estándar, con tus antebrazos apoyados en el suelo, los codos debajo de los hombros y los dedos de los pies apoyados en el suelo, formando una línea recta desde la cabeza hasta los talones.",
                                                  "Mantén tus abdominales y glúteos contraídos para estabilizar tu cuerpo y evitar que las caderas se hundan o se levanten demasiado.",
                                                  "Desde esta posición, extiende uno de tus codos mientras mantienes el otro antebrazo apoyado en el suelo.",
                                                  "Extiende completamente el brazo, manteniendo la estabilidad en el core y evitando que las caderas se balanceen.",
                                                  "Mantén la posición de extensión de codo durante unos segundos, asegurándote de mantener una alineación adecuada del cuerpo.",
                                                  "Vuelve a doblar el codo y regresa a la posición de plancha estándar.",
                                                  "Alterna entre los dos brazos, extendiendo y doblando los codos de manera controlada."
                                        ]
                              },
                              {
                                        "id": "plancha-con-rotacion-de-caderas",
                                        "name": "Plancha con Rotación de Caderas",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Rotación de Caderas/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha con Rotación de Caderas/planchaRotacinCadera.mp4",
                                        "steps": [
                                                  "Comienza en una posición de plancha estándar, con los antebrazos apoyados en el suelo, los codos debajo de los hombros y los dedos de los pies apoyados en el suelo, manteniendo una línea recta desde la cabeza hasta los talones.",
                                                  "Contrae los músculos abdominales y glúteos para estabilizar el cuerpo.",
                                                  "Desde esta posición, gira las caderas hacia un lado, y luego hacia el otro, levantando la cadera correspondiente hacia arriba.",
                                                  "Repite la rotación de cadera durante el tiempo deseado, sintiendo el estiramiento en los oblicuos."
                                        ]
                              },
                              {
                                        "id": "plancha-lateral",
                                        "name": "Plancha Lateral",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha Lateral/planchaLateral.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Plancha Lateral/planchaLateral.mp4",
                                        "steps": [
                                                  "Acuéstate de lado en el suelo y apoya el antebrazo en el suelo. Asegúrate de que el codo esté justo debajo del hombro y el antebrazo esté apuntando hacia adelante.",
                                                  "Coloca las piernas juntas y estíralas. Luego, levántalas del suelo y apóyate en el antebrazo y en el borde exterior del pie.",
                                                  "Mantén el cuerpo en línea recta desde la cabeza hasta los pies. Evita que las caderas se hundan o se levanten demasiado. Si tienes dificultades para mantener el equilibrio, puedes apoyar la mano libre en el suelo para mayor estabilidad.",
                                                  "Mantén la posición durante el tiempo deseado (normalmente de 30 segundos a 1 minuto) y luego cambia de lado y repite el ejercicio."
                                        ],
                                        "note": "Es importante mantener una buena técnica durante todo el ejercicio para evitar lesiones y obtener los máximos beneficios. También puedes agregar variaciones a la plancha lateral, como levantar una pierna o un brazo para aumentar la intensidad del ejercicio."
                              },
                              {
                                        "id": "posicion-de-hollow-hold-flexionado",
                                        "name": "Posición de Hollow Hold Flexionado",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Posición de Hollow Hold Flexionado/hollowHold.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Posición de Hollow Hold Flexionado/posicionDeHollowHoldFlexionado.mp4",
                                        "steps": [
                                                  "Acuéstate en el suelo boca arriba y dobla las piernas en un ángulo de 90 grados, de manera que las pantorrillas queden paralelas al suelo. Los pies deben estar juntos y apoyados en el suelo.",
                                                  "Coloca las manos detrás estiradas hacia los pies.",
                                                  "Levanta los hombros y la cabeza del suelo, tratando de mantener la espalda baja pegada al suelo.",
                                                  "Ahora, levanta los hombros y las piernas del suelo al mismo tiempo.",
                                                  "Mantén esta posición, tratando de mantener el equilibrio y evitando que la espalda baja se levante del suelo. Mantén los músculos abdominales apretados y la respiración controlada.",
                                                  "Aguanta la posición durante el tiempo que desees o el que te indique tu rutina de entrenamiento.",
                                                  "Para finalizar, baja lentamente las piernas y la cabeza al suelo.",
                                                  "Recuerda que es importante realizar el ejercicio con control y evitar la compensación con otros músculos para que realmente trabajes los músculos abdominales."
                                        ]
                              },
                              {
                                        "id": "postura-de-la-barca",
                                        "name": "Postura de la Barca",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Postura de la Barca/barca.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Postura de la Barca/posturaDeLaBarca.mp4",
                                        "steps": [
                                                  "Siéntate en el suelo con las piernas estiradas frente a ti y las manos a los lados de las caderas.",
                                                  "Inclínate hacia atrás ligeramente y levanta los pies del suelo, manteniendo las piernas rectas.",
                                                  "Continúa inclinándote hacia atrás hasta que tu torso y piernas formen un ángulo de 45 grados con el suelo. Trata de mantener la espalda recta y el pecho abierto.",
                                                  "Extiende los brazos hacia adelante, paralelos al suelo.",
                                                  "Mantén la posición durante unos segundos y luego relaja el cuerpo y baja las piernas al suelo.",
                                                  "Puedes repetir este ejercicio varias veces, tratando de mantener la posición durante más tiempo en cada repetición. También puedes variar el ejercicio, flexionando las rodillas y agarrando las piernas con las manos, para hacerlo más fácil."
                                        ]
                              },
                              {
                                        "id": "toque-de-hombros",
                                        "name": "Toque de Hombros",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Toque de Hombros/toquesDeHombro.mp4",
                                        "steps": [
                                                  "Comienza en una posición de plancha, apoyando las manos y los pies en el suelo. Asegúrate de que tus manos estén justo debajo de tus hombros y tus pies estén juntos.",
                                                  "Desde esta posición, mantén tus caderas en línea recta con el resto de tu cuerpo y evita que se levanten o se hundan.",
                                                  "Levanta la mano derecha del suelo y toca tu hombro izquierdo. Vuelve a bajar la mano al suelo y repite con la mano izquierda tocando tu hombro derecho. Ese es un ciclo completo.",
                                                  "Continúa alternando las manos, tocando cada hombro mientras mantienes la posición de plancha."
                                        ],
                                        "note": "Recuerda que es importante mantener la postura correcta en todo momento, evitando arquear o hundir la espalda y manteniendo el core apretado. Además, si eres principiante, puedes comenzar haciendo el ejercicio sobre las rodillas en lugar de los pies para reducir la intensidad del ejercicio."
                              },
                              {
                                        "id": "toque-talon",
                                        "name": "Toque Talón",
                                        "imageUrl": "/Entrenamientos/Abdominales/Peso Corporal/Toque Talón/planchaLateral.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Peso Corporal/Toque Talón/toqueTalon.mp4",
                                        "steps": [
                                                  "Acuéstate boca arriba sobre una colchoneta con las piernas extendidas y los brazos extendidos hacia arriba, justo por encima de la cabeza.",
                                                  "Levanta las piernas hacia arriba mientras mantienes las rodillas ligeramente flexionadas. Mantén los pies juntos y apunta con los dedos de los pies hacia el techo.",
                                                  "Al mismo tiempo, levanta el tronco hacia arriba, tratando de alcanzar los pies con las manos extendidas. Para ello, contrae los músculos abdominales y eleva los omóplatos del suelo.",
                                                  "Alcanza los talones con las manos o los dedos mientras mantienes las piernas elevadas en el aire y el tronco elevado.",
                                                  "Mantén la contracción en los músculos abdominales durante un breve momento en la posición más alta del movimiento.",
                                                  "Baja lentamente el tronco y las piernas de vuelta a la posición inicial, manteniendo el control del movimiento en todo momento."
                                        ],
                                        "note": "Completa el número deseado de repeticiones, manteniendo una técnica adecuada en cada repetición y sintiendo el trabajo en los músculos abdominales."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "abdominales-en-polea",
                                        "name": "Abdominales en Polea",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Abdominales en Polea/hollowHold.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Abdominales en Polea/crunchPolea.mp4",
                                        "steps": [
                                                  "Ajusta una máquina de polea con una polea alta y selecciona un peso apropiado.",
                                                  "Coloca un accesorio de cuerda en la polea y ajústalo para que esté a la altura de tus hombros.",
                                                  "Arrodíllate frente a la máquina y sujeta la cuerda con ambas manos, manteniendo las palmas hacia abajo.",
                                                  "Despliega la cuerda y lleva las manos hacia tus hombros, manteniendo los codos en línea con tus orejas.",
                                                  "Ajusta la distancia entre tus rodillas y la máquina para crear tensión en los músculos abdominales.",
                                                  "Inicia el movimiento contrayendo los músculos abdominales y flexionando la columna vertebral hacia adelante.",
                                                  "Lleva los codos hacia las rodillas, llevando el pecho hacia las piernas y sintiendo la contracción en los abdominales.",
                                                  "Mantén la contracción durante un segundo para maximizar el trabajo en los abdominales.",
                                                  "Controla el retorno hacia la posición inicial, extendiendo la columna vertebral y estirando los abdominales.",
                                                  "Realiza el mismo número de repeticiones, manteniendo un ritmo controlado y enfocándote en la conexión mente-músculo.",
                                                  "Evita tirar del cuello o utilizar el impulso del cuerpo; concéntrate en el trabajo de los abdominales."
                                        ]
                              },
                              {
                                        "id": "elevacion-de-piernas-en-maquina",
                                        "name": "Elevación de Piernas en Máquina",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Elevación de Piernas en Máquina/levantamientoPierna.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Elevación de Piernas en Máquina/abdominalesTorre.mp4",
                                        "steps": [
                                                  "Agarra la barra con las manos separadas a la anchura de los hombros, coloca los brazos rectos y los hombros hacia atrás y abajo.",
                                                  "Levanta las piernas juntas hacia arriba, doblando ligeramente las rodillas y manteniendo los pies juntos.",
                                                  "Continúa elevando las piernas hasta que tu cuerpo quede en un ángulo de 90 grados, si es posible, o hasta donde puedas.",
                                                  "Mantén esta posición durante unos segundos y luego baja lentamente las piernas hacia la posición inicial.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "note": "Es importante mantener una buena técnica y controlar el movimiento en todo momento para evitar lesiones. Si eres principiante, puedes empezar con una versión más fácil del ejercicio doblando ligeramente las rodillas y elevando las piernas solo hasta donde puedas sin forzar la espalda baja."
                              },
                              {
                                        "id": "maquina-de-crunch-abdominal",
                                        "name": "Máquina de Crunch Abdominal",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Crunch Abdominal/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Crunch Abdominal/crunchAbdominalEnGuia.mp4",
                                        "steps": [
                                                  "Antes de subir a la máquina, sujeta las manijas para ganar equilibrio.",
                                                  "Apoya las rodillas en la colchoneta una al lado de la otra, de forma paralela.",
                                                  "Contrae tu abdominal llevando las rodillas hacia arriba hasta que haga tope la máquina.",
                                                  "Sostiene unos segundos el abdomen contraido y luego baja lentamente hasta su posición inicial.",
                                                  "Repite la cantidad de veces necesarias"
                                        ]
                              },
                              {
                                        "id": "maquina-de-encogimiento-abdominal",
                                        "name": "Máquina de Encogimiento Abdominal",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Encogimiento Abdominal/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Encogimiento Abdominal/maquinaEncogimientoAbdominal.mp4",
                                        "steps": [
                                                  "Antes de subir a la máquina, ajusta el peso a levantar.",
                                                  "Siéntate en el cojín y sujetas las manijas en la parte superior",
                                                  "Contrae tu abdominal llevando las rodillas hacia arriba hasta que haga tope la máquina.",
                                                  "Sostiene unos segundos el abdomen contraido y luego baja lentamente hasta su posición inicial.",
                                                  "Repite la cantidad de veces necesarias"
                                        ]
                              },
                              {
                                        "id": "maquina-de-lower-back",
                                        "name": "Máquina de Lower Back",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Lower Back/abdominalDeslizamiento.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Máquina de Lower Back/lowerBack.mp4",
                                        "steps": [
                                                  "Siéntate en la máquina de lower back con la almohadilla ajustada a la altura de la parte superior de tu espalda.",
                                                  "Asegura los pies en los soportes de la máquina, manteniéndolos firmemente plantados en el suelo.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza. Comienza con un peso ligero si es necesario.",
                                                  "Coloca las manos en las empuñaduras laterales para mantener la estabilidad durante el ejercicio.",
                                                  "Inhala profundamente mientras te preparas para el movimiento, activando los músculos de la zona lumbar.",
                                                  "Exhala mientras empujas hacia atrás con el torso, extendiendo la espalda contra la resistencia de la máquina.",
                                                  "Asegúrate de mantener el control durante todo el movimiento, evitando arquear excesivamente la espalda.",
                                                  "Inhala mientras regresas lentamente a la posición inicial, asegurándote de que el movimiento sea controlado.",
                                                  "Mantén una buena postura en todo momento, evitando usar el impulso o empujar con fuerza excesiva para proteger la zona lumbar.",
                                                  "Realiza el número deseado de repeticiones y series, ajustando el peso si es necesario para mantener una forma correcta y segura."
                                        ]
                              },
                              {
                                        "id": "rotacion-de-cintura-en-landmine",
                                        "name": "Rotación de Cintura en Landmine",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Cintura en Landmine/planchaLateral.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Cintura en Landmine/rotacionCinturaLandmine.mp4",
                                        "steps": []
                              },
                              {
                                        "id": "rotacion-de-torso-en-maquina",
                                        "name": "Rotación de Torso en Máquina",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Torso en Máquina/planchaLateral.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Torso en Máquina/rotaryTorso.mp4",
                                        "steps": [
                                                  "Siéntate en la máquina de Rotary Torso con la espalda recta y ajusta el asiento para que las rodillas queden alineadas con los soportes laterales.",
                                                  "Ajusta el rango de movimiento de la máquina seleccionando el ángulo de inicio deseado para el giro del torso.",
                                                  "Coloca las manos en las empuñaduras o apoya los brazos en los cojines laterales, según el diseño de la máquina.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza, comenzando con un peso ligero si es necesario.",
                                                  "Mantén el núcleo activado y asegúrate de que las caderas y las piernas estén fijas durante el ejercicio.",
                                                  "Inhala mientras te preparas para el movimiento.",
                                                  "Exhala y rota el torso hacia un lado, concentrándote en activar los músculos oblicuos mientras mantienes las piernas inmóviles.",
                                                  "Mantén la contracción al final del movimiento durante un segundo para maximizar la activación de los oblicuos.",
                                                  "Inhala mientras regresas lentamente a la posición inicial de manera controlada.",
                                                  "Repite el movimiento hacia el otro lado, alternando giros, y mantén el control del peso durante todo el ejercicio.",
                                                  "Realiza el número deseado de repeticiones para ambos lados, asegurándote de no usar el impulso y de mantener una forma adecuada para evitar lesiones."
                                        ]
                              },
                              {
                                        "id": "rotacion-de-torso-sujecion-superior",
                                        "name": "Rotación de Torso Sujeción Superior",
                                        "imageUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Torso Sujeción Superior/planchaLateral.png",
                                        "videoUrl": "/Entrenamientos/Abdominales/Poleas y maquinas/Rotación de Torso Sujeción Superior/rotaryTorsoSuperior.mp4",
                                        "steps": [
                                                  "Siéntate en la máquina de Rotary Torso con la espalda recta y ajusta el asiento para que las rodillas queden alineadas con los soportes laterales.",
                                                  "Bajar el soporte hasta que haga tope con el hombro.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza, comenzando con un peso ligero si es necesario.",
                                                  "Mantén el núcleo activado y asegúrate de que las caderas y las piernas estén fijas durante el ejercicio.",
                                                  "Inhala mientras te preparas para el movimiento.",
                                                  "Exhala y rota el torso hacia un lado, concentrándote en activar los músculos oblicuos mientras mantienes las piernas inmóviles.",
                                                  "Mantén la contracción al final del movimiento durante un segundo para maximizar la activación de los oblicuos.",
                                                  "Inhala mientras regresas lentamente a la posición inicial de manera controlada.",
                                                  "Repite el movimiento hacia el otro lado, alternando giros, y mantén el control del peso durante todo el ejercicio.",
                                                  "Realiza el número deseado de repeticiones para ambos lados, asegurándote de no usar el impulso y de mantener una forma adecuada para evitar lesiones."
                                        ]
                              }
                    ]
          }
]
    },
            biceps: {
        id: 'biceps',
        name: 'Bíceps',
        subtitle: 'Flexores de codo',
        cardImageUrl: '/Entrenamientos/Biceps/bicepmini.png',
        detailImageUrl: '/Entrenamientos/Biceps/bicep.png',
        frontHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "curl-biceps-con-barra",
                                        "name": "Curl Biceps con Barra",
                                        "steps": [
                                                  "Ponte de pie con los pies separados al ancho de los hombros, manteniendo una ligera flexión en las rodillas.",
                                                  "Sujeta la barra con un agarre supino (palmas hacia arriba) y las manos separadas a una distancia ligeramente más amplia que el ancho de los hombros.",
                                                  "Deja que la barra cuelgue frente a ti, con los brazos completamente extendidos y los codos cerca del cuerpo.",
                                                  "Mantén los hombros hacia atrás y hacia abajo, y la espalda recta durante todo el ejercicio.",
                                                  "Inhala y contrae los músculos del bíceps mientras flexionas los codos y levantas la barra hacia los hombros.",
                                                  "Mantén los codos pegados al cuerpo y evita balancear el torso hacia adelante para maximizar la contracción en los bíceps.",
                                                  "Exhala mientras llevas la barra hacia arriba y mantén la posición contraída durante un segundo en la parte superior del movimiento.",
                                                  "Inhala nuevamente mientras bajas la barra de manera controlada, extendiendo los codos hasta la posición inicial.",
                                                  "Evita el balanceo del cuerpo y utiliza un movimiento suave y controlado en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra/curlBicepsBarra.mp4"
                              },
                              {
                                        "id": "curl-biceps-con-barra-en-banco-scott",
                                        "name": "Curl Biceps con Barra en Banco Scott",
                                        "steps": [
                                                  "Siéntate en el banco de la máquina de curl de bíceps con los pies apoyados en el suelo y la espalda recta.",
                                                  "Agarra la barra con las manos en pronación (palmas hacia abajo) y con las manos separadas a la distancia de los hombros.",
                                                  "Con los codos apoyados en los cojines del banco y las muñecas rectas, levanta la barra hasta que los antebrazos estén paralelos al suelo.",
                                                  "Exhala y contrae los bíceps para levantar la barra hacia el pecho.",
                                                  "Haz una pausa en la parte superior del movimiento y luego inhala mientras bajas la barra de manera controlada a la posición inicial.",
                                                  "Es importante mantener la espalda recta y evitar arquearla hacia atrás para evitar lesiones en la columna vertebral. Además, no debes balancear el cuerpo ni mover los codos durante el ejercicio, ya que esto disminuirá la efectividad del movimiento en los bíceps."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra en Banco Scott/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra en Banco Scott/bicepsBarraApoyo.mp4"
                              },
                              {
                                        "id": "curl-biceps-con-barra-romana",
                                        "name": "Curl Biceps con Barra Romana",
                                        "steps": [
                                                  "Párate derecho frente a la barra romana con los pies separados a la distancia de los hombros. Agarra la barra con las palmas hacia adentro y los dedos índices apuntando hacia arriba. Las manos deben estar separadas a la distancia de los hombros.",
                                                  "Mantén los codos pegados a los costados y levanta la barra hasta los hombros doblando los codos. Mantén las muñecas firmes y evita balancear el cuerpo hacia adelante o hacia atrás.",
                                                  "Lentamente baja la barra a la posición inicial, extendiendo los codos y manteniendo las muñecas firmes.",
                                                  "Repite el movimiento para realizar varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra Romana/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Barra/Curl Biceps con Barra Romana/bicepsBarraRomana.mp4",
                                        "note": "Es importante mantener la postura adecuada, manteniendo los hombros hacia atrás y el núcleo firme para evitar arquear la espalda y proteger la columna vertebral. También es importante utilizar un peso adecuado para evitar lesiones y asegurarse de que se está realizando correctamente la técnica del ejercicio."
                              },
                              {
                                        "id": "curl-de-biceps-con-barra",
                                        "name": "Curl de Biceps con Barra",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la barra para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta el banco multiangular para que este a 45º y apoya tus codos sujetando la barra con las palmas apuntando a tu cara.",
                                                  "Pon tus pies a la misma distancia que los hombros y dá un paso hacia atras para una mayor estabilidad.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con los brazos contraidos y los codos cerca del cuerpo.",
                                                  "Extiende los codos y lleva la manos hacia el banco, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Sube la barra controladamente hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Barra/Curl de Biceps con Barra/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Barra/Curl de Biceps con Barra/curlBicepsApoyoBarra.mp4"
                              },
                              {
                                        "id": "curl-de-biceps-con-barra-z",
                                        "name": "Curl de Biceps con Barra Z",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la barra para que puedas realizar el ejercicio con buena técnica.",
                                                  "Pon tus pies a la misma distancia que los hombros.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con los brazos contraidos y los codos cerca del cuerpo.",
                                                  "Extiende los codos y lleva la manos hacia las caderas, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Sube la barra controladamente hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Barra/Curl de Biceps con Barra Z/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Barra/Curl de Biceps con Barra Z/curlBicepsApoyoBarraZ.mp4"
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "curl-21",
                                        "name": "Curl 21",
                                        "steps": [
                                                  "Este ejercicio se realiza con una barra o mancuernas, pero generalmente se hace con una barra.",
                                                  "Comienza de pie, con los pies separados a la altura de los hombros y agarra la barra con un agarre supino (palmas hacia arriba), manteniendo las manos separadas a una distancia ligeramente más estrecha que el ancho de los hombros.",
                                                  "La primera parte del ejercicio, conocida como \"las primeras 7\", consiste en hacer siete repeticiones desde la posición inicial hasta la mitad del rango de movimiento, es decir, desde los brazos completamente extendidos hasta que los codos están doblados aproximadamente en un ángulo de 90 grados.",
                                                  "La segunda parte, llamada \"las segundas 7\", implica hacer siete repeticiones desde la mitad del rango de movimiento hasta la contracción completa de los bíceps, es decir, desde un ángulo de 90 grados en los codos hasta que los brazos estén completamente flexionados y los bíceps estén contraídos.",
                                                  "Finalmente, la tercera parte, conocida como \"las últimas 7\", implica hacer siete repeticiones completas desde la posición inicial hasta la contracción completa de los bíceps.",
                                                  "Es importante mantener una buena forma durante todo el ejercicio, evitando balancear el cuerpo o utilizar impulso para levantar la barra. Mantén los codos cerca del cuerpo y controla el movimiento en todo momento.",
                                                  "El Curl 21 es un ejercicio desafiante que proporciona un intenso bombeo muscular en los bíceps y puede ayudar a aumentar la fuerza y el tamaño de estos músculos con el tiempo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl 21/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl 21/curl21.mp4"
                              },
                              {
                                        "id": "curl-alterno",
                                        "name": "Curl Alterno",
                                        "steps": [
                                                  "Comienza de pie con una mancuerna en cada mano, con los brazos extendidos hacia abajo y las palmas de las manos hacia los muslos.",
                                                  "Manteniendo un brazo en posición, levanta lentamente la mancuerna del otro brazo hacia el hombro, doblando el codo y manteniendo el brazo pegado al costado del cuerpo. Exhala durante el levantamiento de la mancuerna.",
                                                  "Una vez que el codo esté doblado completamente, mantén la posición durante un segundo y luego baja lentamente la mancuerna hacia abajo, inhalando durante el descenso.",
                                                  "Repite el mismo movimiento con el otro brazo, alternando los brazos en cada repetición.",
                                                  "Continúa alternando los brazos hasta que hayas completado el número deseado de repeticiones.",
                                                  "Es importante mantener una buena forma durante el ejercicio, evitando balancear los brazos o inclinarse hacia atrás para ayudarse en el levantamiento. Mantén los codos pegados al cuerpo y controla el movimiento en todo momento. También puedes variar la inclinación del banco para enfatizar diferentes partes del bíceps."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Alterno/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Alterno/curlBicepsAlternoMancuerna.mp4"
                              },
                              {
                                        "id": "curl-alterno-en-banca-inclinada",
                                        "name": "Curl Alterno en Banca Inclinada",
                                        "steps": [
                                                  "Siéntate en una banca inclinada con una mancuerna en cada mano. Ajusta la inclinación de la banca a unos 45 grados.",
                                                  "Sujeta las mancuernas con un agarre neutro (las palmas de las manos mirando hacia tus muslos) y estira los brazos hacia abajo, manteniéndolos cerca de los costados.",
                                                  "Mantén los codos pegados al cuerpo y levanta una mancuerna hacia el hombro, girando la muñeca para que la palma de la mano mire hacia el hombro al final del movimiento.",
                                                  "Baja la mancuerna lentamente mientras levantas la otra mancuerna al hombro.",
                                                  "Alterna los brazos en cada repetición."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Alterno en Banca Inclinada/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Alterno en Banca Inclinada/curlBicepsAlternoBancaInclinada.mp4",
                                        "note": "Es importante mantener una buena postura durante todo el ejercicio para evitar lesiones y asegurarte de trabajar los bíceps correctamente. Asegúrate de mantener los codos pegados al cuerpo, mantener la espalda recta y evitar mover el torso o balancear las mancuernas. Controla el movimiento en todo momento y no utilices un peso excesivo que te haga perder la forma adecuada."
                              },
                              {
                                        "id": "curl-bicep-concentrados-unilateral",
                                        "name": "Curl Bicep Concentrados Unilateral",
                                        "steps": [
                                                  "Siéntate en un banco o silla con los pies apoyados en el suelo, manteniendo la espalda recta.",
                                                  "Toma una mancuerna con una mano y sosténla con un agarre supino (palma hacia arriba).",
                                                  "Coloca el codo del brazo que sostiene la mancuerna en la parte interna del muslo, cerca de la rodilla.",
                                                  "Asegúrate de que el brazo que sostiene la mancuerna esté completamente extendido y perpendicular al suelo.",
                                                  "Deja que la mancuerna cuelgue hacia abajo, extendiendo completamente el brazo.",
                                                  "Contrae los músculos del bíceps y lleva la mancuerna hacia el hombro, doblando el codo.",
                                                  "Mantén el codo firmemente apoyado en la pierna para evitar el balanceo del brazo durante el movimiento.",
                                                  "Exhala mientras levantas la mancuerna y mantén la contracción en la parte superior del movimiento.",
                                                  "Inhala mientras bajas lentamente la mancuerna de regreso a la posición inicial, extendiendo el brazo completamente.",
                                                  "Evita balancear el cuerpo o utilizar impulso; concéntrate en el trabajo específico del bíceps.",
                                                  "Completa el mismo número de repeticiones con cada brazo para mantener el equilibrio en el desarrollo muscular."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Bicep Concentrados Unilateral/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Bicep Concentrados Unilateral/curlConcentradoMancuerna.mp4"
                              },
                              {
                                        "id": "curl-bicep-sentado-alternado",
                                        "name": "Curl Bicep Sentado Alternado",
                                        "steps": [
                                                  "Siéntate en un banco con respaldo, manteniendo la espalda recta y los pies apoyados en el suelo.",
                                                  "Sujeta una mancuerna en cada mano, con las palmas de las manos mirándote y los brazos completamente extendidos a los lados del cuerpo.",
                                                  "Inicia el movimiento flexionando el codo de un brazo mientras mantienes el otro brazo extendido. Alterna los brazos en cada repetición.",
                                                  "Mantén el codo pegado al torso y contrae los músculos del bíceps al llevar la mancuerna hacia el hombro.",
                                                  "Lleva la mancuerna hacia arriba de manera controlada, evitando movimientos bruscos.",
                                                  "Al llegar a la posición superior, realiza una breve pausa para maximizar la contracción en el bíceps.",
                                                  "Desciende la mancuerna de manera controlada a la posición inicial, estirando completamente el brazo.",
                                                  "Repite el mismo proceso con el otro brazo, alternando de manera continua."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Bicep Sentado Alternado/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Bicep Sentado Alternado/curlBicepsAlternado.mp4",
                                        "note": "Mantén una postura estable y evita balancear el cuerpo para enfocarte en aislar los músculos del bíceps."
                              },
                              {
                                        "id": "curl-biceps-en-banco-scott",
                                        "name": "Curl Biceps en banco Scott",
                                        "steps": [
                                                  "Toma la mancuerna con una de tus manos y colocarte de pie con los pies separados al ancho de los hombros. Mantén los brazos extendidos hacia abajo, con las palmas de las manos mirando hacia tu cuerpo.",
                                                  "Luego, levanta lentamente la mancuerna hacia los hombros, manteniendo los codos pegados al cuerpo.",
                                                  "Una vez que hayas llevado la mancuerna hasta los hombros, mantén la posición durante uno o dos segundos, sintiendo la contracción en los músculos de los bíceps.",
                                                  "A continuación, baja lentamente las mancuernas hacia abajo, extendiendo los brazos completamente. Recuerda mantener los codos pegados al cuerpo y controlar el movimiento en todo momento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y cambia de mano."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Biceps en banco Scott/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Biceps en banco Scott/bicepApoyo.mp4",
                                        "note": "Es importante que mantengas la postura correcta en todo momento, evitando balancear el cuerpo o utilizar la fuerza de los hombros o la espalda para levantar las mancuernas. Es recomendable empezar con un peso ligero e ir aumentando gradualmente para evitar lesiones."
                              },
                              {
                                        "id": "curl-de-biceps-con-mancuerna-unilateral",
                                        "name": "Curl de Biceps con Mancuerna Unilateral",
                                        "steps": [
                                                  "Selecciona el peso de la mancuerna para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta el banco multiangular para que este a 45º y apoya tus codos sujetando la barra con las palmas apuntando a tu cara.",
                                                  "Pon tus pies a la misma distancia que los hombros y dá un paso hacia atras para una mayor estabilidad.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con el brazo contraido y el codo cerca del cuerpo.",
                                                  "Extiende el codo y lleva la mano hacia el banco, manteniendo el codo cerca del cuerpo.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Sube la mano controladamente hasta la posición inicial.",
                                                  "Repite el ejercicio con el otro brazo.",
                                                  "Al terminar las repeticiones, cambia de brazo"
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl de Biceps con Mancuerna Unilateral/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl de Biceps con Mancuerna Unilateral/curlBicepsApoyoUnilateralMancuerna.mp4"
                              },
                              {
                                        "id": "curl-martillo-con-mancuerna",
                                        "name": "Curl Martillo con Mancuerna",
                                        "steps": [
                                                  "Comienza de pie, con los pies separados al ancho de los hombros y las mancuernas en cada mano, con las palmas de las manos mirando hacia los costados.",
                                                  "Mantén los codos pegados al costado del cuerpo y levanta las mancuernas hacia los hombros.",
                                                  "A medida que subes las mancuernas, mantén las palmas de las manos mirando hacia adentro y las muñecas rectas.",
                                                  "Una vez que las mancuernas llegan a los hombros, exhala y aprieta los bíceps y los antebrazos.",
                                                  "Baja lentamente las mancuernas hacia abajo mientras inhalas.",
                                                  "Repite este movimiento de elevación y descenso para el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Martillo con Mancuerna/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Mancuernas/Curl Martillo con Mancuerna/curlMartilloMancuerna.mp4",
                                        "note": "Es importante recordar mantener la postura correcta, manteniendo el abdomen contraído, la espalda recta y los hombros hacia atrás y abajo. Además, es importante no balancear las mancuernas o utilizar el impulso del cuerpo para levantarlas. En su lugar, debes enfocarte en controlar el movimiento y mantener la tensión en los músculos del bíceps y el antebrazo durante todo el ejercicio."
                              }
                    ]
          },
          {
                    "id": "peso-corporal",
                    "name": "Peso Corporal",
                    "exercises": [
                              {
                                        "id": "biceps-con-barra-y-banda",
                                        "name": "Biceps con Barra y Banda",
                                        "steps": [
                                                  "Coloca una barra en un soporte vertical y engancha una banda elástica a la barra. La banda debe estar asegurada a un punto fijo en el suelo para proporcionar resistencia adicional.",
                                                  "Acuéstate boca arriba en el suelo, con los pies apoyados en el suelo y las rodillas dobladas. Asegúrate de que la banda esté tensa cuando la barra esté en la posición inicial.",
                                                  "Sostén la barra con ambas manos en un agarre supino (palmas hacia arriba), con las manos separadas al ancho de los hombros.",
                                                  "Mantén los codos pegados al cuerpo y los brazos extendidos hacia arriba, con la barra directamente sobre los hombros.",
                                                  "Inicia el movimiento flexionando los codos y llevando la barra hacia los hombros, contrayendo los bíceps. La banda proporcionará resistencia adicional durante el movimiento.",
                                                  "Mantén una breve pausa en la parte superior del movimiento, asegurándote de que los bíceps estén completamente contraídos.",
                                                  "Vuelve lentamente a la posición inicial, extendiendo los brazos y controlando el movimiento de la barra y la banda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Peso Corporal/Biceps con Barra y Banda/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Peso Corporal/Biceps con Barra y Banda/bicepsBarraBanda.mp4",
                                        "note": "Completa el número deseado de repeticiones, manteniendo una buena técnica y control en cada repetición."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "banco-scott-con-disco",
                                        "name": "Banco Scott con Disco",
                                        "steps": [
                                                  "Para empezar, debes tomar una manija con cada mano y colocarte de pie con los pies separados al ancho de los hombros. Mantén los brazos extendidos hacia abajo, con las palmas de las manos mirando hacia tu cuerpo.",
                                                  "Luego, levántalo lentamente hacia los hombros, manteniendo los codos pegados a la camilla.",
                                                  "Una vez que lo hayas llevado hasta los hombros, mantén la posición durante uno o dos segundos, sintiendo la contracción en los músculos de los bíceps.",
                                                  "A continuación, baja lentamente, extendiendo los brazos completamente. Recuerda mantener los codos pegados y controlar el movimiento en todo momento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Banco Scott con Disco/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Banco Scott con Disco/curlBiceps.mp4",
                                        "note": "Es importante que mantengas la postura correcta en todo momento, evitando balancear el cuerpo o utilizar la fuerza de los hombros o la espalda para levantar las mancuernas. Es recomendable empezar con un peso ligero e ir aumentando gradualmente para evitar lesiones."
                              },
                              {
                                        "id": "curl-biceps-concentrados",
                                        "name": "Curl Biceps Concentrados",
                                        "steps": [
                                                  "Siéntate en la máquina y ajusta el asiento para que la almohadilla quede justo detrás de tu axila.",
                                                  "Coloca el brazo que vas a trabajar sobre la almohadilla y asegúrate de que tu codo esté apoyado en la parte inferior de la almohadilla.",
                                                  "Agarra la empuñadura de la máquina.",
                                                  "Inhala y contrae lentamente el bíceps para levantar la empuñadura hacia tu hombro. Mantén el codo en su lugar durante todo el movimiento y exhala a medida que levantas la empuñadura.",
                                                  "Haz una pausa en la parte superior del movimiento y aprieta los músculos del bíceps.",
                                                  "Lentamente baja la empuñadura de vuelta a la posición inicial mientras inhalas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps Concentrados/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps Concentrados/bicepsMancuernasAjustable.mp4",
                                        "note": "Es importante que mantengas una buena postura y evites balancear tu cuerpo durante el movimiento. Realiza el ejercicio con control y evita usar impulso para levantar la carga."
                              },
                              {
                                        "id": "curl-biceps-convergente",
                                        "name": "Curl Biceps Convergente",
                                        "steps": [
                                                  "Siéntate en la máquina y ajusta el asiento para que la almohadilla quede justo detrás de tu axila.",
                                                  "Coloca los brazo sobre la almohadilla y asegúrate de que tu codo esté apoyado en la parte inferior de la almohadilla.",
                                                  "Agarra la empuñadura de la máquina.",
                                                  "Inhala y contrae lentamente el bíceps para levantar la empuñadura hacia tu hombro. Mantén el codo en su lugar durante todo el movimiento y exhala a medida que levantas la empuñadura.",
                                                  "Haz una pausa en la parte superior del movimiento y aprieta los músculos del bíceps.",
                                                  "Lentamente baja la empuñadura de vuelta a la posición inicial mientras inhalas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps Convergente/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps Convergente/curlBicepsConvergente.mp4",
                                        "note": "Es importante que mantengas una buena postura y evites balancear tu cuerpo durante el movimiento. Realiza el ejercicio con control y evita usar impulso para levantar la carga."
                              },
                              {
                                        "id": "curl-biceps-en-maquina-scott",
                                        "name": "Curl Biceps en Máquina Scott",
                                        "steps": [
                                                  "Para empezar, debes tomar una manija con cada mano y colocarte de pie con los pies separados al ancho de los hombros. Mantén los brazos extendidos hacia abajo, con las palmas de las manos mirando hacia tu cuerpo.",
                                                  "Luego, levántalo lentamente hacia los hombros, manteniendo los codos pegados a la camilla.",
                                                  "Una vez que lo hayas llevado hasta los hombros, mantén la posición durante uno o dos segundos, sintiendo la contracción en los músculos de los bíceps.",
                                                  "A continuación, baja lentamente, extendiendo los brazos completamente. Recuerda mantener los codos pegados y controlar el movimiento en todo momento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps en Máquina Scott/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl Biceps en Máquina Scott/maquinaScott.mp4",
                                        "note": "Es importante que mantengas la postura correcta en todo momento, evitando balancear el cuerpo o utilizar la fuerza de los hombros o la espalda para levantar las mancuernas. Es recomendable empezar con un peso ligero e ir aumentando gradualmente para evitar lesiones."
                              },
                              {
                                        "id": "curl-de-biceps-con-polea-unilateral",
                                        "name": "Curl de Biceps con Polea Unilateral",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la máquina de polea para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta la polea a la altura de tus manos y coloca las manijas de la polea en cada mano.",
                                                  "Coloca tus pies a la misma distancia que los hombros, mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con los brazos extendidos hacia abajo, las palmas de las manos mirando hacia adelante y los codos cerca del cuerpo.",
                                                  "Flexiona los codos y lleva la manos hacia la cabeza, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Baja la mano controladamente hasta la posición inicial.",
                                                  "Repite el ejercicio con el otro brazo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps con Polea Unilateral/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps con Polea Unilateral/bicepsPolea.mp4"
                              },
                              {
                                        "id": "curl-de-biceps-en-polea",
                                        "name": "Curl de Biceps en Polea",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la máquina de polea para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta la polea a la altura máxima y coloca la soga.",
                                                  "Pon tus pies a la misma distancia que los hombros, mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con los brazos extendidos hacia abajo y los codos cerca del cuerpo.",
                                                  "Flexiona los codos y lleva la manos hacia la cabeza, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Baja la mano controladamente hasta la posición inicial.",
                                                  "Repite el ejercicio con el otro brazo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Polea/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Polea/curlBicepSoga.mp4"
                              },
                              {
                                        "id": "curl-de-biceps-en-polea-invertido",
                                        "name": "Curl de Biceps en Polea Invertido",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la máquina de polea para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta la polea a la altura mínima y coloca la barra.",
                                                  "Pon tus pies a la misma distancia que los hombros, mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Sujeta la barra con agarre Prono (palmas hacia abajo)",
                                                  "Comienza con los brazos extendidos hacia abajo y los codos cerca del cuerpo.",
                                                  "Flexiona los codos y lleva la manos hacia la cabeza, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Baja la mano controladamente hasta la posición inicial.",
                                                  "Repite el ejercicio con el otro brazo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Polea Invertido/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Polea Invertido/curlBicepPoleaInvertido.mp4"
                              },
                              {
                                        "id": "curl-de-biceps-en-scott-con-polea",
                                        "name": "Curl de Biceps en Scott con Polea",
                                        "steps": [
                                                  "Selecciona el peso adecuado en la máquina de polea para que puedas realizar el ejercicio con buena técnica.",
                                                  "Ajusta la polea a la altura máxima y coloca la soga.",
                                                  "Pon tus pies a la misma distancia que los hombros, mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Comienza con los brazos extendidos hacia abajo y los codos cerca del cuerpo.",
                                                  "Flexiona los codos y lleva la manos hacia la cabeza, manteniendo el codo cerca del cuerpo y los brazos en línea recta con las manos.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos del bíceps y mantén esa contracción durante unos segundos.",
                                                  "Baja la mano controladamente hasta la posición inicial.",
                                                  "Repite el ejercicio con el otro brazo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Scott con Polea/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Curl de Biceps en Scott con Polea/curlBicepScottPolea.mp4"
                              },
                              {
                                        "id": "jalon-para-biceps",
                                        "name": "Jalón para Biceps",
                                        "steps": [
                                                  "Ajusta las poleas para que estén en la posición alta y conecta los accesorios para bíceps a cada polea.",
                                                  "De pie en el medio de las poleas, agarra cada accesorio con las palmas de las manos mirando hacia arriba.",
                                                  "Mantén los codos cerca del cuerpo y los brazos extendidos.",
                                                  "Contrae los bíceps y dobla los codos para llevar los accesorios hacia la cabeza.",
                                                  "Mantén la contracción en la parte superior durante un segundo y luego baja lentamente los accesorios a la posición inicial.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Jalón para Biceps/biceps.png",
                                        "videoUrl": "/Entrenamientos/Biceps/Poleas y maquinas/Jalón para Biceps/jalonBiceps.mp4",
                                        "note": "Es importante asegurarse de mantener una postura adecuada durante el ejercicio, manteniendo los hombros hacia abajo y hacia atrás, el pecho hacia afuera y el núcleo apretado. Además, evita usar impulso para realizar el movimiento y enfoca la contracción en los bíceps en todo momento."
                              }
                    ]
          }
]
    },
                quadriceps: {
        id: 'quadriceps',
        name: 'Cuádriceps',
        subtitle: 'Extensores de rodilla',
        cardImageUrl: '/Entrenamientos/Cuadriceps/cuadricepsmini.png',
        detailImageUrl: '/Entrenamientos/Cuadriceps/cuadriceps.png',
        frontHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "estocada-con-barra",
                                        "name": "Estocada con Barra",
                                        "steps": [
                                                  "Coloca una barra en un soporte y ajústala a una altura adecuada para tu cuerpo.",
                                                  "Párate debajo de la barra y levántala con las manos en un agarre cómodo, manteniendo la barra apoyada sobre la parte superior de la espalda.",
                                                  "Da un paso adelante con un pie y otro hacia atrás con el otro pie, manteniendo los pies separados a la distancia de la cadera.",
                                                  "Mantén el torso erguido y desciende hacia el suelo doblando las piernas, hasta que la rodilla de la pierna trasera casi toque el suelo.",
                                                  "Luego, lleva el cuerpo de nuevo a la posición inicial, usando la fuerza de la pierna delantera.",
                                                  "Realiza la cantidad deseada de repeticiones con una pierna antes de cambiar y repetir con la otra pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Barra/Estocada con Barra/estocadaBarra.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Barra/Estocada con Barra/estocadaBarra.mp4",
                                        "note": "Es importante asegurarse de mantener una buena postura y controlar la barra en todo momento durante el ejercicio. Además, se recomienda comenzar con poco peso y aumentarlo gradualmente a medida que te sientas más cómodo/cómoda con la técnica."
                              },
                              {
                                        "id": "estocada-trasera-con-barra",
                                        "name": "Estocada Trasera con Barra",
                                        "steps": [
                                                  "Coloca una barra en un soporte y ajústala a una altura adecuada para tu cuerpo.",
                                                  "Párate debajo de la barra y levántala con las manos en un agarre cómodo, manteniendo la barra apoyada sobre la parte superior de la espalda.",
                                                  "Con un pie da un paso hacia atrás y el otro en el lugar, manteniendo los pies separados a la distancia de la cadera.",
                                                  "Mantén el torso erguido y desciende hacia el suelo doblando las piernas, hasta que la rodilla de la pierna delantera casi toque el suelo.",
                                                  "Luego, lleva el cuerpo de nuevo a la posición inicial, usando la fuerza de la pierna delantera.",
                                                  "Realiza la cantidad deseada de repeticiones con una pierna antes de cambiar y repetir con la otra pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Barra/Estocada Trasera con Barra/estocadaBarra.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Barra/Estocada Trasera con Barra/estocadaTraseraBarra.mp4",
                                        "note": "Es importante asegurarse de mantener una buena postura y controlar la barra en todo momento durante el ejercicio. Además, se recomienda comenzar con poco peso y aumentarlo gradualmente a medida que te sientas más cómodo/cómoda con la técnica."
                              },
                              {
                                        "id": "sentadilla-con-barra",
                                        "name": "Sentadilla con Barra",
                                        "steps": [
                                                  "Comienza colocando la barra en el soporte de la jaula de sentadillas a una altura que te permita levantarla sin tener que ponerte de puntillas. La barra debe estar a una altura que te permita colocarla sobre los hombros y la espalda, justo debajo del cuello.",
                                                  "Párate debajo de la barra, colocando los pies separados a la altura de los hombros y debajo de la barra.",
                                                  "Agarra la barra con las manos en pronación, con las palmas hacia abajo y los dedos alrededor de la barra. Coloca la barra en la parte posterior de los hombros, sosteniéndola con los dedos y los músculos de la espalda.",
                                                  "Levanta la barra y sostenla sobre los hombros. Da un pequeño paso hacia atrás y coloca los pies en una posición ligeramente más ancha que el ancho de los hombros.",
                                                  "Asegúrate de mantener la espalda recta y el pecho hacia arriba. Mantén la cabeza mirando hacia adelante y la barra sobre los hombros.",
                                                  "Flexiona las rodillas y baja el cuerpo hacia el suelo, manteniendo la espalda recta y el pecho hacia arriba. Baja hasta que los muslos estén paralelos al suelo.",
                                                  "Mantén la posición durante un segundo y luego empuja con las piernas para volver a la posición inicial.",
                                                  "Repite el ejercicio para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Barra/Sentadilla con Barra/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Barra/Sentadilla con Barra/sentadillaBarra.mp4",
                                        "note": "Es importante recordar que la técnica correcta es crucial al realizar sentadillas con barra para evitar lesiones. Si eres principiante, es recomendable empezar con una carga ligera y trabajar en la técnica antes de aumentar el peso. También es importante calentar adecuadamente antes de hacer el ejercicio."
                              },
                              {
                                        "id": "sentadilla-frontal-con-barra",
                                        "name": "Sentadilla Frontal con Barra",
                                        "steps": [
                                                  "Colócate frente a la barra, parado con los pies separados a la misma anchura de los hombros, y agáchate para sujetar la barra con las manos. Las palmas de las manos deben estar hacia abajo y las manos deben estar un poco más separadas que la anchura de los hombros.",
                                                  "Con la barra en las manos, estira los brazos y levántala del suelo. Mantén la espalda recta y los hombros hacia atrás y hacia abajo.",
                                                  "Sostén la barra cerca de tu mentón y pecho con los codos bloqueados.",
                                                  "Inhala profundamente y baja el cuerpo hasta que tus muslos estén paralelos al suelo o un poco más bajos, asegurándote de mantener la espalda recta y el pecho hacia arriba. Asegúrate de que las rodillas estén apuntando en la misma dirección que los dedos de los pies.",
                                                  "Exhala y presiona con los talones para volver a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Barra/Sentadilla Frontal con Barra/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Barra/Sentadilla Frontal con Barra/sentadillaSumoBarra.mp4",
                                        "note": "Recuerda que es importante asegurarse de que la técnica sea correcta y que la espalda esté siempre recta y el pecho hacia arriba para evitar lesiones."
                              },
                              {
                                        "id": "zancada-con-barra",
                                        "name": "Zancada con Barra",
                                        "steps": [
                                                  "Coloca una barra en un soporte y ajústala a una altura adecuada para tu cuerpo.",
                                                  "Párate debajo de la barra y levántala con las manos en un agarre cómodo, manteniendo la barra apoyada sobre la parte superior de la espalda.",
                                                  "Da un paso adelante con un pie y otro hacia atrás con el otro pie, manteniendo los pies separados a la distancia de la cadera.",
                                                  "Mantén el torso erguido y desciende hacia el suelo doblando las piernas, hasta que la rodilla de la pierna trasera casi toque el suelo.",
                                                  "Luego, levanta el cuerpo, usando la fuerza de la pierna delantera, sin moverte del lugar.",
                                                  "Realiza la cantidad deseada de repeticiones con una pierna antes de cambiar y repetir con la otra."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Barra/Zancada con Barra/estocadaBarra.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Barra/Zancada con Barra/splitSuat.mp4",
                                        "note": "Es importante asegurarse de mantener una buena postura y controlar la barra en todo momento durante el ejercicio. Además, se recomienda comenzar con poco peso y aumentarlo gradualmente a medida que te sientas más cómodo/cómoda con la técnica."
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "estocada-paso-atras-con-mancuerna",
                                        "name": "Estocada Paso Atrás con Mancuerna",
                                        "steps": [
                                                  "De pie, sostén una mancuerna en cada mano a los lados del cuerpo, con las palmas mirándote.",
                                                  "Da un paso hacia atrás con uno de los pies, bajando la rodilla hacia el suelo en un ángulo de 90 grados, formando así una estocada.",
                                                  "La pierna delantera debe estar también doblada en un ángulo de 90 grados, asegurándote de que la rodilla no sobrepase la punta del pie.",
                                                  "Mantén la espalda recta y el torso erguido durante todo el movimiento.",
                                                  "Baja el cuerpo de manera controlada, llevando la rodilla trasera cerca del suelo, sin tocarlo.",
                                                  "Contrae los músculos de los glúteos y los cuádriceps para regresar a la posición inicial.",
                                                  "Alterna con el otro pie, dando un paso hacia atrás y repitiendo el movimiento.",
                                                  "Realiza el mismo número de repeticiones en ambos lados para trabajar de manera equitativa.",
                                                  "Puedes ajustar el peso de las mancuernas según tu nivel de fuerza y comodidad."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Estocada Paso Atrás con Mancuerna/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Estocada Paso Atrás con Mancuerna/estocadaPasoAtrasMancuerna.mp4"
                              },
                              {
                                        "id": "estocadas-con-mancuerna",
                                        "name": "Estocadas con Mancuerna",
                                        "steps": [
                                                  "Comienza de pie con los pies separados al ancho de los hombros y las mancuernas en las manos, a los costados del cuerpo.",
                                                  "Da un paso hacia adelante con una pierna, manteniendo la otra pierna en su lugar y bajando el cuerpo hacia el suelo en un ángulo de 90 grados.",
                                                  "Asegúrate de que la rodilla de la pierna delantera esté directamente sobre el tobillo y que la rodilla de la pierna trasera se acerque lo más posible al suelo.",
                                                  "Mantén el torso erguido y apretado el abdomen.",
                                                  "Vuelve a la posición inicial empujando con la pierna delantera y llevando la pierna trasera hacia el frente.",
                                                  "Alterna con la otra pierna y repite el movimiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Estocadas con Mancuerna/estocada.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Estocadas con Mancuerna/estocadasConMancuerna.mp4",
                                        "note": "Es importante tener en cuenta que al hacer este ejercicio, debes asegurarte de mantener una buena postura y controlar el movimiento para evitar lesiones en las rodillas y la espalda baja. También puedes ajustar el peso de las mancuernas según tu nivel de condición física y habilidad."
                              },
                              {
                                        "id": "sentadilla-cossack-con-peso",
                                        "name": "Sentadilla Cossack con Peso",
                                        "steps": [
                                                  "Comienza de pie con los pies separados a la altura de las caderas, sosteniendo una pesa con ambas manos frente a tu pecho.",
                                                  "Da un paso amplio hacia un lado, manteniendo la pierna contraria recta y apoyada en el suelo. Apunta los dedos de los pies hacia el frente.",
                                                  "Flexiona la pierna que dio el paso y baja el cuerpo hacia el suelo, manteniendo la otra pierna recta y apoyada en el suelo.",
                                                  "Mantén la espalda recta y el peso en los talones, asegurándote de que la rodilla flexionada no se mueva hacia adelante y permanezca sobre el tobillo.",
                                                  "Mantén la posición durante unos segundos, luego regresa a la posición inicial.",
                                                  "Repite el movimiento del otro lado y continúa alternando entre los lados.",
                                                  "Es importante asegurarse de mantener la espalda recta y el peso en los talones para evitar cualquier tensión en las rodillas. Además, es importante comenzar con un peso ligero y aumentar gradualmente para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Cossack con Peso/piernasCajon.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Cossack con Peso/sentadillaCossackConPeso.mp4"
                              },
                              {
                                        "id": "sentadilla-goblet",
                                        "name": "Sentadilla Goblet",
                                        "steps": [
                                                  "Colócate de pie con los pies abiertos aproximadamente al ancho de los hombros, pero con los dedos de los pies apuntando hacia afuera en un ángulo de alrededor de 45 grados.",
                                                  "Sostén una mancuerna o pesa con las manos, manteniendo en el mentón o pecho y los codos bloqueados.",
                                                  "Inhala profundamente y baja el cuerpo hasta que tus muslos estén paralelos al suelo o un poco más bajos, asegurándote de mantener la espalda recta y el pecho hacia arriba.",
                                                  "Asegúrate de que las rodillas estén apuntando en la misma dirección que los dedos de los pies.",
                                                  "Exhala y presiona con los talones para volver a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Goblet/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Goblet/sentadillaSumo.mp4",
                                        "note": "Recuerda que es importante asegurarse de que la técnica sea correcta y que la espalda esté siempre recta y el pecho hacia arriba para evitar lesiones."
                              },
                              {
                                        "id": "sentadilla-sumo",
                                        "name": "Sentadilla Sumo",
                                        "steps": [
                                                  "Colócate de pie con los pies abiertos aproximadamente al ancho de los hombros, pero con los dedos de los pies apuntando hacia afuera en un ángulo de alrededor de 45 grados.",
                                                  "Sostén una mancuerna o pesa con las manos, manteniendo con los brazos estirados.",
                                                  "Inhala profundamente y baja el cuerpo hasta que tus muslos estén paralelos al suelo o un poco más bajos, asegurándote de mantener la espalda recta y el pecho hacia arriba.",
                                                  "Asegúrate de que las rodillas estén apuntando en la misma dirección que los dedos de los pies.",
                                                  "Exhala y presiona con los talones para volver a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Sumo/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Mancuernas/Sentadilla Sumo/sentadillaSumoMancuerna.mp4",
                                        "note": "Recuerda que es importante asegurarse de que la técnica sea correcta y que la espalda esté siempre recta y el pecho hacia arriba para evitar lesiones."
                              }
                    ]
          },
          {
                    "id": "peso-corporal",
                    "name": "Peso Corporal",
                    "exercises": [
                              {
                                        "id": "sentadilla-en-pared",
                                        "name": "Sentadilla en Pared",
                                        "steps": [
                                                  "Colócate en postura firme flexionando las rodillas.",
                                                  "Mantén la tensión focalizada en los cuádriceps.",
                                                  "Extiende las piernas con control muscular sin bloquear las articulaciones."
                                        ]
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "descenso-a-un-pie-en-landmine",
                                        "name": "Descenso a un Pie en Landmine",
                                        "steps": [
                                                  "Colócate frente a la máquina Landmine, con los pies separados a la altura de los hombros. Sujeta la barra con ambas manos, manteniéndola a la altura del pecho.",
                                                  "Inclina ligeramente el torso hacia adelante y asegúrate de que tu core esté contraído para mantener la estabilidad durante el movimiento.",
                                                  "Levanta una pierna del suelo y manténla en el aire. Mientras, con la pierna que permanece en el suelo, baja el cuerpo lentamente hacia abajo, flexionando la rodilla y manteniendo la barra cerca del pecho.",
                                                  "Desciende hasta que la rodilla de la pierna de apoyo esté casi a 90 grados, asegurándote de mantener la espalda recta y el core activado.",
                                                  "Luego, empuja con la pierna de apoyo para volver a la posición inicial, manteniendo el control y evitando movimientos bruscos."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Descenso a un Pie en Landmine/piernasCajon.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Descenso a un Pie en Landmine/descensoUnPieLandmine.mp4",
                                        "note": "Completa el número deseado de repeticiones y repite el ejercicio con la otra pierna, manteniendo una buena técnica en cada repetición."
                              },
                              {
                                        "id": "estocada-en-landmine",
                                        "name": "Estocada en Landmine",
                                        "steps": [
                                                  "Parate de frente a la barra.",
                                                  "Colócate de pie con los pies separados a la misma distancia de los hombros.",
                                                  "Mantén la espalda recta y las manos en las caderas.",
                                                  "Dá un paso atrás y baja lentamente el cuerpo hacia el suelo doblando la rodilla de la pierna delantera.",
                                                  "Continúa bajando hasta que la rodilla de la pierna delantera forme un ángulo de 90 grados. Asegúrate de que la rodilla no sobrepase la punta del pie.",
                                                  "Mantén la posición durante un segundo y luego regresa a la posición inicial.",
                                                  "Realiza el mismo número de repeticiones con la otra pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Landmine/piernasCajon.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Landmine/estocadaLandmine.mp4",
                                        "note": "Es importante que mantengas una buena postura durante todo el ejercicio y que no te apoyes en el banco o plataforma para levantarte. También es recomendable que comiences con poco peso hasta que te sientas cómodo/cómoda con la técnica."
                              },
                              {
                                        "id": "estocada-en-shrug",
                                        "name": "Estocada en Shrug",
                                        "steps": [
                                                  "Párate frente a la máquina y sujeta las manijas.",
                                                  "Da un paso adelante con un pie y otro hacia atrás con el otro pie, manteniendo los pies separados a la distancia de la cadera.",
                                                  "Mantén el torso erguido y desciende hacia el suelo doblando las piernas, hasta que la rodilla de la pierna trasera casi toque el suelo.",
                                                  "Luego, lleva el cuerpo de nuevo a la posición inicial, usando la fuerza de la pierna delantera.",
                                                  "Realiza la cantidad deseada de repeticiones con una pierna antes de cambiar y repetir con la otra pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Shrug/estocadaBarra.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Shrug/estocadaShrug.mp4",
                                        "note": "Es importante asegurarse de mantener una buena postura y controlar la barra en todo momento durante el ejercicio. Además, se recomienda comenzar con poco peso y aumentarlo gradualmente a medida que te sientas más cómodo/cómoda con la técnica."
                              },
                              {
                                        "id": "estocada-en-shrug-con-apoyo",
                                        "name": "Estocada en Shrug con Apoyo",
                                        "steps": [
                                                  "Parate de espalda a la máquina.",
                                                  "Colócate de pie con los pies separados a la misma distancia de los hombros.",
                                                  "Da un paso hacia atrás con un pie y coloca la parte superior de ese pie en el banco o plataforma. Asegúrate de que el pie esté bien apoyado y de que la rodilla esté alineada con el tobillo.",
                                                  "Mantén la espalda recta y las manos en las caderas.",
                                                  "Baja lentamente el cuerpo hacia el suelo doblando la rodilla de la pierna delantera, manteniendo la pierna de atrás extendida y el talón apoyado en el banco o plataforma.",
                                                  "Continúa bajando hasta que la rodilla de la pierna delantera forme un ángulo de 90 grados. Asegúrate de que la rodilla no sobrepase la punta del pie.",
                                                  "Mantén la posición durante un segundo y luego regresa a la posición inicial.",
                                                  "Realiza el mismo número de repeticiones con la otra pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Shrug con Apoyo/piernasCajon.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Estocada en Shrug con Apoyo/estocadaApoyoShrug.mp4",
                                        "note": "Es importante que mantengas una buena postura durante todo el ejercicio y que no te apoyes en el banco o plataforma para levantarte. También es recomendable que comiences con poco peso hasta que te sientas cómodo/cómoda con la técnica."
                              },
                              {
                                        "id": "femoral-sentado",
                                        "name": "Femoral Sentado",
                                        "steps": [
                                                  "Siéntate en la máquina de femoral con la espalda apoyada firmemente en el respaldo.",
                                                  "Ajusta la altura del asiento para que las rodillas estén alineadas con el eje de rotación de la máquina.",
                                                  "Coloca los tobillos debajo de las almohadillas inferiores y asegúrate de que estén bien ajustadas.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza. Comienza con un peso ligero si es necesario.",
                                                  "Agarra las empuñaduras laterales para mantener la estabilidad y el control durante el ejercicio.",
                                                  "Inhala mientras preparas el cuerpo para el movimiento.",
                                                  "Exhala y flexiona las rodillas hacia abajo, llevando las almohadillas inferiores hacia los glúteos mientras contraes los músculos isquiotibiales.",
                                                  "Mantén la contracción durante un segundo en la parte inferior del movimiento para maximizar la activación del femoral.",
                                                  "Inhala mientras extiendes lentamente las rodillas, regresando a la posición inicial de manera controlada.",
                                                  "Evita movimientos bruscos y mantén la tensión constante en los músculos durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Femoral Sentado/sillonCuadriceps.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Femoral Sentado/femoralesSentado.mp4"
                              },
                              {
                                        "id": "hack",
                                        "name": "Hack",
                                        "steps": [
                                                  "Ajusta el peso de la máquina para que puedas realizar el ejercicio con buena técnica.",
                                                  "Colócate en la máquina de hack, con los hombros apoyados en el cojín y los pies en la plataforma.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Flexiona las piernas y baja lentamente el cuerpo hasta que los muslos estén paralelos al suelo.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos de los cuádriceps y los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente las piernas y eleva el cuerpo hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack/hack.mp4"
                              },
                              {
                                        "id": "hack-con-apoyo-en-cintura",
                                        "name": "Hack con Apoyo en Cintura",
                                        "steps": [
                                                  "Ajusta el peso de la máquina para que puedas realizar el ejercicio con buena técnica.",
                                                  "Colócate en la máquina de hack, con la cintura apoyada en el cojín y los pies en la plataforma.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Flexiona las piernas y baja lentamente el cuerpo hasta que los muslos estén paralelos al suelo.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos de los cuádriceps y los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente las piernas y eleva el cuerpo hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack con Apoyo en Cintura/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack con Apoyo en Cintura/hackApoyoCintura.mp4"
                              },
                              {
                                        "id": "hack-horizontal",
                                        "name": "Hack Horizontal",
                                        "steps": [
                                                  "Ajusta el peso de la máquina para que puedas realizar el ejercicio con buena técnica.",
                                                  "Colócate en la máquina de hack horizontal, con la espalda apoyada en el cojín y los pies en la plataforma.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Flexiona las piernas y baja lentamente el cuerpo hasta que los muslos estén paralelos al suelo.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos de los cuádriceps y los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente las piernas y eleva el cuerpo hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Horizontal/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Horizontal/hackHorizontal.mp4"
                              },
                              {
                                        "id": "hack-horizontal-acostado",
                                        "name": "Hack Horizontal Acostado",
                                        "steps": [
                                                  "Ajusta el peso de la máquina para que puedas realizar el ejercicio con buena técnica.",
                                                  "Colócate en la máquina de hack horizontal acostado, con la espalda apoyada en el cojín y los pies en la plataforma.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Flexiona las piernas y baja lentamente el cuerpo hasta que los muslos estén paralelos al suelo.",
                                                  "Al llegar a la parte inferior del movimiento, contrae los músculos de los cuádriceps y los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente las piernas y eleva el cuerpo hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Horizontal Acostado/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Horizontal Acostado/hackHorizontalAcostado.mp4"
                              },
                              {
                                        "id": "hack-invertida",
                                        "name": "Hack Invertida",
                                        "steps": [
                                                  "Parado frente a la máquina de Hack Invertida, coloca los hombros debajo de los cojines acolchados y asegúrate de que los pies estén apoyados firmemente en la plataforma.",
                                                  "Sujeta las manijas de la máquina con las manos para mantener el equilibrio.",
                                                  "Baja lentamente el cuerpo doblando las rodillas, manteniendo la espalda recta y la cabeza mirando hacia adelante.",
                                                  "Baja hasta que los muslos estén paralelos al suelo o incluso un poco más abajo si puedes.",
                                                  "Levanta lentamente el cuerpo a la posición inicial.",
                                                  "Repite el ejercicio durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Invertida/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Hack Invertida/hackInvertida.mp4",
                                        "note": "Recuerda que es importante tener en cuenta la técnica adecuada para evitar lesiones y maximizar los resultados. También, es recomendable comenzar con un peso ligero y aumentar gradualmente a medida que te sientas más cómodo/cómoda con el ejercicio."
                              },
                              {
                                        "id": "maquina-de-sumo",
                                        "name": "Máquina de Sumo",
                                        "steps": [
                                                  "Ajusta la máquina sumo según tu altura. Asegúrate de que la correa esté bien asegurada alrededor de tus caderas.",
                                                  "Coloca tus pies más allá del ancho de tus hombros y ligeramente hacia afuera, siguiendo la posición característica del sumo.",
                                                  "Ajusta el peso de la máquina sumo según tu nivel de fuerza. Comienza con un peso moderado y ajusta según sea necesario.",
                                                  "Mantén la espalda recta y el pecho hacia arriba. Este es un componente crucial para mantener una buena forma durante todo el movimiento.",
                                                  "Desciende lentamente doblando las rodillas y las caderas, manteniendo las piernas en línea con los pies. El movimiento debe simular el gesto de \"sentarse\" hacia atrás.",
                                                  "Baja hasta que tus muslos estén al menos paralelos al suelo, asegurándote de que tus rodillas no se desplacen hacia adelante más allá de los dedos de los pies.",
                                                  "Impulsa hacia arriba desde los talones para volver a la posición inicial, extendiendo completamente las caderas y las rodillas.",
                                                  "Controla el movimiento durante todo el rango de movimiento para evitar tensiones innecesarias o lesiones.",
                                                  "Ajusta la correa si es necesario y realiza los ajustes de peso pertinentes para mantener una forma adecuada y segura."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina de Sumo/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina de Sumo/sumoMaquinaCentral.mp4",
                                        "note": "Completa el número deseado de series y repeticiones de acuerdo con tu programa de entrenamiento. Asegúrate de descansar lo suficiente entre cada serie."
                              },
                              {
                                        "id": "maquina-de-sumo-agarre-cintura",
                                        "name": "Máquina de Sumo Agarre Cintura",
                                        "steps": [
                                                  "Ajusta la máquina sumo según tu altura. Asegúrate de que la correa esté bien asegurada alrededor de tus caderas.",
                                                  "Coloca tus pies más allá del ancho de tus hombros y ligeramente hacia afuera, siguiendo la posición característica del sumo.",
                                                  "Ajusta el peso de la máquina sumo según tu nivel de fuerza. Comienza con un peso moderado y ajusta según sea necesario.",
                                                  "Mantén la espalda recta y el pecho hacia arriba. Este es un componente crucial para mantener una buena forma durante todo el movimiento.",
                                                  "Desciende lentamente doblando las rodillas y las caderas, manteniendo las piernas en línea con los pies. El movimiento debe simular el gesto de \"sentarse\" hacia atrás.",
                                                  "Baja hasta que tus muslos estén al menos paralelos al suelo, asegurándote de que tus rodillas no se desplacen hacia adelante más allá de los dedos de los pies.",
                                                  "Impulsa hacia arriba desde los talones para volver a la posición inicial, extendiendo completamente las caderas y las rodillas.",
                                                  "Controla el movimiento durante todo el rango de movimiento para evitar tensiones innecesarias o lesiones.",
                                                  "Ajusta la correa si es necesario y realiza los ajustes de peso pertinentes para mantener una forma adecuada y segura."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina de Sumo Agarre Cintura/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina de Sumo Agarre Cintura/sumoMaquina.mp4",
                                        "note": "Completa el número deseado de series y repeticiones de acuerdo con tu programa de entrenamiento. Asegúrate de descansar lo suficiente entre cada serie."
                              },
                              {
                                        "id": "maquina-sentadilla-perfecta",
                                        "name": "Máquina Sentadilla Perfecta",
                                        "steps": [
                                                  "Ajusta la altura del soporte de la máquina para que las almohadillas queden cómodamente sobre tus hombros y la parte superior de tu espalda.",
                                                  "Colócate debajo de las almohadillas, asegurando que tus pies estén separados al ancho de los hombros y bien posicionados en la plataforma.",
                                                  "Sostén los agarres laterales de la máquina con ambas manos para asegurar estabilidad durante el ejercicio.",
                                                  "Mantén el pecho hacia arriba, la espalda recta y la mirada al frente durante todo el movimiento.",
                                                  "Flexiona las rodillas lentamente mientras bajas el cuerpo, asegurándote de que las rodillas sigan la misma dirección que las puntas de tus pies. Baja hasta que tus muslos estén paralelos al suelo.",
                                                  "Haz una breve pausa en la posición más baja para mantener la tensión en los cuádriceps.",
                                                  "Empuja hacia arriba usando los talones para volver a la posición inicial, asegurándote de no bloquear completamente las rodillas al extenderlas.",
                                                  "Repite el movimiento para las repeticiones deseadas, manteniendo una técnica controlada y constante en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina Sentadilla Perfecta/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Máquina Sentadilla Perfecta/sentadillaPerfecta.mp4",
                                        "note": "Recuerda mantener una respiración adecuada durante el ejercicio. Inhala mientras bajas el peso y exhala al levantarlo. La técnica correcta es crucial para evitar lesiones, por lo que es recomendable comenzar con un peso moderado si eres principiante y concentrarte en la postura antes de aumentar la carga."
                              },
                              {
                                        "id": "prensa-180",
                                        "name": "Prensa 180°",
                                        "steps": [
                                                  "Ajusta el asiento de la prensa a tu altura. Asegúrate de que tus pies estén bien apoyados en la plataforma y que las rodillas estén dobladas en un ángulo de 90 grados.",
                                                  "Asegúrate de que el respaldo de la prensa esté en la posición correcta y que esté bien sujeto.",
                                                  "Agarra las manijas de la prensa a 180 grados y coloca los pies en la plataforma. Mantén la espalda recta y los abdominales contraídos.",
                                                  "Presiona la plataforma hacia arriba con los pies hasta que estén completamente extendidos. Asegúrate de no bloquear las rodillas al hacerlo.",
                                                  "Baja la plataforma de regreso a la posición inicial, manteniendo el control y evitando que la plataforma caiga de golpe.",
                                                  "Repite el movimiento para completar las repeticiones deseadas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 180°/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 180°/prensa180.mp4",
                                        "note": "Es importante tener en cuenta que debes usar un peso adecuado para tu nivel de condición física y siempre hacer un calentamiento adecuado antes de usar la prensa a 180 grados. Además, es recomendable buscar la orientación de un entrenador personal para asegurarte de que estás usando la técnica adecuada."
                              },
                              {
                                        "id": "prensa-45-fija",
                                        "name": "Prensa 45° Fija",
                                        "steps": [
                                                  "Colócate de pie frente a la máquina y ajusta el asiento para que tus pies descansen cómodamente sobre la plataforma. Asegúrate de que tus rodillas estén dobladas a un ángulo de 90 grados.",
                                                  "Coloca los pies en la plataforma con los dedos de los pies apuntando ligeramente hacia afuera. Asegúrate de que tus pies estén separados a la misma distancia que tus hombros.",
                                                  "Sujeta las manijas de la máquina con las manos para asegurarte de que no te desplazas durante el ejercicio.",
                                                  "Empuja la plataforma hacia arriba con los pies y extiende las piernas completamente hasta que tus rodillas estén bloqueadas. Exhala mientras empujas la plataforma hacia arriba.",
                                                  "Lentamente baja la plataforma hacia abajo, doblando las rodillas a un ángulo de 90 grados. Inhala mientras bajas la plataforma.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 45° Fija/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 45° Fija/prensaFija.mp4",
                                        "note": "Recuerda que es importante no bloquear las rodillas en la parte superior del movimiento, ya que esto puede aumentar el riesgo de lesiones. También es importante mantener una buena postura y asegurarse de no usar la fuerza de la espalda baja para ayudarte a empujar la plataforma hacia arriba."
                              },
                              {
                                        "id": "prensa-45-fija-unilateral",
                                        "name": "Prensa 45° Fija Unilateral",
                                        "steps": [
                                                  "Colócate de pie frente a la máquina y ajusta el asiento para que tus pies descansen cómodamente sobre la plataforma. Asegúrate de que tus rodillas estén dobladas a un ángulo de 90 grados.",
                                                  "Coloca los pies en la plataforma con los dedos de los pies apuntando ligeramente hacia afuera. Asegúrate de que tus pies estén separados a la misma distancia que tus hombros.",
                                                  "Sujeta las manijas de la máquina con las manos para asegurarte de que no te desplazas durante el ejercicio.",
                                                  "Empuja la plataforma hacia arriba con un pie y extiende la pierna completamente hasta que tus rodillas estén bloqueadas. Exhala mientras empujas la plataforma hacia arriba.",
                                                  "Lentamente baja la plataforma hacia abajo, doblando la rodilla a un ángulo de 90 grados. Inhala mientras bajas la plataforma.",
                                                  "Intercambia la pierna opuesta y realiza el mismo movimiento",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 45° Fija Unilateral/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 45° Fija Unilateral/prensaUnilateral.mp4",
                                        "note": "Recuerda que es importante no bloquear las rodillas en la parte superior del movimiento, ya que esto puede aumentar el riesgo de lesiones. También es importante mantener una buena postura y asegurarse de no usar la fuerza de la espalda baja para ayudarte a empujar la plataforma hacia arriba."
                              },
                              {
                                        "id": "prensa-90",
                                        "name": "Prensa 90°",
                                        "steps": [
                                                  "Ajusta el asiento y el respaldo de la máquina para que queden en un ángulo de 90 grados.",
                                                  "Siéntate en la máquina y coloca los pies en la plataforma, separados a la distancia de tus hombros.",
                                                  "Desbloquea la plataforma de la prensa y deja que descienda hacia ti.",
                                                  "Dobla las rodillas y baja la plataforma hacia ti lo más posible sin que tus glúteos se despeguen del asiento.",
                                                  "Empuja la plataforma de la prensa hacia arriba, extendiendo las piernas hasta que queden completamente estiradas.",
                                                  "Repite el movimiento para realizar las repeticiones deseadas.",
                                                  "Es importante tener en cuenta que al realizar la prensa de 90 grados, es necesario mantener la espalda plana contra el respaldo y evitar arquearla o levantar los glúteos del asiento. Además, es recomendable utilizar un peso adecuado para tu nivel de fuerza y capacidad"
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 90°/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa 90°/prensa90.mp4"
                              },
                              {
                                        "id": "prensa-basculante",
                                        "name": "Prensa Basculante",
                                        "steps": [
                                                  "Colócate de pie frente a la máquina y ajusta el asiento para que tus pies descansen cómodamente sobre la plataforma. Asegúrate de que tus rodillas estén dobladas a un ángulo de 90 grados.",
                                                  "Coloca los pies en la plataforma con los dedos de los pies apuntando ligeramente hacia afuera. Asegúrate de que tus pies estén separados a la misma distancia que tus hombros.",
                                                  "Sujeta las manijas de la máquina con las manos para asegurarte de que no te desplazas durante el ejercicio.",
                                                  "Empuja la plataforma hacia arriba con los pies y extiende las piernas completamente hasta que tus rodillas estén bloqueadas. Exhala mientras empujas la plataforma hacia arriba.",
                                                  "Lentamente baja la plataforma hacia abajo, doblando las rodillas a un ángulo de 90 grados. Inhala mientras bajas la plataforma.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Basculante/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Basculante/prensaBasculante.mp4",
                                        "note": "Recuerda que es importante no bloquear las rodillas en la parte superior del movimiento, ya que esto puede aumentar el riesgo de lesiones. También es importante mantener una buena postura y asegurarse de no usar la fuerza de la espalda baja para ayudarte a empujar la plataforma hacia arriba."
                              },
                              {
                                        "id": "prensa-horizontal",
                                        "name": "Prensa Horizontal",
                                        "steps": [
                                                  "Siéntate en el asiento y coloca tus pies a la altura de tus hombros en la plataforma, con las rodillas dobladas en un ángulo de 90 grados.",
                                                  "Agarra las manijas de la máquina con un agarre firme y cómodo.",
                                                  "Empuja la plataforma hacia arriba con tus pies, extendiendo las piernas completamente, pero sin bloquear las rodillas.",
                                                  "Mantén la posición extendida durante un segundo, sintiendo la contracción en los músculos de las piernas.",
                                                  "Controla el movimiento mientras bajas la plataforma de manera controlada, doblando las rodillas nuevamente.",
                                                  "Evita dejar que la plataforma descienda demasiado abajo, deteniendo el movimiento antes de que tus rodillas se doblen más allá de los 90 grados para mantener la tensión en los músculos.",
                                                  "Exhala mientras empujas la plataforma hacia arriba y luego inhala mientras la bajas.",
                                                  "Mantén la espalda contra el respaldo de la máquina en todo momento y evita arquearla.",
                                                  "Realiza el número deseado de repeticiones según tu programa de entrenamiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Horizontal/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Horizontal/prensaHorizontal.mp4",
                                        "note": "Una vez completada la serie, asegúrate de liberar las palancas de la máquina antes de intentar salir del equipo."
                              },
                              {
                                        "id": "prensa-oscilante",
                                        "name": "Prensa Oscilante",
                                        "steps": [
                                                  "Colócate de pie frente a la máquina y ajusta el asiento para que tus pies descansen cómodamente sobre la plataforma. Asegúrate de que tus rodillas estén dobladas a un ángulo de 90 grados.",
                                                  "Coloca los pies en la plataforma con los dedos de los pies apuntando ligeramente hacia afuera. Asegúrate de que tus pies estén separados a la misma distancia que tus hombros.",
                                                  "Sujeta las manijas de la máquina con las manos para asegurarte de que no te desplazas durante el ejercicio.",
                                                  "Empuja la plataforma hacia arriba con los pies y extiende las piernas completamente hasta que tus rodillas estén bloqueadas. Exhala mientras empujas la plataforma hacia arriba.",
                                                  "Lentamente baja la plataforma hacia abajo, doblando las rodillas a un ángulo de 90 grados. Inhala mientras bajas la plataforma.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Oscilante/prensa.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Prensa Oscilante/prensa.mp4",
                                        "note": "Recuerda que es importante no bloquear las rodillas en la parte superior del movimiento, ya que esto puede aumentar el riesgo de lesiones. También es importante mantener una buena postura y asegurarse de no usar la fuerza de la espalda baja para ayudarte a empujar la plataforma hacia arriba."
                              },
                              {
                                        "id": "sentadilla-a-45-con-apoyo",
                                        "name": "Sentadilla a 45° con Apoyo",
                                        "steps": [
                                                  "Ajusta la máquina de sentadilla a 45 grados y asegúrate de que el respaldo esté en una posición cómoda para tu espalda.",
                                                  "Colócate de pie frente a la máquina con los pies separados a la anchura de los hombros y los hombros hacia atrás.",
                                                  "Asegúrate de que tus pies están colocados de manera firme en la plataforma y que tus rodillas están alineadas con tus tobillos.",
                                                  "Apoya la espalda contra el respaldo de la máquina para mantener una postura estable.",
                                                  "Agarra las asas laterales de la máquina para mantener el equilibrio y la estabilidad durante el movimiento.",
                                                  "Desciende lentamente el cuerpo doblando las rodillas, manteniendo la espalda recta y los talones firmemente apoyados en la plataforma.",
                                                  "Continúa bajando hasta que tus muslos estén aproximadamente paralelos al suelo o hasta donde te sientas cómodo, evitando que las rodillas sobrepasen los dedos de los pies.",
                                                  "Mantén la posición inferior por un segundo para maximizar la activación de los músculos.",
                                                  "Vuelve a la posición inicial empujando a través de los talones y extendiendo las rodillas.",
                                                  "Realiza el mismo número de repeticiones, manteniendo una buena forma y control durante todo el ejercicio.",
                                                  "Ajusta la carga de la máquina según tu nivel de fuerza y comodidad, comenzando con un peso adecuado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla a 45° con Apoyo/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla a 45° con Apoyo/sentadilla45Apoyo.mp4"
                              },
                              {
                                        "id": "sentadilla-en-smith",
                                        "name": "Sentadilla en Smith",
                                        "steps": [
                                                  "Comienza colocando la barra en el soporte de la jaula de sentadillas a una altura que te permita levantarla sin tener que ponerte de puntillas. La barra debe estar a una altura que te permita colocarla sobre los hombros y la espalda, justo debajo del cuello.",
                                                  "Párate debajo de la barra, colocando los pies separados a la altura de los hombros y debajo de la barra.",
                                                  "Agarra la barra con las manos en pronación, con las palmas hacia abajo y los dedos alrededor de la barra. Coloca la barra en la parte posterior de los hombros, sosteniéndola con los dedos y los músculos de la espalda.",
                                                  "Levanta la barra y sostenla sobre los hombros. Da un pequeño paso hacia atrás y coloca los pies en una posición ligeramente más ancha que el ancho de los hombros.",
                                                  "Asegúrate de mantener la espalda recta y el pecho hacia arriba. Mantén la cabeza mirando hacia adelante y la barra sobre los hombros.",
                                                  "Flexiona las rodillas y baja el cuerpo hacia el suelo, manteniendo la espalda recta y el pecho hacia arriba. Baja hasta que los muslos estén paralelos al suelo.",
                                                  "Mantén la posición durante un segundo y luego empuja con las piernas para volver a la posición inicial.",
                                                  "Repite el ejercicio para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla en Smith/hack.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla en Smith/sentadillaBarraSmith.mp4",
                                        "note": "Es importante recordar que la técnica correcta es crucial al realizar sentadillas con barra para evitar lesiones. Si eres principiante, es recomendable empezar con una carga ligera y trabajar en la técnica antes de aumentar el peso. También es importante calentar adecuadamente antes de hacer el ejercicio."
                              },
                              {
                                        "id": "sentadilla-landmine",
                                        "name": "Sentadilla Landmine",
                                        "steps": [
                                                  "Colócate de pie con los pies abiertos aproximadamente al ancho de los hombros, pero con los dedos de los pies apuntando hacia afuera en un ángulo de alrededor de 45 grados.",
                                                  "Sostén la punta de la barra con las manos, manteniendo en el mentón o pecho y los codos bloqueados.",
                                                  "Inhala profundamente y baja el cuerpo hasta que tus muslos estén paralelos al suelo o un poco más bajos, asegurándote de mantener la espalda recta y el pecho hacia arriba.",
                                                  "Asegúrate de que las rodillas estén apuntando en la misma dirección que los dedos de los pies.",
                                                  "Exhala y presiona con los talones para volver a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Landmine/sentadilla.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Landmine/flexionLandmine.mp4",
                                        "note": "Recuerda que es importante asegurarse de que la técnica sea correcta y que la espalda esté siempre recta y el pecho hacia arriba para evitar lesiones."
                              },
                              {
                                        "id": "sentadilla-pendulo",
                                        "name": "Sentadilla Péndulo",
                                        "steps": [
                                                  "Ajusta el equipo según tu altura y preferencia.",
                                                  "Colócate debajo de la barra de la máquina con los hombros y la espalda bien apoyados.",
                                                  "Levanta la barra con ambas manos, manteniendo los codos flexionados y cerca del cuerpo.",
                                                  "Desciende lentamente flexionando las rodillas y las caderas, manteniendo la espalda recta y los talones apoyados.",
                                                  "Baja hasta que tus muslos estén paralelos al suelo o un poco más abajo.",
                                                  "Mantén las rodillas alineadas con los pies y no permitas que se desplacen hacia adentro.",
                                                  "Una vez alcanzada la profundidad deseada, comienza a empujar con los talones para elevarte de nuevo.",
                                                  "Extiende completamente las piernas al subir, manteniendo el control del movimiento en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Péndulo/piernasCajon.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Péndulo/sentadillaPendulo.mp4"
                              },
                              {
                                        "id": "sentadilla-sissy",
                                        "name": "Sentadilla Sissy",
                                        "steps": [
                                                  "Ponte de pie, con los pies separados a la distancia de tus hombros y las manos en las caderas. Mantén una postura erguida y una mirada hacia adelante.",
                                                  "Luego, coloca la parte superior de tus pies sobre una plataforma elevada y en ángulo, con los talones en el suelo.",
                                                  "A medida que comienzas a bajar, mantén la espalda recta y las rodillas en línea con los dedos de los pies. Si sientes tensión en las rodillas, detente y ajusta la posición de los pies.",
                                                  "Baja lentamente, flexionando las rodillas hasta que tus muslos estén paralelos al suelo o incluso más abajo, si eres capaz.",
                                                  "Después de llegar a la posición más baja, levántate lentamente de nuevo a la posición inicial, usando los músculos de los cuádriceps y los glúteos para ayudarte.",
                                                  "Repite el movimiento durante varias repeticiones, asegurándote de mantener una buena forma durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Sissy/sillonCuadriceps.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sentadilla Sissy/sentadillaSissy.mp4",
                                        "note": "Es importante tener en cuenta que la sentadilla sissy es un ejercicio avanzado, por lo que es importante trabajar con un entrenador personal o fisioterapeuta si eres nuevo en este ejercicio. Además, asegúrate de estirar adecuadamente antes y después de hacer este ejercicio, y no lo hagas si tienes alguna lesión o dolor en las rodillas o la espalda."
                              },
                              {
                                        "id": "sillon-de-cuadriceps",
                                        "name": "Sillón de Cuádriceps",
                                        "steps": [
                                                  "Siéntate en el sillón de cuádriceps con la espalda recta y ajusta la almohadilla para las piernas en la parte superior de tus tobillos.",
                                                  "Coloca las manos en los reposabrazos y ajusta el peso de la máquina de acuerdo a tu nivel de condición física.",
                                                  "Contrae los músculos del cuádriceps (parte frontal del muslo) y extiende las piernas hacia arriba, manteniendo los pies flexionados hacia ti.",
                                                  "Mantén la posición durante uno o dos segundos, sintiendo la contracción en los cuádriceps.",
                                                  "Luego, baja lentamente las piernas hasta la posición inicial, manteniendo el control en todo momento.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones.",
                                                  "Es importante evitar bloquear las rodillas y no forzar el movimiento. Además, es recomendable realizar un calentamiento previo y estiramiento posterior para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sillón de Cuádriceps/sillonCuadriceps.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sillón de Cuádriceps/sillonCuadriceps.mp4"
                              },
                              {
                                        "id": "sillon-de-cuadriceps-unilateral",
                                        "name": "Sillón de Cuádriceps Unilateral",
                                        "steps": [
                                                  "Siéntate en el sillón de cuádriceps con la espalda recta y ajusta la almohadilla para las piernas en la parte superior de tus tobillos.",
                                                  "Coloca las manos en los reposabrazos y ajusta el peso de la máquina de acuerdo a tu nivel de condición física.",
                                                  "Contrae los músculos del cuádriceps (parte frontal del muslo) y extiende las piernas hacia arriba, manteniendo los pies flexionados hacia ti.",
                                                  "Mantén la posición durante uno o dos segundos, sintiendo la contracción en los cuádriceps.",
                                                  "Luego, baja lentamente las piernas hasta la posición inicial, manteniendo el control en todo momento.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones.",
                                                  "Es importante evitar bloquear las rodillas y no forzar el movimiento. Además, es recomendable realizar un calentamiento previo y estiramiento posterior para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sillón de Cuádriceps Unilateral/sillonCuadriceps.png",
                                        "videoUrl": "/Entrenamientos/Cuadriceps/Poleas y maquinas/Sillón de Cuádriceps Unilateral/sillonCuadricepUnilateral.mp4"
                              }
                    ]
          }
]
    },
        espalda: {
        id: 'espalda',
        name: 'Espalda',
        subtitle: 'Dorsales y trapecios',
        cardImageUrl: '/Entrenamientos/Espalda/espalda.png',
        detailImageUrl: '/Entrenamientos/Espalda/espalda.png',
        backHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "encogimiento-de-hombro-con-barra",
                                        "name": "Encogimiento de Hombro con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "giro-oblicuo-con-barra-en-tierra",
                                        "name": "Giro Oblicuo con Barra en Tierra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "good-morning-con-barra",
                                        "name": "Good Morning con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-al-menton-con-barra",
                                        "name": "Remo al Mentón con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-con-barra",
                                        "name": "Remo con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-invertido-en-smith",
                                        "name": "Remo Invertido en Smith",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-unilateral-con-barra",
                                        "name": "Remo Unilateral con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-vertical-con-barra",
                                        "name": "Remo Vertical con Barra",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "simulador-de-remo",
                                        "name": "Simulador de Remo",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "remo-al-menton-con-mancuerna",
                                        "name": "Remo al Mentón con Mancuerna",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-con-mancuernas",
                                        "name": "Remo con Mancuernas",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-gorilla",
                                        "name": "Remo Gorilla",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-prono-con-mancuerna-en-banco-inclinado",
                                        "name": "Remo Prono con Mancuerna en Banco Inclinado",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-prono-con-mancuerna-en-banco-plano",
                                        "name": "Remo Prono con Mancuerna en Banco Plano",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-renegado-con-flexion",
                                        "name": "Remo Renegado con Flexión",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              }
                    ]
          },
          {
                    "id": "peso-corporal",
                    "name": "Peso Corporal",
                    "exercises": [
                              {
                                        "id": "postura-de-superman-sostenido",
                                        "name": "Postura de Superman Sostenido",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "remo-con-banda",
                                        "name": "Remo con Banda",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": []
          }
]
    },
    femorales: {
        id: 'femorales',
        name: 'Femorales',
        subtitle: 'Isquiosurales',
        cardImageUrl: '/Entrenamientos/Femorales/femorales.png',
        backHighlight: true,
        equipmentCategories: [
            {
                id: 'poleas-maquinas',
                name: 'Poleas y Máquinas',
                exercises: [
                    {
                        id: 'curl-femoral-tumbado',
                        name: 'Curl Femoral Tumbado',
                        videoUrl: '/assets/piernas y gluteos/Curl Femoral Tumbado.gif',
                        steps: [
                            'Recuéstate boca abajo en la máquina con el rodillo justo por encima de los talones.',
                            'Flexiona los rodillas llevando los talones hacia los glúteos.',
                            'Desciende el peso de forma lenta y controlada.'
                        ]
                    }
                ]
            }
        ]
    },
    gluteos: {
        id: 'gluteos',
        name: 'Glúteos',
        subtitle: 'Glúteo mayor y medio',
        cardImageUrl: '/Entrenamientos/Gluteos/gluteos.png',
        backHighlight: true,
        equipmentCategories: [
            {
                id: 'poleas-maquinas',
                name: 'Poleas y Máquinas',
                exercises: [
                    {
                        id: 'hip-thrust',
                        name: 'Hip Thrust (Empuje de Cadera)',
                        videoUrl: '/assets/piernas y gluteos/Hip Thrust (Empuje de Cadera).gif',
                        steps: [
                            'Apoya la parte alta de la espalda sobre un banco.',
                            'Coloca la barra sobre la pelvis.',
                            'Empuja la cadera hacia arriba contrayendo fuertemente los glúteos al llegar al tope.'
                        ]
                    }
                ]
            }
        ]
    },
    pecho: {
        id: 'pecho',
        name: 'Pecho',
        subtitle: 'Pectorales',
        cardImageUrl: '/Entrenamientos/Pecho/pecho.png',
        frontHighlight: true,
        equipmentCategories: [
            {
                id: 'mancuernas',
                name: 'Mancuernas',
                exercises: [
                    {
                        id: 'press-superior-mancuernas',
                        name: 'Press Superior con Mancuernas',
                        videoUrl: '/assets/pecho/Press Superior con Mancuernas.gif',
                        steps: [
                            'Ajusta el banco a un ángulo de 30-45°.',
                            'Empuja las mancuernas hacia arriba sin chocarlas en la cima.',
                            'Desciende controladamente hasta la altura del pecho.'
                        ]
                    }
                ]
            }
        ]
    },
    hombros: {
        id: 'hombros',
        name: 'Hombros',
        subtitle: 'Deltoides anterior, lateral y posterior',
        cardImageUrl: '/Entrenamientos/Hombros/hombros.png',
        frontHighlight: true,
        equipmentCategories: [
            {
                id: 'mancuernas',
                name: 'Mancuernas',
                exercises: [
                    {
                        id: 'press-hombros-mancuernas',
                        name: 'Press de Hombros con Mancuernas',
                        videoUrl: '/assets/hombros/Press de Hombros con Mancuernas.gif',
                        steps: [
                            'Siéntate erguido en un banco a 90°.',
                            'Eleva las mancuernas por encima de la cabeza hasta casi extender los brazos.',
                            'Baja lentamente a la altura de las orejas.'
                        ]
                    }
                ]
            }
        ]
    },
    triceps: {
        id: 'triceps',
        name: 'Tríceps',
        subtitle: 'Extensores de codo',
        cardImageUrl: '/Entrenamientos/Triceps/triceps.png',
        backHighlight: true,
        equipmentCategories: [
            {
                id: 'poleas-maquinas',
                name: 'Poleas y Máquinas',
                exercises: [
                    {
                        id: 'extension-triceps-polea',
                        name: 'Extensión de Tríceps en Polea Alta',
                        videoUrl: '/assets/biceps y triceps/Extensión de Tríceps en Polea Alta.gif',
                        steps: [
                            'Sujeta la barra o cuerda en polea alta.',
                            'Extiende los codos totalmente empujando el peso hacia abajo.',
                            'Mantén los codos pegados a los costados del cuerpo.'
                        ]
                    }
                ]
            }
        ]
    },
};
