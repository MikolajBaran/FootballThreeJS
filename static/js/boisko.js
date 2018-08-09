function Boisko(scene) {
    /////////////////////////////////////
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {
            if (i == 0 || i == 9) {
                if (j < 3 || j > 4) {
                    if (i == 9)
                        var banda = new Banda(i + 1, j);
                    else
                        var banda = new Banda(i, j);
                    scene.add(banda.getBanda());
                }
                else if (j == 3) {
                    if (i == 9)
                        var bramka = new Bramka(i + 1, j);
                    else
                        var bramka = new Bramka(i, j);
                    scene.add(bramka.getBramka());
                }
            }
            var element = new PoleBoiska(i, j);
            scene.add(element.getPoleBoiska());
        }
    }
    ///////////////////////////////////
    var right, up = false;
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 8; j++) {
            right = true;
            up = true;
            var linie = new Linie(i, j, right, up);
            scene.add(linie.getLinie());
        }
    }

    for (var i = 1; i < 10; i++) {
        right = false;
        up = true;
        var linie = new Linie(i, 0, right, up);
        scene.add(linie.getLinie());
    }

    for (var j = 1; j < 8; j++) {
        right = true;
        up = false;
        var linie = new Linie(0, j, right, up);
        scene.add(linie.getLinie());
    }

    right = false;
    up = false;
    var linie = new Linie(0, 0, right, up);
    scene.add(linie.getLinie());
}