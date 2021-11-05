function sendForm() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const textarea = document.getElementById('textarea').value;

    if (!nombre.trim().length || !correo.trim().length || !asunto.trim().length || !textarea.trim().length)
        return alert('Complete los campos');

    window.location.assign(`./sendMail/${nombre}/${correo}/${asunto}/${textarea}`);
}