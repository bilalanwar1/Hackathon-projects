var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
var resumeSection = document.getElementById('resume');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        resumeSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Back';
    }
    else {
        skillsSection.style.display = 'none';
        resumeSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
