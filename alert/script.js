function us_alert_container(str) {
    const div_alert = document.createElement('div');
    div_alert.className = 'container-msg-alert';
    const text_alert = document.createElement('h3');
    text_alert.textContent = str;
    const exit_item = document.createElement('i')
    div_alert.appendChild(text_alert);
    document.body.appendChild(div_alert);

    const container_alert = document.querySelector('.container-msg-alert');
    setTimeout(() =>{
        exit_item.className = 'bi bi-x-lg';
        exit_item.onclick = exit_us_alert_container;
        container_alert.appendChild(exit_item);
        container_alert.classList.add('active');
    },100)


}

function exit_us_alert_container () {
    const container_alert = document.querySelector('.container-msg-alert');
    container_alert.classList.remove("active");
    setTimeout( () => {
        container_alert.remove();
    },1000)

}



us_alert_container("ERREUR : MAIL INCORRECT");
