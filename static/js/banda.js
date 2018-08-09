function Banda(x,z) {
    var material;
    var geometryBox;
    var mesh;
    // kontener
    var container = new THREE.Object3D();

    // init
    function init() {
        material = new THREE.MeshPhongMaterial({
            color: 0x000000,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })

        geometryBox = new THREE.BoxGeometry(50, 10, 5);

        mesh = new THREE.Mesh(geometryBox, material);
        mesh.position.set( 50 * x, 4, 25 + 50 * z);
        mesh.rotation.x = Math.PI / 2;
        mesh.rotation.z = Math.PI / 2;
        container.add(mesh);
    }
    init();

    this.getBanda = function () {
        return container;
    }
}