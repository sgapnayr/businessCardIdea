/* Imports */
const quoteButton = document.getElementById('quoteButton')
const desc = document.getElementById('desc')

/* Variable */
let quotesToChooseFrom = ['Allens Friend', 'I Like Chipotle', 'I went to CU', 'Im From CO', 'Sparkling water is lit', 'I sold 3 deals my first day at premier']

/* Functionality */
quoteButton.addEventListener('click', () => {
    for (let i = 0; i < quotesToChooseFrom.length; i++) {
        const randomNumber = (Math.floor(Math.random() * quotesToChooseFrom.length))
        desc.innerText = quotesToChooseFrom[randomNumber]
    }
})

