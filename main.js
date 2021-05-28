const inputKatta = document.querySelector(`.input2`)
const inputkichik = document.querySelector(`.input`)
const button = document.querySelector(`button`)
const manzil = document.querySelector(`.newelement`)

button.addEventListener(`click`, event => {
    let i = 0;
    while (i < inputkichik.value) {
        i++;
        let kattason = inputKatta.value - 1
        let rendom = Math.ceil(Math.random() * kattason)
        const newliElement = document.createElement(`li`)
        newliElement.textContent = rendom
        manzil.appendChild(newliElement)
        console.log(manzil)
        manzil.style.display = `flex`
    }
})