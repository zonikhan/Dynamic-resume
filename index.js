var form = document.getElementById("form");
var resumeOutput = document.getElementById("resumecontent");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skill = document.getElementById("skill").value;
    var experience = document.getElementById("exp").value;
    var Content = "\n    <h1>Generated Resume</h1>\n    <h2>Name: ".concat(name, "</h2>\n    <h2>Email: ").concat(email, "</h2>\n     <h2>Phone: ").concat(phone, "</h2>\n      <h2>Skill: ").concat(skill, "</h2>\n       <h2>Experience: ").concat(experience, "</h2>\n    ");
    resumeOutput.innerHTML = Content;
    resumeOutput.style.display = ("block");
});
