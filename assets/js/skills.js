// Skills Module

export function initSkills() {
    loadSkills();
    initSkillAnimations();
}

function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    const skills = [
        { name: 'Frontend Development', icon: '🎨', level: 80, techs: ['HTML5', 'CSS3', 'JavaScript'] },
        { name: 'Backend Development', icon: '⚙️', level: 85, techs: ['Python', 'Node.js'] },
        { name: 'Data & Analytics', icon: '📊', level: 80, techs: ['SQL', 'Pandas'] },
        { name: 'DevOps & Cloud', icon: '☁️', level: 75, techs: ['Docker', 'Azure', 'Terraform'] },
        { name: 'Version Control', icon: '🔀', level: 95, techs: ['Git', 'GitHub'] },
        { name: 'Agile Methodologies', icon: '🔄', level: 85, techs: ['Scrum', 'Kanban'] }
    ];

    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card reveal">
            <div class="skill-card__icon">${skill.icon}</div>
            <h3 class="skill-card__title">${skill.name}</h3>
            <div class="skill-card__techs">
                ${skill.techs.map(tech => `<span class="card__tag">${tech}</span>`).join('')}
            </div>
            <div class="skill-card__level">
                <div class="skill-card__progress">
                    <div class="skill-card__progress-bar" data-level="${skill.level}"></div>
                </div>
                <span>${skill.level}%</span>
            </div>
        </div>
    `).join('');
}

function initSkillAnimations() {
    const progressBars = document.querySelectorAll('.skill-card__progress-bar');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.dataset.level;
                setTimeout(() => {
                    bar.style.width = `${level}%`;
                }, 200);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}