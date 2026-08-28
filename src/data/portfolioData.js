export const personalInfo = {
  name: "Pedro Sandoval Muñoz",
  shortName: "Pedro Sandoval",
  title: "Analista Programador & Operaciones TI",
  email: "pedrosandm@hotmail.com",
  status: "Disponible para Desafíos TI y Desarrollo",
  summary: "Analista Programador especializado en la operación, soporte y automatización de servicios TI. Mi enfoque combina rigurosidad analítica, orden en los detalles y la integración de herramientas como APIs, PowerBI y Python para eliminar tareas redundantes y maximizar la eficiencia operativa.",
  englishLevel: "C2 Proficiency (Bilingüe)",
  links: {
    linkedin: "https://www.linkedin.com/in/pedro-sandoval-munoz",
    github: "https://github.com/Kangarroar",
    website: "https://www.psandoval.pages.dev"
  }
};

export const projects = [
  {
    id: "tdee",
    title: "TDEE Tracker",
    description: "Aplicación web mobile-first para seguimiento de gasto calórico diario. Registra ingesta alimentaria, pasos y actividad física, calcula el déficit o superávit calórico real y visualiza la evolución del peso con gráficos de progreso. Inicio del proyecto como intento en React Native, terminado en HTML, JS y CSS.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: null,
    imageKey: "tdee"
  },
  {
    id: "lfc",
    title: "Legion Fan Controller",
    description: "Aplicación de escritorio para Windows que permite controlar las curvas de velocidad del ventilador (CPU y GPU) en portátiles Lenovo Legion. Visualización en tiempo real de temperaturas y RPM, editor de curvas interactivo y soporte para múltiples perfiles de hardware.",
    tech: ["C#", ".NET", "WinUI"],
    github: "https://github.com/Kangarroar/Legion-Fan-Controller",
    imageKey: "lfc"
  }
];

export const automationHighlights = [
  {
    id: "manageengine-powerbi",
    shortTitle: "ManageEngine → PowerBI",
    title: "Dashboard Dinámico ManageEngine ↔ PowerBI",
    category: "Integración de APIs & BI",
    period: "Watts S.A.",
    description: "Interconexión directa vía API REST entre ManageEngine ServiceDesk y PowerBI para transformar datos brutos de soporte en métricas de toma de decisiones diarias.",
    problem: "Falta de visibilidad consolidada en tiempo real sobre la carga diaria de incidencias y estado del ServiceDesk.",
    solution: "Desarrollo de pipeline de datos que extrae endpoints de ManageEngine en intervalos programados y alimenta un tablero dinámico interactivo en PowerBI.",
    impact: "Monitoreo diario automatizado del flujo de tickets, reducción de tiempos de respuesta y visibilidad clara para jefatura TI.",
    tools: ["ManageEngine API", "PowerBI", "Postman", "REST APIs", "JSON"],
    architectureSteps: [
      { step: "01", name: "ManageEngine API", desc: "Consultas programadas a la API REST de ServiceDesk para extracción de tickets." },
      { step: "02", name: "Postman / Scripting", desc: "Validación de tokens, autenticación bearer y mapeo de estructuras JSON." },
      { step: "03", name: "PowerBI Pipeline", desc: "Transformación de datos en Power Query y modelado de datos dinámico." },
      { step: "04", name: "Dashboard Diario", desc: "Visualización en tiempo real del estado de SLA, distribución y resolución de incidencias." }
    ]
  },
  {
    id: "network-auto-ticket",
    shortTitle: "Auto-Ticket de Red (Python)",
    title: "Automatización de Tickets por Caída de Red",
    category: "Monitoreo & Scripting Python",
    period: "Watts S.A.",
    description: "Sistema automatizado de detección temprana que vigila enlaces y puntos de red críticos, generando tickets automáticos antes del reporte del usuario.",
    problem: "Pérdida de tiempo en la detección manual de switches o enlaces de red caídos en la planta.",
    solution: "Script en Python que sondea constantemente el estado de conectividad (ICMP/Ping). Si un enlace crítico se interrumpe por más de 2 minutos, emite automáticamente una solicitud HTTP POST a la API de ManageEngine registrando el evento con detalles precisos de ubicación.",
    impact: "Atención inmediata ante contingencias de red y reducción drástica de tiempos de inactividad técnica sin intervención humana previa.",
    tools: ["Python", "ManageEngine ServiceDesk API", "Network Ping", "Active Directory"],
    architectureSteps: [
      { step: "01", name: "Network Ping Check", desc: "Sondeo continúo a IP de switches y puntos de red clave." },
      { step: "02", name: "Filtro de Umbral (2 min)", desc: "Confirmación de caída persistente para evitar falsos positivos por parpadeos." },
      { step: "03", name: "Generación de Payload", desc: "Construcción automática del ticket con IP, ubicación física y severidad." },
      { step: "04", name: "API Push ServiceDesk", desc: "Envío del ticket al ServiceDesk y asignación automática al técnico de turno." }
    ]
  }
];

