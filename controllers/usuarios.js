const { response, request } = require('express')

const usuarioGet = (req = request, res = response) => {
    
    const {q,nombre, apikey} = req.query;
    
    res.json({
        msg: 'get API',
        q,nombre,apikey
    });
}

const usuarioPut = (req, res) => {

    const id =req.params.id
    res.json({
        msg: 'put API',
        id
    });
}

const usuarioPost = (req , res = response) => {
    
    const {nombre,edad} = req.body;
    
    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}

const usuarioDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}

const usuarioPatch = (req, res) => {
    res.json({
        msg: 'patch  API'
    });
}




module.exports ={
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}