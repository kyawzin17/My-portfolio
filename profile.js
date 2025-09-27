//Theme change javaScript
const threeThem= document.querySelectorAll(".them-option");
const modeInn= document.querySelector('.mode-inn');
const headerDiv= document.querySelector('.header-div');
console.log("this is height", headerDiv.offsetHeight);
const selectMenu= document.querySelector(".select-menu");//Select inner menu

const localThem= localStorage.getItem('them');

const themCheck= (lthem) => {
    if(lthem === 'Light') {
  document.documentElement.style.setProperty('--headBlack', '#eee');
  document.documentElement.style.setProperty('--color', 'rgb(2,2,2)');
  document.documentElement.style.setProperty('--bodyColor', '#fff');
  document.documentElement.style.setProperty('--contactColor', '#7e25e4');
  
  selectMenu.value= lthem;
  modeInn.innerText= "Light";
}else if(lthem === 'Dark') {
  document.documentElement.style.setProperty('--headBlack', '#333');
  document.documentElement.style.setProperty('--color', '#fff');
  document.documentElement.style.setProperty('--bodyColor', '#212121');
  document.documentElement.style.setProperty('--contactColor', '#16bff3ff');

  selectMenu.value= lthem;
  modeInn.innerText= "Dark";
}else {
  document.documentElement.style.setProperty('--headBlack', '#333');
  document.documentElement.style.setProperty('--color', '#fff');
  document.documentElement.style.setProperty('--bodyColor', '#212121');
  document.documentElement.style.setProperty('--contactColor', '#16bff3ff');
  
  selectMenu.value= lthem;
  modeInn.innerText= "Auto";
}
}
const themChange= () => {
  threeThem.forEach((them) => {

  if(localThem === them.innerText) {
    them.classList.add('active');
  }

  them.addEventListener("click", () => {
    threeThem.forEach((btn) => {
      btn.classList.remove('active');
    })
    them.classList.add("active");
    selectMenu.value= them.innerText;
    themCheck(them.innerText);
    localStorage.setItem('them', them.innerText);
  })
  
})
};
themCheck(localThem);
themChange();


//Menu id javaScript
const menuId= document.getElementById("menuid");//Open inner main container
const menuDivId= document.getElementById("menudivid");//Menu container div
const menuClose= document.getElementById("closeid");//Close inner menu

const containerDiv= document.querySelector(".con1");//Main container div

const menuLiAll= document.querySelectorAll(".menu-li");//Menu li all


const menuOption= document.querySelectorAll(".menu-option");

let menuClick= false;
const removeMenu= () => {
  menuDivId.classList.remove("menu-move");
  containerDiv.classList.remove("con1-opacity");
  menuClick= false;
}

const moveMenu= () => {
  menuDivId.classList.add("menu-move");
  containerDiv.classList.add('con1-opacity');
  menuClick= true;
}

//Menu click start
menuId.addEventListener("click", () => {
  moveMenu();

        //Close button
        menuClose.addEventListener("click", () => {
          removeMenu();
        });
        //Menu li all event
        menuLiAll.forEach((tag) => {
          tag.addEventListener("click", () => {
            removeMenu();
          })
        });
        //Select inner menu
        selectMenu.addEventListener("change", () => {
          const selectValue= selectMenu.value;
          // localStorage.setItem('them', selectValue);
            threeThem.forEach((them)=> {
              if(them.innerText === selectValue) {
                them.click();
              }
            })
            removeMenu();
        });

  });
  if(window.innerWidth < 720) {
      document.documentElement.style.setProperty('--sectionHeight', 'auto');
    }
  window.addEventListener("resize", () => {
    if(window.innerWidth > 720) {
      removeMenu();
      document.documentElement.style.setProperty('--sectionHeight', '90vh');
    }
    if(window.innerWidth < 720) {
      document.documentElement.style.setProperty('--sectionHeight', 'auto');
    }
  })
  // menuOption.forEach((tag)=> {

  //   tag.addEventListener("click", () => {
  //     console.log("This is menuoption tag clicked!");
  //     menuOption.forEach((btn) => {
  //     btn.classList.remove('actives');
  //   })
  //   tag.classList.add("actives");
  //   themCheck(tag.innerText);
  //   localStorage.setItem('them', tag.innerText);
  //   themChange();
  // })
  //   if (localThem === tag.innerText) {
  //     selectMenu.value= tag.value;
  //   }else {
  //     return;
  //   }
  // })


//Circle progress javaScript
const progressTl= document.getElementById("progress-tl");
const progressTr= document.getElementById("progress-tr");
const progressM= document.getElementById("progress-m");
const progressBl= document.getElementById("progress-bl");
const progressBr= document.getElementById("progress-br");

let tl= 0, tr= 0, m= 0, bl= 0, br= 0;
//let circleArea= 2 * Math.PI * 90;
const intervalFunction= (proId, value, average) =>{
  let interVal= setInterval(() => {
    if(value <= average) {
        proId.textContent= value + "%";
        value++;
    } else{
        clearInterval(interVal);
    }
}, 23);
}
intervalFunction(progressTl, tl, 91);
intervalFunction(progressTr, tr, 88);
intervalFunction(progressM, m, 80);
intervalFunction(progressBl, bl, 70);
intervalFunction(progressBr, br, 65);

//Contact Name, Email and Messages send javaScript
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const messagesText= document.getElementById("message");
const sendButton= document.getElementById("sendButton");
const contactForm= document.getElementById("contact-form");
const feedback= document.getElementById('feedback');

(function(){
      emailjs.init({
        publicKey: "t819ArIyddtjlIAZA",
      });
   })();

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      feedback.textContent= "";
      feedback.className= 'msg';
      const userName= contactForm.name.value.trim();
      const userEmail= contactForm.email.value.trim();
      const userMessage= contactForm.message.value.trim();

      if(!userName || !userEmail || !userMessage) {
        feedback.textContent= "Please fill in all fields.";
        feedback.classList.add("error");
        return;
      };
      sendButton.disabled= true;
      sendButton.textContent= "Sending..";
       
      emailjs.sendForm('service_jfc56tu', 'template_geqcmal', this).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    feedback.textContent= "Message sent - thank you!";
    feedback.classList.add("success");
    contactForm.reset();
  },
  (error) => {
    // console.log('FAILED...', error);
    // console.error("EmailJS error", error);
    feedback.textContent= error;
    feedback.classList.add("error");
  })
  .finally(() => {
    sendButton.disabled= false;
    sendButton.textContent= "Send";
  })
    });
