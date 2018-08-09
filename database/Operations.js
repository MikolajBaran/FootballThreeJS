module.exports = function () {

    var opers = {


        TmpUpdate: function (Model, login, passwd, callData, callback) {

            Model.findOneAndUpdate({ login: login, password: passwd }, { $set: { tmp: callData } }, { returnOriginal: false }, function (err, data) {
                if (err) {
                    console.log("Something wrong when updating data!");
                }


                callback();

            });

        },

        BuildUpdate: function (Model, login, passwd, newBul) {

            Model.findOneAndUpdate({ login: login, password: passwd }, { $set: { building: newBul } }, { returnOriginal: false }, function (err, data) {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
            });
        },

        SaveUpdate: function (Model, login, passwd, callback) {


            Model.find({ login: login, password: passwd }, function (err, data) {
                var obj = {};
                var setPass = data[0].password;
                var setLogin = data[0].login;
                var setBul = data[0].tmp;

                if (err) {
                    console.log("Something wrong when updating data!");
                    obj.data = err;
                }
                else {
                    obj.data = data;
                }
                callback(obj, setPass, setLogin, setBul);

            });
        },

        FindUpdate: function (Model, login, passwd, newStatus, socketID) {

            Model.findOneAndUpdate({ login: login, password: passwd }, { $set: { status: newStatus, socketID: socketID } }, { returnOriginal: false }, function (err, data) {
                if (err) {
                    console.log("Something wrong when updating data!");
                }

                console.log(data);
            });

        },

        DisconnectUpdate: function (Model, socketID, newID, newStatus) {

            Model.findOneAndUpdate({ socketID: socketID }, { $set: { socketID: newID, status: newStatus, tmp: null } }, { returnOriginal: false }, function (err, data) {
                if (err) {
                    console.log("Something wrong when updating data!");
                }

                console.log(data);
            });

        },

        InsertOne: function (data) {
            data.save(function (error, data, dodanych) {
                console.log("dodano " + data);
                console.log("###");
            })
        },

        // pobranie wszystkich "rekordów" z dokumentu - SELECT
        // zwracamy uwagę na argument Model

        SelectAll: function (Model, callback) {
            var obj = {};
            Model.find({}, function (err, data) {
                if (err) {
                    obj.data = err
                }
                else {
                    obj.data = data
                }
                callback(obj);

            })
        },
        //pobranie z ograniczeniem ilości i warunkiem - WHERE, LIMIT

        SelectByLogin: function (Model, login, passwd, callback) {
            var obj = {};
            Model.find({ login: login, password: passwd }, function (err, data) {
                if (err) {
                    obj.data = err;
                }
                else {
                    obj.data = data;
                }
                //funkcja zwracająca dane na zewnątrz
                console.log("callback");
                callback(obj);
            })
        },

        SelectByData: function (Model, login, callback) {
            var obj = {};
            Model.find({ login: login }, function (err, data) {
                if (err) {
                    obj.data = err;
                }
                else {
                    obj.data = data;
                }
                callback(obj);
            })
        },

        SelectAllData: function (Model, callback) {
            var obj = {};
            Model.find({}, function (err, data) {
                if (err) {
                    obj.data = err
                }
                else {
                    obj.data = data
                }
                callback(obj);

            })
        },

        //aktualizacja - np zamiana loginnia - UPDATE

        UpdateStatus: function (Model, oldStatus, newStatus, oldID, newID) {
            Model.update({ status: oldStatus, socketID: oldID }, { status: newStatus, socketID: newID }, function (err, data) {
                if (err) return console.error(err);
                //console.log(data);
            })
        },

        //usuniecie danych - DELETE

        DeleteAll: function (Model) {
            Model.remove(function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        SelectAndLimit: function (Model, count, callback) {
            var obj = {};
            Model.find({}, function (err, data) {
                if (err) {
                    obj.data = err
                }
                else {
                    obj.data = data
                }
                //funkcja zwracająca dane na zewnątrz
                console.log("callback");
                callback(obj);
                console.log("###");
            }).limit(count)
        },

        // pozostałe niezbędne operacje trzeba sobie dopisać samemu, 
        // na podstawie dokumentacji Mongoose
    }

    return opers;

}