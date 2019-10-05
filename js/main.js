var result = `/*
    各位好，我是 jonson。
    男的嘛，简单直接少废话，我用代码的形式来介绍自己。
  */
    *{transition: all 1s}
    body{
      background: rgb(222,222,222);
      font-size: 15px;
      color: black;
    }
    #code{
      border: 1px solid brown;
      padding: 16px;
    }

    /* 现在把代码高亮 */
    .token.selector{
      color: #690;
    }
    .token.property{
      color: #905;
    }
    .token.function{
      color: #DD4A68;
    }

    /* 接着加点 3D 效果 */
    #code{
      transform: rotate(360deg);
    }

    /* 认真点，我来介绍一下自己吧 */
    /* 我需要一张白纸 */
    #code{
      position: fixed;
      left: 0;
      width: 50%;
      height: 100%;
    }
    #paper{
      position: fixed;
      right: 0;
      width: 50%;
      height: 100%;
      background: #ddd;
      diplay: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
    #paper > .content{
      background: white;
      width: 100%; height: 100%;
    }
  `

var result2 = `
  #paper{
  }`

var md =`
  # 自我介绍

  我叫 jonson，2016 年毕业于**怀化学院**。在饥人谷学习前端一年，希望应聘前端工程师。

  # 技能
  - Javascript
  - CSS
  - HTML 
  - Vue

  # 特长
  - 写作

  # 作品
  - 公众号：何建新
  - 微博：别关注我是话唠
`

writeCode('', result, ()=>{
  createPaper( ()=>{
    writeCode(result, result2, ()=>{
      writeMarkDown(md)
    })
  } )
})


function writeMarkDown(markDown, fn){
  let domPaper = document.querySelector('#paper > .content')
  var n = 0
  var id = setInterval( ()=>{
    n += 1
    domPaper.innerHTML = markDown.substring(0,n)
    domPaper.scrollTop = 10000 // domPaper.scrollTop = domPaper.scrollHeight

    if(n >= markDown.length){
      window.clearInterval(id)
      fn.call()
    }
  },0.1 )
}

function writeCode(prefix, code, fn){
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  var n = 0
  var id = setInterval( ()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css')
    styleTag.innerHTML = prefix + code.substring(0,n)
    domCode.scrollTop = 10000 // domCode.scrollTop = domCode.scrollHeight

    if(n >= code.length){
      window.clearInterval(id)
      fn.call()
    }
  },0.1 )
}

function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}


