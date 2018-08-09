function Pilka() {
    var daeModel;

    this.loadModel = function (url, callback) {

        var loader = new THREE.ColladaLoader();

        loader.load(url, function (collada) {

            daeModel = collada.scene;
            daeModel.scale.set(10, 10, 10);
            daeModel.position.set(250, 20, 200);
            //po załadowaniu jest możliwy dostęp do składników / meshów modelu:

            daeModel.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    // ...    
                    child.name = "ball";
                }
            });

            // callback czyli zwrócenie danych modelu na zewnątrz pliku 

            callback(daeModel);
        })
    }

    this.getModel = function () {
        return daeModel;
    }

    this.moveModel = function (x, z) {
        daeModel.position.set(x, 20, z);
        console.log(daeModel.position);
    }
}