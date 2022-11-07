const one = document.querySelectorAll('.one')
const toggle = document.querySelector('.toggle')
const key = document.querySelector('.key')
const price = document.querySelectorAll('.price')
const time = document.querySelectorAll('.toggle-p')


one[0].addEventListener('click', function(){
    one[0].classList.add('active')
    one[1].classList.remove('active')
    one[2].classList.remove('active')
})

one[1].addEventListener('click', function(){
    one[1].classList.add('active')
    one[0].classList.remove('active')
    one[2].classList.remove('active')
})

one[2].addEventListener('click', function(){
    one[2].classList.add('active')
    one[0].classList.remove('active')
    one[1].classList.remove('active')
})

time[0].addEventListener('click', function(){
    key.classList.add('move')
    price[0].innerHTML = `<span>&dollar;</span> 199.99`
    price[1].innerHTML = `<span>&dollar;</span> 249.99`
    price[2].innerHTML = `<span>&dollar;</span> 399.99`
})

time[1].addEventListener('click', function(){
    key.classList.remove('move')
    price[0].innerHTML = `<span>&dollar;</span> 19.99`
    price[1].innerHTML = `<span>&dollar;</span> 24.99`
    price[2].innerHTML = `<span>&dollar;</span> 39.99`
})