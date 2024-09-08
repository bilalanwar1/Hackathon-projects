const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
const personalInfoSection = document.getElementById('personal-info') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        personalInfoSection.style.display = 'none';
        educationSection.style.display = 'none';
        workExperienceSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Back';
    } else {
        skillsSection.style.display = 'none';
        personalInfoSection.style.display = 'block';
        educationSection.style.display = 'block';
        workExperienceSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
