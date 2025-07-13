// DEFINICIÓN DE RAMOS CON SUS REQUISITOS (abre)
const ramos = [
  { codigo: "morfologia", nombre: "Morfología Humana", abre: ["fisiologia", "neurociencia", "histologia"] },
  { codigo: "biocelular", nombre: "Biología Celular y Molecular", abre: ["fisiologia", "microbiologia", "histologia"] },
  { codigo: "integracion1", nombre: "Integración I", abre: ["integracion2"] },
  { codigo: "filosofia", nombre: "Fundamentos de la Filosofía", abre: ["antropologia"] },
  { codigo: "teologia", nombre: "Fundamentos de la Teología", abre: ["antropologia"] },
  { codigo: "biomatematicas", nombre: "Biomatemáticas", abre: ["bioestadisticas", "biofisica"] },
  { codigo: "quimica", nombre: "Química", abre: ["bioquimica1"] },
  { codigo: "ingles", nombre: "Lectura Textos Médicos Inglés", abre: [] },
  { codigo: "comunicacion", nombre: "Introducción a la Comunicación médica", abre: [] },
  { codigo: "bioestadisticas", nombre: "Bioestadísticas", abre: ["metodologia"] },
  { codigo: "bioquimica1", nombre: "Bioquímica I", abre: ["bioquimica2", "microbiologia"] },
  { codigo: "biofisica", nombre: "Biofísica", abre: ["fisiologia"] },
  { codigo: "introMed", nombre: "Introducción a la Medicina", abre: ["atencion"] },
  { codigo: "fisiologia", nombre: "Fisiología", abre: ["fisiopatologia", "semiologia", "patologiagral"] },
  { codigo: "atencion", nombre: "Atención Primaria en Salud", abre: [] },
  { codigo: "integracion2", nombre: "Integración II", abre: ["integracion3"] },
  { codigo: "antropologia", nombre: "Antropología Médica", abre: ["fundamentosaccion"] },
  { codigo: "microbiologia", nombre: "Microbiología", abre: ["integrada1", "cienciasbasicas"] },
  { codigo: "metodologia", nombre: "Metodología de la Investigación", abre: ["epidemiologia"] },
  { codigo: "bioquimica2", nombre: "Bioquímica II", abre: ["farmacologia", "inmunologia", "fisiopatologia"] },
  { codigo: "neurociencia", nombre: "Neurociencia", abre: ["fisiopatologia", "especialidades", "neurologia", "psiquiatria"] },
  { codigo: "histologia", nombre: "Histología", abre: ["inmunologia", "fisiopatologia", "semiologia", "patologiagral"] },
  { codigo: "epidemiologia", nombre: "Epidemiología", abre: ["saludpública"] },
  { codigo: "farmacologia", nombre: "Farmacología", abre: ["integrada1", "cienciasbasicas"] },
  { codigo: "integracionsaberes1", nombre: "Integración de los Saberes 1", abre: [] },
  { codigo: "inmunologia", nombre: "Inmunología", abre: ["cienciasbasicas"] },
  { codigo: "fisiopatologia", nombre: "Fisiopatología", abre: ["integrada2", "cirugia", "cienciasbasicas", "geriatria"] },
  { codigo: "fundamentosaccion", nombre: "Fundamentos de Acción Médica", abre: ["bioetica"] },
  { codigo: "integracion3", nombre: "Integración III", abre: ["integracion4"] },
  { codigo: "saludpública", nombre: "Salud Pública y Gestión", abre: ["proyecto"] },
  { codigo: "semiologia", nombre: "Semiología", abre: ["integrada1", "patologiaquirurgica"] },
  { codigo: "patologiagral", nombre: "Patología General", abre: ["anatomiapatologica", "patologiaquirurgica"] },
  { codigo: "optativo1", nombre: "Optativo de Profundización", abre: [] },
  { codigo: "integrada1", nombre: "Medicina Integrada I", abre: ["integrada2", "geriatria"] },
  { codigo: "anatomiapatologica", nombre: "Anatomía Patológica", abre: ["obstetricia", "pediatria", "cirugia", "especialidades", "neurologia", "medicinalegal"] },
  { codigo: "patologiaquirurgica", nombre: "Patología Quirúrgica", abre: ["cirugia"] },
  { codigo: "integrada2", nombre: "Medicina Integrada II", abre: ["obstetricia", "pediatria", "psiquiatria", "especialidades", "neurologia"] },
  { codigo: "cirugia", nombre: "Cirugía", abre: [] },
  { codigo: "integracion4", nombre: "Integración IV", abre: ["integracion5"] },
  { codigo: "bioetica", nombre: "Bioética General", abre: ["bioeticaespecial"] },
  { codigo: "cienciasbasicas", nombre: "Ciencias Básicas Aplicadas", abre: [] },
  { codigo: "proyecto", nombre: "Proyecto de Investigación", abre: [] },
  { codigo: "geriatria", nombre: "Geriatría y Cuidados en situaciones Especiales", abre: [] },
  { codigo: "integracionsaberes2", nombre: "Integración de los Saberes 2", abre: [] },
  { codigo: "obstetricia", nombre: "Obstetricia y Ginecología", abre: [] },
  { codigo: "pediatria", nombre: "Pediatría y Cirugía Infantil", abre: [] },
  { codigo: "integracion5", nombre: "Integración V", abre: [] },
  { codigo: "bioeticaespecial", nombre: "Bioética Especial", abre: ["bioeticapratica1"] },
  { codigo: "psiquiatria", nombre: "Psiquiatría y Psicopatología", abre: [] },
  { codigo: "especialidades", nombre: "Especialidades Médico Quirúrgicas", abre: [] },
  { codigo: "neurologia", nombre: "Neurología y Neurocirugía", abre: [] },
  { codigo: "medicinalegal", nombre: "Medicina Legal", abre: [] },
  { codigo: "optativo2", nombre: "Optativo de Profundización", abre: [] },
  { codigo: "bioeticapratica1", nombre: "Práctico de Bioética Clínica I", abre: ["bioeticapratica2"] },
  { codigo: "internadopediatria", nombre: "Internado Pediatría", abre: [] },
  { codigo: "internadogineco", nombre: "Internado Ginecología y Obstetricia", abre: [] },
  { codigo: "internadoespecialidad", nombre: "Internado Especialidad", abre: [] },
  { codigo: "bioeticapratica2", nombre: "Práctico de Bioética Clínica II", abre: [] },
  { codigo: "internadosaludfamiliar", nombre: "Internado Salud Familiar", abre: [] },
  { codigo: "internadocirugia", nombre: "Internado Cirugía", abre: [] },
  { codigo: "internadomedicinainterna", nombre: "Internado Medicina Interna", abre: [] }
];

