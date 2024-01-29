// Создать элемент h1 с текстом «Нажмите любую клавишу.».

//   При нажатии любой клавиши клавиатуры менять текст элемента h1 на:
//  «Нажатая клавиша: <имя клавиши> <код клавиши> ».

let h1 = document.createElement("h1");
h1.textContent = "Нажмите любую клавишу.";
document.body.prepend(h1);
document.addEventListener("keydown", handler);
function handler(e) {
  console.log(e);
  h1.textContent = `${e.code} ${e.key}`;
}
