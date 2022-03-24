import '../css/image.css'

const imageDiv = document.createElement('div')
const imageTag = document.createElement('img')

imageTag.src = '../img/logo.jpg'
imageDiv.className = 'bg-img'


document.body.appendChild(imageDiv)
document.body.appendChild(imageTag)

// 使用es6语法，查看babel解析后的语法
const fn = () => {
  console.log('this is an arrow function');
}
