const mongoose = require ( "mongoose")

const connectToDb = () => {
      mongoose.connect(
           "mongodb+srv://wesleyydev:senhadoemail01@agenda.owc68r2.mongodb.net/?retryWrites=true&w=majority",
           {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           }
        ).then(() => {
            console.log("fucionou")
        }).catch((err) => {
            console.log("erro interno")
        })
};

module.exports = connectToDb;