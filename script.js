// === DATOS DE RAMOS ===
const ramos = [
  { codigo: "morfologia", nombre: "Morfología Humana", abre: ["fisiologia", "neurociencia", "histologia"] },
  { codigo: "biocelular", nombre: "Biología Celular y Molecular", abre: ["fisiologia", "microbiologia", "histologia"] },
  { codigo: "integracion1", nombre: "Integración I", abre: ["integracion2"] },
  { codigo: "filosofia", nombre: "Fundamentos de la Filosofía", abre: ["antropologia"] },
  { codigo: "teologia", nombre: "Fundamentos de la Teología", abre: ["antropologia"] },
  { codigo: "biomatematicas", nombre: "Biomatemáticas", abre: ["bioestadisticas", "biofisica"] },
  { codigo: "quimica", nombre: "Química", abre: ["bioquimica1"] },
  { codigo: "ingles", nombre: "Inglés Médico", abre: [] },
  { codigo: "comunicacion", nombre: "Comunicación Médica", abre: [] },
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
  { codigo: "integracionsaberes1", nombre: "Integración de los Saberes I", abre: [] },
  { codigo: "inmunologia", nombre: "Inmunología", abre: ["cienciasbasicas"] },
  { codigo: "fisiopatologia", nombre: "Fisiopatología", abre: ["integrada2", "cirugia", "cienciasbasicas", "geriatria"] },
  { codigo: "fundamentosaccion", nombre: "Fundamentos de Acción Médica", abre: ["bioetica"] },
  { codigo: "integracion3", nombre: "Integración III", abre: ["integracion4"] },
  { codigo: "saludpública", nombre: "Salud Pública y Gestión", abre: ["proyecto"] },
  { codigo: "semiologia", nombre: "Semiología", abre: ["integrada1", "patologiaquirurgica"] },
  { codigo: "patologiagral", nombre: "Patología General", abre: ["anatomiapatologica", "patologiaquirurgica"] },
  { codigo: "optativo1", nombre: "Optativo de Profundización I", abre: [] },
  { codigo: "integrada1", nombre: "Medicina Integrada I", abre: ["integrada2", "geriatria"] },
  { codigo: "anatomiapatologica", nombre: "Anatomía Patológica", abre: ["obstetricia", "pediatria", "cirugia", "especialidades", "neurologia", "medicinalegal"] },
  { codigo: "patologiaquirurgica", nombre: "Patología Quirúrgica", abre: ["cirugia"] },
  { codigo: "integrada2", nombre: "Medicina Integrada II", abre: ["obstetricia", "pediatria", "psiquiatria", "especialidades", "neurologia"] },
  { codigo: "cirugia", nombre: "Cirugía", abre: [] },
  { codigo: "integracion4", nombre: "Integración IV", abre: ["integracion5"] },
  { codigo: "bioetica", nombre: "Bioética General", abre: ["bioeticaespecial"] },
  { codigo: "cienciasbasicas", nombre: "Ciencias Básicas Aplicadas", abre: [] },
  { codigo: "proyecto", nombre: "Proyecto de Investigación", abre: [] },
  { codigo: "geriatria", nombre: "Geriatría y Cuidados Especiales", abre: [] },
  { codigo: "integracionsaberes2", nombre: "Integración de los Saberes II", abre: [] },
  { codigo: "obstetricia", nombre: "Obstetricia y Ginecología", abre: [] },
  { codigo: "pediatria", nombre: "Pediatría y Cirugía Infantil", abre: [] },
  { codigo: "integracion5", nombre: "Integración V", abre: [] },
  { codigo: "bioeticaespecial", nombre: "Bioética Especial", abre: [] },
  { codigo: "psiquiatria", nombre: "Psiquiatría", abre: [] },
  { codigo: "especialidades", nombre: "Especialidades Médico Quirúrgicas", abre: [] },
  { codigo: "neurologia", nombre: "Neurología", abre: [] },
  { codigo: "medicinalegal", nombre: "Medicina Legal", abre: [] },
  { codigo: "optativo2", nombre: "Optativo de Profundización II", abre: [] },
  { codigo: "bioeticapratica1", nombre: "Práctico de Bioética Clínica I", abre: ["bioeticapratica2"] },
  { codigo: "internadopediatria", nombre: "Internado Pediatría", abre: [] },
  { codigo: "internadogineco", nombre: "Internado Ginecología y Obstetricia", abre: [] },
  { codigo: "internadoespecialidad", nombre: "Internado Especialidad", abre: [] },
  { codigo: "bioeticapratica2", nombre: "Práctico de Bioética Clínica II", abre: [] },
  { codigo: "internadosaludfamiliar", nombre: "Internado Salud Familiar", abre: [] },
  { codigo: "internadocirugia", nombre: "Internado Cirugía", abre: [] },
  { codigo: "internadomedicinainterna", nombre: "Internado Medicina Interna", abre: [] }
];

