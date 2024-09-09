const form = document.getElementById("form");
const resumeOutput = document.getElementById("resumecontent");

form.addEventListener('submit',function(event){
    event.preventDefault();
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skill = document.getElementById("skill").value;
    const experience = document.getElementById("exp").value;


    let Content = `
    <h1>Generated Resume</h1>
    <h2>Name: ${name}</h2>
    <h2>Email: ${email}</h2>
     <h2>Phone: ${phone}</h2>
      <h2>Skill: ${skill}</h2>
       <h2>Experience: ${experience}</h2>
    `;

 

    resumeOutput.innerHTML = Content;

    resumeOutput.style.display = ("block");
    
})