export const experience = [
  {
    id: "watts",
    company: "Watts S.A.",
    role: "Servicio TI & Automatización de Procesos",
    period: "12/2024 – 03/2025",
    location: "Chile",
    description: "Soporte On-Site de infraestructura y automatización de tareas operativas redundantes para elevar los estándares de eficiencia del equipo TI.",
    achievements: [
      "Interconexión vía API REST entre ManageEngine ServiceDesk y PowerBI, entregando un dashboard operativo dinámico actualizado diariamente.",
      "Creación e implementación de script automatizado en Python para monitoreo de red que genera tickets en ServiceDesk tras 2 minutos de inactividad de enlace o switch.",
      "Gestión integral de ServiceDesk, administración de usuarios y permisos en Active Directory, soporte a usuarios finales y análisis con Zoho, Postman y Excel."
    ],
    tools: ["ServiceDesk", "Active Directory", "PowerBI", "Python", "Postman", "Zoho", "Excel"]
  },
  {
    id: "walmart",
    company: "Walmart",
    role: "Operador de Tienda",
    period: "01/2022 – Actualidad",
    location: "Chile",
    description: "Desempeño operativo en entorno retail de alta exigencia, enfocado en resolución práctica de problemas, logística interna y atención rigurosa al cliente.",
    achievements: [
      "Demostrada capacidad para mantener la productividad, adaptabilidad y trabajo en equipo bajo alta presión constante.",
      "Gestión eficiente de procesos operativos y control de detalles para mantener estándares de calidad en sala."
    ],
    tools: ["Operaciones Retail", "Trabajo en Equipo", "Gestión bajo Presión", "Atención al Cliente"]
  }
];

export const education = {
  degree: "Analista Programador",
  institution: "INACAP — Chillán, Chile",
  graduationDate: "Diciembre 2024",
  details: "Formación práctica orientada a la programación orientada a objetos, bases de datos, análisis de requerimientos, arquitectura de software y gestión de proyectos tecnológicos."
};

export const certifications = [
  {
    title: "EF SET English Certificate — C2 Proficient",
    issuer: "EF Standard English Test",
    level: "C2 Proficiency (Bilingüe)",
    description: "Dominio fluido y profesional del idioma inglés para comunicación técnica, documentación y colaboración en entornos globales."
  }
];

export const skillCategories = [
  {
    category: "Operaciones & Servicios TI",
    icon: "Server",
    skills: [
      { name: "ManageEngine ServiceDesk", level: "Avanzado" },
      { name: "Active Directory", level: "Intermedio" },
      { name: "Soporte On-Site & Remoto", level: "Avanzado" },
      { name: "Gestión de Incidencias (ITIL)", level: "Intermedio" }
    ]
  },
  {
    category: "Desarrollo & Automatización",
    icon: "Code",
    skills: [
      { name: "Python (Scripting & APIs)", level: "Intermedio" },
      { name: "Consumo e Integración de APIs REST", level: "Avanzado" },
      { name: "Postman API Testing", level: "Avanzado" },
      { name: "PowerBI & Power Query", level: "Intermedio" },
      { name: "React / JavaScript", level: "Básico - Intermedio" }
    ]
  },
  {
    category: "Competencias Profesionales",
    icon: "CheckCircle",
    skills: [
      { name: "Solución Analítica de Problemas", level: "Core" },
      { name: "Atención Rigurosa al Detalle", level: "Core" },
      { name: "Orientación al Trabajo Eficiente", level: "Core" },
      { name: "Prudencia & Tolerancia a la Presión", level: "Core" }
    ]
  }
];
