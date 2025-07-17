// Datos completos de las materias
const materias = [
    // PRIMER AÑO - I Semestre
    { id: "anatomia", nombre: "Anatomía", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "biofisica", nombre: "Biofísica", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "biologia-celular", nombre: "Biología Celular", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "bioquimica", nombre: "Bioquímica", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "comunicacion-medico-paciente", nombre: "Comunicación Médico-Paciente", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "bioestadistica", nombre: "Bioestadística", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "ser-universitario", nombre: "Ser Universitario", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "atencion-basica-prehospitalaria", nombre: "Atención Básica Prehospitalaria", semestre: 1, anho: 1, prerrequisitos: [], aprobada: false },

    // PRIMER AÑO - II Semestre
    { id: "anatomia-clinica", nombre: "Anatomía Clínica", semestre: 2, anho: 1, prerrequisitos: ["anatomia"], aprobada: false },
    { id: "fisiologia-celular", nombre: "Fisiología Celular", semestre: 2, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "histologia", nombre: "Histología", semestre: 2, anho: 1, prerrequisitos: ["biologia-celular"], aprobada: false },
    { id: "biologia-molecular", nombre: "Biología Molecular", semestre: 2, anho: 1, prerrequisitos: ["bioquimica"], aprobada: false },
    { id: "biologia-desarrollo", nombre: "Biología del Desarrollo", semestre: 2, anho: 1, prerrequisitos: ["biologia-celular"], aprobada: false },
    { id: "epidemiologia-salud-publica", nombre: "Epidemiología y Salud Pública", semestre: 2, anho: 1, prerrequisitos: ["bioestadistica"], aprobada: false },
    { id: "lectura-redaccion-cientificas", nombre: "Lectura y Redacción Científicas", semestre: 2, anho: 1, prerrequisitos: ["comunicacion-medico-paciente"], aprobada: false },
    { id: "persona-sentido-vida", nombre: "Persona y Sentido de Vida", semestre: 2, anho: 1, prerrequisitos: ["ser-universitario"], aprobada: false },
    { id: "simulacion-medica", nombre: "Simulación Médica", semestre: 2, anho: 1, prerrequisitos: [], aprobada: false },
    { id: "asignatura-libre-1", nombre: "Asignatura Libre 1", semestre: 2, anho: 1, prerrequisitos: [], aprobada: false },

    // SEGUNDO AÑO - III Semestre
    { id: "historia-clinica", nombre: "Historia Clínica", semestre: 3, anho: 2, prerrequisitos: ["anatomia-clinica"], aprobada: false },
    { id: "fisiologia-general", nombre: "Fisiología General", semestre: 3, anho: 2, prerrequisitos: ["fisiologia-celular"], aprobada: false },
    { id: "ecologia-humana", nombre: "Ecología Humana", semestre: 3, anho: 2, prerrequisitos: ["fisiologia-celular"], aprobada: false },
    { id: "genomica-proteomica", nombre: "Genómica y Proteómica", semestre: 3, anho: 2, prerrequisitos: ["biologia-molecular"], aprobada: false },
    { id: "sistemas-informacion-salud", nombre: "Sistemas de Información en Salud", semestre: 3, anho: 2, prerrequisitos: ["epidemiologia-salud-publica"], aprobada: false },
    { id: "metodologia-investigacion", nombre: "Metodología de la Investigación", semestre: 3, anho: 2, prerrequisitos: ["epidemiologia-salud-publica"], aprobada: false },
    { id: "inmunologia", nombre: "Inmunología", semestre: 3, anho: 2, prerrequisitos: ["biologia-molecular"], aprobada: false },
    { id: "semiologia-medica", nombre: "Semiología Médica Práctica", semestre: 3, anho: 2, prerrequisitos: ["anatomia-clinica"], aprobada: false },
    { id: "etica", nombre: "Ética", semestre: 3, anho: 2, prerrequisitos: ["persona-sentido-vida"], aprobada: false },
    { id: "taller-electivo-1", nombre: "Taller Electivo 1", semestre: 3, anho: 2, prerrequisitos: [], aprobada: false },
    { id: "taller-electivo-2", nombre: "Taller Electivo 2", semestre: 3, anho: 2, prerrequisitos: [], aprobada: false },

    // SEGUNDO AÑO - IV Semestre
    { id: "bioetica", nombre: "Bioética", semestre: 4, anho: 2, prerrequisitos: ["etica"], aprobada: false },
    { id: "bases-biologicas-enfermedad", nombre: "Bases Biológicas de la Enfermedad", semestre: 4, anho: 2, prerrequisitos: ["fisiologia-general"], aprobada: false },
    { id: "terapeutica-quirurgica", nombre: "Terapéutica Quirúrgica", semestre: 4, anho: 2, prerrequisitos: ["fisiologia-general"], aprobada: false },
    { id: "terapeutica-farmacologica", nombre: "Terapéutica Farmacológica", semestre: 4, anho: 2, prerrequisitos: ["fisiologia-general"], aprobada: false },
    { id: "practicum-1", nombre: "Practicum I", semestre: 4, anho: 2, prerrequisitos: ["sistemas-informacion-salud"], aprobada: false },
    { id: "metodos-clinicos", nombre: "Métodos Clínicos en Medicina General", semestre: 4, anho: 2, prerrequisitos: ["historia-clinica"], aprobada: false },
    { id: "patologia-quirurgica", nombre: "Patología Quirúrgica", semestre: 4, anho: 2, prerrequisitos: ["fisiologia-general"], aprobada: false },
    { id: "persona-trascendencia", nombre: "Persona y Trascendencia", semestre: 4, anho: 2, prerrequisitos: ["persona-sentido-vida"], aprobada: false },
    { id: "taller-electivo-3", nombre: "Taller Electivo 3", semestre: 4, anho: 2, prerrequisitos: [], aprobada: false },
    { id: "temas-selectos-ciencias-salud", nombre: "Temas Selectos de Ciencias de la Salud", semestre: 4, anho: 2, prerrequisitos: [], aprobada: false },

    // TERCER AÑO - V Semestre
    { id: "analisis-interdisciplinar-1", nombre: "Análisis Interdisciplinar I", semestre: 5, anho: 3, prerrequisitos: ["bioetica"], aprobada: false },
    { id: "ciencias-clinicas-1", nombre: "Ciencias Clínicas I", semestre: 5, anho: 3, prerrequisitos: ["practicum-1"], aprobada: false },
    { id: "biologia-cancer", nombre: "Biología del Cáncer", semestre: 5, anho: 3, prerrequisitos: ["bases-biologicas-enfermedad"], aprobada: false },
    { id: "hematologia", nombre: "Hematología", semestre: 5, anho: 3, prerrequisitos: ["bases-biologicas-enfermedad"], aprobada: false },
    { id: "legislacion-salud", nombre: "Legislación en Salud", semestre: 5, anho: 3, prerrequisitos: [], aprobada: false },
    { id: "patologia-clinica", nombre: "Patología Clínica", semestre: 5, anho: 3, prerrequisitos: ["metodos-clinicos"], aprobada: false },
    { id: "responsabilidad-social", nombre: "Responsabilidad Social", semestre: 5, anho: 3, prerrequisitos: ["etica"], aprobada: false },
    { id: "humanismo-clasico", nombre: "Humanismo Clásico", semestre: 5, anho: 3, prerrequisitos: [], aprobada: false },
    { id: "temas-selectos-medicina-interna", nombre: "Temas Selectos de Medicina Interna", semestre: 5, anho: 3, prerrequisitos: [], aprobada: false },

    // TERCER AÑO - VI Semestre
    { id: "analisis-interdisciplinar-2", nombre: "Análisis Interdisciplinar II", semestre: 6, anho: 3, prerrequisitos: ["analisis-interdisciplinar-1"], aprobada: false },
    { id: "ciencias-clinicas-2", nombre: "Ciencias Clínicas II", semestre: 6, anho: 3, prerrequisitos: ["ciencias-clinicas-1"], aprobada: false },
    { id: "calidad-salud", nombre: "Calidad en Salud", semestre: 6, anho: 3, prerrequisitos: ["legislacion-salud"], aprobada: false },
    { id: "geriatria", nombre: "Geriatría", semestre: 6, anho: 3, prerrequisitos: ["ciencias-clinicas-1"], aprobada: false },
    { id: "practicum-2", nombre: "Practicum II", semestre: 6, anho: 3, prerrequisitos: ["practicum-1"], aprobada: false },
    { id: "nefrologia", nombre: "Nefrología", semestre: 6, anho: 3, prerrequisitos: ["ciencias-clinicas-1"], aprobada: false },
    { id: "emprendimiento-innovacion", nombre: "Emprendimiento e Innovación", semestre: 6, anho: 3, prerrequisitos: [], aprobada: false },
    { id: "liderazgo", nombre: "Liderazgo", semestre: 6, anho: 3, prerrequisitos: [], aprobada: false },
    { id: "temas-selectos-cirugia", nombre: "Temas Selectos de Cirugía", semestre: 6, anho: 3, prerrequisitos: [], aprobada: false },

    // CUARTO AÑO - VII Semestre
    { id: "analisis-interdisciplinar-3", nombre: "Análisis Interdisciplinar III", semestre: 7, anho: 4, prerrequisitos: ["analisis-interdisciplinar-2"], aprobada: false },
    { id: "ciencias-clinicas-3", nombre: "Ciencias Clínicas III", semestre: 7, anho: 4, prerrequisitos: ["ciencias-clinicas-2"], aprobada: false },
    { id: "gestion-servicios-salud", nombre: "Gestión de Servicios de Salud", semestre: 7, anho: 4, prerrequisitos: ["calidad-salud"], aprobada: false },
    { id: "endocrinologia", nombre: "Endocrinología", semestre: 7, anho: 4, prerrequisitos: ["ciencias-clinicas-2"], aprobada: false },
    { id: "historia-filosofia-medicina", nombre: "Historia y Filosofía de la Medicina", semestre: 7, anho: 4, prerrequisitos: [], aprobada: false },
    { id: "infectologia", nombre: "Infectología", semestre: 7, anho: 4, prerrequisitos: ["ciencias-clinicas-2"], aprobada: false },
    { id: "temas-selectos-ginecologia", nombre: "Temas Selectos de Ginecología", semestre: 7, anho: 4, prerrequisitos: [], aprobada: false },

    // CUARTO AÑO - VIII Semestre
    { id: "analisis-interdisciplinar-4", nombre: "Análisis Interdisciplinar IV", semestre: 8, anho: 4, prerrequisitos: ["analisis-interdisciplinar-3"], aprobada: false },
    { id: "ciencias-clinicas-4", nombre: "Ciencias Clínicas IV", semestre: 8, anho: 4, prerrequisitos: ["ciencias-clinicas-3"], aprobada: false },
    { id: "endonutricion", nombre: "Endonutrición", semestre: 8, anho: 4, prerrequisitos: ["ciencias-clinicas-3"], aprobada: false },
    { id: "practicum-3", nombre: "Practicum III", semestre: 8, anho: 4, prerrequisitos: ["practicum-2"], aprobada: false },
    { id: "reumatologia", nombre: "Reumatología", semestre: 8, anho: 4, prerrequisitos: ["ciencias-clinicas-3"], aprobada: false },
    { id: "dialogos-interdisciplinarios", nombre: "Diálogos Interdisciplinarios", semestre: 8, anho: 4, prerrequisitos: ["etica"], aprobada: false },
    { id: "asignatura-libre-2", nombre: "Asignatura Libre 2", semestre: 8, anho: 4, prerrequisitos: [], aprobada: false },
    { id: "temas-selectos-pediatria", nombre: "Temas Selectos de Pediatría", semestre: 8, anho: 4, prerrequisitos: [], aprobada: false },

    // QUINTO AÑO
    { id: "internado", nombre: "Internado", semestre: 9, anho: 5, prerrequisitos: ["ciencias-clinicas-4", "practicum-3"], aprobada: false },

    // SEXTO AÑO
    { id: "servicio-social", nombre: "Servicio Social", semestre: 10, anho: 6, prerrequisitos: ["internado"], aprobada: false }
];

