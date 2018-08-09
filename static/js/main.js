function Main() {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
                45, // kąt patrzenia kamery (FOV - field of view)
                window.innerWidth / window.innerHeight, // proporcje widoku, powinny odpowiadać proporcjom naszego ekranu przeglądarki
                0.1, // minimalna renderowana odległość
                10000 // maxymalna renderowana odległość
             );

    camera.position.x = 500;
    camera.position.y = 700;
    camera.position.z = 200;

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xb2b2b2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.getElementById("div").appendChild(renderer.domElement);

    function init() {
        var axis = new THREE.AxisHelper(10000);    // 200 - wielkość 
        scene.add(axis);

         geom_scene = new THREE.PlaneGeometry(1000, 1000, 100, 100);
 
         mat_scene = new THREE.MeshBasicMaterial({
             color: 0x000000,
             side: THREE.DoubleSide,
             wireframe: true,
         });
 
         scene_mesh = new THREE.Mesh(geom_scene, mat_scene);
         scene_mesh.position.set(300, 0, 200);
         scene_mesh.rotateX(Math.PI / 2);
         scene_mesh.rotateY(0);
         //scene.add(scene_mesh);

         Boisko(scene);
    }
    init();

    var pilka = new Pilka();
    pilka.loadModel("models/BallDAE.xml", function (modelData) {
        console.log("model jest załadowany");
        console.timeEnd("ładowanie");
        scene.add(modelData);
    })

    //var light = new THREE.AmbientLight(0xffffff); // soft white light
    //scene.add(light);

    var spotLight2 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight2.position.set(415, 240, 35);
    spotLight2.castShadow = true;
    spotLight2.angle = Math.PI / 2;
    spotLight2.penumbra = 0.05;
    spotLight2.decay = 2;
    spotLight2.distance = 500;
    spotLight2.shadow.mapSize.width = 1024;
    spotLight2.shadow.mapSize.height = 1024;
    spotLight2.shadow.camera.near = 1;
    spotLight2.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight2);
    //spotLight2.lookAt(scene.position);
    scene.add(spotLight2);

    var spotLight = new THREE.SpotLight(0xffffff,0.7);

    spotLight.position.set(-45, 240, 35);
    spotLight.castShadow = true;
    spotLight.angle = Math.PI / 2;
    spotLight.penumbra = 0.05;
    spotLight.decay = 2;
    spotLight.distance = 500;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight);
    //spotLight.lookAt(scene.position);
    scene.add(spotLight);

    var spotLight3 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight3.position.set(-45, 240, 375);
    spotLight3.castShadow = true;
    spotLight3.angle = Math.PI / 2;
    spotLight3.penumbra = 0.05;
    spotLight3.decay = 2;
    spotLight3.distance = 500;
    spotLight3.shadow.mapSize.width = 1024;
    spotLight3.shadow.mapSize.height = 1024;
    spotLight3.shadow.camera.near = 1;
    spotLight3.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight3);
    //spotLight3.lookAt(scene.position);
    scene.add(spotLight3);

    var spotLight4 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight4.position.set(415, 240, 375);
    spotLight4.castShadow = true;
    spotLight4.angle = Math.PI / 2;
    spotLight4.penumbra = 0.05;
    spotLight4.decay = 2;
    spotLight4.distance = 500;
    spotLight4.shadow.mapSize.width = 1024;
    spotLight4.shadow.mapSize.height = 1024;
    spotLight4.shadow.camera.near = 1;
    spotLight4.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight4);
    //spotLight4.lookAt(scene.position);
    scene.add(spotLight4);

    var spotLight5 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight5.position.set(108, 240, 375);
    spotLight5.castShadow = true;
    spotLight5.angle = Math.PI / 2;
    spotLight5.penumbra = 0.05;
    spotLight5.decay = 2;
    spotLight5.distance = 500;
    spotLight5.shadow.mapSize.width = 1024;
    spotLight5.shadow.mapSize.height = 1024;
    spotLight5.shadow.camera.near = 1;
    spotLight5.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight5);
    //spotLight5.lookAt(scene.position);
    scene.add(spotLight5);

    var spotLight6 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight6.position.set(108, 240, 35);
    spotLight6.castShadow = true;
    spotLight6.angle = Math.PI / 2;
    spotLight6.penumbra = 0.05;
    spotLight6.decay = 2;
    spotLight6.distance = 500;
    spotLight6.shadow.mapSize.width = 1024;
    spotLight6.shadow.mapSize.height = 1024;
    spotLight6.shadow.camera.near = 1;
    spotLight6.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight6);
    //spotLight6.lookAt(scene.position);
    scene.add(spotLight6);

    var spotLight7 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight7.position.set(262, 240, 35);
    spotLight7.castShadow = true;
    spotLight7.angle = Math.PI / 2;
    spotLight7.penumbra = 0.05;
    spotLight7.decay = 2;
    spotLight7.distance = 500;
    spotLight7.shadow.mapSize.width = 1024;
    spotLight7.shadow.mapSize.height = 1024;
    spotLight7.shadow.camera.near = 1;
    spotLight7.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight7);
    //spotLight7.lookAt(scene.position);
    scene.add(spotLight7);

    var spotLight8 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight8.position.set(262, 240, 375);
    spotLight8.castShadow = true;
    spotLight8.angle = Math.PI / 2;
    spotLight8.penumbra = 0.05;
    spotLight8.decay = 2;
    spotLight8.distance = 500;
    spotLight8.shadow.mapSize.width = 1024;
    spotLight8.shadow.mapSize.height = 1024;
    spotLight8.shadow.camera.near = 1;
    spotLight8.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight8);
    //spotLight8.lookAt(scene.position);
    scene.add(spotLight8);

    var spotLight9 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight9.position.set(475, 240, 205);
    spotLight9.castShadow = true;
    spotLight9.angle = Math.PI / 2;
    spotLight9.penumbra = 0.05;
    spotLight9.decay = 2;
    spotLight9.distance = 500;
    spotLight9.shadow.mapSize.width = 1024;
    spotLight9.shadow.mapSize.height = 1024;
    spotLight9.shadow.camera.near = 1;
    spotLight9.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight9);
    //spotLight9.lookAt(scene.position);
    scene.add(spotLight9);

    var spotLight10 = new THREE.SpotLight(0xffffff, 0.7);

    spotLight10.position.set(-145, 240, 205);
    spotLight10.castShadow = true;
    spotLight10.angle = Math.PI / 2;
    spotLight10.penumbra = 0.05;
    spotLight10.decay = 2;
    spotLight10.distance = 500;
    spotLight10.shadow.mapSize.width = 1024;
    spotLight10.shadow.mapSize.height = 1024;
    spotLight10.shadow.camera.near = 1;
    spotLight10.shadow.camera.far = 200;

    lightHelper = new THREE.SpotLightHelper(spotLight10);
    //spotLight10.lookAt(scene.position);
    scene.add(spotLight10);

    //////// RAYCASTER //////////

    var lineMaterial = new THREE.MeshPhongMaterial({
        color: 0xc4f4bc,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide,
    })

    var lineMaterialClicked = new THREE.MeshPhongMaterial({
        color: 0xf4df42,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide,
    })

    var lineMaterialChosen = new THREE.MeshPhongMaterial({
        color: 0xf9523b,
        specular: 0xffffff,
        shininess: 50,
        side: THREE.DoubleSide,
    })

    var clicked = [];

    document.addEventListener("mousedown", onMouseDown, false);
    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2() // wektor (x,y) wykorzystany będzie do określenie pozycji myszy na ekranie
    function onMouseDown(event) {
        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouseVector, camera);
        var intersects = raycaster.intersectObjects(scene.children, true);
        if (intersects.length > 0) {
            if (intersects[0].object.name == "line") {
                    
                    for (var i = 0; i < clicked.length; i++) {
                        if (intersects[0].object == clicked[i]) {
                            alert("To pole zostało już wybrane! Wybierz inne pole.");
                            console.log(intersects[0].object.userData)
                        }
                    }

                    if (clicked[clicked.length - 1]) {
                        var v1 = new THREE.Vector3(clicked[clicked.length - 1].position.x, clicked[clicked.length - 1].position.y, clicked[clicked.length - 1].position.z);
                    }
                    else {
                        var v1 = new THREE.Vector3(250, 20, 175);
                    }
                    var v2 = new THREE.Vector3(intersects[0].object.position.x, intersects[0].object.position.y, intersects[0].object.position.z);

                    var distance = v1.distanceTo(v2);
                    if (distance > 50) {
                        alert("ZA DALEKO");
                    }
                    else {
                        if (intersects[0].object.userData.goal == true) {
                            pilka.moveModel(intersects[0].object.x, intersects[0].object.z);
                            alert("WYGRAŁEŚ!");
                        }
                        intersects[0].object.material = lineMaterialClicked;
                        clicked.push(intersects[0].object);
                        console.log(intersects[0].object);

                        pilka.moveModel(v2.x, v2.z);
                        camera.position.set(v2.x - 300, 400, 200);
                    }
            }
                
                //camera.position.set(100, 1000, 0)

               // var x = intersects[0].object.position.x;
               // var z = intersects[0].object.position.z;
                //console.log(intersects[0].object.position);
        }
    }

    ///////////// KAMERA /////////////

    var cam_up, cam_down, cam_left, cam_right = false;

    function initEvents() {
        document.addEventListener("keydown", onKeyDown, false);
        function onKeyDown(event) {

            var keyCode = event.which;

            //console.log(keyCode); // wyloguj kod klawisza
            switch (keyCode) {

                //lewo
                case 37:
                    // console.log("naciskasz <-");
                    cam_left = true;
                    break;
                    //góra
                case 38:
                    //  console.log("naciskasz ^");
                    cam_up = true;
                    break;
                    //prawo
                case 39:
                    //   console.log("naciskasz ->");
                    cam_right = true;
                    break;
                    //dół
                case 40:
                    //    console.log("naciskasz v");
                    cam_down = true;
                    break;
            }
        }
        document.addEventListener("keyup", onKeyUp, false); //zwolnienie dowolnego klawisza
        function onKeyUp(event) {

            var keyCode = event.which;

            //  console.log(keyCode); // wyloguj kod klawisza
            switch (keyCode) {
                case 37:
                    //   console.log("puszczasz <-");
                    cam_left = false;
                    break;
                    //góra
                case 38:
                    //   console.log("puszczasz ^");
                    cam_up = false;
                    break;
                    //prawo
                case 39:
                    //    console.log("puszczasz ->");
                    cam_right = false;
                    break;
                    //dół
                case 40:
                    //   console.log("puszczasz v");
                    cam_down = false;
                    break;
            }
        }
    }
    initEvents();
    //////////////////////////////////

    ///////////////////////////////////

    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    };
    var angle = 45;


    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);

        camera.fov = 45;
        camera.updateProjectionMatrix();

        if (cam_up == true) {
            camera.position.y += 10;
        }
        if (cam_down == true) {
            camera.position.y -= 10;
        }
        if (cam_left == true) {
            angle += 0.5;
            camera.position.x = 100 * Math.cos(Math.radians(angle));
            camera.position.z = 100 * Math.sin(Math.radians(angle));
        }
        if (cam_right == true) {
            angle -= 0.5;
            camera.position.x = 100 * Math.cos(Math.radians(angle));
            camera.position.z = 100 * Math.sin(Math.radians(angle));
        }
        camera.lookAt(scene_mesh.position);
    }
    animateScene();

}