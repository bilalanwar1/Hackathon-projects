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

// Function to save edited content back to input fields
function saveEdits() {
    const name = (document.getElementById('display-name') as HTMLElement).innerText;
    const email = (document.getElementById('display-email') as HTMLElement).innerText;
    const profilePicture = (document.getElementById('display-profilePicture') as HTMLImageElement).src;
    const education = (document.getElementById('display-education') as HTMLElement).innerText;
    const workExperience = (document.getElementById('display-workExperience') as HTMLElement).innerText;
    
    // Use a fallback for Array.from if it's not available
    const skillsList = document.getElementById('display-skills') as HTMLUListElement;
    const skills = Array.prototype.slice.call(skillsList.getElementsByTagName('li'))
        .map(li => li.innerText)
        .join(',');

    (document.getElementById('name') as HTMLInputElement).value = name;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('profilePicture') as HTMLInputElement).value = profilePicture;
    (document.getElementById('education') as HTMLTextAreaElement).value = education;
    (document.getElementById('workExperience') as HTMLTextAreaElement).value = workExperience;
    (document.getElementById('skills') as HTMLInputElement).value = skills;
}

document.getElementById('resume-container')!.addEventListener('input', saveEdits);
