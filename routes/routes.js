const routes = require ("express").Router();
const Controller = require ("../controller/TasController")

routes.get("/", Controller.Agenda)

module.exports = routes