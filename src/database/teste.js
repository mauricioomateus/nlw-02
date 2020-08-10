const Database = require('./db')
const createproffy = require('./createproffy')

Database.then( (db) => {
    // insert data
    //This is an object with data to insert in the database
    proffyValue = {
        nome: 'Mauricio Mateus',
        avatar: 'https://avatars0.githubusercontent.com/u/18623418?s=460&u=ce8d23dd0bc0b0d1c57885b28aa3e3ba2d710c51&v=4',
        whatsapp: '71991231881',
        bio: 'Eu sou o Batman!',
    }

    classValue = {
        subject: 'Matematica',
        cost: "36",
        // peroffy id coming through database
    }

    classScheduleValues = [
        // class_id coming trough database after add the class
        {
            weekday: 1,
            time_from: 763,
            time_to: 1256
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 2364
        }
    ] 

    //createproffu(db, {proffyValue, classValue, classScheduleValue})
    //search data
})