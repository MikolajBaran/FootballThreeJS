function Bramka(x, z) {
    var material;
    var geometryBox;
    var meshSlupek1;
    var meshSlupek2;
    var meshPoprzeczka;
    // kontener
    var container = new THREE.Object3D();

    // init
    function init() {
        material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })

        geometrySlupek = new THREE.BoxGeometry(5, 50, 5);
        geometryPoprzeczka = new THREE.BoxGeometry(100, 10, 5);

        meshSlupek1 = new THREE.Mesh(geometrySlupek);
        meshSlupek2 = new THREE.Mesh(geometrySlupek);
        meshPoprzeczka = new THREE.Mesh(geometryPoprzeczka);

        meshSlupek1.position.set(50 * x, 29, 3 + 50 * z);
        meshPoprzeczka.position.set(50 * x, 54, 50 + 50 * z);
        meshPoprzeczka.rotation.y = Math.PI / 2;
        meshSlupek2.position.set(50 * x, 29, 97 + 50 * z)

        var singleGeometry = new THREE.Geometry();

        meshSlupek1.updateMatrix(); // bez tego pozycja geometrii jest zawsze 0,0,0
        singleGeometry.merge(meshSlupek1.geometry, meshSlupek1.matrix);

        meshSlupek2.updateMatrix();
        singleGeometry.merge(meshSlupek2.geometry, meshSlupek2.matrix);

        meshPoprzeczka.updateMatrix();
        singleGeometry.merge(meshPoprzeczka.geometry, meshPoprzeczka.matrix);

        var singleMesh = new THREE.Mesh(singleGeometry, material);


        container.add(singleMesh);
    }
    init();

    this.getBramka = function () {
        return container;
    }
}