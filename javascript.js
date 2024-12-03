// insert Hello, World! message in console 
const greeting = "Hello, world!"
console.log(greeting)

// code from rubric to show success window in success.html 
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})