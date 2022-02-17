const myNumber = (timer) => {
    return timer < 10 ? `0${timer}`: timer
}

const myFunction = () => {
    const data = new Date()
    const dia = data.getDate()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundos = data.getSeconds()

    const day = document.querySelector('.day')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    
    day.innerHTML = `${myNumber(dia)}`
    hours.innerHTML = `${myNumber(hora)}`
    minutes.innerHTML = `${myNumber(minuto)}`
    seconds.innerHTML = `${myNumber(segundos)}`
}
setInterval(myFunction);