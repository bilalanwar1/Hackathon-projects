document.getElementById('resume-form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    // Personal Information
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).value;

    // Education
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Work Experience
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

    // Skills
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Populate Resume
    (document.getElementById('display-name') as HTMLElement).innerText = name;
    (document.getElementById('display-email') as HTMLElement).innerText = email;
    (document.getElementById('display-profilePicture') as HTMLImageElement).src = profilePicture;
    (document.getElementById('display-education') as HTMLElement).innerText = education;
    (document.getElementById('display-workExperience') as HTMLElement).innerText = workExperience;

    const skillsList = document.getElementById('display-skills') as HTMLUListElement;
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });

    // Show Resume
    (document.getElementById('resume-container') as HTMLElement).style.display = 'block';
});
