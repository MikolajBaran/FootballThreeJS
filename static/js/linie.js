function Linie(x, z, right, up) {
    var lineMaterial;
    var geometry;
    var mesh;
    // kontener
    var container = new THREE.Object3D();

    // init
    function init() {
        lineMaterial = new THREE.MeshPhongMaterial({
            color: 0xc4f4bc,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })

        geometry = new THREE.PlaneGeometry(5, 50);

        if (right == true && up == true) {
            var line = new THREE.Mesh(geometry, lineMaterial);
            line.position.set(0 + 50 * x, 5, 25 + 50 * z);
            line.rotation.x = Math.PI / 2;
            line.name = "line";
            line.userData = { x: 0 + 50 * x, y: 25 + 50 * z, rotation: "x:" + 0 + ", z:" + Math.PI / 2, goal: false };
            container.add(line);

            var line2 = new THREE.Mesh(geometry, lineMaterial);
            line2.position.set(25 + 50 * x, 5, 0 + 50 * z);
            line2.rotation.x = Math.PI / 2;
            line2.rotation.z = Math.PI / 2;
            line2.name = "line";
            if (x == 9 && (z > 2 && z < 6)) {
                line2.userData = { x: 0 + 50 * x, y: 25 + 50 * z, rotation: "x:" + 0 + ", z:" + Math.PI / 2, goal: true };
            }
            else
                line2.userData = { x: 25 + 50 * x, y: 0 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 2, goal: false };
            container.add(line2);
        }
        else if (right == false && up == true) {
            var line = new THREE.Mesh(geometry, lineMaterial);
            line.position.set(0 + 50 * x, 5, 25 + 50 * z);
            line.rotation.x = Math.PI / 2;
            line.name = "line";
            line.userData = { x: 0 + 50 * x, y: 25 + 50 * z, rotation: "x:" + 0 + ", z:" + Math.PI / 2, goal: false };
            container.add(line);
        }
        else if (right == true && up == false) {
            var line2 = new THREE.Mesh(geometry, lineMaterial);
            line2.position.set(25 + 50 * x, 5, 0 + 50 * z);
            line2.rotation.x = Math.PI / 2;
            line2.rotation.z = Math.PI / 2;
            line2.name = "line";
            if (z > 2 && z < 6) {
                line2.userData = { x: 25 + 50 * x, y: 0 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 2, goal: true };
            }
            else
                line2.userData = { x: 25 + 50 * x, y: 0 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 2, goal: false };
            container.add(line2);
        }
        else if (right == false && up == false) {
            var line3 = new THREE.Mesh(geometry, lineMaterial);
            line3.position.set(25 + 50 * x, 5, 25 + 50 * z);
            line3.rotation.x = Math.PI / 2;
            line3.rotation.z = Math.PI / 4;
            line3.name = "line";
            line3.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 4, goal: false };
            container.add(line3);

            var line4 = new THREE.Mesh(geometry, lineMaterial);
            line4.position.set(25 + 50 * x, 5, 25 + 50 * z);
            line4.rotation.x = Math.PI / 2;
            line4.rotation.z = Math.PI * 0.75;
            line4.name = "line";
            line4.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI * 0.75, goal: false };
            container.add(line4);
        }

        var line3 = new THREE.Mesh(geometry, lineMaterial);
        line3.position.set(25 + 50 * x, 5, 25 + 50 * z);
        line3.rotation.x = Math.PI / 2;
        line3.rotation.z = Math.PI / 4;
        line3.name = "line";
        if ((x == 9 || x == 0) && z > 2 && z < 6) {
            line3.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 4, goal: true };
        }
        else
            line3.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI / 4, goal: false };
        container.add(line3);

        var line4 = new THREE.Mesh(geometry, lineMaterial);
        line4.position.set(25 + 50 * x, 5, 25 + 50 * z);
        line4.rotation.x = Math.PI / 2;
        line4.rotation.z = Math.PI * 0.75;
        line4.name = "line";
        if ((x == 9 || x == 0) && z > 2 && z < 6) {
            line4.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI * 0.75, goal: true };
        }
        else
            line4.userData = { x: 25 + 50 * x, y: 25 + 50 * z, rotation: "x:" + Math.PI / 2 + ", z:" + Math.PI * 0.75, goal: false };
        container.add(line4);

            
    }
init();

    this.getLinie = function () {
        return container;
    }
}