const nb_element = 5;
const element = document.querySelectorAll(".navigation li");
let icon_active = 0;


function ative(){
	for (let i = 0 ; i < nb_element ; i++) {
		element[i].addEventListener("click", () => {
			element[icon_active].classList.toggle("active");
		    element[i].classList.toggle("active");
		    icon_active = i;
		});
	}
}

setInterval(ative,1);
