const { Router } = require('express')
const router = Router()
var elasticsearc = require('elasticsearch')
var client = new elasticsearc.Client({
  host:'localhost:9200'
})

const  EjecutarController = require('../components/controllers/productos.controllers')

arreglo=[]

router.route('/busqueda')
  .post(async (req, res)=> {
    client.index({
          index:req.body.index,
          type:req.body.type,
          id:req.body.id,
          body:req.body
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(resp)
          }
    })
  })

  router.route('/modifica')
  .put(async (req, res)=> {
    client.index({
          index:req.body.index,
          type:req.body.type,
          id:req.body.id,
          body:req.body
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(resp)
          }
    })
  })

  router.route('/salva')
  .post(async (req, res)=> {
    client.index({
          index:req.body.index,
          type:req.body.type,
          id:req.body.id,
          body:req.body
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(resp)
          }
    })

  })

  router.route('/todos')
  .get(async (req, res)=> {
    client.search({
          index:"marco",
          type:"_doc",      
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(resp)
          }
    })
  })


  router.route('/borra/:id')
  .get(async (req, res)=> {
    client.delete({
      index:"marco",
      type:"_doc",
      body:req.body,
      id:req.params.id,
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(status)
          }
    })
  })

  router.route('/borra/:id')
  .delete(async (req, res)=> {
    client.delete({
      index:"marco",
      type:"_doc",
      body:req.body,
      id:req.params.id,
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(status)
          }
    })
  })

  router.route('/leyendo/:id')
  .get(async (req, res)=> {
    client.get({
      index:"marco",
      type:"_doc",
      id:req.params.id
    },(err,resp,status)=>{
          if(err){
            res.send(err)
          }
          else {
            res.send(resp)
          }
    })
  })


  // router.route('/festivota')
  // .get(async function(req, res) {
  //   res.redirect('http://festivota.cl')
  // })

  // router.route('/festivota/festival')
  // .get(async function(req, res) {
  //   res.redirect('http://festivota.cl/festival')
  // })

module.exports= router