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
        cardImageUrl: '/Entrenamientos/Espalda/espaldamini.png',
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
                                                  "Ponte de pie con los pies separados a la misma distancia de los hombros, sosteniendo una barra frente a ti con un agarre ligeramente más estrecho que la anchura de los hombros. Las palmas de las manos deben mirar hacia tu cuerpo.",
                                                  "Mantén la espalda recta, los hombros hacia atrás y el pecho hacia arriba. Esta es tu posición inicial.",
                                                  "Eleva los hombros directamente hacia arriba en un movimiento controlado, contrayendo los músculos superiores de la espalda. Imagina que estás tratando de tocar tus hombros con tus orejas.",
                                                  "Al llegar a la posición más alta posible, mantén la contracción en la parte superior de los hombros durante un segundo para maximizar el estímulo en esos músculos.",
                                                  "Desciende los hombros de manera controlada de vuelta a la posición inicial, evitando movimientos bruscos o rebotes.",
                                                  "Realiza el mismo número de repeticiones, manteniendo una forma adecuada y una ejecución suave del movimiento.",
                                                  "Evita cargar demasiado peso para prevenir lesiones y enfócate en la calidad del movimiento.",
                                                  "Este ejercicio es excelente para desarrollar la musculatura de la parte superior de los hombros y puede ser incorporado como parte de tu rutina de entrenamiento de la espalda y los hombros."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Encogimiento de Hombro con Barra/trapecioEspalda.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Encogimiento de Hombro con Barra/encogimientoHombroBarra.mp4"
                              },
                              {
                                        "id": "giro-oblicuo-con-barra-en-tierra",
                                        "name": "Giro Oblicuo con Barra en Tierra",
                                        "steps": [
                                                  "Comienza colocando una barra cargada en el suelo y párate con los pies separados a la anchura de los hombros y las rodillas ligeramente flexionadas.",
                                                  "Agarra la barra con ambas manos en pronación (las palmas hacia abajo) y mantenla pegada al cuerpo.",
                                                  "Gira la cintura hacia un lado, manteniendo la barra pegada al cuerpo y la cabeza y la espalda rectas.",
                                                  "Mantén la posición durante un segundo y luego gira hacia el otro lado.",
                                                  "Continúa alternando los giros hacia la izquierda y hacia la derecha hasta completar la cantidad de repeticiones deseada.",
                                                  "Es importante recordar mantener la cabeza y la espalda rectas en todo momento y evitar el impulso para realizar el movimiento. El giro debe provenir únicamente de la cintura y los oblicuos, no de los hombros ni la columna vertebral."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Giro Oblicuo con Barra en Tierra/giroBarra.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Giro Oblicuo con Barra en Tierra/giroOblicuioConBarraEnTierra.mp4"
                              },
                              {
                                        "id": "good-morning-con-barra",
                                        "name": "Good Morning con Barra",
                                        "steps": [
                                                  "Colócate de pie con una pierna ligeramente adelantada y la otra hacia atrás, en una posición de zancada corta. Los pies deben estar alineados aproximadamente a la anchura de los hombros, con las rodillas ligeramente flexionadas.",
                                                  "Sostén una barra con ambas manos, apoyándola en la parte superior de los trapecios (por detrás del cuello), utilizando un agarre prono (palmas hacia abajo) con las manos separadas a la anchura de los hombros.",
                                                  "Mantén la espalda recta y el core activado. Mira hacia adelante y asegúrate de mantener una postura erguida con el pecho levantado.",
                                                  "Inhala y, mientras exhalas, flexiona las caderas hacia adelante, empujando el glúteo hacia atrás y manteniendo la columna vertebral en una posición neutral. La pierna adelantada soportará la mayor parte del peso, mientras que la pierna trasera proporciona estabilidad.",
                                                  "Baja el torso hasta que esté aproximadamente paralelo al suelo o hasta que sientas un buen estiramiento en los isquiotibiales de la pierna adelantada. Asegúrate de mantener las rodillas ligeramente flexionadas y evita cualquier arqueo excesivo de la espalda baja.",
                                                  "Exhala y regresa a la posición inicial, contrayendo los músculos de los glúteos y los isquiotibiales para levantar el torso. Mantén el core activado durante todo el movimiento para proteger la espalda baja."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Good Morning con Barra/superman.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Good Morning con Barra/goodMorningBarra.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición. Luego, cambia de pierna y repite el ejercicio."
                              },
                              {
                                        "id": "remo-al-menton-con-barra",
                                        "name": "Remo al Mentón con Barra",
                                        "steps": [
                                                  "Comienza de pie con los pies separados a la misma distancia que tus hombros y sostén una barra con las palmas hacia ti y las manos separadas a la misma distancia que tus hombros.",
                                                  "Levanta la barra hacia tu mentón, doblando los codos y manteniendo los brazos cerca del cuerpo.",
                                                  "Mantén la posición por un segundo, luego baja la barra lentamente a la posición inicial.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Remo al Mentón con Barra/trapecioEspalda.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Remo al Mentón con Barra/elevacionLateralBarra.mp4",
                                        "note": "Es importante mantener una buena postura y evitar balancear el cuerpo hacia adelante o hacia atrás durante el ejercicio. También debes asegurarte de mantener los codos apuntando hacia los lados y no hacia adelante para evitar poner demasiada tensión en los hombros."
                              },
                              {
                                        "id": "remo-con-barra",
                                        "name": "Remo con Barra",
                                        "steps": [
                                                  "Colócate frente a la barra, parado con los pies separados a la misma anchura de los hombros, y agáchate para sujetar la barra con las manos. Las palmas de las manos deben estar hacia abajo y las manos deben estar un poco más separadas que la anchura de los hombros.",
                                                  "Con la barra en las manos, estira los brazos y levántala del suelo. Mantén la espalda recta y los hombros hacia atrás y hacia abajo.",
                                                  "Levanta la barra hacia el pecho, manteniendo los codos cerca del cuerpo. Asegúrate de mantener la espalda recta durante todo el movimiento y de no arquearla hacia adelante o hacia atrás.",
                                                  "Cuando la barra esté cerca de tu pecho, exhala y aprieta los músculos de la espalda durante un segundo para maximizar la contracción muscular.",
                                                  "Baja lentamente la barra de regreso al suelo, manteniendo la espalda recta y controlando el movimiento.",
                                                  "Repite el ejercicio durante varias repeticiones, manteniendo una técnica adecuada en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Remo con Barra/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Remo con Barra/remoBarra.mp4",
                                        "note": "Es importante recordar que el remo con barra es un ejercicio de fuerza que requiere una técnica adecuada para evitar lesiones. Asegúrate de empezar con un peso que puedas controlar y de aumentarlo gradualmente a medida que tu fuerza y técnica mejoren. Además, siempre es recomendable contar con la supervisión de un entrenador personal para asegurarte de que estás realizando el ejercicio correctamente."
                              },
                              {
                                        "id": "remo-invertido-en-smith",
                                        "name": "Remo Invertido en Smith",
                                        "steps": [
                                                  "Busca una barra fija horizontal a una altura que te permita colgarte de ella con los brazos extendidos mientras tus pies están apoyados en el piso. También puedes utilizar una estructura de entrenamiento que tenga una barra horizontal.",
                                                  "Agarra la barra con las palmas de las manos hacia ti, a una distancia un poco mayor que el ancho de los hombros, y cuelga de ella con los brazos totalmente extendidos.",
                                                  "Con los codos apuntando hacia atrás, levanta tu cuerpo hacia la barra mientras mantienes los hombros hacia abajo y hacia atrás, y los omóplatos juntos. Asegúrate de mantener los codos cerca de tu cuerpo y los brazos pegados al torso durante todo el movimiento.",
                                                  "Cuando llegues a la parte superior del movimiento, sostén la contracción durante un segundo y luego baja lentamente tu cuerpo hacia abajo hasta que tus brazos estén totalmente extendidos nuevamente.",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Remo Invertido en Smith/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Remo Invertido en Smith/remoInvertido.mp4",
                                        "note": "Es importante mantener una buena postura y técnica durante todo el ejercicio para evitar lesiones. También puedes variar la intensidad del ejercicio cambiando la posición de tus pies o utilizando un cinturón de lastre para agregar peso."
                              },
                              {
                                        "id": "remo-unilateral-con-barra",
                                        "name": "Remo Unilateral con Barra",
                                        "steps": [
                                                  "Coloca una barra en un soporte a una altura que te permita alcanzarla cómodamente cuando estás de pie al lado de ella.",
                                                  "Ponte al lado de la barra y sostenla con una mano, con la palma de tu mano mirando hacia ti.",
                                                  "Flexiona las rodillas y baja el torso hacia adelante, manteniendo la espalda recta y los abdominales contraídos.",
                                                  "Eleva la barra hacia tu cuerpo, manteniéndola cerca de él en todo momento, y lleva el codo hacia atrás mientras contraes los músculos de la espalda.",
                                                  "Mantén la posición por un momento y luego baja la barra de forma controlada hasta la posición inicial.",
                                                  "Repite el movimiento para el número deseado de repeticiones y luego cambia de lado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Remo Unilateral con Barra/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Remo Unilateral con Barra/remoUnilateralConBarraEnAngulo.mp4",
                                        "note": "Es importante mantener la espalda recta y los abdominales contraídos durante todo el ejercicio para evitar lesiones en la espalda baja. También asegúrate de mantener los hombros hacia abajo y hacia atrás para involucrar correctamente los músculos de la espalda."
                              },
                              {
                                        "id": "remo-vertical-con-barra",
                                        "name": "Remo Vertical con Barra",
                                        "steps": [
                                                  "Colócate de pie con los pies a la anchura de los hombros, mirando hacia adelante. Sostén una barra con ambas manos, utilizando un agarre prono (palmas hacia abajo) con las manos separadas a una distancia ligeramente menor que la anchura de los hombros.",
                                                  "Mantén la barra frente a los muslos con los brazos extendidos y las palmas mirando hacia el cuerpo. Esta es tu posición inicial.",
                                                  "Inhala y, mientras exhalas, tira de la barra hacia arriba a lo largo del cuerpo, llevando los codos hacia los lados y hacia arriba. Los codos deben estar en línea con los hombros o ligeramente por encima de ellos al final del movimiento.",
                                                  "Mantén la barra cerca del cuerpo durante todo el levantamiento y lleva la barra hasta la altura del pecho o un poco más arriba, dependiendo de tu movilidad. Asegúrate de mantener el core activado y la espalda recta durante todo el ejercicio.",
                                                  "Pausa brevemente en la parte superior del movimiento, asegurándote de contraer los músculos de los hombros y los trapecios.",
                                                  "Inhala y baja la barra de manera controlada de vuelta a la posición inicial, extendiendo completamente los brazos sin bloquear los codos."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Remo Vertical con Barra/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Remo Vertical con Barra/remoVerticalBarra.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición."
                              },
                              {
                                        "id": "simulador-de-remo",
                                        "name": "Simulador de Remo",
                                        "steps": [
                                                  "Siéntate en el asiento de la máquina de remo, colocando los pies en los reposapiés ajustables. Asegúrate de que las correas estén ajustadas de manera segura alrededor de tus pies para evitar que se deslicen durante el ejercicio.",
                                                  "Agarra el asa con ambas manos utilizando un agarre prono (palmas hacia abajo) o neutro (palmas enfrentadas), dependiendo del diseño de la máquina. Mantén las manos separadas a una distancia cómoda, aproximadamente a la anchura de los hombros.",
                                                  "Comienza en la posición de \"captura\": el torso ligeramente inclinado hacia adelante con las rodillas dobladas y los brazos extendidos. La espalda debe estar recta y el core activado, con los hombros relajados y hacia abajo.",
                                                  "Inhala y, mientras exhalas, empuja con las piernas para extender las rodillas y deslizar el asiento hacia atrás. Al mismo tiempo, comienza a inclinar el torso hacia atrás desde las caderas, manteniendo la espalda recta.",
                                                  "Una vez que las piernas estén casi completamente extendidas, jala el asa hacia tu torso, llevando los codos hacia atrás y hacia los lados. El asa debe llegar aproximadamente al nivel del esternón o ligeramente más abajo. Mantén los hombros relajados y lejos de las orejas durante el tirón.",
                                                  "Inhala y extiende los brazos hacia adelante mientras comienzas a inclinar el torso hacia adelante. Al mismo tiempo, dobla las rodillas para deslizar el asiento hacia adelante y regresar a la posición de captura."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Barra/Simulador de Remo/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Barra/Simulador de Remo/simuladorRemo.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una técnica fluida y controlada durante todo el movimiento. El ejercicio debe realizarse con un ritmo constante, evitando movimientos bruscos o tirones excesivos."
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
                                                  "Para empezar, párate con los pies separados al ancho de los hombros y sostén una mancuerna con cada mano.",
                                                  "Mantén los brazos extendidos frente a ti, con las palmas de las manos mirando hacia ti.",
                                                  "A continuación, lleva las mancuernas hacia tu pecho, manteniendo los codos elevados hacia los lados y los antebrazos perpendiculares al suelo. La posición final debe ser similar a la de un curl de bíceps.",
                                                  "Desde esta posición, lleva las mancuernas hacia arriba, levantando los codos hacia los lados de tus orejas. Mantén los codos elevados y los antebrazos apuntando hacia arriba durante todo el movimiento.",
                                                  "Mantén la contracción durante un segundo en la parte superior del movimiento, luego baja lentamente las mancuernas de nuevo a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones, asegurándote de mantener una buena forma y control en todo momento.",
                                                  "Es importante recordar que este ejercicio se enfoca en los músculos de la espalda y los hombros, por lo que debes evitar hacer trampa al balancearte hacia adelante y hacia atrás. En su lugar, mantén un buen control en todo momento y utiliza la fuerza de los músculos de la espalda y los hombros para realizar el movimiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo al Mentón con Mancuerna/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo al Mentón con Mancuerna/remo.mp4"
                              },
                              {
                                        "id": "remo-con-mancuernas",
                                        "name": "Remo con Mancuernas",
                                        "steps": [
                                                  "Comienza apoyando una rodilla y una mano en un banco inclinado y toma una mancuerna en la otra mano con la palma hacia abajo.",
                                                  "Mantén la espalda recta y los abdominales contraídos para asegurarte de tener una buena postura.",
                                                  "Levanta la mancuerna hacia tu torso manteniendo el codo cerca de tu cuerpo.",
                                                  "Haz una pausa en la parte superior del movimiento y luego baja lentamente la mancuerna hacia la posición inicial.",
                                                  "Repite para completar el número deseado de repeticiones y luego cambia de lado.",
                                                  "Recuerda hacer el ejercicio de forma controlada y sin balancear el cuerpo para evitar lesiones y asegurar una buena ejecución del ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo con Mancuernas/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo con Mancuernas/remoMancuerna.mp4"
                              },
                              {
                                        "id": "remo-gorilla",
                                        "name": "Remo Gorilla",
                                        "steps": [
                                                  "Comienza de pie, con los pies separados al ancho de los hombros, y sostén una pesa rusa en cada mano. Inclínate hacia adelante, manteniendo la espalda recta y el peso ligeramente por encima del suelo.",
                                                  "Apoya las pesas en el suelo para mantener el equilibrio.",
                                                  "Desde esta posición inicial, levanta la pesa rusa hacia tu cintura, manteniendo el codo cerca del cuerpo y apretando los omóplatos juntos.",
                                                  "Baja la pesa rusa lentamente hacia la posición inicial.",
                                                  "Luego cambia de mano y repite el ejercicio en el otro lado.",
                                                  "Es importante mantener la espalda recta durante todo el ejercicio para evitar lesiones y concentrarse en la contracción de los músculos de la espalda al levantar la pesa rusa hacia tu cintura."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Gorilla/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Gorilla/remoGorila.mp4"
                              },
                              {
                                        "id": "remo-prono-con-mancuerna-en-banco-inclinado",
                                        "name": "Remo Prono con Mancuerna en Banco Inclinado",
                                        "steps": [
                                                  "Coloca un banco inclinado a una altura de aproximadamente 45 grados y acuéstate boca abajo con los pies firmemente apoyados en el suelo.",
                                                  "Toma una mancuerna en cada mano y extiende los brazos hacia el suelo, manteniendo los codos ligeramente flexionados.",
                                                  "Contrae los músculos de la espalda para levantar las mancuernas hacia los lados del cuerpo, manteniendo los codos cerca del torso y los omóplatos juntos.",
                                                  "Mantén la posición de contracción durante unos segundos antes de bajar lentamente las mancuernas hacia la posición inicial.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Prono con Mancuerna en Banco Inclinado/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Prono con Mancuerna en Banco Inclinado/remoPronoConMancuernas.mp4",
                                        "note": "Es importante mantener una buena postura y controlar el movimiento durante todo el ejercicio. También es recomendable empezar con un peso ligero e ir aumentando progresivamente a medida que se adquiere más fuerza y estabilidad en la zona lumbar."
                              },
                              {
                                        "id": "remo-prono-con-mancuerna-en-banco-plano",
                                        "name": "Remo Prono con Mancuerna en Banco Plano",
                                        "steps": [
                                                  "Comienza acostado boca abajo en el banco, con las piernas ligeramente separadas y los pies firmemente apoyados en el suelo.",
                                                  "Toma una mancuerna en cada mano, con las palmas hacia abajo.",
                                                  "Mantén los codos cerca de los lados del cuerpo y levanta las mancuernas hacia los costados, manteniendo los brazos en línea con los hombros. Mantén los codos ligeramente flexionados durante todo el ejercicio.",
                                                  "Mantén la posición durante un segundo y luego baja lentamente las mancuernas de vuelta a la posición inicial.",
                                                  "Repite el movimiento durante varias repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Prono con Mancuerna en Banco Plano/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Prono con Mancuerna en Banco Plano/remoPronoConMancuernasRecto.mp4",
                                        "note": "Recuerda mantener una buena postura durante todo el ejercicio, evitando arquear la espalda o encorvar los hombros. También es importante utilizar un peso que sea adecuado para tus capacidades y realizar el movimiento de forma controlada y suave en todo momento."
                              },
                              {
                                        "id": "remo-renegado-con-flexion",
                                        "name": "Remo Renegado con Flexión",
                                        "steps": [
                                                  "Comienza en una posición de plancha alta, con las manos sosteniendo dos mancuernas en el suelo, separadas a la anchura de los hombros. Asegúrate de que las muñecas estén rectas y que los dedos estén apuntando hacia adelante.",
                                                  "Desde esta posición, lleva una mancuerna hacia arriba y hacia el costado del cuerpo, manteniendo el codo pegado al costado y sin rotar el torso. La mancuerna debe estar cerca del pecho.",
                                                  "Baja la mancuerna lentamente y vuelve a la posición de plancha alta.",
                                                  "Baja al suelo haciendo una flexión y vuelve a la posición de la plancha alta.",
                                                  "Repite el mismo movimiento con la otra mancuerna.",
                                                  "Continúa alternando los lados, manteniendo la posición de plancha alta durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Renegado con Flexión/remoFlexion.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Mancuernas/Remo Renegado con Flexión/remoRenegado.mp4",
                                        "note": "Recuerda mantener una buena postura y no arquear la espalda durante el movimiento. El Remo Renegado es un ejercicio desafiante, por lo que es importante comenzar con un peso ligero y aumentarlo gradualmente a medida que ganas fuerza y estabilidad en el core."
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
                                                  "Acuéstate boca abajo en una colchoneta con los brazos y las piernas extendidos.",
                                                  "Levanta los brazos, las piernas y el pecho del suelo al mismo tiempo, manteniendo los músculos del núcleo contraídos para mantener la estabilidad.",
                                                  "Sostén la posición durante unos segundos (de 5 a 10 segundos) y luego regresa lentamente a la posición inicial.",
                                                  "Repite el movimiento durante el número deseado de repeticiones.",
                                                  "Asegúrate de mantener una buena postura durante todo el ejercicio y no arquear la espalda demasiado. Si sientes dolor o molestias en la espalda, reduce la amplitud del movimiento o elige una variante más suave del ejercicio.",
                                                  "También puedes agregar resistencia a este ejercicio sosteniendo una mancuerna en cada mano mientras levantas los brazos y las piernas del suelo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Peso Corporal/Postura de Superman Sostenido/superman.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Peso Corporal/Postura de Superman Sostenido/supermanSostenido.mp4"
                              },
                              {
                                        "id": "remo-con-banda",
                                        "name": "Remo con Banda",
                                        "steps": [
                                                  "Coloca una banda elástica alrededor de un caño o un objeto fijo y asegúrate de que esté bien sujeta a una altura baja.",
                                                  "Siéntate en el piso con las piernas extendidas hacia adelante y los pies separados a la altura de las caderas. Asegúrate de que haya tensión en la banda incluso cuando estés en la posición inicial.",
                                                  "Sostén la banda con ambas manos, manteniendo los brazos extendidos hacia adelante y las palmas hacia adentro.",
                                                  "Mantén la espalda recta y el core contraído mientras inicias el movimiento.",
                                                  "Tira de la banda hacia tu torso, doblando los codos y manteniéndolos cerca del cuerpo. Lleva las manos hacia el abdomen o la parte baja del pecho.",
                                                  "Aprieta los omóplatos juntos al final del movimiento y mantén la contracción durante un breve momento.",
                                                  "Vuelve lentamente a la posición inicial, extendiendo los brazos hacia adelante y manteniendo el control sobre la banda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Peso Corporal/Remo con Banda/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Peso Corporal/Remo con Banda/remoBanda.mp4",
                                        "note": "Completa el número deseado de repeticiones, manteniendo una buena técnica y control en cada repetición."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "banco-de-espinales",
                                        "name": "Banco de Espinales",
                                        "steps": [
                                                  "Acuéstate boca abajo sobre la banca de lumbares, asegurándote de que tus caderas queden al borde de la misma y que tus pies estén bien apoyados en el cojín.",
                                                  "Cruza tus brazos en el pecho o ponlos detrás de tu cabeza (no los bloques detrás de tu nuca).",
                                                  "Asegúrate de que tus músculos abdominales estén contraídos y que tu columna vertebral esté en una posición neutral.",
                                                  "Levanta lentamente tu torso hacia arriba, asegurándote de que estás usando tus músculos de la espalda baja para levantarte y no impulsándote con tus piernas.",
                                                  "Una vez que estés en la posición más alta que puedas sin sentir dolor, mantén la posición durante unos segundos.",
                                                  "Baja lentamente tu torso hasta la posición inicial.",
                                                  "Repite el movimiento por el número deseado de repeticiones.",
                                                  "Recuerda que es importante no hacer movimientos bruscos y mantener siempre la posición correcta de la columna vertebral. Si sientes dolor en cualquier momento del ejercicio, detente inmediatamente y consulta con un entrenador personal o un profesional de la salud."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Banco de Espinales/lumbares.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Banco de Espinales/vela.mp4"
                              },
                              {
                                        "id": "dominadas-abiertas",
                                        "name": "Dominadas Abiertas",
                                        "steps": [
                                                  "Párate en la plataforma de la máquina y agarra las asas de las empuñaduras superiores. Coloca tus rodillas o pies en la plataforma inferior según el diseño de la máquina.",
                                                  "Con las manos separadas a la misma distancia que tus hombros y las palmas mirando hacia adelante, levanta el cuerpo y mantén los codos hacia abajo y cerca del cuerpo. Sube hasta que tu barbilla esté sobre la barra y mantén la posición durante un momento.",
                                                  "Baja tu cuerpo lentamente hasta que tus brazos estén completamente extendidos y sintiendo la contracción en los músculos de la espalda. Esta fase del ejercicio es conocida como \"negativa\".",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Abiertas/dominadas.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Abiertas/dominadasAbiertas.mp4",
                                        "note": "Recuerda que el uso correcto de la máquina de dominadas es importante para prevenir lesiones. Asegúrate de mantener una postura adecuada durante todo el ejercicio y trabajar con un peso que te permita realizar el movimiento de manera controlada."
                              },
                              {
                                        "id": "dominadas-asistidas",
                                        "name": "Dominadas Asistidas",
                                        "steps": [
                                                  "Primero, asegúrate de que la máquina esté ajustada al peso adecuado para ti. Para esto, selecciona el peso que te permita hacer entre 8 y 12 repeticiones completas de dominadas asistidas.",
                                                  "Párate en la plataforma de la máquina y agarra las asas de las empuñaduras superiores. Coloca tus rodillas o pies en la plataforma inferior según el diseño de la máquina.",
                                                  "Con las manos separadas a la misma distancia que tus hombros y las palmas mirando hacia adelante, levanta el cuerpo con la ayuda de la máquina y mantén los codos hacia abajo y cerca del cuerpo. Sube hasta que tu barbilla esté sobre la barra y mantén la posición durante un momento.",
                                                  "Baja tu cuerpo lentamente hasta que tus brazos estén completamente extendidos y sintiendo la contracción en los músculos de la espalda. Esta fase del ejercicio es conocida como \"negativa\".",
                                                  "Repite el movimiento por el número deseado de repeticiones.",
                                                  "Recuerda que el uso correcto de la máquina de dominadas asistidas es importante para prevenir lesiones. Asegúrate de mantener una postura adecuada durante todo el ejercicio y trabajar con un peso que te permita realizar el movimiento de manera controlada.",
                                                  "Aclaración: El modelo de la máquina puede variar según el fabricante. El concepto es el mismo para cualquier máquina."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Asistidas/dominadas.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Asistidas/dominadasAsistidas.mp4"
                              },
                              {
                                        "id": "dominadas-cerradas",
                                        "name": "Dominadas Cerradas",
                                        "steps": [
                                                  "Párate en la plataforma de la máquina y agarra las asas de las empuñaduras superiores. Coloca tus rodillas o pies en la plataforma inferior según el diseño de la máquina.",
                                                  "Con las manos juntas a la misma distancia que tu pecho y las palmas mirando hacia adelante, levanta el cuerpo y mantén los codos hacia abajo y cerca del cuerpo. Sube hasta que tu barbilla esté sobre la barra y mantén la posición durante un momento.",
                                                  "Baja tu cuerpo lentamente hasta que tus brazos estén completamente extendidos y sintiendo la contracción en los músculos de la espalda. Esta fase del ejercicio es conocida como \"negativa\".",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Cerradas/dominadas.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dominadas Cerradas/dominadasCerradas.mp4",
                                        "note": "Recuerda que el uso correcto de la máquina de dominadas es importante para prevenir lesiones. Asegúrate de mantener una postura adecuada durante todo el ejercicio y trabajar con un peso que te permita realizar el movimiento de manera controlada."
                              },
                              {
                                        "id": "dorsalera-fija",
                                        "name": "Dorsalera Fija",
                                        "steps": [
                                                  "Ajusta la altura del asiento de la máquina para que quede a la altura adecuada. Debes sentarte con los pies apoyados en el suelo y los muslos firmemente sujetos debajo de los rodillos de la máquina.",
                                                  "Ajusta la altura de la barra de agarre para que esté a la altura adecuada. La barra debe estar en la parte superior de tu pecho, justo por encima de los hombros.",
                                                  "Agarra la barra con las manos en pronación (palmas hacia abajo) y con una anchura de agarre ligeramente mayor que la anchura de tus hombros.",
                                                  "Mantén una postura erguida y mira hacia adelante. Mantén los codos cerca de tu cuerpo.",
                                                  "Tira de la barra hacia abajo lentamente y de manera controlada hacia tu pecho, manteniendo los codos cerca de tu cuerpo y manteniendo los hombros hacia abajo y hacia atrás.",
                                                  "Mantén la contracción en los músculos de la espalda baja mientras bajas la barra, asegurándote de exhalar al final del movimiento.",
                                                  "Lentamente regresa a la posición inicial, manteniendo una ligera tensión en tus músculos de la espalda baja.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija/pullOver.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija/poleaDorsal.mp4",
                                        "note": "Es importante recordar que la máquina de pull down se utiliza para trabajar principalmente la parte superior de la espalda y los músculos de los hombros. Para obtener los mejores resultados, debes ajustar la resistencia de la máquina de acuerdo con tu nivel de fuerza y realizar el ejercicio con buena forma y técnica."
                              },
                              {
                                        "id": "dorsalera-fija-traccion-vertical",
                                        "name": "Dorsalera Fija Tracción Vertical",
                                        "steps": [
                                                  "Ajusta la altura del asiento de la máquina para que quede a la altura adecuada. Debes sentarte con los pies apoyados en el suelo y los muslos firmemente sujetos debajo de los rodillos de la máquina.",
                                                  "Apoyá la Espalda en el respaldo.",
                                                  "Agarra las manijas con las manos en pronación (palmas hacia abajo).",
                                                  "Mantén una postura erguida y mira hacia adelante. Mantén los codos cerca de tu cuerpo.",
                                                  "Tira de las manijas hacia abajo lentamente y de manera controlada hacia tu pecho, manteniendo los codos cerca de tu cuerpo y manteniendo los hombros hacia abajo y hacia atrás.",
                                                  "Mantén la contracción en los músculos de la espalda baja mientras bajas la barra, asegurándote de exhalar al final del movimiento.",
                                                  "Lentamente regresa a la posición inicial, manteniendo una ligera tensión en tus músculos de la espalda baja.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija Tracción Vertical/pullOver.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija Tracción Vertical/verticalTractionMachine.mp4",
                                        "note": "Es importante recordar que la máquina de pull down se utiliza para trabajar principalmente la parte superior de la espalda y los músculos de los hombros. Para obtener los mejores resultados, debes ajustar la resistencia de la máquina de acuerdo con tu nivel de fuerza y realizar el ejercicio con buena forma y técnica."
                              },
                              {
                                        "id": "dorsalera-fija-unilateral",
                                        "name": "Dorsalera Fija Unilateral",
                                        "steps": [
                                                  "Ajusta la altura del asiento de la máquina para que quede a la altura adecuada. Debes sentarte con los pies apoyados en el suelo y los muslos firmemente sujetos debajo de los rodillos de la máquina.",
                                                  "Agarra las manijas con las manos en pronación (palmas hacia abajo).",
                                                  "Mantén una postura erguida y mira hacia adelante. Mantén los codos cerca de tu cuerpo.",
                                                  "Tira de las manijas hacia abajo lentamente y de manera controlada hacia tu pecho, manteniendo los codos cerca de tu cuerpo y manteniendo los hombros hacia abajo y hacia atrás.",
                                                  "Mantén la contracción en los músculos de la espalda baja mientras bajas la barra, asegurándote de exhalar al final del movimiento.",
                                                  "Lentamente regresa a la posición inicial, manteniendo una ligera tensión en tus músculos de la espalda baja.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija Unilateral/pullOver.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Fija Unilateral/pullDown.mp4",
                                        "note": "Es importante recordar que la máquina de pull down se utiliza para trabajar principalmente la parte superior de la espalda y los músculos de los hombros. Para obtener los mejores resultados, debes ajustar la resistencia de la máquina de acuerdo con tu nivel de fuerza y realizar el ejercicio con buena forma y técnica."
                              },
                              {
                                        "id": "dorsalera-frontal",
                                        "name": "Dorsalera Frontal",
                                        "steps": [
                                                  "Ajusta el peso de la máquina de acuerdo a tu nivel de condición física y experiencia.",
                                                  "Siéntate en la dorsalera y asegúrate de que tus piernas estén bien sujetas en el soporte de la máquina.",
                                                  "Agarra las manijas con un agarre supino, las palmas hacia ti y las manos a una distancia más estrecha que la anchura de los hombros.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Tirando de los codos hacia atrás, lleva la manijas hacia el pecho, contrayendo los músculos de la espalda para realizar el movimiento.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de la espalda y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente los brazos y baja la barra de vuelta a la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Frontal/dorsalera.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsalera Frontal/dorsaleraFrontal.mp4"
                              },
                              {
                                        "id": "dorsales-trasnuca",
                                        "name": "Dorsales Trasnuca",
                                        "steps": [
                                                  "Ajusta el peso de la máquina de acuerdo a tu nivel de condición física y experiencia.",
                                                  "Siéntate en la dorsalera y asegúrate de que tus piernas estén bien sujetas en el soporte de la máquina.",
                                                  "Agarra la barra T con un agarre cerrado, las palmas hacia ti y las manos a una distancia más estrecha que la anchura de los hombros.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Tirando de los codos hacia atrás, lleva la barra hacia tu nuca, contrayendo los músculos de la espalda para realizar el movimiento.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de la espalda y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente los brazos y baja la barra de vuelta a la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsales Trasnuca/dorsalera.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Dorsales Trasnuca/dorsaleraTrasnuca.mp4"
                              },
                              {
                                        "id": "encogimiento-de-hombro-en-shrug",
                                        "name": "Encogimiento de Hombro en Shrug",
                                        "steps": [
                                                  "Ponte de pie con los pies separados a la misma distancia de los hombros.",
                                                  "De frente a la máquina, sujeta las manijas de la máquina.",
                                                  "Mantén la espalda recta, los hombros hacia atrás y el pecho hacia arriba. Esta es tu posición inicial.",
                                                  "Eleva los hombros directamente hacia arriba en un movimiento controlado, contrayendo los músculos superiores de la espalda. Imagina que estás tratando de tocar tus hombros con tus orejas.",
                                                  "Al llegar a la posición más alta posible, mantén la contracción en la parte superior de los hombros durante un segundo para maximizar el estímulo en esos músculos.",
                                                  "Desciende los hombros de manera controlada de vuelta a la posición inicial, evitando movimientos bruscos o rebotes.",
                                                  "Realiza el mismo número de repeticiones, manteniendo una forma adecuada y una ejecución suave del movimiento.",
                                                  "Evita cargar demasiado peso para prevenir lesiones y enfócate en la calidad del movimiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Encogimiento de Hombro en Shrug/trapecioEspalda.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Encogimiento de Hombro en Shrug/encogimientoHombreShrug.mp4"
                              },
                              {
                                        "id": "jalon-a-la-cara-dorsalera",
                                        "name": "Jalón a la Cara (Dorsalera)",
                                        "steps": [
                                                  "Ajusta el peso de la máquina de acuerdo a tu nivel de condición física y experiencia.",
                                                  "Siéntate en la dorsalera y asegúrate de que tus piernas estén bien sujetas en el soporte de la máquina.",
                                                  "Agarra la barra T con un agarre cerrado, las palmas hacia ti y las manos a una distancia más estrecha que la anchura de los hombros.",
                                                  "Mantén una buena postura con la espalda recta, los hombros hacia atrás y el pecho levantado.",
                                                  "Tirando de los codos hacia atrás, lleva la barra hacia el pecho, contrayendo los músculos de la espalda para realizar el movimiento.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de la espalda y mantén esa contracción durante unos segundos.",
                                                  "Extiende lentamente los brazos y baja la barra de vuelta a la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón a la Cara (Dorsalera)/dorsalera.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón a la Cara (Dorsalera)/dorsalera.mp4"
                              },
                              {
                                        "id": "jalon-a-la-cara-supino-dorsalera",
                                        "name": "Jalón a la Cara Supino (Dorsalera)",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ]
                              },
                              {
                                        "id": "jalon-abierto-en-polea",
                                        "name": "Jalón Abierto en Polea",
                                        "steps": [
                                                  "Ajusta las poleas de la máquina en la posición más alta y asegúrate de tener una manija en cada una de ellas.",
                                                  "Arrodíllate en el centro de la máquina, mirando hacia las poleas y toma cada manija con tus manos, asegurándote de que tus brazos estén completamente extendidos.",
                                                  "Contrae los músculos de la espalda y lleva los codos hacia atrás y hacia abajo, manteniendo los brazos doblados en un ángulo de 90 grados.",
                                                  "Mantén la contracción durante unos segundos y luego estira los brazos nuevamente para volver a la posición inicial.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Abierto en Polea/jalon.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Abierto en Polea/jalonAbiertoIndividual.mp4",
                                        "note": "Es importante mantener una postura adecuada durante todo el ejercicio, evitando inclinar el cuerpo hacia adelante o hacia atrás. También debes asegurarte de utilizar una carga adecuada que te permita realizar el movimiento con control y sin forzar la espalda baja."
                              },
                              {
                                        "id": "jalon-dorsal-en-polea",
                                        "name": "Jalón Dorsal en Polea",
                                        "steps": [
                                                  "Ajusta la polea en la posición del medio y selecciona la carga adecuada.",
                                                  "Colócate de pie frente a la polea y da un paso hacia atrás para que tus brazos estén estirados.",
                                                  "Sujeta en cada mano una manija de la polea.",
                                                  "Inhala y jala hacia tu pecho, manteniendo los codos cerca del cuerpo y los hombros hacia abajo y hacia atrás. Exhala al completar el movimiento.",
                                                  "Mantén la contracción en la parte inferior del movimiento durante un segundo antes de volver a la posición inicial con los brazos estirados.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Dorsal en Polea/jalon.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Dorsal en Polea/remoPoleaPie.mp4",
                                        "note": "Es importante mantener una buena postura y controlar el movimiento en todo momento. También es recomendable ajustar la carga adecuada para evitar lesiones y maximizar los resultados."
                              },
                              {
                                        "id": "jalon-frontal",
                                        "name": "Jalón Frontal",
                                        "steps": [
                                                  "Ajusta la polea y sujeta la barra con un agarre amplio (unos 10 cm más que el ancho de los hombros), con las palmas de las manos mirando hacia abajo.",
                                                  "De pie frente a la máquina, asegúrate de tener una buena postura, con la espalda recta y los pies firmemente plantados en el suelo a la altura de los hombros.",
                                                  "Con los brazos completamente extendidos, tira de la barra hacia arriba y hacia el frente, llevándola hacia la parte superior del pecho. Mantén los codos hacia fuera, sin dejarlos caer hacia los lados del cuerpo.",
                                                  "Al acercar la barra al pecho, contrae los músculos de la espalda y los hombros, manteniendo la posición durante un segundo antes de volver a la posición inicial con los brazos completamente extendidos.",
                                                  "Mantén una respiración constante y no permitas que la barra se desplace hacia arriba o abajo demasiado rápido.",
                                                  "Repite el ejercicio durante el número deseado de repeticiones, asegurándote de mantener una buena técnica en todo momento.",
                                                  "Recuerda que es importante ajustar el peso adecuado para tu nivel de fuerza y capacidad, y siempre calentar adecuadamente antes de realizar cualquier ejercicio de levantamiento de peso."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Frontal/jalon.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Jalón Frontal/jalonCara.mp4"
                              },
                              {
                                        "id": "maquina-de-pullover",
                                        "name": "Máquina de Pullover",
                                        "steps": [
                                                  "Ajusta el asiento y el respaldo de la máquina según tu altura y preferencia. La posición del asiento puede variar dependiendo del diseño específico de la máquina, pero generalmente debes sentarte con la espalda bien apoyada en el respaldo y los pies firmemente plantados en el suelo.",
                                                  "Agarra las asas o agarres de la máquina con ambas manos, manteniendo los brazos ligeramente flexionados.",
                                                  "Inspira y lleva las manos hacia arriba y hacia atrás, manteniendo los codos ligeramente flexionados y las manos alineadas con los hombros o ligeramente más arriba.",
                                                  "Siente cómo los músculos del pecho y de la espalda se contraen mientras llevas las manos hacia atrás.",
                                                  "Mantén la posición final durante un segundo para maximizar la contracción muscular.",
                                                  "Exhala y vuelve lentamente a la posición inicial, llevando las manos hacia adelante y hacia abajo, controlando el movimiento en todo momento.",
                                                  "Evita el rebote en la parte inferior del movimiento y mantén el control en todo momento para maximizar la efectividad del ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina de Pullover/pullOver.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina de Pullover/maquinaPullover.mp4",
                                        "note": "Repite el movimiento durante el número deseado de repeticiones, manteniendo una técnica adecuada y una respiración controlada en todo momento."
                              },
                              {
                                        "id": "maquina-lumbar",
                                        "name": "Máquina Lumbar",
                                        "steps": [
                                                  "Siéntate en la máquina de lumbar con la espalda apoyada contra el cojín lumbar.",
                                                  "Ajusta la altura del asiento para que el cojín esté alineado con la zona lumbar de tu espalda.",
                                                  "Coloca los pies firmemente en el suelo o en los soportes de la máquina.",
                                                  "Agarra las empuñaduras laterales, según la configuración de la máquina.",
                                                  "Inhala profundamente mientras te preparas para el movimiento.",
                                                  "Exhala mientras empujas hacia atrás con la zona lumbar, extendiendo la espalda contra la resistencia de la máquina.",
                                                  "Mantén el movimiento controlado y evita arquear demasiado la espalda al final del recorrido.",
                                                  "Inhala mientras regresas lentamente a la posición inicial, manteniendo la tensión en los músculos lumbares.",
                                                  "Realiza el número deseado de series y repeticiones según tu programa de entrenamiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina Lumbar/lumbares.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina Lumbar/maquinaLumbar.mp4",
                                        "note": "Asegúrate de mantener una buena forma durante todo el ejercicio para maximizar la activación de los músculos lumbares y evitar lesiones."
                              },
                              {
                                        "id": "maquina-remo-circular",
                                        "name": "Máquina Remo Circular",
                                        "steps": [
                                                  "Ajusta el asiento de la máquina de remo circular para que las asas estén a la altura de tu pecho cuando te sientes y alcances cómodamente los agarres.",
                                                  "Si la máquina tiene soporte para los pies, coloca los pies firmemente sobre las plataformas, asegurando que la espalda quede recta.",
                                                  "Agarra las asas de la máquina con las palmas hacia adentro o hacia abajo, dependiendo del diseño del equipo y de la variación que prefieras.",
                                                  "Mantén la espalda recta y el pecho elevado, asegurándote de que los hombros estén relajados y hacia atrás antes de comenzar el movimiento.",
                                                  "Inicia el movimiento tirando de las asas hacia ti, llevando los codos hacia atrás en un movimiento circular. Concéntrate en apretar los omóplatos al final de cada repetición para maximizar la contracción en la espalda.",
                                                  "Evita inclinarte hacia adelante o hacia atrás; mantén el torso estable para concentrar el esfuerzo en los músculos de la espalda.",
                                                  "Una vez que los agarres estén cerca de tu torso y hayas completado la contracción, lentamente regresa las asas a la posición inicial mientras mantienes el control del peso.",
                                                  "Repite el movimiento de forma controlada y con la técnica adecuada para el número de repeticiones deseado.",
                                                  "Recuerda respirar adecuadamente durante el ejercicio, exhalando al jalar las asas y manteniendo un ritmo constante. Si eres principiante, enfócate en la forma antes de aumentar el peso para evitar tensión en la zona lumbar."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina Remo Circular/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Máquina Remo Circular/maquinaRemoCircular.mp4"
                              },
                              {
                                        "id": "pull-over-en-polea-alta",
                                        "name": "Pull Over en Polea Alta",
                                        "steps": [
                                                  "Coloca una polea alta en la máquina de poleas y ajusta el peso que deseas levantar.",
                                                  "Toma la cuerda o barra de la polea con ambas manos, con un agarre en pronación (palmas hacia abajo).",
                                                  "Separa los pies al ancho de los hombros, flexiona ligeramente las rodillas y lleva los brazos hacia atrás sobre tu cabeza, manteniéndolos rectos y estirados.",
                                                  "Desde esta posición inicial, baja lentamente los brazos hacia atrás, tratando de mantener los codos extendidos, hasta que sientas un estiramiento en los músculos de la espalda, los hombros y los brazos.",
                                                  "Vuelve a subir los brazos a la posición inicial, realizando una contracción de los músculos de la espalda y los brazos mientras subes.",
                                                  "Repite el movimiento para completar el número de repeticiones deseadas.",
                                                  "Recuerda que es importante mantener la espalda recta y evitar la inclinación hacia delante o hacia atrás durante todo el ejercicio. También puedes variar el agarre de la cuerda o barra para cambiar el énfasis en los músculos trabajados."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Pull Over en Polea Alta/pullOver.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Pull Over en Polea Alta/espaldaPolea.mp4"
                              },
                              {
                                        "id": "remo-a-caballo-con-barra",
                                        "name": "Remo a Caballo con Barra",
                                        "steps": [
                                                  "Comienza de pie con los pies separados a la anchura de los hombros y con las rodillas ligeramente flexionadas. Agarra la barra con las manos separadas a la distancia de los hombros y con las palmas de las manos mirando hacia abajo.",
                                                  "Inclínate hacia adelante desde las caderas, manteniendo la espalda recta y el pecho hacia arriba. La barra debe estar justo debajo de las rodillas.",
                                                  "Tira de la barra hacia arriba, llevándola hacia la parte inferior de tu pecho. A medida que levantas la barra, mantén los codos cerca de tu cuerpo y los hombros hacia abajo y hacia atrás.",
                                                  "Mantén la posición durante un segundo y luego baja lentamente la barra hacia abajo hasta que esté debajo de las rodillas.",
                                                  "Repite el movimiento durante el número deseado de repeticiones.",
                                                  "Es importante mantener una buena forma durante todo el ejercicio y no balancear el cuerpo para ayudar a levantar la barra. Si encuentras que estás haciendo trampa, reduce el peso que estás levantando hasta que puedas hacer el ejercicio correctamente."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo a Caballo con Barra/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo a Caballo con Barra/remoConBarraEnT.mp4"
                              },
                              {
                                        "id": "remo-a-una-mano-en-landmine",
                                        "name": "Remo a una Mano en Landmine",
                                        "steps": [
                                                  "Colócate de lado a la máquina Landmine, con una pierna adelantada y la otra ligeramente retrasada para mantener el equilibrio. Sujeta la punta de la barra con una mano, manteniendo el torso recto y el core activado.",
                                                  "Inclina el torso hacia adelante desde la cintura, manteniendo la espalda recta y el pecho hacia abajo. La mano que no sostiene la barra debe descansar sobre la pierna adelantada o en una posición estable para apoyo.",
                                                  "Con la mano que sujeta la barra, tira de ella hacia tu cadera, manteniendo el codo cerca del torso. Contrae los músculos de la espalda y el bíceps al llegar a la parte superior del movimiento.",
                                                  "Baja la barra lentamente de vuelta a la posición inicial, controlando el movimiento y manteniendo la tensión en los músculos de la espalda durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo a una Mano en Landmine/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo a una Mano en Landmine/remoLandmine.mp4",
                                        "note": "Completa el número deseado de repeticiones y luego cambia de lado, asegurándote de mantener una buena técnica en cada repetición."
                              },
                              {
                                        "id": "remo-al-menton-con-polea",
                                        "name": "Remo al Mentón con Polea",
                                        "steps": [
                                                  "Comienza de pie con los pies separados a la misma distancia que tus hombros y sostén una barra con las palmas hacia ti y las manos separadas a la misma distancia que tus hombros.",
                                                  "Levanta la barra hacia tu mentón, doblando los codos y manteniendo los brazos cerca del cuerpo.",
                                                  "Mantén la posición por un segundo, luego baja la barra lentamente a la posición inicial.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo al Mentón con Polea/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo al Mentón con Polea/remoMenton.mp4",
                                        "note": "Es importante mantener una buena postura y evitar balancear el cuerpo hacia adelante o hacia atrás durante el ejercicio. También debes asegurarte de mantener los codos apuntando hacia los lados y no hacia adelante para evitar poner demasiada tensión en los hombros."
                              },
                              {
                                        "id": "remo-al-menton-en-smith",
                                        "name": "Remo al Mentón en Smith",
                                        "steps": [
                                                  "Comienza de pie con los pies separados a la misma distancia que tus hombros y sostén una barra con las palmas hacia ti y las manos separadas a la misma distancia que tus hombros.",
                                                  "Levanta la barra hacia tu mentón, doblando los codos y manteniendo los brazos cerca del cuerpo.",
                                                  "Mantén la posición por un segundo, luego baja la barra lentamente a la posición inicial.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo al Mentón en Smith/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo al Mentón en Smith/remoMentonSmith.mp4",
                                        "note": "Es importante mantener una buena postura y evitar balancear el cuerpo hacia adelante o hacia atrás durante el ejercicio. También debes asegurarte de mantener los codos apuntando hacia los lados y no hacia adelante para evitar poner demasiada tensión en los hombros."
                              },
                              {
                                        "id": "remo-bajo",
                                        "name": "Remo Bajo",
                                        "steps": [
                                                  "Ajusta el nivel de resistencia de la máquina de remo de acuerdo a tu nivel de condición física y experiencia.",
                                                  "Siéntate en el asiento y agarra el mango de la máquina de remo con las dos manos, los brazos extendidos, los hombros hacia atrás y la espalda recta.",
                                                  "Empieza el movimiento flexionando las piernas para empujar la plataforma de los pies y desplazarte hacia atrás.",
                                                  "Una vez que estás en una posición inclinada hacia atrás, tira del mango hacia tu pecho, manteniendo los codos cerca del cuerpo y los hombros hacia atrás.",
                                                  "Al llegar al punto máximo del movimiento, contrae los músculos de la espalda para realizar la extensión de los brazos y tirar hacia atrás con los omóplatos.",
                                                  "Para completar el movimiento, extiende las piernas y desplázate hacia adelante, llevando el mango hacia adelante con los brazos extendidos.",
                                                  "Repite el movimiento de forma continua y fluida durante el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Bajo/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Bajo/remo.mp4"
                              },
                              {
                                        "id": "remo-caballo",
                                        "name": "Remo Caballo",
                                        "steps": [
                                                  "Colócate de pie frente a la barra y toma la barra con las manos en pronación (palmas hacia abajo) y separadas a una distancia un poco mayor que el ancho de los hombros.",
                                                  "Mantén las piernas ligeramente flexionadas y la espalda recta. Este será tu punto de partida.",
                                                  "Tira de la barra hacia tu pecho, manteniendo los codos pegados al cuerpo y llevando los hombros hacia atrás.",
                                                  "Mantén la posición de contracción durante un segundo y luego baja lentamente la barra a la posición inicial.",
                                                  "Repite el movimiento para completar tu serie."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Caballo/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Caballo/barraDorsal.mp4",
                                        "note": "Es importante tener en cuenta que la forma correcta es fundamental en este ejercicio para evitar lesiones y maximizar los resultados. Mantén una postura correcta y utiliza un peso adecuado a tu nivel de fuerza para asegurarte de hacer el ejercicio de manera segura y efectiva."
                              },
                              {
                                        "id": "remo-de-pie-con-polea-unilateral",
                                        "name": "Remo de Pie con Polea Unilateral",
                                        "steps": [
                                                  "Parado frente a una polea, agarra la manija de la polea con una mano y da un paso hacia atrás, manteniendo los brazos extendidos y las piernas separadas al ancho de los hombros.",
                                                  "Con la mano libre, sujetate de la máquina para mantener la estabilidad.",
                                                  "Contrae los músculos de la espalda y tira de la manija hacia tu torso, manteniendo el codo pegado al costado del cuerpo y la muñeca recta.",
                                                  "Sostén la contracción por un momento y luego regresa lentamente la manija a la posición inicial.",
                                                  "Completa el número deseado de repeticiones y luego cambia de lado para trabajar el otro brazo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo de Pie con Polea Unilateral/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo de Pie con Polea Unilateral/remoPieUnaMano.mp4",
                                        "note": "Es importante mantener una postura adecuada durante todo el ejercicio, evitando la inclinación excesiva del cuerpo y manteniendo la espalda recta. También asegúrate de realizar el ejercicio de manera controlada y evitar el balanceo del cuerpo para obtener el máximo beneficio."
                              },
                              {
                                        "id": "remo-en-landmine-agarre-cerrado",
                                        "name": "Remo en Landmine Agarre Cerrado",
                                        "steps": [
                                                  "Colócate encima de la barra, con un pie a cada lado.",
                                                  "Agarra la barra con las manos y entrelaza los dedos, es decir, las palmas de las manos juntas.",
                                                  "Mantén los brazos extendidos y la espalda recta.",
                                                  "Tira de la barra hacia tu cuerpo, llevando los codos hacia atrás y manteniendo los brazos pegados al cuerpo.",
                                                  "Mantén la contracción durante un segundo y luego baja la barra de manera controlada hasta la posición inicial.",
                                                  "Realiza varias repeticiones, manteniendo la técnica correcta y controlando la respiración."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en Landmine Agarre Cerrado/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en Landmine Agarre Cerrado/remoCaballoLandmine.mp4",
                                        "note": "Es importante que mantengas una postura correcta durante todo el ejercicio y que no arquees la espalda en ningún momento. También es recomendable empezar con un peso ligero e ir aumentando gradualmente a medida que te sientas más cómodo y seguro con el movimiento."
                              },
                              {
                                        "id": "remo-en-shrug",
                                        "name": "Remo en Shrug",
                                        "steps": [
                                                  "Comienza apoyando una rodilla y una mano en un banco o la misma máquina si lo permite y sujeta la manija con la otra mano.",
                                                  "Mantén la espalda recta y los abdominales contraídos para asegurarte de tener una buena postura.",
                                                  "Levanta la manija hacia tu torso manteniendo el codo cerca de tu cuerpo.",
                                                  "Haz una pausa en la parte superior del movimiento y luego baja lentamente la mancuerna hacia la posición inicial.",
                                                  "Repite para completar el número deseado de repeticiones y luego cambia de lado.",
                                                  "Recuerda hacer el ejercicio de forma controlada y sin balancear el cuerpo para evitar lesiones y asegurar una buena ejecución del ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en Shrug/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en Shrug/remoShrug.mp4"
                              },
                              {
                                        "id": "remo-en-t-agarre-cerrado",
                                        "name": "Remo en T Agarre Cerrado",
                                        "steps": [
                                                  "Acuéstate boca abajo sobre el banco de la máquina de remo. Tus pies deben estar apoyados en el suelo y las piernas estiradas.",
                                                  "Agarra la barra con las manos en pronación, es decir, las palmas de las manos mirando hacia abajo.",
                                                  "Mantén los brazos extendidos y la espalda recta.",
                                                  "Tira de la barra hacia tu cuerpo, llevando los codos hacia atrás y manteniendo los brazos pegados al cuerpo.",
                                                  "Mantén la contracción durante un segundo y luego baja la barra de manera controlada hasta la posición inicial.",
                                                  "Realiza varias repeticiones, manteniendo la técnica correcta y controlando la respiración."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en T Agarre Cerrado/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en T Agarre Cerrado/remoTSupino.mp4",
                                        "note": "Es importante que mantengas una postura correcta durante todo el ejercicio y que no arquees la espalda en ningún momento. También es recomendable empezar con un peso ligero e ir aumentando gradualmente a medida que te sientas más cómodo y seguro con el movimiento."
                              },
                              {
                                        "id": "remo-en-t-unilateral",
                                        "name": "Remo en T Unilateral",
                                        "steps": [
                                                  "Acuéstate boca abajo sobre el banco de la máquina de remo. Tus pies deben estar apoyados en el suelo y las piernas estiradas.",
                                                  "Agarra la barra con las manos en pronación, es decir, las palmas de las manos mirando hacia abajo.",
                                                  "Mantén los brazos extendidos y la espalda recta.",
                                                  "Tira de la barra hacia tu cuerpo, llevando los codos hacia atrás y manteniendo los brazos pegados al cuerpo.",
                                                  "Mantén la contracción durante un segundo y luego baja la barra de manera controlada hasta la posición inicial.",
                                                  "Realiza varias repeticiones, manteniendo la técnica correcta y controlando la respiración."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en T Unilateral/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo en T Unilateral/remoSentado.mp4",
                                        "note": "Es importante que mantengas una postura correcta durante todo el ejercicio y que no arquees la espalda en ningún momento. También es recomendable empezar con un peso ligero e ir aumentando gradualmente a medida que te sientas más cómodo y seguro con el movimiento."
                              },
                              {
                                        "id": "remo-hammer",
                                        "name": "Remo Hammer",
                                        "steps": [
                                                  "Asegúrate de ajustar la resistencia de acuerdo a tu nivel de condición física. Comienza con una resistencia moderada y ve aumentando gradualmente a medida que te sientas más cómodo y ganas fuerza.",
                                                  "Siéntate en el asiento de la máquina con los pies colocados en los reposapiés. Asegúrate de que tus rodillas estén ligeramente flexionadas y las piernas extendidas.",
                                                  "Sujeta la barra de remo con ambas manos, manteniendo las muñecas en línea recta. El agarre debe ser firme pero no excesivamente tenso.",
                                                  "Empieza el movimiento tirando de la barra hacia tu cuerpo, manteniendo los brazos extendidos. A medida que tires de la barra, flexiona las rodillas y lleva los talones hacia tu cuerpo.",
                                                  "Mantén una postura erguida, con el torso ligeramente inclinado hacia adelante y el abdomen contraído. Evita encorvar la espalda o arquear los hombros.",
                                                  "Continúa tirando de la barra hacia tu cuerpo, llevando los codos hacia atrás y manteniendo los hombros relajados. Hazlo de manera fluida y controlada.",
                                                  "Una vez que hayas tirado de la barra hacia tu cuerpo, extiende los brazos gradualmente mientras empujas con las piernas para volver a la posición inicial. Mantén el control durante todo el movimiento.",
                                                  "Mantén un ritmo constante y controlado mientras realizas el ejercicio. Exhala cuando tires de la barra hacia ti y inhala al volver a la posición inicial.",
                                                  "Comienza con un tiempo o número de repeticiones adecuado para tu nivel de condición física. A medida que vayas progresando, puedes aumentar la duración o el número de repeticiones gradualmente."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Hammer/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Hammer/remoHammer.mp4"
                              },
                              {
                                        "id": "remo-hammer-bajo",
                                        "name": "Remo Hammer Bajo",
                                        "steps": [
                                                  "Ajusta la máquina de remo hammer para que el asiento y el pecho de la máquina estén en una posición cómoda para tu altura.",
                                                  "Siéntate en la máquina con el pecho bien apoyado en el respaldo y los pies firmemente colocados en el suelo.",
                                                  "Agarra las asas de la máquina con un agarre neutro (las palmas mirándose entre sí) y extiende los brazos completamente.",
                                                  "Inclínate ligeramente hacia adelante desde la cadera manteniendo la espalda recta y los hombros hacia atrás.",
                                                  "Contrae los músculos de la espalda y los hombros mientras flexionas los codos y tiras de las asas hacia tu torso.",
                                                  "Lleva los codos hacia atrás y hacia abajo, manteniendo la contracción en los músculos de la espalda.",
                                                  "Lleva las asas hacia la parte baja del abdomen, sintiendo la contracción en los músculos de la espalda baja.",
                                                  "Extiende los codos de manera controlada para volver a la posición inicial, manteniendo la tensión en los músculos de la espalda durante todo el movimiento.",
                                                  "Realiza el mismo número de repeticiones, asegurándote de mantener una buena forma y control en todo momento.",
                                                  "Ajusta la carga de la máquina según tu nivel de fuerza y comodidad, comenzando con un peso adecuado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Hammer Bajo/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Hammer Bajo/remoHammerBajo.mp4"
                              },
                              {
                                        "id": "remo-sentado-agarre-abierto",
                                        "name": "Remo Sentado Agarre Abierto",
                                        "steps": [
                                                  "Mantén la espalda recta y retraé las escápulas.",
                                                  "Jala la resistencia hacia el torso o cintura de forma controlada.",
                                                  "Pausa brevemente sintiendo la contracción dorsal y regresa despacio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Sentado Agarre Abierto/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Sentado Agarre Abierto/remoSentadoAbierto.mp4"
                              },
                              {
                                        "id": "remo-sentado-agarre-cerrado",
                                        "name": "Remo Sentado Agarre Cerrado",
                                        "steps": [
                                                  "Ajusta el nivel de resistencia de la máquina de remo de acuerdo a tu nivel de condición física y experiencia.",
                                                  "Siéntate en el asiento y agarra el mango de la máquina de remo con las dos manos, los brazos extendidos, los hombros hacia atrás y la espalda recta.",
                                                  "Empieza el movimiento flexionando las piernas para empujar la plataforma de los pies y desplazarte hacia atrás.",
                                                  "Una vez que estás en una posición inclinada hacia atrás, tira del mango hacia tu pecho, manteniendo los codos cerca del cuerpo y los hombros hacia atrás.",
                                                  "Al llegar al punto máximo del movimiento, contrae los músculos de la espalda para realizar la extensión de los brazos y tirar hacia atrás con los omóplatos.",
                                                  "Para completar el movimiento, extiende las piernas y desplázate hacia adelante, llevando el mango hacia adelante con los brazos extendidos.",
                                                  "Repite el movimiento de forma continua y fluida durante el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Sentado Agarre Cerrado/remo.png",
                                        "videoUrl": "/Entrenamientos/Espalda/Poleas y maquinas/Remo Sentado Agarre Cerrado/remoSentadoCerrado.mp4"
                              }
                    ]
          }
]
    },
            femorales: {
        id: 'femorales',
        name: 'Femorales',
        subtitle: 'Isquiosurales',
        cardImageUrl: '/Entrenamientos/Femorales/femoralesmini.png',
        detailImageUrl: '/Entrenamientos/Femorales/femorales.png',
        backHighlight: true,
        equipmentCategories: [
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "camilla-de-femorales",
                                        "name": "Camilla de Femorales",
                                        "steps": [
                                                  "Antes de comenzar, ajusta la máquina para que se adapte a tu altura. Asegúrate de que los rodillos acolchados estén en línea con tus tobillo.",
                                                  "Selecciona un peso que te permita realizar de 10 a 12 repeticiones con buena forma. Si es la primera vez que usas esta máquina, comienza con un peso ligero y ve aumentando gradualmente.",
                                                  "Acuéstate boca abajo, sujeta las manijas que tienes en frente y coloca los pies apoyados en los rodillos acolchados. Asegúrate de que las rodillas estén alineadas con los ejes de la máquina.",
                                                  "Levanta los pies y flexiona las piernas hacia los glúteos, manteniendo las rodillas en su lugar. Asegúrate de exhalar durante la fase de esfuerzo.",
                                                  "Extiende lentamente las piernas hacia abajo, manteniendo el control y evitando que los rodillos acolchados toquen el suelo. Inhala durante la fase de relajación.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Camilla de Femorales/camillaFemoral.png",
                                        "videoUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Camilla de Femorales/isquiotibiales.mp4"
                              },
                              {
                                        "id": "camilla-de-femorales-unilateral",
                                        "name": "Camilla de Femorales Unilateral",
                                        "steps": [
                                                  "Antes de comenzar, ajusta la máquina para que se adapte a tu altura. Asegúrate de que los rodillos acolchados estén en línea con tus tobillo.",
                                                  "Selecciona un peso que te permita realizar de 10 a 12 repeticiones con buena forma. Si es la primera vez que usas esta máquina, comienza con un peso ligero y ve aumentando gradualmente.",
                                                  "Acuéstate en el asiento con la espalda apoyada en el respaldo y los pies apoyados en los rodillos acolchados. Asegúrate de que las rodillas estén alineadas con los ejes de la máquina.",
                                                  "Levanta un solo pie y flexiona la pierna hacia los glúteos, manteniendo las rodillas en su lugar. Asegúrate de exhalar durante la fase de esfuerzo.",
                                                  "Extiende lentamente la pierna hacia abajo, manteniendo el control y evitando que los rodillos acolchados toquen el suelo. Inhala durante la fase de relajación.",
                                                  "Cambia de pierna y repite el movimiento"
                                        ],
                                        "imageUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Camilla de Femorales Unilateral/camillaFemoral.png",
                                        "videoUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Camilla de Femorales Unilateral/camillaFemoralUnilateral.mp4"
                              },
                              {
                                        "id": "curl-femoral-en-polea",
                                        "name": "Curl Femoral en Polea",
                                        "steps": [
                                                  "Coloca un sistema de polea baja con el accesorio adecuado (generalmente un tobillo o una correa) alrededor de uno de tus tobillos. Ajusta el peso adecuado en la máquina.",
                                                  "Párate frente a la máquina con el tobillo asegurado en el accesorio y mirando hacia adelante.",
                                                  "Sujeta las asas de la máquina para mantener el equilibrio si es necesario.",
                                                  "Inicia el movimiento flexionando la pierna en la que está colocado el accesorio, llevando el talón hacia los glúteos.",
                                                  "Mantén el torso erguido y evita balancear el cuerpo hacia adelante o hacia atrás.",
                                                  "Contrae los músculos del tendón de la corva (parte posterior del muslo) mientras llevas el talón hacia los glúteos.",
                                                  "Mantén una breve pausa en la posición contraída y luego baja la pierna de manera controlada hasta volver a la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Curl Femoral en Polea/camillaFemoral.png",
                                        "videoUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Curl Femoral en Polea/curlFemoralPolea.mp4"
                              },
                              {
                                        "id": "femorales-de-pie",
                                        "name": "Femorales de Pie",
                                        "steps": [
                                                  "Ajuste el asiento de la máquina para que la parte superior de las almohadillas quede justo por encima de sus tobillos.",
                                                  "Colóquese frente a la máquina y agarre las manijas laterales para mantener el equilibrio.",
                                                  "Coloque la parte posterior de una de las piernas en la almohadilla y asegúrese de que su rodilla quede justo en el borde de la misma.",
                                                  "La pierna que no está en la almohadilla debe estar ligeramente flexionada en la rodilla y sosteniendo el peso del cuerpo.",
                                                  "Asegúrese de que sus rodillas estén alineadas con los ejes de la máquina y que las almohadillas estén ajustadas contra la pierna que se está ejercitando.",
                                                  "Contraiga los músculos de la parte posterior del muslo y empuje la almohadilla hacia atrás, doblando la pierna en la rodilla. Asegúrese de que la pierna no se mueva hacia afuera durante el movimiento.",
                                                  "Mantenga la posición por un segundo y luego baje lentamente la almohadilla a la posición inicial, controlando el movimiento.",
                                                  "Repita el movimiento para el número deseado de repeticiones y luego cambie de pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Femorales de Pie/camillaFemoral.png",
                                        "videoUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Femorales de Pie/femorales.mp4",
                                        "note": "Al realizar este ejercicio, es importante que mantenga una buena postura y que evite el balanceo del cuerpo. Si se siente incómodo o experimenta algún dolor, reduzca la carga o detenga el ejercicio por completo"
                              },
                              {
                                        "id": "maquina-curl-femoral-unilateral",
                                        "name": "Máquina Curl Femoral Unilateral",
                                        "steps": [
                                                  "Colóquese frente a la máquina y agarre las manijas laterales para mantener el equilibrio.",
                                                  "Coloque la parte posterior de una de las piernas en la almohadilla y asegúrese de que su rodilla quede justo en el borde de la misma.",
                                                  "La pierna que no está en la almohadilla debe estar ligeramente flexionada en la rodilla y sosteniendo el peso del cuerpo.",
                                                  "Asegúrese de que sus rodillas estén alineadas con los ejes de la máquina y que las almohadillas estén ajustadas contra la pierna que se está ejercitando.",
                                                  "Contraiga los músculos de la parte posterior del muslo y empuje la almohadilla hacia atrás, doblando la pierna en la rodilla. Asegúrese de que la pierna no se mueva hacia afuera durante el movimiento.",
                                                  "Mantenga la posición por un segundo y luego baje lentamente la almohadilla a la posición inicial, controlando el movimiento.",
                                                  "Repita el movimiento para el número deseado de repeticiones y luego cambie de pierna."
                                        ],
                                        "imageUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Máquina Curl Femoral Unilateral/camillaFemoral.png",
                                        "videoUrl": "/Entrenamientos/Femorales/Poleas y maquinas/Máquina Curl Femoral Unilateral/curlFemoralUnilateral.mp4",
                                        "note": "Al realizar este ejercicio, es importante que mantenga una buena postura y que evite el balanceo del cuerpo. Si se siente incómodo o experimenta algún dolor, reduzca la carga o detenga el ejercicio por completo"
                              }
                    ]
          }
]
    },
                gluteos: {
        id: 'gluteos',
        name: 'Glúteos',
        subtitle: 'Glúteo mayor y medio',
        cardImageUrl: '/Entrenamientos/Gluteos/gluteosmini.png',
        detailImageUrl: '/Entrenamientos/Gluteos/gluteos.png',
        backHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "banco-hip-thrust",
                                        "name": "Banco Hip Thrust",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una barra y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la barra en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Banco Hip Thrust/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Banco Hip Thrust/bancoHipTruck.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              },
                              {
                                        "id": "hip-thrust",
                                        "name": "Hip Thrust",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una barra y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la barra en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Hip Thrust/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Hip Thrust/empujeCaderaBarra.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              },
                              {
                                        "id": "maquina-hip-thrust-parado",
                                        "name": "Máquina Hip Thrust Parado",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una barra y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la barra en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Máquina Hip Thrust Parado/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Máquina Hip Thrust Parado/maquinaHipThrustParado.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              },
                              {
                                        "id": "peso-muerto-rumano",
                                        "name": "Peso Muerto Rumano",
                                        "steps": [
                                                  "Coloca una barra en el suelo frente a ti y pisa debajo de ella con los pies separados a la altura de los hombros.",
                                                  "Agarra la barra con un agarre pronunciado (palmas hacia abajo) y las manos separadas a una distancia mayor que el ancho de tus hombros.",
                                                  "Mantén las piernas ligeramente flexionadas y la espalda recta.",
                                                  "Levanta la barra del suelo, llevando la cadera hacia atrás y manteniendo la espalda recta.",
                                                  "Una vez que la barra esté a la altura de tus rodillas, comienza a bajarla lentamente mientras llevas la cadera hacia adelante y mantienes la espalda recta.",
                                                  "Baja la barra hasta que llegue a la altura de tus tobillos o hasta que sientas un estiramiento en los isquiotibiales.",
                                                  "Mantén la posición durante unos segundos y luego levanta la barra llevando la cadera hacia atrás y manteniendo la espalda recta.",
                                                  "Realiza varias repeticiones de este movimiento, asegurándote de mantener la técnica adecuada y evitando cualquier tipo de balanceo o rebote."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Rumano/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Rumano/pesoMuerto.mp4",
                                        "note": "Es importante recordar que el peso muerto rumano es un ejercicio avanzado que requiere de una buena técnica y fuerza en la cadena posterior. Si eres principiante, es recomendable que comiences con una carga más ligera y te enfoques en dominar la técnica antes de incrementar la carga."
                              },
                              {
                                        "id": "peso-muerto-rumano-a-una-pierna-con-barra",
                                        "name": "Peso Muerto Rumano a una Pierna con Barra",
                                        "steps": [
                                                  "Comienza de pie, sosteniendo la barra en la mano derecha a la altura del muslo.",
                                                  "Levanta el pie izquierdo del suelo y mantén el equilibrio sobre el pie derecho.",
                                                  "Mientras mantienes la pierna izquierda extendida y el pie levantado, inclina el torso hacia adelante, manteniendo la espalda recta.",
                                                  "Continúa inclinando el torso hacia adelante hasta que sientas un estiramiento en la parte posterior de la pierna derecha.",
                                                  "Mantén la barra cerca de la pierna derecha mientras te inclinas hacia adelante.",
                                                  "Luego, regresa a la posición inicial y repite el movimiento para completar una serie de repeticiones.",
                                                  "Luego, cambia de pierna y realiza el ejercicio con la pierna izquierda mientras sostienes la barra en la mano izquierda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Rumano a una Pierna con Barra/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Rumano a una Pierna con Barra/pesoMuertoRumanoAUnaPiernaEnDeficitConBarra.mp4",
                                        "note": "Es importante mantener una buena postura durante todo el ejercicio, con la espalda recta y los hombros hacia atrás. Además, es importante mantener el equilibrio mientras estás en una sola pierna. Si eres nuevo en este ejercicio, comienza con la barra sin peso y agrega discos gradualmente a medida que te sientas más cómodo/cómoda con el movimiento"
                              },
                              {
                                        "id": "peso-muerto-sumo-con-barra",
                                        "name": "Peso Muerto Sumo con Barra",
                                        "steps": [
                                                  "Coloca una barra en el suelo y párate frente a ella con los pies más anchos que el ancho de los hombros y los dedos de los pies apuntando hacia afuera en un ángulo de aproximadamente 45 grados.",
                                                  "Agarra la barra con ambas manos en un agarre pronado (palmas hacia abajo), con las manos colocadas más anchas que el ancho de los hombros.",
                                                  "Baja tu cuerpo hacia abajo doblando las rodillas y las caderas, manteniendo la espalda recta y el pecho levantado. Tu espalda baja debe estar en una posición neutra y tus hombros deben estar por encima o ligeramente delante de la barra.",
                                                  "Desde esta posición, empuja con las piernas y levanta la barra del suelo extendiendo las caderas y las rodillas simultáneamente. Mantén la barra cerca de tu cuerpo mientras te levantas.",
                                                  "Una vez que estés de pie completamente recto, contrae los glúteos en la parte superior del movimiento y lleva los hombros hacia atrás para completar la extensión completa.",
                                                  "Baja la barra de vuelta al suelo siguiendo el mismo camino que tomaste para levantarla, doblando las rodillas y las caderas mientras mantienes la espalda recta y el pecho levantado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Sumo con Barra/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Peso Muerto Sumo con Barra/sumoMuertoBarra.mp4"
                              },
                              {
                                        "id": "puente-de-gluteos-con-barra",
                                        "name": "Puente de Glúteos con Barra",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una barra y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la barra en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Barra/Puente de Glúteos con Barra/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Barra/Puente de Glúteos con Barra/puenteGluteosBarra.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "caminata-de-peso-muerto",
                                        "name": "Caminata de Peso muerto",
                                        "steps": [
                                                  "Empieza de pie con una mancuerna en cada mano, con los pies separados a la altura de los hombros y los dedos de los pies apuntando hacia adelante.",
                                                  "Contrae los músculos abdominales y mantén la espalda recta mientras bajas los brazos y las mancuernas hacia el suelo. Mantén las piernas ligeramente flexionadas.",
                                                  "Una vez que las mancuernas toquen el suelo, endereza las piernas y los brazos para levantarte.",
                                                  "Da un paso hacia adelante con el pie derecho mientras bajas las mancuernas hacia el suelo, manteniendo la espalda recta y las piernas ligeramente flexionadas.",
                                                  "Levántate y da un paso hacia adelante con el pie izquierdo mientras bajas las mancuernas hacia el suelo.",
                                                  "Continúa alternando los pasos y las flexiones de cadera mientras mantienes la postura adecuada.",
                                                  "Es importante que te asegures de mantener la espalda recta durante todo el ejercicio y que no levantes las mancuernas con la fuerza de la espalda, sino con la de las piernas y los glúteos. Además, es importante que empieces con un peso adecuado para ti y que no te excedas en peso para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Caminata de Peso muerto/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Caminata de Peso muerto/marchaDeIsquiotibiales.mp4"
                              },
                              {
                                        "id": "empuje-de-caderas-con-mancuerna",
                                        "name": "Empuje de Caderas con Mancuerna",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una mancuerna y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la mancuerna en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Empuje de Caderas con Mancuerna/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Empuje de Caderas con Mancuerna/empujeDeCaderasConMancuernas.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              },
                              {
                                        "id": "peso-muerto-con-mancuerna",
                                        "name": "Peso Muerto con Mancuerna",
                                        "steps": [
                                                  "Colócate de pie con los pies separados a la anchura de los hombros, con una mancuerna en cada mano a los lados del cuerpo.",
                                                  "Mantén una ligera flexión en las rodillas y la espalda recta, mirando hacia adelante.",
                                                  "Inclínate hacia adelante desde las caderas, llevando el torso hacia el suelo mientras mantienes las mancuernas cerca de las piernas.",
                                                  "Baja las mancuernas hacia el suelo, manteniendo los brazos extendidos y la espalda plana.",
                                                  "Continúa bajando hasta sentir un estiramiento en los músculos posteriores de las piernas y en la parte baja de la espalda.",
                                                  "Asegúrate de mantener una buena forma y no redondear la espalda.",
                                                  "Al llegar al punto más bajo, revierte el movimiento llevando el torso hacia arriba y volviendo a la posición inicial.",
                                                  "Puedes ajustar el peso de las mancuernas según tu nivel de fuerza y comodidad."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto con Mancuerna/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto con Mancuerna/pesoMuertoMancuerna.mp4"
                              },
                              {
                                        "id": "peso-muerto-rumano-a-una-pierna-con-mancuerna",
                                        "name": "Peso Muerto Rumano a una Pierna con Mancuerna",
                                        "steps": [
                                                  "Toma una mancuerna en cada mano y coloca los pies separados a la anchura de los hombros.",
                                                  "Levanta uno de los pies del suelo, doblando la rodilla y manteniendo el otro pie firme en el suelo.",
                                                  "Inclina tu torso hacia adelante y lleva las mancuernas hacia abajo, manteniendo las piernas y la espalda rectas.",
                                                  "Continúa inclinándote hacia adelante mientras levantas la pierna que tienes en el aire, manteniendo la pierna que está en el suelo ligeramente flexionada.",
                                                  "Baja las mancuernas lentamente hacia el suelo mientras te mantienes equilibrado en una pierna.",
                                                  "Luego, regresa a la posición inicial llevando las mancuernas hacia arriba mientras bajas la pierna que tienes en el aire hacia el suelo.",
                                                  "Repite el ejercicio con la otra pierna.",
                                                  "Es importante recordar mantener la espalda recta y las piernas ligeramente flexionadas durante todo el movimiento para evitar lesiones. Además, se recomienda comenzar con un peso ligero y aumentarlo gradualmente a medida que te sientas más cómodo/cómoda con el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano a una Pierna con Mancuerna/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano a una Pierna con Mancuerna/pesoMuertoRumanoConMancuernaAUnaPierna.mp4"
                              },
                              {
                                        "id": "peso-muerto-rumano-a-una-pierna-con-mancuerna-unilateral",
                                        "name": "Peso Muerto Rumano a una Pierna con Mancuerna Unilateral",
                                        "steps": [
                                                  "Comienza de pie, sosteniendo una mancuerna en la mano derecha a la altura del muslo.",
                                                  "Levanta el pie izquierdo del suelo y mantén el equilibrio sobre el pie derecho.",
                                                  "Mientras mantienes la pierna izquierda extendida y el pie levantado, inclina el torso hacia adelante, manteniendo la espalda recta.",
                                                  "Continúa inclinando el torso hacia adelante hasta que sientas un estiramiento en la parte posterior de la pierna derecha.",
                                                  "Mantén la mancuerna cerca de la pierna derecha mientras te inclinas hacia adelante.",
                                                  "Luego, regresa a la posición inicial y repite el movimiento para completar una serie de repeticiones.",
                                                  "Luego, cambia de pierna y realiza el ejercicio con la pierna izquierda mientras sostienes la mancuerna en la mano izquierda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano a una Pierna con Mancuerna Unilateral/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano a una Pierna con Mancuerna Unilateral/pesoMuertoRumanoConMancuernaCruzadoAUnaPierna.mp4",
                                        "note": "Es importante mantener una buena postura durante todo el ejercicio, con la espalda recta y los hombros hacia atrás. Además, es importante mantener el equilibrio mientras estás en una sola pierna. Si eres nuevo/nueva en este ejercicio, comienza con una mancuerna ligera y aumenta el peso gradualmente a medida que te sientas más cómodo/cómda con el movimiento."
                              },
                              {
                                        "id": "peso-muerto-rumano-con-mancuerna",
                                        "name": "Peso Muerto Rumano con Mancuerna",
                                        "steps": [
                                                  "Colócate de pie detrás de la pesa con los pies ligeramente separados a la altura de los hombros y los dedos de los pies apuntando hacia afuera.",
                                                  "Agáchate y agarra la pesa con ambas manos, con las palmas hacia abajo y los dedos envolviendola.",
                                                  "Mantén los brazos rectos y los hombros hacia atrás y abajo, apretando los omóplatos.",
                                                  "Toma aire y aprieta el abdomen y los glúteos, y comienza a levantar la pesa con un movimiento controlado.",
                                                  "Mantén la espalda recta y los brazos extendidos mientras levantas la pesa.",
                                                  "A medida que te levantas, empuja las caderas hacia adelante y levanta la pesa hasta que estés completamente erguido.",
                                                  "Mantén la pesa cerca de tu cuerpo durante todo el movimiento y evita inclinarte hacia adelante.",
                                                  "Mantén la posición de la pesa en la parte superior del movimiento durante un segundo, luego exhala y baja lentamente la barra hacia el suelo, manteniendo la espalda recta.",
                                                  "Repite el movimiento para completar la serie."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano con Mancuerna/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Peso Muerto Rumano con Mancuerna/pesoMuertoRumanoMancuerna.mp4",
                                        "note": "Es importante asegurarse de mantener una buena postura y técnica durante todo el ejercicio para evitar lesiones. También es recomendable empezar con poco peso e ir aumentando gradualmente a medida que se gana fuerza y confianza."
                              },
                              {
                                        "id": "puente-de-gluteos-con-mancuerna",
                                        "name": "Puente de Glúteos con Mancuerna",
                                        "steps": [
                                                  "Acuéstate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una mancuerna y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto y los hombros en el suelo. Mantén la mancuerna en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante 12-15 repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Mancuernas/Puente de Glúteos con Mancuerna/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Mancuernas/Puente de Glúteos con Mancuerna/puenteDeGluteosConMancuerna.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "extension-de-tronco",
                                        "name": "Extensión de Tronco",
                                        "steps": [
                                                  "Colócate en la máquina con los pies asegurados bajo los cojines para los pies y las caderas apoyadas contra el cojín para el muslo. Cruza los brazos sobre el pecho o colócalos detrás de la cabeza.",
                                                  "Mantén el torso recto y el core contraído mientras bajas lentamente el tronco hacia adelante, flexionando las caderas. Baja hasta que sientas un ligero estiramiento en los isquiotibiales y la espalda baja.",
                                                  "Desde la posición inferior, utiliza los músculos de la parte baja de la espalda y los glúteos para levantar el tronco de nuevo a la posición inicial, extendiendo completamente las caderas.",
                                                  "Mantén una breve pausa en la posición superior, asegurándote de no arquear excesivamente la espalda baja para evitar tensión innecesaria en la columna.",
                                                  "Baja lentamente el tronco de vuelta a la posición inicial, controlando el movimiento y manteniendo la tensión en los músculos de la espalda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Extensión de Tronco/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Extensión de Tronco/hiperextenciones.mp4",
                                        "note": "Completa el número deseado de repeticiones, manteniendo una buena técnica y control en cada repetición."
                              },
                              {
                                        "id": "hip-thrust-en-maquina",
                                        "name": "Hip Thrust en Máquina",
                                        "steps": [
                                                  "Carga el peso necesario en la máquina",
                                                  "Acostate sobre tu espalda con las piernas dobladas y los pies apoyados en el suelo. Toma una manija y sosténla en tu regazo, justo debajo de tus caderas.",
                                                  "Asegúrate de que tus pies estén separados al ancho de tus caderas y que tus rodillas estén alineadas con tus tobillos.",
                                                  "Empuja tus caderas hacia arriba mientras aprietas tus glúteos y mantén tu torso recto. Mantén la barra en su lugar debajo de tus caderas.",
                                                  "Mantén la posición por 1-2 segundos y luego baja lentamente las caderas hacia el suelo.",
                                                  "Repite el movimiento durante las repeticiones indicadas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Hip Thrust en Máquina/empujeCadera.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Hip Thrust en Máquina/elevacionCaderaMaquina.mp4",
                                        "note": "Recuerda que para evitar lesiones es importante mantener una buena técnica y controlar el peso que estás levantando. Si eres principiante, te recomiendo comenzar con un peso más ligero y aumentar gradualmente a medida que ganas fuerza y confianza en el ejercicio."
                              },
                              {
                                        "id": "multicadera-para-gluteos",
                                        "name": "Multicadera para Glúteos",
                                        "steps": [
                                                  "Selecciona el peso adecuado para ti ajustando el pin de la pila de pesas en la máquina. Comienza con un peso ligero y ve aumentando a medida que te sientas más cómodo/cómoda.",
                                                  "Colócate de pie con la pierna más cercana a la máquina cerca del soporte.",
                                                  "Mantén una buena postura con la espalda recta, el pecho levantado y los hombros hacia atrás.",
                                                  "Agarra el soporte de la máquina con una mano para mantener el equilibrio y la estabilidad.",
                                                  "Levanta la pierna que apoyada en la máquina y extiéndela hacia atrás en un movimiento controlado, manteniendo la rodilla ligeramente flexionada.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Baja la pierna controladamente hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Multicadera para Glúteos/patadaGluteos.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Multicadera para Glúteos/multicaderaGluteos.mp4"
                              },
                              {
                                        "id": "maquina-de-gluteos-horizontal",
                                        "name": "Máquina de Glúteos Horizontal",
                                        "steps": [
                                                  "Ajusta el asiento y la almohadilla de la máquina de acuerdo a tu altura y posición. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Apóyate en la máquina de patada de glúteos con la espalda recta y coloca tus pies en los soportes de las almohadillas. Coloca tus manos en los agarres laterales de la máquina para mantener el equilibrio.",
                                                  "Abre las piernas para que estén a la altura de las caderas. Coloca la pierna derecha en la almohadilla de la máquina y mantén la pierna izquierda doblada.",
                                                  "Contrae los músculos de los glúteos y empuja hacia atrás la almohadilla de la máquina con la pierna derecha. Mantén la pierna izquierda en su posición durante todo el ejercicio. Regresa la pierna a la posición inicial y repite el ejercicio.",
                                                  "Realiza el mismo número de repeticiones con ambas piernas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Máquina de Glúteos Horizontal/patadaGluteos.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Máquina de Glúteos Horizontal/maquinaGluteoHorizontal.mp4"
                              },
                              {
                                        "id": "maquina-de-gluteos-vertical",
                                        "name": "Máquina de Glúteos Vertical",
                                        "steps": [
                                                  "Ajusta el asiento y la almohadilla de la máquina de acuerdo a tu altura y posición. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Apoyate en la máquina de patada de glúteos con la espalda recta y coloca tus pies en los soportes. Coloca tus manos en los agarres laterales de la máquina para mantener el equilibrio.",
                                                  "Abre las piernas para que estén a la altura de las caderas. Coloca la pierna derecha en la almohadilla de la máquina y mantén la pierna izquierda doblada.",
                                                  "Contrae los músculos de los glúteos y empuja hacia atrás la almohadilla de la máquina con la pierna derecha. Mantén la pierna izquierda en su posición durante todo el ejercicio. Regresa la pierna a la posición inicial y repite el ejercicio.",
                                                  "Realiza el mismo número de repeticiones con ambas piernas."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Máquina de Glúteos Vertical/patadaGluteos.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Máquina de Glúteos Vertical/patadaGluteos.mp4"
                              },
                              {
                                        "id": "patada-de-gluteos-con-polea",
                                        "name": "Patada de Glúteos con Polea",
                                        "steps": [
                                                  "Asegúrate de que la polea de la máquina esté ajustada en su posición más baja y que el accesorio para tobillos esté conectado al cable.",
                                                  "Selecciona el peso adecuado para ti ajustando el pin de la pila de pesas en la máquina. Comienza con un peso ligero y ve aumentando a medida que te sientas más cómodo/cómoda.",
                                                  "Colócate de pie con la pierna más cercana a la máquina cerca del soporte. Coloca el accesorio para tobillos en la pierna opuesta y ajusta la correa para que quede bien ajustada",
                                                  "Mantén una buena postura con la espalda recta, el pecho levantado y los hombros hacia atrás.",
                                                  "Agarra el soporte de la máquina con una mano para mantener el equilibrio y la estabilidad.",
                                                  "Levanta la pierna que está conectada al accesorio para tobillos y extiéndela hacia atrás en un movimiento controlado, manteniendo la rodilla ligeramente flexionada.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Baja la pierna controladamente hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Patada de Glúteos con Polea/patadaGluteos.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Patada de Glúteos con Polea/gluteosPolea.mp4"
                              },
                              {
                                        "id": "patada-de-gluteos-diagonal-con-polea",
                                        "name": "Patada de Glúteos Diagonal con Polea",
                                        "steps": [
                                                  "Asegúrate de que la polea de la máquina esté ajustada en su posición más baja y que el accesorio para tobillos esté conectado al cable.",
                                                  "Selecciona el peso adecuado para ti ajustando el pin de la pila de pesas en la máquina. Comienza con un peso ligero y ve aumentando a medida que te sientas más cómodo/cómoda.",
                                                  "Colócate de pie con la pierna más cercana a la máquina cerca del soporte. Coloca el accesorio para tobillos en la pierna opuesta y ajusta la correa para que quede bien ajustada",
                                                  "Mantén una buena postura con la espalda recta, el pecho levantado y los hombros hacia atrás.",
                                                  "Agarra el soporte de la máquina con una mano para mantener el equilibrio y la estabilidad.",
                                                  "Curza la pierna que extenderás sobre la otra pierna de apoyo",
                                                  "Levanta la pierna que está conectada al accesorio para tobillos y extiéndela hacia atrás en un movimiento controlado, manteniendo la rodilla ligeramente flexionada.",
                                                  "Al llegar a la parte superior del movimiento, contrae los músculos de los glúteos y mantén esa contracción durante unos segundos.",
                                                  "Baja la pierna controladamente hasta la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Patada de Glúteos Diagonal con Polea/patadaGluteos.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Patada de Glúteos Diagonal con Polea/patadaDiagonalPolea.mp4"
                              },
                              {
                                        "id": "peso-muerto-en-landmine",
                                        "name": "Peso Muerto en Landmine",
                                        "steps": [
                                                  "Colócate frente a la barra sujetando con ambas manos la punta de la misma.",
                                                  "Mantén las piernas ligeramente flexionadas y la espalda recta.",
                                                  "Levanta la barra del suelo, llevando la cadera hacia atrás y manteniendo la espalda recta.",
                                                  "Una vez que la barra esté a la altura de tus rodillas, comienza a bajarla lentamente mientras llevas la cadera hacia adelante y mantienes la espalda recta.",
                                                  "Baja la barra hasta que llegue a la altura de tus tobillos o hasta que sientas un estiramiento en los isquiotibiales.",
                                                  "Mantén la posición durante unos segundos y luego levanta la barra llevando la cadera hacia atrás y manteniendo la espalda recta.",
                                                  "Realiza varias repeticiones de este movimiento, asegurándote de mantener la técnica adecuada y evitando cualquier tipo de balanceo o rebote."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Peso Muerto en Landmine/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Peso Muerto en Landmine/pesoMuertoLandmine.mp4",
                                        "note": "Es importante recordar que el peso muerto rumano es un ejercicio avanzado que requiere de una buena técnica y fuerza en la cadena posterior. Si eres principiante, es recomendable que comiences con una carga más ligera y te enfoques en dominar la técnica antes de incrementar la carga."
                              },
                              {
                                        "id": "peso-muerto-en-maquina",
                                        "name": "Peso Muerto en Máquina",
                                        "steps": [
                                                  "Colócate en postura inicial con la cadera alineada.",
                                                  "Empuja con la cadera o extiende la pierna contrayendo fuertemente el glúteo.",
                                                  "Regresa a la posición inicial manteniendo el control del movimiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Peso Muerto en Máquina/pesoMuerto.png",
                                        "videoUrl": "/Entrenamientos/Gluteos/Poleas y maquinas/Peso Muerto en Máquina/pesoMuertoMaquina.mp4"
                              }
                    ]
          }
]
    },
                pecho: {
        id: 'pecho',
        name: 'Pecho',
        subtitle: 'Pectorales',
        cardImageUrl: '/Entrenamientos/Pecho/pechomini.png',
        detailImageUrl: '/Entrenamientos/Pecho/pecho.png',
        frontHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "press-de-barra-unilateral",
                                        "name": "Press de Barra Unilateral",
                                        "steps": [
                                                  "Comienza colocando una barra en el suelo cerca de tus pies. Párate junto a ella y agarra la barra con una mano en posición de agarre supino (palmas hacia arriba) y la otra mano en posición de agarre pronado (palmas hacia abajo).",
                                                  "Levanta la barra hasta que quede sobre tus hombros, sosteniéndola con una mano y apoyando la otra mano en tu cadera.",
                                                  "Extiende tu cuerpo hacia arriba para poner tu peso en el pie opuesto al lado de la mano que sostiene la barra.",
                                                  "Lentamente baja la barra hacia tu hombro en el lado opuesto al pie que estás apoyando. Mantén el equilibrio con el pie opuesto.",
                                                  "Empuja la barra hacia arriba, usando la fuerza de tu pecho, hombros y tríceps, y vuelve a la posición inicial.",
                                                  "Realiza el número deseado de repeticiones y luego cambia de lado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Barra Unilateral/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Barra Unilateral/pressDeBarraConApoyoUnilateral.mp4",
                                        "note": "Asegúrate de mantener una buena postura durante todo el ejercicio y de no arquear la espalda. Este ejercicio es desafiante para el equilibrio y la estabilidad, así que comienza con una carga ligera y aumenta gradualmente a medida que te sientas más cómodo."
                              },
                              {
                                        "id": "press-de-pecho-acostado-en-el-piso",
                                        "name": "Press de Pecho Acostado en el Piso",
                                        "steps": [
                                                  "Acuéstate boca arriba en el suelo, con las piernas dobladas y los pies planos sobre el suelo para mayor estabilidad. Asegúrate de que la espalda baja esté ligeramente arqueada y el core activado.",
                                                  "Sostén una barra con ambas manos, utilizando un agarre prono (palmas hacia adelante) con las manos separadas a la anchura de los hombros. La barra debe estar alineada sobre tu pecho.",
                                                  "Levanta la barra de manera controlada hacia arriba, extendiendo completamente los brazos. Esta es tu posición inicial.",
                                                  "Inhala y, mientras exhalas, baja lentamente la barra hacia el pecho, doblando los codos a aproximadamente 90 grados. Los codos deben apuntar ligeramente hacia los lados y hacia abajo, asegurándote de que no se abran demasiado hacia los lados.",
                                                  "Baja la barra hasta que los codos toquen el suelo suavemente, manteniendo el control en todo momento y evitando que la barra rebote en el pecho o el suelo.",
                                                  "Exhala y empuja la barra hacia arriba, extendiendo completamente los brazos para regresar a la posición inicial. Concéntrate en contraer los músculos del pecho durante el levantamiento, manteniendo los hombros estables y el core activado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Acostado en el Piso/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Acostado en el Piso/pressPechoEnPiso.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición."
                              },
                              {
                                        "id": "press-de-pecho-declinado",
                                        "name": "Press de Pecho Declinado",
                                        "steps": [
                                                  "Ajusta el banco declinado a una posición de aproximadamente 30-45 grados hacia abajo. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Siéntate en el banco declinado con la espalda recta y acostado sobre el banco. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra la barra con las manoss separadas a la anchura de los hombros y los pulgares apuntando hacia adentro. Mantén los codos doblados y la barra sobre el pecho.",
                                                  "Empuja la barra hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta la barra hasta que tus brazos estén completamente extendidos y luego baja la barra hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Declinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Declinado/bancoDeclinado.mp4",
                                        "note": "Es importante que mantengas la espalda recta y los hombros hacia atrás durante todo el ejercicio. Además, asegúrate de controlar la barra en todo momento y de no bloquear los codos al final del movimiento para evitar lesiones. Al hacer el press de banca declinado, el énfasis se coloca en la parte inferior del pecho y los tríceps, lo que ayuda a desarrollar un pecho más definido y separado."
                              },
                              {
                                        "id": "press-de-pecho-en-banco-plano",
                                        "name": "Press de Pecho en Banco Plano",
                                        "steps": [
                                                  "Ajusta el banco de acuerdo a tu altura y posición. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Siéntate en el banco con la espalda recta y acostado sobre el banco. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra la barra con las manos separadas a la anchura de los hombros y los pulgares apuntando hacia adentro. Mantén los codos doblados y la barra sobre el pecho.",
                                                  "Empuja la barra hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta la barra hasta que tus brazos estén completamente extendidos y luego baja la barra hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho en Banco Plano/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho en Banco Plano/bancoPlano.mp4"
                              },
                              {
                                        "id": "press-de-pecho-en-smith",
                                        "name": "Press de Pecho en Smith",
                                        "steps": [
                                                  "Ajusta el banco de acuerdo a tu altura y posición. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Siéntate en el banco con la espalda recta y acostado sobre el banco. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra la barra con las manos separadas a la anchura de los hombros y los pulgares apuntando hacia adentro. Mantén los codos doblados y la barra sobre el pecho.",
                                                  "Empuja la barra hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta la barra hasta que tus brazos estén completamente extendidos y luego baja la barra hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho en Smith/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho en Smith/pressBancaSmith.mp4"
                              },
                              {
                                        "id": "press-de-pecho-inclinado",
                                        "name": "Press de Pecho Inclinado",
                                        "steps": [
                                                  "Ajusta el banco inclinado a una posición de aproximadamente 30-45 grados. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Siéntate en el banco inclinado con la espalda recta y acostado sobre el banco. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra la barra con las manos separadas a la anchura de los hombros y los pulgares apuntando hacia adentro. Mantén los codos doblados y la barra sobre el pecho.",
                                                  "Empuja la barra hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta la barra hasta que tus brazos estén completamente extendidos y luego baja la barra hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Inclinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Barra/Press de Pecho Inclinado/bancoInclinado.mp4",
                                        "note": "Es importante que mantengas la espalda recta y los hombros hacia atrás durante todo el ejercicio. Además, asegúrate de controlar la barra en todo momento y de no bloquear los codos al final del movimiento para evitar lesiones. Al hacer el press de banca inclinado, el énfasis se coloca en la parte superior del pecho y los hombros, lo que ayuda a desarrollar un pecho más completo y redondeado."
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "apertura-con-mancuernas-en-banco-declinado",
                                        "name": "Apertura con Mancuernas en Banco Declinado",
                                        "steps": [
                                                  "Ajusta el banco declinado en un ángulo de aproximadamente 30-45 grados. Si eres nuevo en el ejercicio, comienza con un ángulo menos pronunciado y aumenta gradualmente a medida que ganas fuerza y confianza.",
                                                  "Siéntate en el banco y coloca las mancuernas en el suelo al alcance de tus manos. Luego, acuéstate en el banco con las piernas extendidas y los pies apoyados en el suelo para mantener la estabilidad.",
                                                  "Agarra las mancuernas con un agarre pronado (palmas hacia los pies) y colócalas a la altura del pecho con los codos doblados.",
                                                  "Empuja las mancuernas hacia arriba mientras exhalas y estira los brazos casi completamente. Asegúrate de mantener los codos en una posición estable y no los bloquees por completo en la parte superior del movimiento.",
                                                  "Baja las mancuernas hacia abajo lentamente mientras inhalas y siente cómo los músculos del pecho se estiran. Trata de mantener un control total durante todo el movimiento y no permitas que las mancuernas caigan hacia abajo rápidamente."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Declinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Declinado/aperturaBancoDeclinado.mp4",
                                        "note": "Es importante tener en cuenta que, como con cualquier ejercicio de pesas, la técnica adecuada es crucial para evitar lesiones y obtener los mejores resultados. Si eres nuevo en el ejercicio, te recomiendo trabajar con un entrenador personal o un instructor de fitness para que te enseñe la técnica adecuada."
                              },
                              {
                                        "id": "apertura-con-mancuernas-en-banco-inclinado",
                                        "name": "Apertura con Mancuernas en Banco Inclinado",
                                        "steps": [
                                                  "Siéntate en un banco inclinado y asegúrate de que esté ajustado a un ángulo de aproximadamente 45 grados.",
                                                  "Toma una mancuerna en cada mano y colócalas sobre tus muslos.",
                                                  "Inclínate hacia atrás mientras levantas las mancuernas hasta que estén a la altura de tus hombros. Mantén los codos ligeramente flexionados.",
                                                  "Ahora exhala y empuja las mancuernas hacia arriba, estirando los brazos y manteniendo las palmas de las manos mirando hacia adelante.",
                                                  "Mantén la posición durante un segundo y luego inhala mientras bajas lentamente las mancuernas hacia abajo hasta que tus codos estén en línea con los hombros.",
                                                  "Repite el movimiento durante varias repeticiones y asegúrate de mantener una técnica adecuada en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Inclinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Inclinado/pechoInclinadoMancuernas.mp4",
                                        "note": "Es importante recordar mantener los hombros hacia atrás y abajo en todo momento para evitar lesiones. Además, debes usar un peso que puedas controlar adecuadamente sin comprometer la técnica del ejercicio."
                              },
                              {
                                        "id": "apertura-con-mancuernas-en-banco-plano",
                                        "name": "Apertura con Mancuernas en Banco Plano",
                                        "steps": [
                                                  "Acuéstate en un banco plano con las mancuernas en tus rodillas. Asegúrate de que tus pies estén firmemente apoyados en el suelo y que tu espalda esté completamente apoyada en el banco.",
                                                  "Con las mancuernas en tus manos, levanta los brazos para que estén completamente extendidos por encima de tu pecho. Las palmas de tus manos deben mirar hacia adelante y las mancuernas deben estar cerca pero no tocando entre sí.",
                                                  "Lentamente baja las mancuernas hacia abajo, manteniendo los codos ligeramente flexionados y controlando el movimiento en todo momento.",
                                                  "Cuando las mancuernas estén a la altura de tus hombros, exhala y empuja las mancuernas hacia arriba de nuevo a la posición inicial. Asegúrate de que los codos no se bloqueen en la posición extendida.",
                                                  "Repite el movimiento durante el número deseado de repeticiones.",
                                                  "Es importante recordar mantener la forma adecuada durante todo el ejercicio y controlar el movimiento en todo momento. También se recomienda comenzar con un peso ligero y aumentar gradualmente para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Plano/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Apertura con Mancuernas en Banco Plano/aperturaPlana.mp4"
                              },
                              {
                                        "id": "empuje-en-press-banca-con-mancuernas",
                                        "name": "Empuje en Press Banca con Mancuernas",
                                        "steps": [
                                                  "Acuéstate en una banca plana con una mancuerna en cada mano y los brazos extendidos hacia arriba, las palmas mirandose entre sí y los codos ligeramente doblados.",
                                                  "Baja las mancuernas lentamente hacia los lados de tu pecho, manteniendo los codos cerca del cuerpo.",
                                                  "Detente cuando las mancuernas estén a la altura de tus pectorales y asegúrate de mantener los codos ligeramente doblados.",
                                                  "Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos.",
                                                  "Mantén la posición por un momento y luego baja lentamente las mancuernas hacia la posición inicial.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Empuje en Press Banca con Mancuernas/pechoEmpuje.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Empuje en Press Banca con Mancuernas/empujePressBancaMancuerna.mp4",
                                        "note": "Asegúrate de mantener una buena postura durante todo el ejercicio, manteniendo los pies planos en el suelo y los hombros hacia abajo y atrás. También es importante respirar adecuadamente, inhalando mientras bajas las mancuernas y exhalando mientras las levantas hacia arriba."
                              },
                              {
                                        "id": "press-con-mancuernas-en-banco-declinado",
                                        "name": "Press con Mancuernas en Banco Declinado",
                                        "steps": [
                                                  "Ajusta el banco declinado en un ángulo de aproximadamente 30-45 grados. Si eres nuevo en el ejercicio, comienza con un ángulo menos pronunciado y aumenta gradualmente a medida que ganas fuerza y confianza.",
                                                  "Siéntate en el banco y coloca las mancuernas en el suelo al alcance de tus manos. Luego, acuéstate en el banco con las piernas extendidas y los pies apoyados en el suelo para mantener la estabilidad.",
                                                  "Agarra las mancuernas con un agarre pronado (palmas hacia los pies) y colócalas a la altura del pecho con los codos doblados.",
                                                  "Empuja las mancuernas hacia arriba mientras exhalas y estira los brazos casi completamente. Asegúrate de mantener los codos en una posición estable y no los bloquees por completo en la parte superior del movimiento.",
                                                  "Baja las mancuernas hacia abajo lentamente mientras inhalas y siente cómo los músculos del pecho se estiran. Trata de mantener un control total durante todo el movimiento y no permitas que las mancuernas caigan hacia abajo rápidamente."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Declinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Declinado/pechoDeclinadoMancuernas.mp4",
                                        "note": "Es importante tener en cuenta que, como con cualquier ejercicio de pesas, la técnica adecuada es crucial para evitar lesiones y obtener los mejores resultados. Si eres nuevo en el ejercicio, te recomiendo trabajar con un entrenador personal o un instructor de fitness para que te enseñe la técnica adecuada."
                              },
                              {
                                        "id": "press-con-mancuernas-en-banco-inclinado",
                                        "name": "Press con Mancuernas en Banco Inclinado",
                                        "steps": [
                                                  "Siéntate en un banco inclinado y asegúrate de que esté ajustado a un ángulo de aproximadamente 45 grados.",
                                                  "Toma una mancuerna en cada mano y colócalas sobre tus muslos.",
                                                  "Inclínate hacia atrás mientras levantas las mancuernas hasta que estén a la altura de tus hombros. Mantén los codos ligeramente flexionados.",
                                                  "Ahora exhala y empuja las mancuernas hacia arriba, estirando los brazos y manteniendo las palmas de las manos mirando hacia adelante.",
                                                  "Mantén la posición durante un segundo y luego inhala mientras bajas lentamente las mancuernas hacia abajo hasta que tus codos estén en línea con los hombros.",
                                                  "Repite el movimiento durante varias repeticiones y asegúrate de mantener una técnica adecuada en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Inclinado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Inclinado/pressPechoInclinado.mp4",
                                        "note": "Es importante recordar mantener los hombros hacia atrás y abajo en todo momento para evitar lesiones. Además, debes usar un peso que puedas controlar adecuadamente sin comprometer la técnica del ejercicio."
                              },
                              {
                                        "id": "press-con-mancuernas-en-banco-plano",
                                        "name": "Press con Mancuernas en Banco Plano",
                                        "steps": [
                                                  "Acuéstate en un banco plano con las mancuernas en tus rodillas. Asegúrate de que tus pies estén firmemente apoyados en el suelo y que tu espalda esté completamente apoyada en el banco.",
                                                  "Con las mancuernas en tus manos, levanta los brazos para que estén completamente extendidos por encima de tu pecho. Las palmas de tus manos deben mirar hacia adelante y las mancuernas deben estar cerca pero no tocando entre sí.",
                                                  "Lentamente baja las mancuernas hacia abajo, manteniendo los codos ligeramente flexionados y controlando el movimiento en todo momento.",
                                                  "Cuando las mancuernas estén a la altura de tus hombros, exhala y empuja las mancuernas hacia arriba de nuevo a la posición inicial. Asegúrate de que los codos no se bloqueen en la posición extendida.",
                                                  "Repite el movimiento durante el número deseado de repeticiones.",
                                                  "Es importante recordar mantener la forma adecuada durante todo el ejercicio y controlar el movimiento en todo momento. También se recomienda comenzar con un peso ligero y aumentar gradualmente para evitar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Plano/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Mancuernas/Press con Mancuernas en Banco Plano/pechoPlanoMancuernas.mp4"
                              }
                    ]
          },
          {
                    "id": "peso-corporal",
                    "name": "Peso Corporal",
                    "exercises": [
                              {
                                        "id": "flexiones-con-agarre-cerrado",
                                        "name": "Flexiones con Agarre Cerrado",
                                        "steps": [
                                                  "Colócate en posición de plancha con las manos directamente debajo de los hombros y los dedos de los pies apoyados en el suelo.",
                                                  "Junta las manos debajo del centro del pecho para que los pulgares y los dedos índices se toquen y formen un triángulo o diamante.",
                                                  "Manteniendo el cuerpo en línea recta desde la cabeza hasta los talones, baja lentamente el pecho hacia el suelo doblando los codos.",
                                                  "Detente cuando los codos estén en un ángulo de 90 grados.",
                                                  "Empuja hacia arriba con las manos para volver a la posición inicial, manteniendo el cuerpo en línea recta en todo momento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Peso Corporal/Flexiones con Agarre Cerrado/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Peso Corporal/Flexiones con Agarre Cerrado/flexionesConAgarreCerrado.mp4",
                                        "note": "Es importante mantener el cuerpo en línea recta durante todo el ejercicio y evitar arquear o hundir la espalda. Además, asegúrate de respirar correctamente, inhalando mientras bajas y exhalando mientras subes."
                              },
                              {
                                        "id": "flexiones-con-liberacion-de-manos",
                                        "name": "Flexiones con Liberación de Manos",
                                        "steps": [
                                                  "Comienza en la posición de plancha alta, con las manos en el suelo directamente debajo de los hombros y las piernas estiradas detrás de ti.",
                                                  "Baja el cuerpo hacia el suelo doblando los codos y manteniendo el cuerpo recto y los codos pegados al cuerpo. Mantén la cabeza en línea con la columna vertebral.",
                                                  "Una vez que el pecho toque el suelo, levanta las manos del suelo y colócalas a un lado de tu cuerpo, justo debajo de tus hombros.",
                                                  "Vuelve a colocar las manos en el suelo, justo debajo de tus hombros.",
                                                  "Empuja hacia arriba para volver a la posición inicial de plancha alta. Repite el ejercicio por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Peso Corporal/Flexiones con Liberación de Manos/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Peso Corporal/Flexiones con Liberación de Manos/flexionesDeBrazosConLiberacionDeManos.mp4",
                                        "note": "Es importante asegurarse de mantener una buena forma durante todo el ejercicio, manteniendo el cuerpo recto y los codos pegados al cuerpo al bajar y subir. Además, es importante no forzar la liberación de las manos si no se siente cómodo o si hay dolor. Puedes comenzar haciendo el ejercicio sin la liberación de manos hasta que te sientas más cómodo con la técnica."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "apertura-en-maquina",
                                        "name": "Apertura en Máquina",
                                        "steps": [
                                                  "Ajusta el asiento de la máquina para que tus hombros estén en línea con los ejes de movimiento de las almohadillas de la máquina. Asegúrate de que los agarres estén a la altura adecuada para tus brazos.",
                                                  "Siéntate en la máquina con la espalda recta y los pies firmemente apoyados en el suelo.",
                                                  "Agarra los agarres de las almohadillas de la máquina con las palmas hacia abajo y los codos doblados a 90 grados.",
                                                  "Empuja las almohadillas juntas mientras exhala y mantén la contracción de los músculos del pecho durante unos segundos.",
                                                  "Lentamente baja las almohadillas de la máquina de vuelta a la posición inicial mientras inhala.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y series."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Apertura en Máquina/peckDeck.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Apertura en Máquina/peckdeck.mp4"
                              },
                              {
                                        "id": "apertura-en-maquina-inclinada",
                                        "name": "Apertura en Máquina Inclinada",
                                        "steps": [
                                                  "Carga la máquina con el peso adecuado.",
                                                  "Siéntate en la máquina con la espalda recta y los pies firmemente apoyados en el suelo.",
                                                  "Agarra los agarres de la máquina con las palmas hacia arriba y los codos doblados a 90 grados.",
                                                  "Empuja las manijas juntas mientras exhala y mantén la contracción de los músculos del pecho durante unos segundos.",
                                                  "Lentamente baja las manijas de la máquina de vuelta a la posición inicial mientras inhala.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y series."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Apertura en Máquina Inclinada/peckDeck.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Apertura en Máquina Inclinada/maquinaAperturaInclinada.mp4"
                              },
                              {
                                        "id": "banco-hammer",
                                        "name": "Banco Hammer",
                                        "steps": [
                                                  "Selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Acuéstate en el banco con la espalda recta. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra las manijas con las manos y los pulgares apuntando hacia arriba. Mantén los codos doblados.",
                                                  "Empuja las manijas hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta hasta que tus brazos estén completamente extendidos y luego baja hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Banco Hammer/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Banco Hammer/pressHorizontal.mp4"
                              },
                              {
                                        "id": "cruce-en-polea-alta",
                                        "name": "Cruce en Polea Alta",
                                        "steps": [
                                                  "Ajusta la polea en la posición superior de la máquina de poleas y ajusta la resistencia de acuerdo a tu nivel de condición física.",
                                                  "Párate de frente a la máquina, agarra los mangos de las poleas y da un paso hacia adelante para estabilizar tu cuerpo. Mantén los pies separados al ancho de los hombros y mantén la espalda recta.",
                                                  "Levanta los brazos a la altura de los hombros y mantén los codos ligeramente doblados.",
                                                  "Contrae los músculos del pecho y los hombros mientras cruzas los brazos frente a tu cuerpo. Mantén la contracción durante unos segundos.",
                                                  "Lentamente vuelve a la posición inicial mientras controlas el movimiento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y series."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Alta/pechoPolea.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Alta/poleaPechoSuperior.mp4"
                              },
                              {
                                        "id": "cruce-en-polea-inferior",
                                        "name": "Cruce en Polea Inferior",
                                        "steps": [
                                                  "Ajusta la polea en la posición inferior de la máquina de poleas y ajusta la resistencia de acuerdo a tu nivel de condición física.",
                                                  "Párate de frente a la máquina, agarra los mangos de las poleas y da un paso hacia adelante para estabilizar tu cuerpo. Mantén los pies separados al ancho de los hombros y mantén la espalda recta.",
                                                  "Levanta los brazos a la altura de los hombros y mantén los codos ligeramente doblados.",
                                                  "Contrae los músculos del pecho y los hombros mientras cruzas los brazos frente a tu cuerpo. Mantén la contracción durante unos segundos.",
                                                  "Lentamente vuelve a la posición inicial mientras controlas el movimiento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y series."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Inferior/pechoPolea.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Inferior/poleaPechoInferior.mp4"
                              },
                              {
                                        "id": "cruce-en-polea-medio",
                                        "name": "Cruce en Polea Medio",
                                        "steps": [
                                                  "Ajusta la polea en la posición media de la máquina de poleas y ajusta la resistencia de acuerdo a tu nivel de condición física.",
                                                  "Párate de frente a la máquina, agarra los mangos de las poleas y da un paso hacia adelante para estabilizar tu cuerpo. Mantén los pies separados al ancho de los hombros y mantén la espalda recta.",
                                                  "Levanta los brazos a la altura de los hombros y mantén los codos ligeramente doblados.",
                                                  "Contrae los músculos del pecho y los hombros mientras cruzas los brazos frente a tu cuerpo. Mantén la contracción durante unos segundos.",
                                                  "Lentamente vuelve a la posición inicial mientras controlas el movimiento.",
                                                  "Repite el movimiento durante el número deseado de repeticiones y series."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Medio/pechoPolea.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Cruce en Polea Medio/poleaPechoMedio.mp4"
                              },
                              {
                                        "id": "hammer-declinado",
                                        "name": "Hammer Declinado",
                                        "steps": [
                                                  "Ajusta la máquina de Hammer declinado según tu altura y preferencias. Asegúrate de que el respaldo esté declinado de manera cómoda para tu posición.",
                                                  "Siéntate en la máquina con la espalda bien apoyada en el respaldo y los pies firmemente colocados en el suelo.",
                                                  "Agarra las asas de la máquina con un agarre neutral (las palmas mirándose entre sí) y extiende los brazos completamente.",
                                                  "Inclínate ligeramente hacia adelante desde la cadera, manteniendo la espalda recta y los hombros hacia atrás.",
                                                  "Flexiona los codos y tira de las asas hacia tu torso en un movimiento controlado. Mantén los codos cerca del cuerpo durante el movimiento.",
                                                  "Lleva las asas hacia la parte baja del abdomen, sintiendo la contracción en los músculos de la espalda baja.",
                                                  "Extiende los codos de manera controlada para volver a la posición inicial, manteniendo la tensión en los músculos de la espalda durante todo el movimiento.",
                                                  "Realiza el mismo número de repeticiones, asegurándote de mantener una buena forma y control en todo momento.",
                                                  "Ajusta la carga de la máquina según tu nivel de fuerza y comodidad, comenzando con un peso adecuado.",
                                                  "Este ejercicio se enfoca en trabajar los músculos de la espalda, especialmente el músculo dorsal ancho, y puede ser integrado en tu rutina de entrenamiento para fortalecer y desarrollar la musculatura de la espalda."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Hammer Declinado/pechoEmpuje.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Hammer Declinado/hammerInclinado.mp4"
                              },
                              {
                                        "id": "hammer-inclinado-sentado",
                                        "name": "Hammer Inclinado Sentado",
                                        "steps": [
                                                  "Ajusta la máquina de hammer para que el respaldo esté en una posición inclinado. Asegúrate de que la altura del asiento sea cómoda para ti.",
                                                  "Siéntate en la máquina con la espalda bien apoyada en el respaldo y los pies firmemente colocados en el suelo.",
                                                  "Agarra las asas de la máquina con un agarre neutro (las palmas mirándose entre sí) y coloca los codos ligeramente flexionados.",
                                                  "Mantén una postura estable con la espalda recta y los hombros hacia atrás.",
                                                  "Extiende los brazos hacia adelante en un movimiento controlado, manteniendo el control de la máquina. La trayectoria del movimiento debe ser hacia afuera y hacia arriba, siguiendo la inclinación del respaldo.",
                                                  "Lleva las asas hacia arriba hasta que los brazos estén casi completamente extendidos, sintiendo la contracción en los músculos del pecho.",
                                                  "Regresa los brazos de manera controlada a la posición inicial, manteniendo la tensión en los músculos pectorales.",
                                                  "Realiza el mismo número de repeticiones, asegurándote de mantener una buena forma y control en todo momento.",
                                                  "Ajusta la carga de la máquina según tu nivel de fuerza y comodidad, comenzando con un peso adecuado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Hammer Inclinado Sentado/pechoEmpuje.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Hammer Inclinado Sentado/hamerDeclinadoSentado.mp4"
                              },
                              {
                                        "id": "maquina-press-de-pecho",
                                        "name": "Máquina Press de Pecho",
                                        "steps": [
                                                  "Siéntate en la máquina con la espalda recta y los pies apoyados en el suelo.",
                                                  "Sujeta los agarres de la máquina con las manos mirando hacia adelante y las palmas hacia abajo.",
                                                  "Exhala y empuja los agarres hacia adelante hasta que los brazos estén completamente extendidos, pero sin bloquear las articulaciones de los codos.",
                                                  "Inhala y regresa lentamente los agarres hasta que los codos estén a la altura de los hombros o un poco más atrás.",
                                                  "Repite el movimiento durante el número de repeticiones que hayas establecido para tu entrenamiento.",
                                                  "Es importante que mantengas la espalda recta y los codos en línea con los hombros durante todo el movimiento. Evita balancearte o arquear la espalda para ayudarte a mover los agarres, ya que esto puede aumentar el riesgo de lesiones. Además, no bloques las articulaciones de los codos cuando extiendas los brazos, ya que esto puede aumentar la presión en las articulaciones y provocar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Máquina Press de Pecho/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Máquina Press de Pecho/pressPecho.mp4"
                              },
                              {
                                        "id": "peck-deck-con-apoyo",
                                        "name": "Peck Deck con Apoyo",
                                        "steps": [
                                                  "Ajusta el asiento y las almohadillas para los hombros a tu altura.",
                                                  "Siéntate en la máquina con la espalda apoyada y los pies firmemente en el suelo.",
                                                  "Coloca los brazos en las almohadillas con los codos a 90 grados.",
                                                  "Empuja las almohadillas hacia adelante, juntando los brazos frente a ti como si abrazaras el pecho.",
                                                  "Mantén la contracción por un segundo y luego regresa lentamente a la posición inicial."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Peck Deck con Apoyo/pechoPolea.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Peck Deck con Apoyo/peckDeckApoyo.mp4",
                                        "note": "Es importante mantener una postura estable y evita arquear la espalda o bloquear completamente los codos."
                              },
                              {
                                        "id": "press-de-pecho-inclinado-en-smith",
                                        "name": "Press de Pecho Inclinado en Smith",
                                        "steps": [
                                                  "Ajusta el banco inclinado a una posición de aproximadamente 30-45 grados. Luego, selecciona los discos adecuados de acuerdo a tu nivel de condición física.",
                                                  "Siéntate en el banco inclinado con la espalda recta y acostado sobre el banco. Asegúrate de que tus pies estén firmes en el suelo y que tus hombros y glúteos estén en contacto con el banco.",
                                                  "Agarra la barra con las manos separadas a la anchura de los hombros y los pulgares apuntando hacia adentro. Mantén los codos doblados y la barra sobre el pecho.",
                                                  "Empuja la barra hacia arriba con los brazos y los hombros, manteniendo los codos ligeramente doblados. Levanta la barra hasta que tus brazos estén completamente extendidos y luego baja la barra hasta que esté a unos centímetros por encima de tu pecho.",
                                                  "Repite el ejercicio por el número de repeticiones deseado."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Inclinado en Smith/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Inclinado en Smith/pechoInclinadoSmith.mp4",
                                        "note": "Es importante que mantengas la espalda recta y los hombros hacia atrás durante todo el ejercicio. Además, asegúrate de controlar la barra en todo momento y de no bloquear los codos al final del movimiento para evitar lesiones. Al hacer el press de banca inclinado, el énfasis se coloca en la parte superior del pecho y los hombros, lo que ayuda a desarrollar un pecho más completo y redondeado."
                              },
                              {
                                        "id": "press-de-pecho-vertical",
                                        "name": "Press de Pecho Vertical",
                                        "steps": [
                                                  "Siéntate en la máquina con la espalda recta y los pies apoyados en el suelo.",
                                                  "Sujeta los agarres de la máquina con las manos mirando hacia adelante y las palmas hacia abajo.",
                                                  "Exhala y empuja los agarres hacia adelante hasta que los brazos estén completamente extendidos, pero sin bloquear las articulaciones de los codos.",
                                                  "Inhala y regresa lentamente los agarres hasta que los codos estén a la altura de los hombros o un poco más atrás.",
                                                  "Repite el movimiento durante el número de repeticiones que hayas establecido para tu entrenamiento.",
                                                  "Es importante que mantengas la espalda recta y los codos en línea con los hombros durante todo el movimiento. Evita balancearte o arquear la espalda para ayudarte a mover los agarres, ya que esto puede aumentar el riesgo de lesiones. Además, no bloques las articulaciones de los codos cuando extiendas los brazos, ya que esto puede aumentar la presión en las articulaciones y provocar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Vertical/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Vertical/pressVertical.mp4"
                              },
                              {
                                        "id": "press-de-pecho-vertical-con-disco",
                                        "name": "Press de Pecho Vertical con Disco",
                                        "steps": [
                                                  "Ajusta el peso de la máquina colocando el peso de forma equitativa entre los lados.",
                                                  "Siéntate en la máquina con la espalda recta y los pies apoyados en el suelo.",
                                                  "Sujeta los agarres de la máquina con las manos mirando hacia adelante y las palmas hacia abajo.",
                                                  "Exhala y empuja los agarres hacia adelante hasta que los brazos estén completamente extendidos, pero sin bloquear las articulaciones de los codos.",
                                                  "Inhala y regresa lentamente los agarres hasta que los codos estén a la altura de los hombros o un poco más atrás.",
                                                  "Repite el movimiento durante el número de repeticiones que hayas establecido para tu entrenamiento.",
                                                  "Es importante que mantengas la espalda recta y los codos en línea con los hombros durante todo el movimiento. Evita balancearte o arquear la espalda para ayudarte a mover los agarres, ya que esto puede aumentar el riesgo de lesiones. Además, no bloques las articulaciones de los codos cuando extiendas los brazos, ya que esto puede aumentar la presión en las articulaciones y provocar lesiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Vertical con Disco/pechoPress.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press de Pecho Vertical con Disco/pressPechoVerticalDisco.mp4"
                              },
                              {
                                        "id": "press-hammer-declinado",
                                        "name": "Press Hammer Declinado",
                                        "steps": [
                                                  "Ubícate en posición con la espalda estable y los codos flexionados a 90°.",
                                                  "Empuja el peso o junta las manos contrayendo los pectorales.",
                                                  "Desciende de manera controlada abriendo la caja torácica."
                                        ]
                              },
                              {
                                        "id": "press-hammer-inclinado",
                                        "name": "Press Hammer Inclinado",
                                        "steps": [
                                                  "Ajusta la máquina de Press Hammer Declinado según tu altura y preferencias. Asegúrate de que el respaldo esté inclinado de manera cómoda para tu posición.",
                                                  "Siéntate en la máquina con la espalda bien apoyada en el respaldo y los pies firmemente colocados en el suelo.",
                                                  "Agarra las asas de la máquina con un agarre neutro (las palmas mirándose entre sí) y extiende los brazos completamente.",
                                                  "Empuja las asas hacia adelante en un movimiento controlado, manteniendo los codos ligeramente flexionados.",
                                                  "Mantén una respiración regular y una postura estable durante todo el movimiento.",
                                                  "Regresa las asas a la posición inicial de manera controlada, sintiendo la contracción en los músculos del pecho y los hombros.",
                                                  "Realiza el mismo número de repeticiones, manteniendo una buena forma y control en todo momento.",
                                                  "Este ejercicio se enfoca en trabajar los músculos del pecho y los hombros, y puede ser integrado en tu rutina de entrenamiento para fortalecer y desarrollar la musculatura de la parte superior del cuerpo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press Hammer Inclinado/pechoEmpuje.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press Hammer Inclinado/pressHammerInclinado.mp4"
                              },
                              {
                                        "id": "press-hammer-plano",
                                        "name": "Press Hammer Plano",
                                        "steps": [
                                                  "Ajusta la máquina de Press Hammer Declinado según tu altura y preferencias. Asegúrate de que el respaldo esté inclinado de manera cómoda para tu posición.",
                                                  "Siéntate en la máquina con la espalda bien apoyada en el respaldo y los pies firmemente colocados en el suelo.",
                                                  "Agarra las asas de la máquina con un agarre neutro (las palmas mirándose entre sí) y extiende los brazos completamente.",
                                                  "Empuja las asas hacia adelante en un movimiento controlado, manteniendo los codos ligeramente flexionados.",
                                                  "Mantén una respiración regular y una postura estable durante todo el movimiento.",
                                                  "Regresa las asas a la posición inicial de manera controlada, sintiendo la contracción en los músculos del pecho y los hombros.",
                                                  "Realiza el mismo número de repeticiones, manteniendo una buena forma y control en todo momento.",
                                                  "Este ejercicio se enfoca en trabajar los músculos del pecho y los hombros, y puede ser integrado en tu rutina de entrenamiento para fortalecer y desarrollar la musculatura de la parte superior del cuerpo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press Hammer Plano/pechoEmpuje.png",
                                        "videoUrl": "/Entrenamientos/Pecho/Poleas y maquinas/Press Hammer Plano/pressHammerPlano.mp4"
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
        detailImageUrl: '/Entrenamientos/Hombros/hombros.png',
        frontHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "banco-press-de-hombro",
                                        "name": "Banco Press de Hombro",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-con-barra",
                                        "name": "Press Hombro con Barra",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-sentado-con-barra",
                                        "name": "Press Hombro Sentado con Barra",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-nuca-con-barra",
                                        "name": "Press Nuca con Barra",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "push-press-con-barra",
                                        "name": "Push Press con Barra",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-frontales-con-barra",
                                        "name": "Vuelos Frontales con Barra",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-frontales-con-disco",
                                        "name": "Vuelos Frontales con Disco",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "arnold-press-sentado",
                                        "name": "Arnold Press Sentado",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "elevacion-posterior-con-mancuerna",
                                        "name": "Elevación Posterior con Mancuerna",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-de-hombro-con-mancuerna-arrodillado-unilateral",
                                        "name": "Press de Hombro con Mancuerna Arrodillado Unilateral",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-agarre-neutro",
                                        "name": "Press Hombro Agarre Neutro",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-sentado-con-mancuerna",
                                        "name": "Press Hombro Sentado con Mancuerna",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-militar-sentado-con-mancuerna",
                                        "name": "Press Militar Sentado con Mancuerna",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-frontales",
                                        "name": "Vuelos Frontales",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-frontales-alternados",
                                        "name": "Vuelos Frontales Alternados",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-laterales",
                                        "name": "Vuelos Laterales",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-laterales-sentado",
                                        "name": "Vuelos Laterales Sentado",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-posteriores",
                                        "name": "Vuelos Posteriores",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-posteriores-en-banco-inclinado",
                                        "name": "Vuelos Posteriores en Banco Inclinado",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "ante-brazo-con-polea",
                                        "name": "Ante Brazo con Polea",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "deltoides-en-polea-cruzadas",
                                        "name": "Deltoides en Polea Cruzadas",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "elevacion-posterior-con-polea-baja",
                                        "name": "Elevación Posterior con Polea Baja",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "maquina-de-vuelo-lateral",
                                        "name": "Máquina de Vuelo Lateral",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "maquina-de-vuelos-laterales-a-pie",
                                        "name": "Máquina de Vuelos Laterales a Pie",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "posteriores-en-maquina-de-apertura",
                                        "name": "Posteriores en Máquina de Apertura",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro",
                                        "name": "Press Hombro",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-en-smith",
                                        "name": "Press Hombro en Smith",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "press-hombro-inclinado",
                                        "name": "Press Hombro Inclinado",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelo-lateral-con-polea",
                                        "name": "Vuelo Lateral con Polea",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
                                        ]
                              },
                              {
                                        "id": "vuelos-frontales-en-polea",
                                        "name": "Vuelos Frontales en Polea",
                                        "steps": [
                                                  "Eleva o empuja la carga focalizando la fuerza en los deltoides.",
                                                  "Mantén la postura erguida evitando forzar el cuello.",
                                                  "Baja el peso de forma lenta y controlada."
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
        cardImageUrl: '/Entrenamientos/Triceps/tricepsmini.png',
        detailImageUrl: '/Entrenamientos/Triceps/triceps.png',
        backHighlight: true,
        equipmentCategories: [
          {
                    "id": "barra",
                    "name": "Barra",
                    "exercises": [
                              {
                                        "id": "crush-triceps-barra",
                                        "name": "Crush Triceps Barra",
                                        "steps": [
                                                  "Acuéstate boca arriba en un banco plano, asegurándote de que tu cabeza, espalda y glúteos estén completamente apoyados en el banco. Mantén los pies firmemente plantados en el suelo para la estabilidad.",
                                                  "Sostén una barra con ambas manos, usando un agarre prono (palmas hacia abajo), con las manos separadas a la anchura de los hombros.",
                                                  "Levanta la barra hacia arriba, extendiendo completamente los brazos, de modo que la barra quede alineada con los hombros. Esta es tu posición inicial.",
                                                  "Inhala y, mientras exhalas, flexiona los codos para bajar lentamente la barra hacia tu frente. Mantén los codos apuntando hacia adelante y cerca de tu cabeza durante todo el movimiento, sin que se desvíen hacia los lados.",
                                                  "Continúa bajando la barra hasta que sientas un estiramiento en los tríceps, asegurándote de que la barra no toque la frente o la cabeza. Controla el movimiento en todo momento para evitar que los codos se abran hacia afuera.",
                                                  "Exhala y extiende los brazos para llevar la barra de vuelta a la posición inicial, concentrándote en contraer los tríceps al final del movimiento. Mantén la tensión en los tríceps durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Barra/Crush Triceps Barra/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Barra/Crush Triceps Barra/CrushTricepsBarra.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición."
                              }
                    ]
          },
          {
                    "id": "mancuernas",
                    "name": "Mancuernas",
                    "exercises": [
                              {
                                        "id": "extension-de-codos-alternada-con-mancuerna",
                                        "name": "Extensión de Codos Alternada con Mancuerna",
                                        "steps": [
                                                  "Colócate en posición de plancha alta, con las manos sosteniendo las mancuernas, los brazos extendidos y los pies separados al ancho de los hombros.",
                                                  "Levanta un pie y colócalo en un banco, manteniendo la pierna opuesta extendida.",
                                                  "Inclina el tronco hacia adelante y lleva la mano opuesta al pie que está en el banco hacia el mismo, manteniendo el codo cerca del cuerpo.",
                                                  "Extiende el codo del brazo que sostiene la mancuerna hacia atrás, manteniendo el brazo cerca del cuerpo y el codo hacia arriba.",
                                                  "Regresa a la posición inicial y repite con el otro brazo.",
                                                  "Alterna los brazos para completar la serie.",
                                                  "Es importante mantener el abdomen y los glúteos contraídos para evitar arquear la espalda. También es fundamental mantener la muñeca en posición neutral y no dejar que se doble hacia atrás. Este ejercicio puede ser realizado con mancuernas de peso ligero a moderado, dependiendo del nivel de condición física del individuo."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Mancuernas/Extensión de Codos Alternada con Mancuerna/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Mancuernas/Extensión de Codos Alternada con Mancuerna/extensionDeTricepsConMancuerna.mp4"
                              },
                              {
                                        "id": "extension-de-triceps-con-mancuerna",
                                        "name": "Extensión de Triceps con Mancuerna",
                                        "steps": [
                                                  "Colócate en un banco plano, apoyando el torso sobre el banco con el pecho hacia abajo. Mantén los pies firmemente apoyados en el suelo para asegurar la estabilidad.",
                                                  "Sostén una mancuerna con ambas manos, extendiendo los brazos hacia arriba y manteniendo los codos ligeramente flexionados. La mancuerna debe estar alineada con tu cabeza y los brazos estirados.",
                                                  "Inhala y, mientras exhalas, flexiona los codos para bajar lentamente la mancuerna detrás de la cabeza. Asegúrate de mantener los codos inmóviles y cerca de tu cabeza durante el movimiento.",
                                                  "Continúa bajando la mancuerna hasta que sientas un estiramiento en los tríceps, manteniendo el control en todo momento. No permitas que la mancuerna se balancee ni que tu torso se mueva.",
                                                  "Exhala y extiende los brazos para volver a la posición inicial, concentrándote en contraer los tríceps al final del movimiento. Mantén la tensión en los tríceps durante todo el ejercicio."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Mancuernas/Extensión de Triceps con Mancuerna/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Mancuernas/Extensión de Triceps con Mancuerna/extensionDeTricepsConMancuerna.mp4",
                                        "note": "Completa el número deseado de repeticiones, asegurándote de mantener una buena técnica y control en cada repetición."
                              },
                              {
                                        "id": "press-frances",
                                        "name": "Press Frances",
                                        "steps": [
                                                  "Acuéstate en un banco plano con las piernas apoyadas en el suelo y las mancuernas sostenidas en tus manos con un agarre neutral (las palmas de las manos mirando hacia adentro).",
                                                  "Levanta las mancuernas y mantén los brazos extendidos perpendicular al cuerpo. Las palmas de las manos deben estar mirando hacia adentro y las mancuernas deben estar en línea con tus oídos.",
                                                  "Baja lentamente las mancuernas hacia la cabeza, manteniendo los codos apuntando hacia el techo. El movimiento debe ser controlado y las mancuernas deben detenerse justo antes de tocar la cabeza.",
                                                  "Vuelve a la posición inicial empujando las mancuernas hacia arriba y extendiendo los brazos.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones.",
                                                  "Es importante mantener los codos apuntando hacia el techo en todo momento y asegurarse de que el movimiento sea controlado y fluido. También se puede variar el agarre de las mancuernas y la separación entre ellas para trabajar diferentes partes del tríceps."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances/pressFrances.mp4"
                              },
                              {
                                        "id": "press-frances-sentado",
                                        "name": "Press Frances Sentado",
                                        "steps": [
                                                  "Toma una mancuerna con ambas manos y colócala detrás de tu cabeza, con los brazos doblados en un ángulo de 90 grados. Los dedos deben estar entrelazados alrededor del peso de la mancuerna.",
                                                  "Mantén tus codos estacionarios y levanta lentamente la mancuerna hacia arriba, extendiendo completamente los brazos hacia el techo. Asegúrate de mantener los codos apuntando hacia el techo y de no moverlos hacia afuera durante el movimiento.",
                                                  "Baja lentamente la mancuerna de vuelta a la posición inicial detrás de la cabeza, manteniendo siempre el control del movimiento.",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances Sentado/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances Sentado/extensionTricepsTrasnuca.mp4",
                                        "note": "Es importante recordar que este ejercicio puede ser exigente para los músculos del cuello y de los hombros, por lo que es importante mantener una buena postura y no hacer demasiado peso. Si eres nuevo en el ejercicio, comienza con un peso ligero y aumenta gradualmente a medida que ganas fuerza y resistencia."
                              },
                              {
                                        "id": "press-frances-sentado-a-una-mano",
                                        "name": "Press Frances Sentado a una Mano",
                                        "steps": [
                                                  "Toma una mancuerna con una mano y colócala detrás de tu cabeza, con el brazoa doblado en un ángulo de 90 grados.",
                                                  "Los dedos deben estar entrelazados alrededor del peso de la mancuerna.",
                                                  "Levanta lentamente la mancuerna hacia arriba, extendiendo completamente el brazo hacia el techo. Asegúrate de no mover los codos hacia afuera durante el movimiento.",
                                                  "Baja lentamente la mancuerna de vuelta a la posición inicial detrás de la cabeza, manteniendo siempre el control del movimiento.",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances Sentado a una Mano/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Mancuernas/Press Frances Sentado a una Mano/extensionTricepsUnaMano.mp4",
                                        "note": "Es importante recordar que este ejercicio puede ser exigente para los músculos del cuello y de los hombros, por lo que es importante mantener una buena postura y no hacer demasiado peso. Si eres nuevo en el ejercicio, comienza con un peso ligero y aumenta gradualmente a medida que ganas fuerza y resistencia."
                              }
                    ]
          },
          {
                    "id": "poleas-maquinas",
                    "name": "Poleas y Máquinas",
                    "exercises": [
                              {
                                        "id": "extension-de-codo-en-polea",
                                        "name": "Extensión de Codo en Polea",
                                        "steps": [
                                                  "Primero, ajusta la polea en la posición más alta y sujeta la manija de la cuerda con las dos manos.",
                                                  "Párate de frente a la polea, con los pies separados al ancho de los hombros y una ligera flexión en las rodillas. Mantén una buena postura y la espalda recta.",
                                                  "Mantén los codos pegados a los lados del cuerpo y estira los brazos hacia abajo, manteniendo las palmas hacia abajo y las muñecas firmes.",
                                                  "Luego, flexiona los codos y tira de las manos hacia abajo y hacia atrás, manteniendo los codos pegados al cuerpo. La manija de la cuerda debe bajar hasta que esté cerca de tus muslos y tus brazos estén completamente extendidos hacia atrás.",
                                                  "Mantén la contracción en los tríceps durante un segundo, luego lentamente vuelve a la posición inicial, manteniendo la resistencia controlada en todo momento.",
                                                  "Repite este movimiento para completar una serie de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea/tricepsPolea.mp4",
                                        "note": "Recuerda que es importante mantener una buena postura y una técnica adecuada para evitar lesiones y maximizar los beneficios del ejercicio. Además, puedes variar la posición de las manos y la altura de la polea para enfocar diferentes partes de los tríceps."
                              },
                              {
                                        "id": "extension-de-codo-en-polea-alta-con-apoyo",
                                        "name": "Extensión de Codo en Polea Alta con Apoyo",
                                        "steps": [
                                                  "Apoya la espalda alta en la colchoneta.",
                                                  "Párate de frente a la polea, con los pies separados al ancho de los hombros y una ligera flexión en las rodillas. Mantén una buena postura y la espalda recta.",
                                                  "Mantén los codos pegados a los lados del cuerpo y estira los brazos hacia abajo, manteniendo las palmas hacia abajo y las muñecas firmes.",
                                                  "Luego, flexiona los codos y tira de las manos hacia abajo y hacia atrás, manteniendo los codos pegados al cuerpo. La manija de la cuerda debe bajar hasta que esté cerca de tus muslos y tus brazos estén completamente extendidos hacia atrás.",
                                                  "Mantén la contracción en los tríceps durante un segundo, luego lentamente vuelve a la posición inicial, manteniendo la resistencia controlada en todo momento.",
                                                  "Repite este movimiento para completar una serie de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea Alta con Apoyo/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea Alta con Apoyo/poleaAltaParaTricep.mp4",
                                        "note": "Recuerda que es importante mantener una buena postura y una técnica adecuada para evitar lesiones y maximizar los beneficios del ejercicio. Además, puedes variar la posición de las manos y la altura de la polea para enfocar diferentes partes de los tríceps."
                              },
                              {
                                        "id": "extension-de-codo-en-polea-unilateral",
                                        "name": "Extensión de Codo en Polea Unilateral",
                                        "steps": [
                                                  "Coloca una polea a la altura máxima de la máquina.",
                                                  "Párate de lado a la polea y agarra el asa o la cuerda con una mano.",
                                                  "Mantén el codo pegado al costado del cuerpo y extiende el brazo hacia abajo, manteniendo la muñeca recta.",
                                                  "Mantén la posición durante un segundo y luego lentamente vuelve a la posición inicial.",
                                                  "Repite el movimiento para completar el número deseado de repeticiones.",
                                                  "Luego cambia de lado y repite el ejercicio con la otra mano."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea Unilateral/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Codo en Polea Unilateral/tricepsIndividual.mp4",
                                        "note": "Es importante mantener una buena postura durante todo el ejercicio, evitando inclinar el cuerpo hacia un lado o hacia adelante. También debes asegurarte de mantener el codo pegado al costado del cuerpo para asegurar que se aíslen adecuadamente los tríceps."
                              },
                              {
                                        "id": "extension-de-triceps-en-polea-alta-unilateral",
                                        "name": "Extensión de Triceps en Polea Alta Unilateral",
                                        "steps": [
                                                  "De pie frente a la máquina de poleas con una polea alta, y de espaldas a la misma.",
                                                  "Asegura el agarre de una sola manija con una mano, manteniendo la palma de la mano mirando hacia abajo.",
                                                  "Da un paso hacia adelante con el pie del lado opuesto al brazo que está sujetando la manija, para mantener el equilibrio.",
                                                  "Inicia el movimiento con el codo ligeramente flexionado y la manija cerca de la cara, con el tríceps activado.",
                                                  "Extiende el codo completamente, llevando la manija hacia abajo y hacia afuera, alejándola de tu cuerpo.",
                                                  "Mantén la posición extendida por un segundo para maximizar la contracción en los tríceps.",
                                                  "Controla el retorno de la manija a la posición inicial, flexionando el codo.",
                                                  "Realiza el mismo número de repeticiones y luego cambia de lado para trabajar el otro brazo.",
                                                  "Mantén una postura estable y evita balancear el cuerpo durante el movimiento.",
                                                  "Ajusta el peso de la máquina según tu nivel de fuerza y comodidad."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Triceps en Polea Alta Unilateral/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Extensión de Triceps en Polea Alta Unilateral/extensionAltaTricepsTrasnucaUnilateral.mp4"
                              },
                              {
                                        "id": "fondo-asistidos",
                                        "name": "Fondo Asistidos",
                                        "steps": [
                                                  "Ajusta el asiento de la máquina de modo que la almohadilla de tu espalda esté en ángulo recto con los brazos extendidos hacia atrás y las manos agarrando las manijas de la máquina.",
                                                  "Ajusta la cantidad de peso que deseas levantar, según tu nivel de fuerza y habilidad.",
                                                  "Comienza el movimiento lentamente, doblando los codos para bajar los brazos mientras mantienes los hombros estables y las manos agarrando las manijas.",
                                                  "Una vez que los brazos estén completamente doblados, extiéndelos hacia arriba para volver a la posición inicial.",
                                                  "Continúa el movimiento durante varias repeticiones, manteniendo una respiración controlada y evitando balancear el cuerpo.",
                                                  "Cuando hayas completado el número deseado de repeticiones, libera las manijas de la máquina y levántate del asiento."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Fondo Asistidos/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Fondo Asistidos/tricepsAsistidos.mp4",
                                        "note": "Es importante mantener una buena forma durante todo el ejercicio para evitar lesiones y maximizar los beneficios. También es recomendable trabajar con un entrenador personal certificado para obtener una orientación adecuada sobre la técnica y el peso adecuado para tu nivel de habilidad."
                              },
                              {
                                        "id": "fondo-de-triceps-sentado",
                                        "name": "Fondo de Triceps Sentado",
                                        "steps": [
                                                  "Siéntate en la máquina con la espalda recta y los pies firmemente apoyados en el suelo. Ajusta la altura del asiento para alinear tus codos con los ejes de rotación de las palancas.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza. Comienza con un peso ligero y ajusta según sea necesario.",
                                                  "Agarra las empuñaduras con firmeza y comodidad, asegurándote de que tus manos estén a la altura de tus hombros.",
                                                  "Inicia el movimiento extendiendo completamente los codos, empujando las empuñaduras hacia abajo. Exhala durante esta fase.",
                                                  "Mantén la concentración en tus tríceps durante la extensión. Evita el impulso excesivo para que los tríceps realicen el trabajo.",
                                                  "Después de la extensión completa, flexiona los codos para llevar las empuñaduras de vuelta a la posición inicial. Inhala durante esta fase.",
                                                  "Realiza el ejercicio de manera controlada, evitando movimientos bruscos para maximizar la activación de los tríceps y reducir el riesgo de lesiones.",
                                                  "Realiza el número deseado de series y repeticiones según tu programa de entrenamiento. Descansa adecuadamente entre las series.",
                                                  "Si es necesario, ajusta el asiento o el peso durante tu sesión para garantizar un movimiento efectivo y seguro."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Fondo de Triceps Sentado/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Fondo de Triceps Sentado/fondoTricepsSentado.mp4"
                              },
                              {
                                        "id": "maquina-de-extension-de-brazos",
                                        "name": "Máquina de Extensión de Brazos",
                                        "steps": [
                                                  "Siéntate en la máquina de extensión de tríceps con la espalda recta y los pies firmemente apoyados en el suelo. Ajusta la altura del asiento para alinear tus codos con los ejes de rotación de las palancas.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza. Comienza con un peso ligero y ajusta según sea necesario.",
                                                  "Agarra las empuñaduras con firmeza y comodidad, asegurándote de que tus manos estén a la altura de tus hombros.",
                                                  "Inicia el movimiento extendiendo completamente los codos, empujando las empuñaduras hacia abajo. Exhala durante esta fase.",
                                                  "Mantén la concentración en tus tríceps durante la extensión. Evita el impulso excesivo para que los tríceps realicen el trabajo.",
                                                  "Después de la extensión completa, flexiona los codos para llevar las empuñaduras de vuelta a la posición inicial. Inhala durante esta fase.",
                                                  "Realiza el ejercicio de manera controlada, evitando movimientos bruscos para maximizar la activación de los tríceps y reducir el riesgo de lesiones.",
                                                  "Realiza el número deseado de series y repeticiones según tu programa de entrenamiento. Descansa adecuadamente entre las series.",
                                                  "Si es necesario, ajusta el asiento o el peso durante tu sesión para garantizar un movimiento efectivo y seguro."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Extensión de Brazos/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Extensión de Brazos/armExtension.mp4"
                              },
                              {
                                        "id": "maquina-de-extension-de-triceps",
                                        "name": "Máquina de Extensión de Triceps",
                                        "steps": [
                                                  "Siéntate en la máquina de extensión de tríceps con la espalda recta y los pies firmemente apoyados en el suelo. Ajusta la altura del asiento para alinear tus codos con los ejes de rotación de las palancas.",
                                                  "Selecciona el peso adecuado para tu nivel de fuerza. Comienza con un peso ligero y ajusta según sea necesario.",
                                                  "Agarra las empuñaduras con firmeza y comodidad, asegurándote de que tus manos estén a la altura de tus hombros.",
                                                  "Inicia el movimiento extendiendo completamente los codos, empujando las empuñaduras hacia abajo. Exhala durante esta fase.",
                                                  "Mantén la concentración en tus tríceps durante la extensión. Evita el impulso excesivo para que los tríceps realicen el trabajo.",
                                                  "Después de la extensión completa, flexiona los codos para llevar las empuñaduras de vuelta a la posición inicial. Inhala durante esta fase.",
                                                  "Realiza el ejercicio de manera controlada, evitando movimientos bruscos para maximizar la activación de los tríceps y reducir el riesgo de lesiones.",
                                                  "Realiza el número deseado de series y repeticiones según tu programa de entrenamiento. Descansa adecuadamente entre las series.",
                                                  "Si es necesario, ajusta el asiento o el peso durante tu sesión para garantizar un movimiento efectivo y seguro."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Extensión de Triceps/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Extensión de Triceps/maquinaExtensionTriceps.mp4"
                              },
                              {
                                        "id": "maquina-de-press-frances",
                                        "name": "Máquina de Press Frances",
                                        "steps": [
                                                  "Siéntate en la máquina y ajuste el peso adecuado para realizar el ejercicio",
                                                  "Toma las astas con ambas manos y colócala detrás de tu cabeza, con los brazos doblados en un ángulo de 90 grados.",
                                                  "Mantén tus codos estacionarios y levanta lentamente la mancuerna hacia arriba, extendiendo completamente los brazos hacia el techo. Asegúrate de mantener los codos apuntando hacia el techo y de no moverlos hacia afuera durante el movimiento.",
                                                  "Baja lentamente de vuelta a la posición inicial detrás de la cabeza, manteniendo siempre el control del movimiento.",
                                                  "Repite el movimiento por el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Press Frances/tricepExtencionCodos.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Máquina de Press Frances/maquinaPressFrances.mp4",
                                        "note": "Es importante recordar que este ejercicio puede ser exigente para los músculos del cuello y de los hombros, por lo que es importante mantener una buena postura y no hacer demasiado peso. Si eres nuevo en el ejercicio, comienza con un peso ligero y aumenta gradualmente a medida que ganas fuerza y resistencia."
                              },
                              {
                                        "id": "patada-de-tricep-en-polea",
                                        "name": "Patada de Trícep en Polea",
                                        "steps": [
                                                  "Ajusta una máquina de polea con una polea alta y selecciona un peso adecuado.",
                                                  "Ajusta la posición de la máquina a la altura de tus hombros.",
                                                  "Párate de frente a la máquina y agarra la cuerda con una mano, y con la otra apóyate en la máquina",
                                                  "Da un paso atrás para crear tensión en la cuerda y mantener los músculos del tríceps activados.",
                                                  "Inicia el movimiento llevando la mano hacia atrás, extendiendo completamente el codo.",
                                                  "Asegúrate de que los codos permanezcan cerca de tu cuerpo y la parte superior de los brazos esté estacionaria.",
                                                  "Mantén la posición extendida por un segundo para sentir la contracción en los tríceps.",
                                                  "Controla el retorno de las manos hacia la posición inicial, flexionando los codos.",
                                                  "Evita balancear el cuerpo o utilizar el impulso; concéntrate en el trabajo específico de los tríceps."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Patada de Trícep en Polea/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Patada de Trícep en Polea/patadaTricepsPolea.mp4"
                              },
                              {
                                        "id": "triceps-trasnuca-en-polea",
                                        "name": "Triceps Trasnuca en Polea",
                                        "steps": [
                                                  "Para comenzar, ajusta la polea a una posición alta y fija la barra en el cable. Asegúrate de que la polea esté en el punto más alto posible.",
                                                  "Párate frente a la polea y agarra la barra con las dos manos, con las palmas hacia abajo y las manos separadas a la distancia de los hombros.",
                                                  "Coloca los pies separados a la misma distancia de los hombros y da un paso hacia adelante para estabilizarte.",
                                                  "Mantén los codos cerca de los lados del cuerpo y los brazos rectos. Los codos deben estar pegados al cuerpo y los antebrazos deben apuntar hacia la polea.",
                                                  "Mantén los abdominales tensos y la espalda recta mientras estiras los brazos hacia abajo, hacia los lados de tu cuerpo. Asegúrate de mantener los codos pegados al cuerpo todo el tiempo.",
                                                  "Cuando hayas estirado completamente los brazos, sostén la posición por un momento y siente la contracción en tus tríceps.",
                                                  "Vuelve lentamente a la posición inicial, controlando el movimiento y evitando que la barra suba demasiado rápido.",
                                                  "Repite el movimiento durante el número deseado de repeticiones."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Triceps Trasnuca en Polea/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Triceps Trasnuca en Polea/tricepsPoleaSuperior.mp4",
                                        "note": "Recuerda mantener una buena postura y una técnica adecuada durante todo el ejercicio para evitar lesiones y lograr los mejores resultados."
                              },
                              {
                                        "id": "triceps-trasnuca-en-polea-baja",
                                        "name": "Triceps Trasnuca en Polea Baja",
                                        "steps": [
                                                  "Ajusta una máquina de polea con una polea baja y selecciona un peso adecuado.",
                                                  "Coloca un accesorio de cuerda en la polea.",
                                                  "Párate de espaldas a la máquina y agarra la cuerda con ambas manos y los codos flexionados.",
                                                  "Lleva las manos hacia la parte posterior de la cabeza, manteniendo los codos apuntando hacia el techo.",
                                                  "Inicia el movimiento extendiendo completamente los codos, llevando las manos hacia arriba y alejándolas de la cabeza.",
                                                  "Mantén la posición extendida por un segundo y luego controla el retorno de las manos hacia la parte posterior de la cabeza.",
                                                  "Evita balancear el cuerpo o utilizar el impulso; concéntrate en el trabajo específico de los tríceps."
                                        ],
                                        "imageUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Triceps Trasnuca en Polea Baja/trapecioBanco.png",
                                        "videoUrl": "/Entrenamientos/Triceps/Poleas y maquinas/Triceps Trasnuca en Polea Baja/tricepsTrasnucaPoleaBaja.mp4"
                              }
                    ]
          }
]
    },
};
