let colorPicker = document.querySelector(".text")

let colorInput = document.querySelector(".color")

console.log(document)

// colorInput.addEventListener('change', () => {
//     colorPicker.style.color = colorInput.value;
//   });

let colorChange = () => {
    colorPicker.style.color = colorInput.value;
}