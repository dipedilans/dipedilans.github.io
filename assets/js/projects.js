// Projects Module

export function initProjects() {
    loadProjects();
    initProjectFilters();
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid') || document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'Full-stack e-commerce solution with payment integration',
            image: 'https://via.placeholder.com/400x250/2196f3/ffffff?text=E-Commerce',
            tags: ['React', 'Node.js', 'MongoDB'],
            demo: '#',
            github: '#'
        },
        {
            title: 'Data Analytics Dashboard',
            category: 'data',
            description: 'Real-time analytics dashboard for business metrics',
            image: 'https://via.placeholder.com/400x250/1976d2/ffffff?text=Analytics',
            tags: ['Python', 'Pandas', 'Plotly'],
            demo: '#',
            github: '#'
        },
        {
            title: 'Mobile Banking App',
            category: 'mobile',
            description: 'Secure mobile banking application with biometric authentication',
            image: 'https://via.placeholder.com/400x250/1565c0/ffffff?text=Banking',
            tags: ['React Native', 'Firebase'],
            demo: '#',
            github: '#'
        },
        {
            title: 'DevOps Pipeline',
            category: 'devops',
            description: 'CI/CD pipeline automation with Docker and Kubernetes',
            image: 'https://via.placeholder.com/400x250/0d47a1/ffffff?text=DevOps',
            tags: ['Docker', 'Kubernetes', 'Jenkins'],
            demo: '#',
            github: '#'
        }
    ];

    // Only show 4 projects on homepage
    const projectsToShow = window.location.pathname.includes('projects.html') ? projects : projects.slice(0, 4);

    projectsGrid.innerHTML = projectsToShow.map(project => `
        <div class="project-card reveal" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" class="project-card__image">
            <div class="project-card__content">
                <span class="card__category">${project.category}</span>
                <h3 class="card__title">${project.title}</h3>
                <p class="card__description">${project.description}</p>
                <div class="card__tags">
                    ${project.tags.map(tag => `<span class="card__tag">${tag}</span>`).join('')}
                </div>
                <div class="card__actions">
                    <a href="${project.demo}" class="btn btn--primary btn--small">Live Demo</a>
                    <a href="${project.github}" class="btn btn--secondary btn--small">GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-tag');
    const searchInput = document.querySelector('.filters__search');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects
                const filter = button.dataset.filter;
                filterProjects(filter);
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProjects(e.target.value.toLowerCase());
        });
    }
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            card.classList.add('fade-in-up');
        } else {
            card.style.display = 'none';
        }
    });
}

function searchProjects(searchTerm) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const title = card.querySelector('.card__title').textContent.toLowerCase();
        const description = card.querySelector('.card__description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.card__tag')).map(tag => tag.textContent.toLowerCase());

        if (title.includes(searchTerm) || description.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm))) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}