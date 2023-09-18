const colorSelect = document.getElementById("colorSelect")
const h1s = document.querySelectorAll("h1")
const h2s = document.querySelectorAll("h2")
console.log(colorSelect)
colorSelect.addEventListener("change", () => {
    const color = colorSelect.value
    const colorValue = color === "default" ? "black" : color

    h1s.forEach((h1) => {
        h1.style.color = colorValue
    })
    h2s.forEach((h2) => {
        h2.style.color = h2.style.borderColor = colorValue
    })
})
