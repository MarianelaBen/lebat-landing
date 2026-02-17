// ─────────────────────────────────────────────
// CONFIGURACIÓN GLOBAL — editá todo desde acá
// ─────────────────────────────────────────────

export const CONFIG = {
  whatsappNumero: '+54 9 11 7151-1866', // ← Reemplazar con número real
  nombreEmpresa: 'Lebat',
  zona: 'CABA y GBA',
  añoFundacion: '2026',
}

export const SERVICIOS = [
  {
    id: 'kinesiologia',
    nombre: 'Kinesiología',
    descripcion: 'Rehabilitación motora, traumatológica y respiratoria. Sesiones personalizadas con equipamiento profesional.',
    tag: 'A domicilio',
    iconPath: 'M9 12h6M12 9v6M5 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3h6M9 3a1 1 0 0 0-1 1v1h8V4a1 1 0 0 0-1-1H9z',
  },
  {
    id: 'enfermeria',
    nombre: 'Enfermería',
    descripcion: 'Colocación de vías, curaciones, control de signos vitales, administración de medicación y más.',
    tag: 'A domicilio',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
  {
    id: 'cuidadores',
    nombre: 'Cuidadores Geriátricos',
    descripcion: 'Acompañamiento y asistencia para adultos mayores. Guardias diurnas, nocturnas y jornadas completas.',
    tag: 'Por jornada',
    iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    id: 'fonoaudiologia',
    nombre: 'Fonoaudiología',
    descripcion: 'Trastornos del habla, lenguaje y deglución. Para niños y adultos en la comodidad del hogar.',
    tag: 'A domicilio',
    iconPath: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  {
    id: 'terapia-ocupacional',
    nombre: 'Terapia Ocupacional',
    descripcion: 'Mejora de autonomía e integración en actividades de la vida diaria tras lesiones o enfermedades.',
    tag: 'A domicilio',
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l3 3',
  },
  {
    id: 'otros',
    nombre: '¿Necesitás otro servicio?',
    descripcion: 'Estamos en expansión. Consulta y buscamos el profesional ideal para lo que necesitás.',
    tag: 'Consultar',
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v8M8 12h8',
  },
]

export const PLANES = [
  {
    id: 'basico',
    badge: 'Básico',
    nombre: 'Consulta Simple',
    descripcion: 'Ideal para quienes necesitan atención puntual sin compromisos de continuidad.',
    features: [
      '1 visita a domicilio',
      'Evaluación inicial incluida',
      'Informe post-sesión',
      'Coordinación por WhatsApp',
    ],
    precio: '$XXXX',
    precioPer: 'por visita · precio orientativo',
    featured: false,
  },
  {
    id: 'mensual',
    badge: 'Más elegido',
    nombre: 'Seguimiento Mensual',
    descripcion: 'Para tratamientos continuos con seguimiento personalizado y prioridad en la agenda.',
    features: [
      '8 sesiones por mes',
      'Mismo profesional siempre',
      'Seguimiento y evolución',
      'Prioridad en reagendamiento',
      'Contacto directo con el profesional',
    ],
    precio: '$XXXX',
    precioPer: 'por mes · precio orientativo',
    featured: true,
  },
  {
    id: 'integral',
    badge: 'Premium',
    nombre: 'Cuidado Integral',
    descripcion: 'Solución completa para quien necesita cobertura de varias disciplinas simultáneas.',
    features: [
      'Múltiples disciplinas incluidas',
      'Coordinación centralizada',
      'Plan de tratamiento personalizado',
      'Informes periódicos',
      'Atención prioritaria 7 días',
    ],
    precio: '$XXXX',
    precioPer: 'por mes · precio orientativo',
    featured: false,
  },
]

export const PASOS = [
  {
    num: '01',
    titulo: 'Elegí tu plan',
    descripcion: 'Seleccioná el plan o servicio que necesitás y hacé click para contactarnos. Te redirigimos directo a WhatsApp.',
    iconPath: 'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01',
  },
  {
    num: '02',
    titulo: 'Coordinamos el turno',
    descripcion: 'Te asignamos el profesional más adecuado y acordamos día, horario y dirección.',
    iconPath: 'M3 4h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M2 10h20',
  },
  {
    num: '03',
    titulo: 'El profesional llega',
    descripcion: 'Se presenta en tu domicilio en el horario acordado, identificado y con su matrícula visible.',
    iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  },
  {
    num: '04',
    titulo: 'Seguimiento continuo',
    descripcion: 'Coordinamos las sesiones siguientes y te mantenemos informado sobre la evolución del tratamiento.',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
]

export const VALORACIONES = [
  {
    inicial: 'M',
    nombre: 'María G.',
    servicio: 'Kinesiología · Palermo',
    texto: 'Excelente atención desde el primer contacto. El kinesiólogo llegó puntual, fue muy profesional y en pocas sesiones noté una mejora enorme en mi movilidad. Lo recomiendo totalmente.',
    tag: 'Rehabilitación',
    fecha: 'Enero 2025',
    gradiente: 'linear-gradient(135deg, #1e5b8a, #4db8c8)',
  },
  {
    inicial: 'R',
    nombre: 'Roberto A.',
    servicio: 'Cuidado geriátrico · Belgrano',
    texto: 'Contratar una cuidadora para mi mamá fue la mejor decisión que tomamos. La señorita es muy atenta y cariñosa. La coordinación fue sencilla y el precio muy razonable.',
    tag: 'Cuidado geriátrico',
    fecha: 'Diciembre 2024',
    gradiente: 'linear-gradient(135deg, #3a8fc2, #4db8c8)',
  },
  {
    inicial: 'L',
    nombre: 'Laura P.',
    servicio: 'Enfermería · Villa Urquiza',
    texto: 'Necesitaba curaciones periódicas después de una cirugía y la comodidad de recibirlas en casa fue un alivio enorme. Muy prolijos, higiénicos y puntuales.',
    tag: 'Enfermería',
    fecha: 'Febrero 2025',
    gradiente: 'linear-gradient(135deg, #1a2e4a, #1e5b8a)',
  },
  {
    inicial: 'C',
    nombre: 'Carlos M.',
    servicio: 'Kinesiología · Zona Norte GBA',
    texto: 'Después de mi operación de rodilla, hacer el viaje hasta la clínica era imposible. Gracias a LEBAT SALUD pude hacer toda la rehabilitación en casa. Me recuperé mucho más rápido.',
    tag: 'Rehabilitación post-quirúrgica',
    fecha: 'Marzo 2025',
    gradiente: 'linear-gradient(135deg, #4db8c8, #3a8fc2)',
  },
  {
    inicial: 'S',
    nombre: 'Silvia T.',
    servicio: 'Fonoaudiología · Caballito',
    texto: 'Mi hijo tiene dificultades en el habla y la fonoaudióloga que nos mandaron fue increíble con él. Muy paciente, muy preparada. Nota una diferencia grande sesión a sesión.',
    tag: 'Fonoaudiología infantil',
    fecha: 'Enero 2025',
    gradiente: 'linear-gradient(135deg, #1e5b8a, #4db8c8)',
  },
  {
    inicial: 'A',
    nombre: 'Analía R.',
    servicio: 'Terapia Ocupacional · San Isidro',
    texto: 'Lo que más valoro es la seriedad. Desde el primer mensaje todo fue claro: horarios, precios, quién iba a venir. La terapeuta es excelente y ya vemos resultados concretos.',
    tag: 'Terapia Ocupacional',
    fecha: 'Febrero 2025',
    gradiente: 'linear-gradient(135deg, #3a8fc2, #1a2e4a)',
  },
]

export const FAQ_ITEMS = [
  {
    pregunta: '¿A qué zonas llegan?',
    respuesta: 'Cubrimos CABA y el Gran Buenos Aires. Si no estás seguro de si llegamos a tu zona, escribinos y te confirmamos al instante.',
  },
  {
    pregunta: '¿Cómo sé que los profesionales son confiables?',
    respuesta: 'Todos tienen matrícula activa verificada, antecedentes chequeados y pasan por una entrevista de selección antes de ingresar al equipo.',
  },
  {
    pregunta: '¿Cuánto tardan en responder?',
    respuesta: 'Respondemos en un máximo de 24 horas hábiles. Para urgencias, escribinos por WhatsApp de lunes a sábado de 8 a 20 hs.',
  },
  {
    pregunta: '¿Trabajan con obra social o prepaga?',
    respuesta: 'Actualmente trabajamos de forma particular. Podemos emitir el comprobante para que gestiones el reintegro con tu cobertura.',
  },
  {
    pregunta: '¿Cómo se abona el servicio?',
    respuesta: 'Aceptamos transferencia bancaria, efectivo y MercadoPago. El pago se coordina al confirmar el turno.',
  },
  {
    pregunta: '¿Puedo pedir siempre el mismo profesional?',
    respuesta: 'Sí. Entendemos la importancia del vínculo terapéutico y siempre que haya disponibilidad asignamos al mismo profesional.',
  },
]

export const GALERIA_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
    alt: 'Kinesiólogo atendiendo en domicilio',
    label: 'Atención kinesiológica',
    spanRow: true,
    placeholder: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80',
    alt: 'Enfermera en domicilio',
    label: 'Enfermería especializada',
    spanRow: false,
    placeholder: false,
  },
  {
    src: null,
    alt: '',
    label: '',
    spanRow: false,
    placeholder: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=500&q=80',
    alt: 'Cuidado geriátrico',
    label: 'Cuidado geriátrico',
    spanRow: false,
    placeholder: false,
  },
  {
    src: null,
    alt: '',
    label: '',
    spanRow: false,
    placeholder: true,
  },
]

export const PERFILES_SUMATE = [
  'Kinesiólogos',
  'Enfermeros/as',
  'Cuidadores/as',
  'Fonoaudiólogos',
  'Terapistas Ocup.',
  'Otros',
]
