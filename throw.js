AFRAME.registerComponent("bowling-balls",{
    init:function(){
        this.throwBall()
    },
    throwBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === 'a'){
                var ball = document.createElement("a-entity")
                ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf")
                ball.setAttribute("scale",{x:3,y:3,z:3})
                var cam = document.querySelector("#camera")
                position = cam.getAttribute("position")
                ball.setAttribute("position",{
                    x:position.x,
                    y:position.y,
                    z:position.z
                })
                ball.setAttribute("dynamic-body",{})
                var camera = document.querySelector("#camera").object3D
                var direction =new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity", direction.multiplyScalar(-10))
                var scene =document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})