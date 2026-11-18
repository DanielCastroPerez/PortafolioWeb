// Función para generar badges de tecnologías
const renderBadges = (techs) => {
  return techs
    .map(tech => `<span class="badge bg-secondary bg-opacity-50 text-light me-1 mb-1">${tech}</span>`)
    .join('');
};

// Función principal que construye la tarjeta HTML de un proyecto
export const createProjectCard = (project) => {
  const { title, description, technologies, image, demoUrl, repoUrl, repoApi} = project;

  // Botón Demo (solo si existe demoUrl)
  const demoButton = demoUrl 
    ? `<a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm flex-fill">
         <i class="bi bi-globe me-1"></i> Ver Demo
       </a>`
    : '';

  // Botón Repositorio (solo si existe repoUrl)
  const repoButton = repoUrl 
    ? `<a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm flex-fill">
         <i class="bi bi-github me-1"></i> Código Repo
       </a>`
    : '';

  // Botón Repositorio API (solo si existe repoApi)
  const repoApiButton = repoApi 
    ? `<a href="${repoApi}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm flex-fill">
         <i class="bi bi-github me-1"></i> Código API
       </a>`
    : '';

  return `
    <div class="col-md-6 col-lg-6 mb-4">
      <div class="card card-project h-100 text-white rounded-3 overflow-hidden shadow-sm">
        <img src="${image}" class="card-img-top object-fit-cover" alt="${title}" style="height: 200px;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-info fw-bold mb-2">${title}</h5>
          <p class="card-text text-light-50 small mb-3 flex-grow-1">${description}</p>
          
          <div class="mb-3">
            ${renderBadges(technologies)}
          </div>

          <div class="d-flex gap-2 mt-auto pt-2 border-top border-secondary border-opacity-25">
            ${demoButton}
            ${repoButton}
            ${repoApiButton}
          </div>
        </div>
      </div>
    </div>
  `;
};