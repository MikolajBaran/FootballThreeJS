var http = require("http");
var qs = require("querystring")
var fs = require("fs");
var socketio = require("socket.io");
var mongoose = require("mongoose");
var Models = require("./database/Models.js")(mongoose);
mongoose.connect('mongodb://localhost/BobMongo');
var Operations = require("./database/Operations.js");
var db;
var opers = new Operations();

var server = http.createServer(function (req, res) {

    console.log(req.method) // zauważ ze przesyłane dane będą typu POST

    switch (req.method) {
        case "GET":

            if (req.url == "/") {

                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/style.css") {
                fs.readFile("static/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/libs/three.js") {
                fs.readFile("static/libs/three.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/libs/ColladaLoader.js") {
                fs.readFile("static/libs/ColladaLoader.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/models/BallDAE.xml") {
                fs.readFile("static//models/BallDAE.xml", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/xml' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/main.js") {
                fs.readFile("static/js/main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/UI.js") {
                fs.readFile("static/js/UI.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/boisko.js") {
                fs.readFile("static/js/boisko.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/poleBoiska.js") {
                fs.readFile("static/js/poleBoiska.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/banda.js") {
                fs.readFile("static/js/banda.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/bramka.js") {
                fs.readFile("static/js/bramka.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/pilka.js") {
                fs.readFile("static/js/pilka.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url == "/js/linie.js") {
                fs.readFile("static/js/linie.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("<h1>404 - brak takiej strony</h1>");
                res.end();
            }
            break;

        case "POST":

            servResp(req, res);

            break;

    }


})

server.listen(3000);
console.log("serwer startuje na porcie 3000 - ten komunikat zobaczysz tylko raz");


var io = socketio.listen(server);
function connectToMongo(log, pass, action, socketID, upData) {
    switch (action) {
        case "start":
            console.log("StartDB");

            var user = new Models.User(
                    {
                        login: "admin",
                        password: "admin",
                        socketID: null,
                        status: "logout",
                        building: "[]",
                        tmp: null,

                    });

            user.validate(function (err) {
                console.log("Errors");
                console.log(err);
                console.log("###");
            });


            opers.InsertOne(user);

            opers.SelectAndLimit(Models.User, 5, function (data) {
                console.log(data)
            })

            break;
        case "login":
            console.log("LoginDB");
            if (log != null && pass != null) {

                var acc = opers.SelectByLogin(Models.User, log, pass, function (data) {
                    console.log(data.data.length);
                    var canLog;

                    if (data.data.length == 0) {
                        canLog = "NoUser";
                    } else if (data.data.length != 0) { 
                        console.log(data.data[0].login);

                        if (data.data[0].status == "logout" && data.data[0].login == "admin") {
                            canLog = true;

                            opers.SelectAllData(Models.User, function (data) {
                                console.log(data);
                                io.sockets.emit("setBul", { data: data });
                            })

                            opers.FindUpdate(Models.User, log, pass, "login", socketID);

                        } else if (data.data[0].status == "logout" && data.data[0].login != "admin") {
                            canLog = true;

                            opers.SelectByData(Models.User, data.data[0].login, function (data) {
                                console.log(data);
                                io.sockets.emit("setBul", { data: data });
                            })

                            opers.FindUpdate(Models.User, log, pass, "login", socketID);

                        } else if (data.data[0].status == "login") {
                            canLog = false;
                        }
                    }

                    io.sockets.emit("canLog", { can: canLog });
                })
            }

            break;
        case "disconnect":

            console.log("DisconnectDB");
            if (log != null && pass != null) {

                var user = new Models.User(
                    {
                        login: log,
                        password: pass,
                        socketID: socketID,

                    });

                opers.DisconnectUpdate(Models.User, socketID, null, "logout");

            }

            break;
        case "rejestracja":

            var user = new Models.User(
                {
                    login: log,
                    password: pass,
                    socketID: socketID,
                    status: "logout",
                    building: "[]",
                    tmp: null,

                });

            opers.InsertOne(user);


            break;
        case "save":
            console.log("SAVE");
            console.log(upData);

            opers.TmpUpdate(Models.User, log, pass, upData, function () {


                opers.SaveUpdate(Models.User, log, pass, function (data, getLog, getPass, getBul) {

                    console.log(data.data[0].building);

                    console.log(getLog);
                    console.log(getPass);
                    console.log("IO = " + getBul);


                    var oldData = JSON.parse(data.data[0].building);
                    oldData.push(JSON.parse(getBul));
                    opers.BuildUpdate(Models.User, getLog, getPass, JSON.stringify(oldData));

                })


            });



            break;
        default:
            console.log("No Action");

    }
}

//Mongo
db = mongoose.connection;

db.on("error", function () {
    console.log("Mongodb error")
});

db.once("open", function () {

    console.log("Mongodb connect");
    connectToMongo(null, null, "start");

    io.sockets.on("connection", function (client) {

        console.log("connect id = " + client.id);


        client.emit("onconnect", {
            clientName: client.id,
            log: "admin",
            pass: "admin"
        })


        client.on("disconnect", function () {
            console.log("disconnect");
            connectToMongo("admin", "admin", "disconnect", client.id);
        })

        client.on("login", function (data) {
            console.log(data);
            connectToMongo(data.login, data.passwd, data.action, client.id, null);
        })


        client.on("rejestracja", function (data) {
            console.log(data);
            connectToMongo(data.login, data.passwd, data.action, null, null);
        })


        client.on("save", function (data) {
            console.log(data);
            connectToMongo(data.login, data.passwd, data.action, null, data.tab);
        })

    })




});

db.once("close", function () {
    console.log("Mongodb disconnect");
});




function servResp(req, res) {


    req.on("data", function (data) {
        //console.log("data: " + data)
        allData += data;
    })

    ////////////////////////////////////

    req.on("end", function (data) {

        var finish = qs.parse(allData);

        switch (finish.Action) {

            default: res.end(JSON.stringify(finish));

        }

    })


}