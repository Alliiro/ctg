const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const CountdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 0
const newYearTime = new Date(`april 05 2025 08:30:00`)
const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    secondsContainer.textContent = seconds <10?'0'+seconds :seconds
    minutesContainer.textContent = minutes <10?'0'+minutes :minutes
    hoursContainer.textContent = hours <10?'0'+hours :hours
    daysContainer.textContent = days <10?'0'+days :days
}
setTimeout(() => {
    spinnerLoading.remove()
    CountdownContainer.style.display = 'flex'
}, 1000);
setInterval(() => {
    updateCountdown()
}, 1000);
