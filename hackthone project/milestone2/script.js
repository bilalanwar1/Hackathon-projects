document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Personal Information
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profilePicture = document.getElementById('profilePicture').value;
    // Education
    var education = document.getElementById('education').value;
    // Work Experience
    var workExperience = document.getElementById('workExperience').value;
    // Skills
    var skills = document.getElementById('skills').value.split(',');
    // Populate Resume
    document.getElementById('display-name').innerText = name;
    document.getElementById('display-email').innerText = email;
    document.getElementById('display-profilePicture').src = profilePicture;
    document.getElementById('display-education').innerText = education;
    document.getElementById('display-workExperience').innerText = workExperience;
    var skillsList = document.getElementById('display-skills');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });
    // Show Resume
    document.getElementById('resume-container').style.display = 'block';
});
