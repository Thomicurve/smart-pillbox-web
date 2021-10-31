function sendForm() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const textarea = document.getElementById('textarea').value;

    window.location.assign(`./sendMail/${nombre}/${correo}/${asunto}/${textarea}`);
}