// Skills Module

export function initSkills() {
    loadSkills();
    initSkillAnimations();
}

function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    const skills = [
        { name: 'Frontend Development', icon: '🎨', level: 90, techs: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Backend Development', icon: '⚙️', level: 85, techs: ['Node.js', 'Python', 'Django', 'Express'] },
        { name: 'Database Management', icon: '🗄️', level: 80, techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
        { name: 'Cloud & DevOps', icon: '☁️', level: 75, techs: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
        { name: 'Data Science & ML', icon: '🤖', level: 70, techs: ['TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'] },
        { name: 'Mobile Development', icon: '📱', level: 65, techs: ['React Native', 'Flutter', 'iOS', 'Android'] },
        { name: 'Version Control', icon: '🔀', level: 95, techs: ['Git', 'GitHub', 'GitLab', 'CI/CD'] },
        { name: 'UI/UX Design', icon: '🎯', level: 70, techs: ['Figma', 'Adobe XD', 'Responsive Design'] },
        { name: 'Testing & QA', icon: '🧪', level: 80, techs: ['Jest', 'Cypress', 'Selenium', 'Unit Testing'] },
        { name: 'Agile & Scrum', icon: '🔄', level: 85, techs: ['Jira', 'Scrum Master', 'Kanban', 'Sprint Planning'] }
    ];

    // Show only 6 skills on homepage, all on skills page
    const skillsToShow = window.location.pathname.includes('skills.html') ? skills : skills.slice(0, 6);

    skillsGrid.innerHTML = skillsToShow.map(skill => `
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