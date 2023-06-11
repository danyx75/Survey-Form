const textArea = document.getElementById("comments");
const text = document.getElementById("text");

textArea.addEventListener("input", function() {
    text.innerText = "Characters " + textArea.value.length;
});