function UI() {
    var main;
    document.getElementById("bt3").addEventListener("click", function () {

        var login = document.getElementById("login").value;
        var passwd = document.getElementById("pass").value;

        //logowanie
        console.log("L = " + login + "  H = " + passwd);

        client.emit("login", {
            login: login,
            passwd: passwd,
            action: "login",
        })

        client.on("canLog", function (data) {
            console.log(data);

            if (data.can == true) {

                document.getElementById("log").style.display = "none";
                main = new Main();

            } else if (data.can == false) {
                alert("Aktualnie ktoś już jest zalogowany na to konto.");
            } else if (data.can == "NoUser") {
                alert("Nie ma takiego usera.");
            }
        })





    })


    document.getElementById("bt4").addEventListener("click", function () {

        var login = document.getElementById("login").value;
        var passwd = document.getElementById("pass").value;

        //rejestracja
        console.log("L = " + login + "  H = " + passwd);

        if (login == "" || passwd == "") {
            alert("Brak loginu lub hasła.");
        } else {

            client.emit("rejestracja", {
                login: login,
                passwd: passwd,
                action: "rejestracja",
            })

            alert("Pomyślnie utworzono użytkownika.");
        }
    })

}