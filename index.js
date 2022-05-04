// var titres = document.getElementsByTagName('h2')
// console.log(titres)
// titres[0].style.color = 'blue'

// var paraD = document.getElementsByClassName('para')
// console.log(paraD)
// paraD[1].style.color = 'red'

// var assad = document.getElementById('p2')
// console.log(assad)


// var mahmoud = document.querySelector('.para')
// console.log(mahmoud)

// var djeja = document.querySelectorAll('.para')
// console.log(djeja)

// var divM = document.querySelector('#main')
// console.log(divM)
// console.log(divM.innerHTML)
// console.log(divM.innerText)


// var main = document.getElementById('main')
// main.firstElementChild.innerText = 'Maroua'

// var main = document.getElementById('main')
// console.log(main.firstElementChild.firstElementChild.firstElementChild)
// console.log(main.firstElementChild.lastElementChild.lastElementChild)
// console.log(main.lastElementChild)
// var titre = document.querySelector('h2')
// console.log(titre.parentElement)
// console.log(titre.nextElementSibling.nextElementSibling.innerText)
// console.log(titre.previousElementSibling.firstElementChild.firstElementChild.innerText)

// var divM = document.getElementById('main')
// var butt = document.createElement('button')
// butt.innerText = 'Yassin'
// var imm = document.createElement('img')
// imm.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/5/57/Chicken_-_melbourne_show_2005.jpg')
// divM.appendChild(butt)
// divM.appendChild(imm)


// var main = document.getElementById('main')
// var fsM = main.firstElementChild
// var btt = document.createElement('button')
// btt.innerText = 'Click'
// main.insertBefore(btt,fsM.nextElementSibling.nextElementSibling)
// main.replaceChild(btt,fsM)
// main.remove()
// fsM.remove()

// var main = document.getElementById('main')
// var lcM = main.lastElementChild
// lcM.setAttribute('class','maroua')


// function handleAlert(){
//     alert('Hello Maroua')
// }



// var btnPlus = document.querySelector('.Plus')

// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })


// var btnMoins = document.querySelector('.Moins')


// btnMoins.addEventListener('click',function(){
//     if(btnMoins.nextElementSibling.innerText>0){
//         btnMoins.nextElementSibling.innerText--
//     }
    
// })



var btnsPlus = document.querySelectorAll('.Plus')

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
    })
}



var btnsMoins = document.querySelectorAll('.Moins')

for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
        }       
    })
}