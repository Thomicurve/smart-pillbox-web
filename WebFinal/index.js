"use strict";
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public/'));

async function enviarCorreo(nombre, correo, asunto, textarea) {

    let transporter = nodemailer.createTransport({
        host: "premium190.web-hosting.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'XXXXXXXXXXXXXXXXXX', // generated ethereal user
            pass: 'XXXXXXXXXXX', // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"SmartPillbox 😎" <support@alanescarcha.com>', // sender address
        to: "alanescarcha11@gmail.com", // list of receivers
        subject: asunto, // Subject line
        html: `
        <p>Formulario de SmartPillbox</p>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Correo: ${correo}</li>
        </ul>
        Mensaje:
        ${textarea}
        `, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent ID
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

app.get('/sendMail/:nombre/:correo/:asunto/:textarea', async (req, res) => {
    const nombre = req.params.nombre;
    const correo = req.params.correo;
    const asunto = req.params.asunto;
    const textarea = req.params.textarea;
    try{
        await enviarCorreo(nombre, correo, asunto, textarea);
        res.send('Correo enviado con exito!');
    } catch (error){
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`APP UP on port: ${port}`);
});