// Función para inicializar la malla
function inicializarMalla() {
    const mallaContainer = document.getElementById('malla-container');
    
    // Agrupar materias por año
    const materiasPorAnho = {};
    materias.forEach(materia => {
        if (!materiasPorAnho[materia.anho]) {
            materiasPorAnho[materia.anho] = {};
        }
        if (!materiasPorAnho[materia.anho][materia.semestre]) {
            materiasPorAnho[materia.anho][materia.semestre] = [];
        }
        materiasPorAnho[materia.anho][materia.semestre].push(materia);
    });

    // Crear HTML para cada año
    for (const [anho, semestres] of Object.entries(materiasPorAnho)) {
        const anhoDiv = document.createElement('div');
        anhoDiv.className = 'anho';
        
        let tituloAnho;
        switch(anho) {
            case '1': tituloAnho = 'PRIMER AÑO'; break;
            case '2': tituloAnho = 'SEGUNDO AÑO'; break;
            case '3': tituloAnho = 'TERCER AÑO'; break;
            case '4': tituloAnho = 'CUARTO AÑO'; break;
            case '5': tituloAnho = 'QUINTO AÑO'; break;
            case '6': tituloAnho = 'SEXTO AÑO'; break;
            default: tituloAnho = `AÑO ${anho}`;
        }
        
        anhoDiv.innerHTML = `<h2>${tituloAnho}</h2>`;
        
        // Crear HTML para cada semestre
        for (const [semestre, materiasSemestre] of Object.entries(semestres)) {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            let tituloSemestre;
            switch(semestre) {
                case '1': tituloSemestre = 'I Semestre'; break;
                case '2': tituloSemestre = 'II Semestre'; break;
                case '3': tituloSemestre = 'III Semestre'; break;
                case '4': tituloSemestre = 'IV Semestre'; break;
                case '5': tituloSemestre = 'V Semestre'; break;
                case '6': tituloSemestre = 'VI Semestre'; break;
                case '7': tituloSemestre = 'VII Semestre'; break;
                case '8': tituloSemestre = 'VIII Semestre'; break;
                case '9': tituloSemestre = 'Internado'; break;
                case '10': tituloSemestre = 'Servicio Social'; break;
                default: tituloSemestre = `Semestre ${semestre}`;
            }
            
            semestreDiv.innerHTML = `<h3>${tituloSemestre}</h3><div class="materias-container"></div>`;
            const materiasContainer = semestreDiv.querySelector('.materias-container');
            
            // Crear HTML para cada materia
            materiasSemestre.forEach(materia => {
                const materiaDiv = document.createElement('div');
                materiaDiv.className = 'materia bloqueada';
                materiaDiv.id = materia.id;
                materiaDiv.innerHTML = `
                    ${materia.nombre}
                    ${materia.prerrequisitos.length > 0 ? 
                        `<span class="requisitos">Requisitos: ${materia.prerrequisitos.map(id => 
                            materias.find(m => m.id === id).nombre).join(', ')}</span>` : 
                        ''}
                `;
                
                materiaDiv.addEventListener('click', () => {
                    materia.aprobada = !materia.aprobada;
                    actualizarEstadoMaterias();
                });
                
                materiasContainer.appendChild(materiaDiv);
            });
            
            anhoDiv.appendChild(semestreDiv);
        }
        
        mallaContainer.appendChild(anhoDiv);
    }
    
    actualizarEstadoMaterias();
}

// Función para actualizar el estado de todas las materias
function actualizarEstadoMaterias() {
    materias.forEach(materia => {
        const elemento = document.getElementById(materia.id);
        if (!elemento) return;
        
        // Verificar si se cumplen los prerrequisitos
        const prerrequisitosCumplidos = materia.prerrequisitos.every(id => {
            const materiaReq = materias.find(m => m.id === id);
            return materiaReq && materiaReq.aprobada;
        });
        
        // Actualizar clases CSS según el estado
        elemento.className = 'materia';
        if (materia.aprobada) {
            elemento.classList.add('aprobada');
        } else if (prerrequisitosCumplidos || materia.prerrequisitos.length === 0) {
            elemento.classList.add('desbloqueada');
        } else {
            elemento.classList.add('bloqueada');
        }
    });
}

// Inicializar la malla cuando se cargue la página
document.addEventListener('DOMContentLoaded', inicializarMalla);
