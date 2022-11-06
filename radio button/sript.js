function initSwitch() {
  const button = document.querySelector(".switch")
  if(!button) {
    return console.error(`Switch button ".switch" not exists!`)
  }

  function toggleSwitch() {
    button.classList.toggle("switch--active");
    button.classList.toggle("switch--not-active");
    changeBack2();
  }
  function toggleSwitchInitial() {
    button.classList.add("switch--active");
    button.removeEventListener("click", toggleSwitchInitial);
    button.addEventListener("click", toggleSwitch);
    changeBack1();
    
  }

  button.addEventListener("click", toggleSwitchInitial)
}

initSwitch()


function changeBack1() {
  document.body.style.background = "#000";
}

function changeBack2() {
  document.body.style.background = "#fff"; 
}