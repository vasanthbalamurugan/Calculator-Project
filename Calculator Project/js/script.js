// CalcSwith - Calculator website with dark and light modes


const buttons = document.querySelector(".buttons");
const btn = document.querySelectorAll("span");
const value = document.getElementById("value");
const togglebtn = document.querySelector(".togglebtn");
const body = document.querySelector("body");
const modetoggle = document.getElementById("mode-toggle");


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let number = this.textContent;
    if (number === "clear") {
      value.textContent = "";
    } else if (number === "=") {
      try {
        value.textContent = eval(value.textContent);
      } catch (error) {
        value.textContent = "Error";
      }
    } else {
      value.textContent += number;
    }
  });

  // onclick fuction for turn into darkmode
  togglebtn.onclick = function(){
    body.classList.toggle("dark-mode");
  }

}


function displayButton(){
  if (modetoggle.style.display === "none"){
    modetoggle.style.display = "block";
  } else {
    modetoggle.style.display = "none";
  }
}


