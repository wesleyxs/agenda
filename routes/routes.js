const routes = require ("express").Router();
const Controller = require ("../controller/TaskController")


routes.get("/",Controller.Agenda)

module.exports = routes