const textArea = document.getElementById("comments");
const text = document.getElementById("text");

textArea.addEventListener("input", () => text.innerText = "Characters " + textArea.value.length);