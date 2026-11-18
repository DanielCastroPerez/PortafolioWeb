import { projectsData } from './data/projects.js';
import { createProjectCard } from './components/cards.js';

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');

  if (projectsContainer) {
    // Inyección dinámica de las tarjetas en el DOM
    projectsContainer.innerHTML = projectsData
      .map(project => createProjectCard(project))
      .join('');
  }
});