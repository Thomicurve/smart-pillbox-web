const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public/'));
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

app.post('/sendform',(req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const textarea = req.body.textarea;

    if (!nombre || !correo || !telefono || !textarea || !nombre.trim().length || !correo.trim().length || !telefono.trim().length || !textarea.trim().length) {
        res.status(404).send('Todos los campos son obligatorios');
        console.error('Error al enviar correo, los campos son obligatorios');
    }else{
        axios.post('https://sendmailer-smtp.herokuapp.com/api/v1/private', {
            //Email config
            name: 'Smart Pillbox', //from email Name
            from: 'support@alanescarcha.com', //email from address
            to: 'alanescarcha11@gmail.com,lautygonzalez626@gmail.com,curvelothomas08@gmail.com', //to email address
            subject: 'Nuevo formulario', //email subject
            typeMSG: 'html', //text or html
            message: `
                <p>Formulario de SmartPillbox</p>
                <ul>
                <li>Nombre: ${nombre}</li>
                <li>Correo: ${correo}</li>
                <li>Teléfono: ${telefono}</li>
                </ul>
                Mensaje:<br>
                ${textarea}
                `, //your message
        })
            .then(function (response) {
                console.log(response.status,response.statusText,"Nuevo correo enviado!");
            })
            .catch(function (error) {
                console.error(error);
            });
    }
});

app.listen(port, () => {
    console.log(`APP UP on port: ${port}`);
});


