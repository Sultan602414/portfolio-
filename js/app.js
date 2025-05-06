let menu = document.querySelector('.vertnav');
let menuicon = document.querySelector('.menubar');

let turn = 0;
menuicon.addEventListener('click',()=>{
  if(turn==0){
    menu.style.display = 'block'
    turn = 1;
  }
  else if(turn==1){
    menu.style.display = 'none'
   turn=0;
  }

})

window.addEventListener('dblclick',()=>{
  menu.style.display = 'none'
})

let navlist = Array.from(document.querySelectorAll('.li'));

navlist.forEach((li) => {
    li.addEventListener('click', () => {
        // Remove 'box' class from all links
        navlist.forEach((item) => item.classList.remove('box'));
        
        // Add 'box' class to the clicked link
        li.classList.toggle('box');
    });
});

let card1=document.querySelector(".card-container")
let url="/css/card.json"

let context = async()=>{
    const ftch=await fetch(url)
    const ftd=await ftch.json()
    
    let text = ""

    ftd.forEach(
       (card)=>{
       text += `<div class="card">
       <div class="card-img">
           <img src=${card.img} alt="python">
       </div>
       <div class="card-contxt">
           <h2>${card.title}</h2>
           <p>${card.DESCRIPTION}</p>
       </div>
   </div>`
   
     card1.innerHTML = text     
       }
        )

}
context();
  
  // ...............................................

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const submitbtn = document.getElementById('submitbtn');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
        // Prepare the email parameters
        const templateParams = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        };

        // Send email using EmailJS
        emailjs.send('service_xf2ennf', 'template_ymqeogj', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setTimeout(()=>{
              submitbtn.innerText = "Message sent successfully"
              submitbtn.style.backgroundColor = 'green'
              form.reset();
            },1000)
          }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
          });
      }
    , false);

  });