import '../css/image.css'

const imageDiv = document.createElement('div')
const imageTag = document.createElement('img')

imageTag.src = '../img/logo.jpg'
imageDiv.className = 'bg-img'

document.body.appendChild(imageDiv)
document.body.appendChild(imageTag)