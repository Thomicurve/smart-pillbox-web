$("#form").on("submit", function (e) {
    e.preventDefault();
    const formJSON = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        textarea: document.getElementById('textarea').value
    }
        $.ajax({
            url: "/sendform",
            method: "post",
            contentType: 'application/json',
            data: JSON.stringify(formJSON)
        }).fail(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'El correo no pudo ser enviado. Fail to send ajax request',
            });
        });
        Swal.fire({
            icon: 'success',
            title: 'Enviado!',
            text: 'El correo fue enviado.',
        });
});