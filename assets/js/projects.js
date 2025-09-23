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
            description: 'Full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            demo: 'https://demo-ecommerce.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/ecommerce-platform'
        },
        {
            title: 'Data Analytics Dashboard',
            category: 'data',
            description: 'Real-time analytics dashboard with ML insights for business metrics and predictive analysis',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
            tags: ['Python', 'Pandas', 'Plotly', 'TensorFlow'],
            demo: 'https://demo-analytics.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/analytics-dashboard'
        },
        {
            title: 'Task Management System',
            category: 'web',
            description: 'Collaborative project management tool with real-time updates and team collaboration features',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
            tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
            demo: 'https://demo-tasks.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/task-manager'
        },
        {
            title: 'AI Content Generator',
            category: 'ai',
            description: 'AI-powered content generation platform using OpenAI GPT for marketing copy and blog posts',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
            tags: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
            demo: 'https://demo-ai.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/ai-content-gen'
        },
        {
            title: 'Mobile Banking App',
            category: 'mobile',
            description: 'Secure mobile banking application with biometric authentication and real-time transactions',
            image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop',
            tags: ['React Native', 'Firebase', 'Node.js', 'Plaid API'],
            demo: 'https://demo-banking.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/mobile-banking'
        },
        {
            title: 'Cloud Infrastructure Automation',
            category: 'devops',
            description: 'Infrastructure as Code solution for multi-cloud deployments with automated scaling',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
            tags: ['Terraform', 'Docker', 'Kubernetes', 'Azure'],
            demo: 'https://demo-infra.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/cloud-automation'
        },
        {
            title: 'Real Estate Platform',
            category: 'web',
            description: 'Property listing platform with virtual tours, advanced search, and mortgage calculator',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
            tags: ['Django', 'React', 'PostgreSQL', 'Mapbox'],
            demo: 'https://demo-realestate.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/real-estate'
        },
        {
            title: 'Cryptocurrency Tracker',
            category: 'data',
            description: 'Real-time crypto portfolio tracker with price alerts and market analysis',
            image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=500&fit=crop',
            tags: ['React', 'WebSockets', 'Chart.js', 'CoinGecko API'],
            demo: 'https://demo-crypto.diogosilva.dev',
            github: 'https://github.com/diogo-costa-silva/crypto-tracker'
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