// MALLA CON ESTRUCTURA POR SEMESTRE
const malla = [
  { titulo: "PRIMER AÑO - I SEMESTRE", ramos: ["morfologia", "biocelular", "integracion1", "filosofia", "teologia", "biomatematicas", "quimica", "ingles", "comunicacion"] },
  { titulo: "PRIMER AÑO - II SEMESTRE", ramos: ["morfologia", "biocelular", "integracion1", "filosofia", "teologia", "bioestadisticas", "bioquimica1", "biofisica", "introMed"] },
  { titulo: "SEGUNDO AÑO - III SEMESTRE", ramos: ["fisiologia", "atencion", "integracion2", "antropologia", "microbiologia", "metodologia", "bioquimica2", "neurociencia", "histologia"] },
  { titulo: "SEGUNDO AÑO - IV SEMESTRE", ramos: ["fisiologia", "atencion", "integracion2", "antropologia", "microbiologia", "epidemiologia", "farmacologia", "integracionsaberes1", "inmunologia"] },
  { titulo: "TERCER AÑO - V SEMESTRE", ramos: ["fisiopatologia", "fundamentosaccion", "integracion3", "saludpública", "semiologia", "patologiagral", "optativo1"] },
  { titulo: "TERCER AÑO - VI SEMESTRE", ramos: ["fisiopatologia", "fundamentosaccion", "integracion3", "saludpública", "integrada1", "anatomiapatologica", "patologiaquirurgica", "integracionsaberes1"] },
  { titulo: "CUARTO AÑO - VII SEMESTRE", ramos: ["integrada2", "cirugia", "integracion4", "bioetica", "cienciasbasicas", "proyecto", "geriatria", "optativo1"] },
  { titulo: "CUARTO AÑO - VIII SEMESTRE", ramos: ["integrada2", "cirugia", "integracion4", "bioetica", "cienciasbasicas", "proyecto", "geriatria", "integracionsaberes2"] },
  { titulo: "QUINTO AÑO - IX SEMESTRE", ramos: ["obstetricia", "pediatria", "integracion5", "bioeticaespecial", "psiquiatria", "especialidades", "neurologia", "integracionsaberes2"] },
  { titulo: "QUINTO AÑO - X SEMESTRE", ramos: ["obstetricia", "pediatria", "integracion5", "bioeticaespecial", "psiquiatria", "especialidades", "neurologia", "medicinalegal", "optativo2"] },
  { titulo: "SEXTO AÑO - XI SEMESTRE", ramos: ["bioeticapratica1", "internadopediatria", "internadogineco", "internadoespecialidad"] },
  { titulo: "SÉPTIMO AÑO - XII SEMESTRE", ramos: ["bioeticapratica2", "internadosaludfamiliar", "internadocirugia", "internadomedicinainterna"] }
];

// FUNCIONES DE INTERACCIÓN
function crearRamoHTML(ramoData) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.id = ramoData.codigo;
  div.textContent = ramoData.nombre;
  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado')) return;
    div.classList.toggle('aprobado');
    const aprobado = div.classList.contains('aprobado');
    if (ramoData.abre && aprobado) {
      ramoData.abre.forEach(codigo => {
        const siguiente = document.getElementById(codigo);
        if (siguiente && siguiente.classList.contains('bloqueado')) {
          siguiente.classList.remove('bloqueado');
        }
      });
    }
  });
  return div;
}

function cargarMalla() {
  const contenedor = document.getElementById('malla');
  malla.forEach((bloque) => {
    const seccion = document.createElement('div');
    seccion.classList.add('semestre');
    const titulo = document.createElement('h2');
    titulo.textContent = bloque.titulo;
    seccion.appendChild(titulo);

    const container = document.createElement('div');
    container.classList.add('ramos-container');

    bloque.ramos.forEach(codigo => {
      const ramoData = ramos.find(r => r.codigo === codigo);
      if (ramoData) {
        const div = crearRamoHTML(ramoData);
        container.appendChild(div);
      }
    });

    seccion.appendChild(container);
    contenedor.appendChild(seccion);
  });
  desbloquearIniciales();
}

function desbloquearIniciales() {
  ramos.forEach(ramo => {
    const tieneRequisito = ramos.some(r => r.abre.includes(ramo.codigo));
    if (!tieneRequisito) {
      const div = document.getElementById(ramo.codigo);
      div?.classList.remove('bloqueado');
    }
  });
}

document.addEventListener('DOMContentLoaded', cargarMalla);
