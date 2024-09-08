document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profilePicture = document.getElementById('profilePicture').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(',');
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
    document.getElementById('resume-container').style.display = 'block';
});
document.getElementById('download-pdf').addEventListener('click', function () {
    var resumeContainer = document.getElementById('resume-container');
    html2pdf().from(resumeContainer).save('resume.pdf');
});
document.getElementById('generate-link').addEventListener('click', function () {
    var username = document.getElementById('name').value.trim();
    if (username) {
        var shareLink = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(username));
        document.getElementById('share-link').value = shareLink;
    }
});
