function PoleBoiska(x,z) {
    var material;
    var geometryPlane;
    var mesh;
    // kontener
    var container = new THREE.Object3D();

    // init
    function init() {
        material = new THREE.MeshPhongMaterial({
            color: 0x1c9910,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
        })

        geometryPlane = new THREE.PlaneGeometry(50, 50);

        mesh = new THREE.Mesh(geometryPlane, material);
        mesh.position.set(25 + 50 * x, 1, 25 + 50 * z);
        mesh.rotation.x = Math.PI / 2;
        container.add(mesh);
    }
    init();

    this.getPoleBoiska = function () {
        return container;
    }
}