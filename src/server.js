const proffys = [
    { name: "Diego fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "71991231881", 
      bio:  "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir" + 
            "coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de" +
            "200.000 pessoas já passaram por uma das minhas explosões.", 
      subject: "Quimica", 
      cost: "20", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220] 
    },
    { name: "Daniele Evangelista",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "71991231881", 
      bio:  "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir" + 
            "coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de" +
            "200.000 pessoas já passaram por uma das minhas explosões.", 
      subject: "Quimica", 
      cost: "20", 
      weekday: [1], 
      time_from: [720], 
      time_to: [1220] 
    }
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Eucação física",
    "Física",
    "Geografia",
    "Hitória",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubjects(subjectsNumber) {
    const position = +subjectsNumber - 1;
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html");
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays } )
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    
    //if having data
    if(isNotEmpty){
        data.subject = getSubjects(data.subject)

        //add data in proffys list
        proffys.push(data)

        return res.redirect("/study")
    }

    //else, show the page
    return res.render("give-classes.html", {subjects, weekdays})
}

//configure nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Configure archivo staticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5000);


