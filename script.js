const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const brushWidth = document.querySelector('#brush-width')


let currentWidth = 5
let isDrawing = false
window.addEventListener('load' , () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

canvas.addEventListener('mousedown' , startDraw)
canvas.addEventListener('mousemove' , drawing)
canvas.addEventListener('mouseup' , endDraw)

brushWidth.addEventListener('change' , () => {
    currentWidth = brushWidth.value
})

function startDraw(){
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = currentWidth
}

function drawing(e){
    if(!isDrawing) return
    ctx.lineTo(e.offsetX , e.offsetY)
    ctx.stroke()
}

function endDraw(){
    isDrawing = false
}