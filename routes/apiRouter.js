let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Group = require('../db/groupSchema.js').Group
let Message = require('../db/messageSchema').Message

  
  apiRouter
    .get('/users', function(req, res){
      console.log(req)
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      }).populate('group')
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      }).populate('group')
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    //---------------------------------------------------------------
    //                    ROUTES FOR GROUP
    //---------------------------------------------------------------
 apiRouter
    .get('/groups', function(req, res){
      console.log(req)
      Group.find(req.query , function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      }).populate('members')
    })

  apiRouter
    .get('/groups/:_id', function(req, res){
      Group.findById(req.params._id, function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      }).populate('members')
    })
  apiRouter
    .put('/groups/:_id/user/:_userid', function(req, res){

      Group.findById(req.params._id, function(err, group_record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!group_record) {
            res.status(400).send('no group record found with that id')
          }
          else {
            User.findById(req.params._userid, function(err, user_record){
              if (err) {
                res.status(500).send(err)
              }
              else if (!user_record) {
                res.status(400).send('no user record found with that id')
              }
              else {
                group_record.members.push(user_record)
                user_record.group.push(group_record)
                group_record.save(function(err){
                  if (err) {
                    res.status(500).send(err)
                  }
                });

                user_record.save(function(err){
                  if (err) {
                    res.status(500).send(err)
                  }
                });

                res.json(Object.assign(user_record))
              }
            })
          }
      })
    })

  apiRouter
  .post('/groups', function(req, res){
    // passport appends json-data to request.body
    // console.log(req.body)
    let newGroup = new Group(req.body)

    Group.find({name: req.body.name}, function(err, results){
      if (err) return res.status(500).send('error saving querying db for user')

      if(results !== null && results.length > 0 ) { 
        return res.status(401).send(`oops, record for <${req.body.name}> already exists`)
      }
      newGroup.save(function(err, record){
        if(err) return res.status(500).send('server/db error on attempt to save user to db')
        res.json(newGroup)
      })
    })
  })

    .delete('/groups/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

  

module.exports = apiRouter