// === AGRUPACIÓN DE SEMESTRES POR AÑO ===
const mallaAgrupada = [
  {
    anio: "1° AÑO",
    semestres: [
      { nombre: "I SEMESTRE", codigos: ["morfologia", "biocelular", "integracion1", "filosofia", "teologia", "biomatematicas", "quimica", "ingles", "comunicacion"] },
      { nombre: "II SEMESTRE", codigos: ["morfologia", "biocelular", "integracion1", "filosofia", "teologia", "bioestadisticas", "bioquimica1", "biofisica", "introMed"] }
    ]
  },
  {
    anio: "2° AÑO",
    semestres: [
      { nombre: "III SEMESTRE", codigos: ["fisiologia", "atencion", "integracion2", "antropologia", "microbiologia", "metodologia", "bioquimica2", "neurociencia", "histologia"] },
      { nombre: "IV SEMESTRE", codigos: ["fisiologia", "atencion", "integracion2", "antropologia", "microbiologia", "epidemiologia", "farmacologia", "integracionsaberes1", "inmunologia"] }
    ]
  },
  {
    anio: "3° AÑO",
    semestres: [
      { nombre: "V SEMESTRE", codigos: ["fisiopatologia", "fundamentosaccion", "integracion3", "saludpública", "semiologia", "patologiagral", "optativo1"] },
      { nombre: "VI SEMESTRE", codigos: ["fisiopatologia", "fundamentosaccion", "integracion3", "saludpública", "integrada1", "anatomiapatologica", "patologiaquirurgica", "integracionsaberes1"] }
    ]
  },
  {
    anio: "4° AÑO",
    semestres: [
      { nombre: "VII SEMESTRE", codigos: ["integrada2", "cirugia", "integracion4", "bioetica", "cienciasbasicas", "proyecto", "geriatria", "optativo1"] },
      { nombre: "VIII SEMESTRE", codigos: ["integrada2", "cirugia", "integracion4", "bioetica", "cienciasbasicas", "proyecto", "geriatria", "integracionsaberes2"] }
    ]
  },
  {
    anio: "5° AÑO",
    semestres: [
      { nombre: "IX SEMESTRE", codigos: ["obstetricia", "pediatria", "integracion5", "bioeticaespecial", "psiquiatria", "especialidades", "neurologia", "integracionsaberes2"] },
      { nombre: "X SEMESTRE", codigos: ["obstetricia", "pediatria", "integracion5", "bioeticaespecial", "psiquiatria", "especialidades", "neurologia", "medicinalegal", "optativo2"] }
    ]
  },
  {
    anio: "6° AÑO",
    semestres: [
      { nombre: "XI SEMESTRE", codigos: ["bioeticapratica1", "internadopediatria", "internadogineco", "internadoespecialidad"] }
    ]
  },
  {
    anio: "7° AÑO",
    semestres: [
      { nombre: "XII SEMESTRE", codigos: ["bioeticapratica2", "internadosaludfamiliar", "internadocirugia", "internadomedicinainterna"] }
    ]
  }
];

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

  mallaAgrupada.forEach(bloque => {
    const añoDiv = document.createElement('div');
    añoDiv.classList.add('año');

    const titulo = document.createElement('h2');
    titulo.textContent = bloque.anio;
    añoDiv.appendChild(titulo);

    const semestresDiv = document.createElement('div');
    semestresDiv.classList.add('semestres');

    bloque.semestres.forEach(sem => {
      const semestreDiv = document.createElement('div');
      semestreDiv.classList.add('semestre');

      const nombre = document.createElement('h3');
      nombre.textContent = sem.nombre;
      semestreDiv.appendChild(nombre);

      const container = document.createElement('div');
      container.classList.add('ramos-container');

      sem.codigos.forEach(codigo => {
        const ramoData = ramos.find(r => r.codigo === codigo);
        if (ramoData) {
          const div = crearRamoHTML(ramoData);
          container.appendChild(div);
        }
      });

      semestreDiv.appendChild(container);
      semestresDiv.appendChild(semestreDiv);
    });

    añoDiv.appendChild(semestresDiv);
    contenedor.appendChild(añoDiv);
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
