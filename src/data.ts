export interface QuizCase {
  id: number;
  patientName: string;
  age: number;
  imageUrl: string;
  badgeUrl: string;
  title: string;
  description: string;
  question: string;
  options: string[];
  correctAnswer: number;
  incorrectFeedback: string;
  correctFeedback: string;
  references: string[];
}

export const quizData = {
  title: "Beneficios 4x4 de la inyección subcutánea de metotrexato en el tratamiento de la artritis reumatoide",
  cases: [
    {
      id: 1,
      patientName: "Isabel",
      age: 58,
      imageUrl: "",
      badgeUrl: "",
      title: "Caso 1",
      description: "Isabel es una paciente de 58 años con artritis reumatoide seropositiva de 3 años de evolución, quien recibe metotrexato (MTX) oral 15 mg/semana + ácido fólico. Sin embargo, persiste con actividad moderada (DAS28: 4,2) y presenta náuseas intensas 24-48 horas posteriores a la toma, lo que afecta su adherencia. En el último mes ha perdido 2 kg por disminución del apetito. Su función hepática es normal y no presenta comorbilidades relevantes.",
      question: "¿Cuál es el siguiente paso más adecuado para mejorar su control clínico?",
      options: [
        "Cambiar a MTX subcutáneo para mejorar la eficacia del tratamiento y la tolerabilidad.",
        "Iniciar un agente biológico.",
        "Aumentar la dosis oral de MTX a 25 mg/semana."
      ],
      correctAnswer: 0,
      incorrectFeedback: "¡Intenta de nuevo!",
      correctFeedback: "El MTX subcutáneo ofrece mayor biodisponibilidad y menos eventos adversos gastrointestinales, por lo que es la opción recomendada cuando la respuesta al MTX oral es insuficiente. Además, en pacientes con artritis reumatoide refractarios o intolerantes al MTX oral se recomienda cambiar al MTX subcutáneo antes de introducir un agente biológico.",
      references: [
        "Tornero Molina J, López Robledillo JC, Casamira Ruiz N. Potential Benefits of the Self-Administration of Subcutaneous Methotrexate with Autoinjector Devices for Patients: A Review. Drug Healthc Patient Saf. 2021;13:81-94.",
        "Tanaka Y. Subcutaneous injection of methotrexate: Advantages in the treatment of rheumatoid arthritis. Mod Rheumatol. 2023;33(4):633-639."
      ]
    },
    {
      id: 2,
      patientName: "Armando",
      age: 45,
      imageUrl: "",
      badgeUrl: "",
      title: "Caso 2",
      description: "Armando es un paciente de 45 años con artritis reumatoide temprana (<1 año). Aunque a los 6 meses de tratamiento con metotrexato (MTX) oral su dosis semanal ha llegado a 20 mg, continúa con actividad moderada (DAS28: 3,9), por lo que se requiere un aumento de la dosis. No obstante, Armando refiere que a partir de 15 mg/semana ha notado más malestar digestivo. Se sabe que la absorción oral disminuye hasta un 30% con dosis ≥15 mg.",
      question: "¿Qué estrategia favorece alcanzar niveles terapéuticos óptimos?",
      options: [
        "Mantener la vía oral y aumentar la dosis progresivamente.",
        "Cambiar a MTX subcutáneo para evitar la saturación de absorción.",
        "Añadir corticoides a largo plazo."
      ],
      correctAnswer: 1,
      incorrectFeedback: "¡Intenta de nuevo!",
      correctFeedback: "La absorción intestinal del MTX oral es saturable, lo que limita su biodisponibilidad y eficacia. Por el contrario, la administración subcutánea resulta en una absorción rápida y completa, que permite lograr niveles séricos más altos y una exposición menos variable, lo que se traduce en una mayor eficacia.",
      references: [
        "Tornero Molina J, López Robledillo JC, Casamira Ruiz N. Potential Benefits of the Self-Administration of Subcutaneous Methotrexate with Autoinjector Devices for Patients: A Review. Drug Healthc Patient Saf. 2021;13:81-94.",
        "Tanaka Y. Subcutaneous injection of methotrexate: Advantages in the treatment of rheumatoid arthritis. Mod Rheumatol. 2023;33(4):633-639."
      ]
    },
    {
      id: 3,
      patientName: "Fernanda",
      age: 62,
      imageUrl: "",
      badgeUrl: "",
      title: "Caso 3",
      description: "Fernanda es una paciente de 62 años con artritis reumatoide, polimedicada por hipertensión y diabetes, quien consulta por empeoramiento clínico (aumento del dolor y la inflamación). Su dosis actual de metotrexato (MTX) oral es de 10 mg/semana. Refiere que a veces toma el MTX varios días seguidos por confusión con sus medicamentos diarios. No hay daño hepático, pero sí una evidente dificultad para adherirse al esquema semanal.",
      question: "¿Qué opción reduce el riesgo de errores, mejora la adherencia y evita la toxicidad por ingesta repetida?",
      options: [
        "Mantener el MTX oral y reforzar educación.",
        "Iniciar terapia biológica o fármacos antirreumáticos modificadores de la enfermedad (FAME) de inmediato.",
        "Cambiar a MTX subcutáneo."
      ],
      correctAnswer: 2,
      incorrectFeedback: "¡Intenta de nuevo!",
      correctFeedback: "El MTX subcutáneo reduce el riesgo de sobredosis accidentales y facilita la adherencia mediante dispositivos de administración fáciles de manejar por parte del paciente.",
      references: [
        "Tornero Molina J, López Robledillo JC, Casamira Ruiz N. Potential Benefits of the Self-Administration of Subcutaneous Methotrexate with Autoinjector Devices for Patients: A Review. Drug Healthc Patient Saf. 2021;13:81-94.",
        "Tanaka Y. Subcutaneous injection of methotrexate: Advantages in the treatment of rheumatoid arthritis. Mod Rheumatol. 2023;33(4):633-639."
      ]
    },
    {
      id: 4,
      patientName: "Leonardo",
      age: 54,
      imageUrl: "",
      badgeUrl: "",
      title: "Caso 4",
      description: "Leonardo es un paciente de 54 años con artritis reumatoide muy activa y obesidad (IMC 34), quien expresa preocupación por el impacto cada vez mayor en su calidad de vida. Según la evidencia disponible.",
      question: "¿Qué beneficio ofrece iniciar metotrexato (MTX) subcutáneo en este perfil de paciente?",
      options: [
        "Mayor necesidad de introducir terapias biológicas.",
        "Mejor absorción y mayor probabilidad de alcanzar una respuesta terapéutica óptima.",
        "Eficacia clínica similar a la obtenida con el MTX oral."
      ],
      correctAnswer: 1,
      incorrectFeedback: "¡Intenta de nuevo!",
      correctFeedback: "Se recomienda el uso de MTX subcutáneo en pacientes con enfermedad muy activa, polimedicados, con factores de pobre adherencia o que padecen obesidad, ya que ha demostrado ser significativamente más eficaz que el MTX oral, tanto como terapia inicial en pacientes sin tratamiento previo, como terapia posterior en pacientes que no responden al tratamiento. Al lograr un mejor control de la enfermedad, se retrasa la necesidad de iniciar terapias biológicas y fármacos antirreumáticos modificadores de la enfermedad (FAME).",
      references: [
        "Tornero Molina J, López Robledillo JC, Casamira Ruiz N. Potential Benefits of the Self-Administration of Subcutaneous Methotrexate with Autoinjector Devices for Patients: A Review. Drug Healthc Patient Saf. 2021;13:81-94.",
        "Tanaka Y. Subcutaneous injection of methotrexate: Advantages in the treatment of rheumatoid arthritis. Mod Rheumatol. 2023;33(4):633-639."
      ]
    }
  ] as QuizCase[]
};
