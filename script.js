const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const brushWidth = document.querySelector('#brush-width')
const brushColor = document.querySelector('#color-picker')
const eraser = document.querySelector('.eraser')
const brush = document.querySelector('.brush')

let isDrawing = false
let currentWidth = 5
let currentColor = ''

window.addEventListener('load' , () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

canvas.addEventListener('mousedown' , startDraw)
canvas.addEventListener('mousemove' , drawing)
canvas.addEventListener('mouseup' , endDraw)

eraser.addEventListener('click' , () => {
    eraser.classList.add('active')
    brush.classList.remove('active')
    currentColor = 'white'
})

brush.addEventListener('click' , () => {
    brush.classList.add('active')
    eraser.classList.remove('active')
    currentColor = brushColor.value
})

brushWidth.addEventListener('change' , () => {
    currentWidth = brushWidth.value
})

brushColor.addEventListener('change' , () => {
    currentColor = brushColor.value
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
    ctx.strokeStyle = currentColor
}

function endDraw(){
    isDrawing = false
}