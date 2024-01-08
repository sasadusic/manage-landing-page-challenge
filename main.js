const hamburger = document.querySelector('.hamburger')
const navRight = document.querySelector('.nav-right')

hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    navRight.classList.toggle('active-nav')
}

window.onload = () => {
    if(window.innerWidth < 993){
        const scrollItems = document.querySelectorAll('.scroll-item')
        const btns = document.querySelectorAll('.scroll-btn')

        btns.forEach(btn => {
            btn.onclick = () => {
                btns.forEach(b => b.classList.remove('scroll-active'))
                btn.classList.add('scroll-active')
                scrollItems.forEach(item => item.style.display = 'none')
                const index = btn.dataset.item
                // console.log(index)
                const item = document.querySelector(`.item-${index}`)
                item.style.display = 'block'
            }
        })
    }
}

const form = document.querySelector('.footer-form')
const input = document.querySelector('.input')
const inputCont = document.querySelector('.input-cont')


form.onsubmit = () => {
    const email = input.value
    if(checkEmail(email)){
        input.classList.remove('invalid')
        const p = document.querySelector('.email-error')
        p.remove()
        console.log('success')
    }
    else{
        const oldP = document.querySelector('.email-error')
        if(oldP){
            oldP.remove()
        }
        input.classList.add('invalid')
        console.log('error')
        const p = document.createElement('p')
        p.innerText = 'Please insert a valid email'
        p.className = 'email-error'
        p.style.cssText = `
            color: #f25f3a;
            font-size: 12px;
        `
        inputCont.appendChild(p)
    }
    input.value = ''
    return false
}

function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    return false;
 }
 else{return true}
}