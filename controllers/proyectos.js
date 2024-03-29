const { response } = require('express');

const Proyecto = require('../models/proyecto');
const Actividad = require('../models/actividad');
const Tarea = require('../models/tarea');

const getProyectos = async(req, res = response) => {

    const proyectos = await Proyecto.find()
        .populate('director', 'nombre apellido')
        .populate('met', 'nombre apellido')
        .populate({
            path: 'actividades',
            populate: {
                path: 'tarea'
            }
        });


    res.json({
        ok: true,
        proyectos
    })
};

const getProyectoById = async(req, res = response) => {

    const id = req.params.id;

    try {

        const proyecto = await Proyecto.findById(id)
            .populate('director', 'nombre apellido')
            .populate('met', 'nombre apellido')
            .populate({
                path: 'actividades',
                populate: {
                    path: 'tarea'
                }
            });


        res.json({
            ok: true,
            proyecto
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg: 'Proyecto no encontrado'
        })
    }

};

const crearProyecto = async(req, res = response) => {

    try {

        const tarea1 = new Tarea({
            "nombre": "Identificar requisitos básicos del proyecto",
            "realizada": false
        });

        const tarea2 = new Tarea({
            "nombre": "Establecer características claves y limitaciones principales",
            "realizada": false
        });

        const tarea3 = new Tarea({
            "nombre": "Identificar y evaluar los riesgos",
            "realizada": false
        });

        const tarea4 = new Tarea({
            "nombre": "Modelar caso de negocio",
            "realizada": false
        });

        const tarea5 = new Tarea({
            "nombre": "Redactar vocabulario común",
            "realizada": false
        });

        const tarea6 = new Tarea({
            "nombre": "Establecer o mantener reglas de negocio",
            "realizada": false
        });

        const tarea7 = new Tarea({
            "nombre": "Establecer y ajustar objetivos",
            "realizada": false
        });

        const tarea8 = new Tarea({
            "nombre": "Crear el modelo de objetos del negocio",
            "realizada": false
        });

        const tarea9 = new Tarea({
            "nombre": "Identificar trabajadores del negocio",
            "realizada": false
        });

        const tarea10 = new Tarea({
            "nombre": "Identificar los actores del negocio",
            "realizada": false
        });

        const tarea11 = new Tarea({
            "nombre": "Estructurar el modelo de caso de uso",
            "realizada": false
        });

        const tarea12 = new Tarea({
            "nombre": "Definir la arquitectura del negocio",
            "realizada": false
        });

        const tarea13 = new Tarea({
            "nombre": "Evaluar viabilidad con base en riesgos, modelo de caso de uso y visión del negocio",
            "realizada": false
        });

        const tarea14 = new Tarea({
            "nombre": "Crear modelo de análisis y especificaciones",
            "realizada": false
        });

        const tarea15 = new Tarea({
            "nombre": "Definir los actores del negocio",
            "realizada": false
        });

        const tarea16 = new Tarea({
            "nombre": "Detallar casos de uso",
            "realizada": false
        });

        const tarea17 = new Tarea({
            "nombre": "Especificar los requisitos",
            "realizada": false
        });

        const tarea18 = new Tarea({
            "nombre": "Estructurar los casos de uso utilizando la especificación de los requisitos y el modelo de caso de uso del negocio",
            "realizada": false
        });

        const tarea19 = new Tarea({
            "nombre": "Priorizar casos de uso estructurados",
            "realizada": false
        });

        const tarea20 = new Tarea({
            "nombre": "Modelar prototipo utilizando lista priorizada de casos de uso",
            "realizada": false
        });

        const tarea21 = new Tarea({
            "nombre": "Identificar unidad de desarrollo",
            "realizada": false
        });

        const tarea22 = new Tarea({
            "nombre": "Establecer unidad de desarrollo",
            "realizada": false
        });

        const tarea23 = new Tarea({
            "nombre": "Diseñar prototipo utilizando el modelo del prototipo",
            "realizada": false
        });

        const tarea24 = new Tarea({
            "nombre": "Modelar clases que intervienen en el software",
            "realizada": false
        });

        const tarea25 = new Tarea({
            "nombre": "Modelar bases de datos que intervienen en el software",
            "realizada": false
        });

        const tarea26 = new Tarea({
            "nombre": "Diseñar clases que intervienen en el software",
            "realizada": false
        });

        const tarea27 = new Tarea({
            "nombre": "Diseñar bases de datos que intervienen en el software",
            "realizada": false
        });

        const tareas = await Promise.all([
            tarea1.save(),
            tarea2.save(),
            tarea3.save(),
            tarea4.save(),
            tarea5.save(),
            tarea6.save(),
            tarea7.save(),
            tarea8.save(),
            tarea9.save(),
            tarea10.save(),
            tarea11.save(),
            tarea12.save(),
            tarea13.save(),
            tarea14.save(),
            tarea15.save(),
            tarea16.save(),
            tarea17.save(),
            tarea18.save(),
            tarea19.save(),
            tarea20.save(),
            tarea21.save(),
            tarea22.save(),
            tarea23.save(),
            tarea24.save(),
            tarea25.save(),
            tarea26.save(),
            tarea27.save(),
        ]);

        console.log(tareas);

        const actividad1 = new Actividad({
            "nombre": "Crear visión",
            "descripcion": "Permite definir los requisitos básicos y establecer características y limitaciones del proyecto",
            "tarea": [tarea1._id, tarea2._id]
        });

        const actividad2 = new Actividad({
            "nombre": "Identificar y proyectar el negocio",
            "descripcion": "Permite identificar y evaluar riesgos, y modelar caso de negocio",
            "tarea": [tarea3._id, tarea4._id]
        });

        const actividad3 = new Actividad({
            "nombre": "Formalizar el negocio",
            "descripcion": "Permite redactar vocabulario común, definir reglas, y establecer y ajustar objetivos",
            "tarea": [tarea5._id, tarea6._id, tarea7._id]
        });

        const actividad4 = new Actividad({
            "nombre": "Determinar entidades y los trabajadores del negocio",
            "descripcion": "Permite crear el modelo de objetos e identificar los trabajadores del negocio",
            "tarea": [tarea8._id, tarea9._id]
        });

        const actividad5 = new Actividad({
            "nombre": "Identificar actores y establecer la arquitectura del negocio",
            "descripcion": "Permite identificar actores y establecer la arquitectura del negocio",
            "tarea": [tarea10._id, tarea11._id, tarea12._id]
        });

        const actividad6 = new Actividad({
            "nombre": "Evaluar viabilidad del negocio",
            "descripcion": "Permite evaluar viabilidad con base en los riesgos",
            "tarea": [tarea13._id]
        });

        const actividad7 = new Actividad({
            "nombre": "Representar inicialmente los requisitos del negocio",
            "descripcion": "Permite la creación de un modelo de análisis y especificaciones",
            "tarea": [tarea14._id]
        });

        const actividad8 = new Actividad({
            "nombre": "Definir actores y detallar casos de uso",
            "descripcion": "Permite definir los actores y detallar los casos de uso del negocio",
            "tarea": [tarea15._id, tarea16._id]
        });

        const actividad9 = new Actividad({
            "nombre": "Especificar los requisitos del software",
            "descripcion": "Permite la especificación de los requisitos",
            "tarea": [tarea17._id]
        });

        const actividad10 = new Actividad({
            "nombre": "Estructurar casos de uso",
            "descripcion": "Permite estructurar el modelo de caso de uso del negocio",
            "tarea": [tarea18._id]
        });

        const actividad11 = new Actividad({
            "nombre": "Priorizar casos de uso",
            "descripcion": "Permite priorizar los casos de uso estructurados",
            "tarea": [tarea19._id]
        });

        const actividad12 = new Actividad({
            "nombre": "Modelar prototipo de interfaz de usuario",
            "descripcion": "Permite modelar el prototipo de interfaz de usuario",
            "tarea": [tarea20._id]
        });

        const actividad13 = new Actividad({
            "nombre": "Crear unidad de desarrollo",
            "descripcion": "Permite identificar y establecer la unidad de desarrollo",
            "tarea": [tarea21._id, tarea22._id]
        });

        const actividad14 = new Actividad({
            "nombre": "Diseñar prototipo de interfaz de usuario",
            "descripcion": "Permite diseñar el prototipo de interfaz de usuario",
            "tarea": [tarea23._id]
        });

        const actividad15 = new Actividad({
            "nombre": "Modelar clases",
            "descripcion": "Permite realizar el modelo de clases que intervienen en el software",
            "tarea": [tarea24._id]
        });

        const actividad16 = new Actividad({
            "nombre": "Modelar bases de datos",
            "descripcion": "Permite realizar el modelo de bases de datos que intervienen en el software",
            "tarea": [tarea25._id]
        });
        
        const actividad17 = new Actividad({
            "nombre": "Diseñar clases",
            "descripcion": "Permite realizar el diseño de clases que intervienen en el software",
            "tarea": [tarea26._id]
        });

        const actividad18 = new Actividad({
            "nombre": "Diseñar bases de datos",
            "descripcion": "Permite realizar el diseño de bases de datos que intervienen en el software",
            "tarea": [tarea27._id]
        });

        const actividades = await Promise.all([
            actividad1.save(),
            actividad2.save(),
            actividad3.save(),
            actividad4.save(),
            actividad5.save(),
            actividad6.save(),
            actividad7.save(),
            actividad8.save(),
            actividad9.save(),
            actividad10.save(),
            actividad11.save(),
            actividad12.save(),
            actividad13.save(),
            actividad14.save(),
            actividad15.save(),
            actividad16.save(),
            actividad17.save(),
            actividad18.save(),
        ]);

        // CREACIÓN DEL PROYECTO

        const proyecto = new Proyecto({
            ...req.body,
            "actividades": [
                actividades[0]._id,
                actividades[1]._id,
                actividades[2]._id,
                actividades[3]._id,
                actividades[4]._id,
                actividades[5]._id,
                actividades[6]._id,
                actividades[7]._id,
                actividades[8]._id,
                actividades[9]._id,
                actividades[10]._id,
                actividades[11]._id,
                actividades[12]._id,
                actividades[13]._id,
                actividades[14]._id,
                actividades[15]._id,
                actividades[16]._id,
                actividades[17]._id
            ]
        });

        const proyectoDB = await proyecto.save();

        res.json({
            ok: true,
            proyeto: proyectoDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

};

const actualizarProyecto = async(req, res = response) => {

    console.time("prueba")

    const id = req.params.id;
    try {

        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyeto no encontrado por id'
            });
        }

        const cambiosProyecto = {
            ...req.body
        }

        const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, cambiosProyecto, { new: true });

        const actividadesAux = req.body.actividades;
        
        // Id Tareas
        const tarea1Id = actividadesAux[0].tarea[0]._id;
        const tarea2Id = actividadesAux[0].tarea[1]._id;
        const tarea3Id = actividadesAux[1].tarea[0]._id;
        const tarea4Id = actividadesAux[1].tarea[1]._id;
        const tarea5Id = actividadesAux[2].tarea[0]._id;
        const tarea6Id = actividadesAux[2].tarea[1]._id;
        const tarea7Id = actividadesAux[2].tarea[2]._id;
        const tarea8Id = actividadesAux[3].tarea[0]._id;
        const tarea9Id = actividadesAux[3].tarea[1]._id;
        const tarea10Id = actividadesAux[4].tarea[0]._id;
        const tarea11Id = actividadesAux[4].tarea[1]._id;
        const tarea12Id = actividadesAux[4].tarea[2]._id;
        const tarea13Id = actividadesAux[5].tarea[0]._id;
        const tarea14Id = actividadesAux[6].tarea[0]._id;
        const tarea15Id = actividadesAux[7].tarea[0]._id;
        const tarea16Id = actividadesAux[7].tarea[1]._id;
        const tarea17Id = actividadesAux[8].tarea[0]._id;
        const tarea18Id = actividadesAux[9].tarea[0]._id;
        const tarea19Id = actividadesAux[10].tarea[0]._id;
        const tarea20Id = actividadesAux[11].tarea[0]._id;
        const tarea21Id = actividadesAux[12].tarea[0]._id;
        const tarea22Id = actividadesAux[12].tarea[1]._id;
        const tarea23Id = actividadesAux[13].tarea[0]._id;
        const tarea24Id = actividadesAux[14].tarea[0]._id;
        const tarea25Id = actividadesAux[15].tarea[0]._id;
        const tarea26Id = actividadesAux[16].tarea[0]._id;
        const tarea27Id = actividadesAux[17].tarea[0]._id;

        //Estado tareas

        const tarea1Realizada = actividadesAux[0].tarea[0].realizada;
        const tarea2Realizada = actividadesAux[0].tarea[1].realizada;
        const tarea3Realizada = actividadesAux[1].tarea[0].realizada;
        const tarea4Realizada = actividadesAux[1].tarea[1].realizada;
        const tarea5Realizada = actividadesAux[2].tarea[0].realizada;
        const tarea6Realizada = actividadesAux[2].tarea[1].realizada;
        const tarea7Realizada = actividadesAux[2].tarea[2].realizada;
        const tarea8Realizada = actividadesAux[3].tarea[0].realizada;
        const tarea9Realizada = actividadesAux[3].tarea[1].realizada;
        const tarea10Realizada = actividadesAux[4].tarea[0].realizada;
        const tarea11Realizada = actividadesAux[4].tarea[1].realizada;
        const tarea12Realizada = actividadesAux[4].tarea[2].realizada;
        const tarea13Realizada = actividadesAux[5].tarea[0].realizada;
        const tarea14Realizada = actividadesAux[6].tarea[0].realizada;
        const tarea15Realizada = actividadesAux[7].tarea[0].realizada;
        const tarea16Realizada = actividadesAux[7].tarea[1].realizada;
        const tarea17Realizada = actividadesAux[8].tarea[0].realizada;
        const tarea18Realizada = actividadesAux[9].tarea[0].realizada;
        const tarea19Realizada = actividadesAux[10].tarea[0].realizada;
        const tarea20Realizada = actividadesAux[11].tarea[0].realizada;
        const tarea21Realizada = actividadesAux[12].tarea[0].realizada;
        const tarea22Realizada = actividadesAux[12].tarea[1].realizada;
        const tarea23Realizada = actividadesAux[13].tarea[0].realizada;
        const tarea24Realizada = actividadesAux[14].tarea[0].realizada;
        const tarea25Realizada = actividadesAux[15].tarea[0].realizada;
        const tarea26Realizada = actividadesAux[16].tarea[0].realizada;
        const tarea27Realizada = actividadesAux[17].tarea[0].realizada;

        //Actualizaciónd de tareas

        const actualizacionTareas = await Promise.all([
            Tarea.findByIdAndUpdate(tarea1Id, {realizada:tarea1Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea2Id, {realizada:tarea2Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea3Id, {realizada:tarea3Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea4Id, {realizada:tarea4Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea5Id, {realizada:tarea5Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea6Id, {realizada:tarea6Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea7Id, {realizada:tarea7Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea8Id, {realizada:tarea8Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea9Id, {realizada:tarea9Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea10Id, {realizada:tarea10Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea11Id, {realizada:tarea11Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea12Id, {realizada:tarea12Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea13Id, {realizada:tarea13Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea14Id, {realizada:tarea14Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea15Id, {realizada:tarea15Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea16Id, {realizada:tarea16Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea17Id, {realizada:tarea17Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea18Id, {realizada:tarea18Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea19Id, {realizada:tarea19Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea20Id, {realizada:tarea20Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea21Id, {realizada:tarea21Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea22Id, {realizada:tarea22Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea23Id, {realizada:tarea23Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea24Id, {realizada:tarea24Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea25Id, {realizada:tarea25Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea26Id, {realizada:tarea26Realizada}, { new: true }),
            Tarea.findByIdAndUpdate(tarea27Id, {realizada:tarea27Realizada}, { new: true })
        ]);


        res.json({
            ok: true,
            proyectoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const borrarProyecto = async(req, res = response) => {

    const id = req.params.id;
    try {

        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyeto no encontrado por id'
            });
        }

        await Proyecto.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'Proyecto eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


};

module.exports = {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto,
    getProyectoById
}