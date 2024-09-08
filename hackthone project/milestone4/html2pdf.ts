// Ensure the `html2pdf.js` library is loaded
declare const html2pdf: any;

document.getElementById('resume-form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

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

    (document.getElementById('resume-container') as HTMLElement).style.display = 'block';
});

document.getElementById('download-pdf')!.addEventListener('click', () => {
    const resumeContainer = document.getElementById('resume-container') as HTMLElement;
    html2pdf().from(resumeContainer).save('resume.pdf');
});

document.getElementById('generate-link')!.addEventListener('click', () => {
    const username = (document.getElementById('name') as HTMLInputElement).value.trim();
    if (username) {
        const shareLink = `${window.location.origin}/resume/${encodeURIComponent(username)}`;
        (document.getElementById('share-link') as HTMLInputElement).value = shareLink;
    }
});
