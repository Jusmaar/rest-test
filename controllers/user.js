const { request, response } = require('express')

const userGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: 'GET API - CONTROLLER',
    query
  })
}

const userPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'PUT API - CONTROLLER',
    id
  })
}

const userPost = (req = request, res = response) => {
  const body = req.body;
  res.json({
    msg: 'POST API - CONTROLLER',
    payload: body
  })
}

const userDelete = (req = request, res = response) => {
  res.json({
    msg: 'DELETE API - CONTROLLER'
  })
}
module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete
}