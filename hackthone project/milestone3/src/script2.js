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
// Function to save edited content back to input fields
function saveEdits() {
    var name = document.getElementById('display-name').innerText;
    var email = document.getElementById('display-email').innerText;
    var profilePicture = document.getElementById('display-profilePicture').src;
    var education = document.getElementById('display-education').innerText;
    var workExperience = document.getElementById('display-workExperience').innerText;
    // Use a fallback for Array.from if it's not available
    var skillsList = document.getElementById('display-skills');
    var skills = Array.prototype.slice.call(skillsList.getElementsByTagName('li'))
        .map(function (li) { return li.innerText; })
        .join(',');
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('profilePicture').value = profilePicture;
    document.getElementById('education').value = education;
    document.getElementById('workExperience').value = workExperience;
    document.getElementById('skills').value = skills;
}
document.getElementById('resume-container').addEventListener('input', saveEdits);
