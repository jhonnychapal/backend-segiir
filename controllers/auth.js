const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuarioDB = await Usuario.findOne({ email });

        // Verificar email
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email o contraseña incorrectos'
            });
        }

        // verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o contraseña incorrectos'
            });
        }

        // Generar el token
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

const renewToken = async(req, res = response) => {

    const uid = req.uid;

    // Generar el token
    const token = await generarJWT(uid);

    const usuario = await Usuario.findById(uid);


    res.json({
        ok: true,
        token,
        usuario
    });
}

module.exports = {
    login,
    renewToken
};