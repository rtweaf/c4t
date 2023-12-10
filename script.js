const canvas = document.getElementById("pfield")
const ctx = canvas.getContext("2d");

const cat = new Image()
let catX = 0

let pressedKeys = {}

window.onload = (_event) => {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight

    cat.src = "resources/catleft.png"
    cat.onload = (_event) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(cat, catX, cat.y)
        requestAnimationFrame(cat.onload)
    }

    setInterval(() => {
        if (pressedKeys["ArrowLeft"]) {
            if ((catX - 5) >= 0) catX -= 5
            cat.src = "resources/catleft.png"
        }
        else if (pressedKeys["ArrowRight"]) {
            if ((catX + 5) <= (canvas.width - cat.width)) catX += 5
            cat.src = "resources/catright.png"
        }
    }, 1)
}

window.onkeydown = (event) => pressedKeys[event.key] = true
window.onkeyup = (event) => pressedKeys[event.key] = false