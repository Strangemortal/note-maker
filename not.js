const addButton = document.getElementById("add-button");
const noteText = document.getElementById("note-text");
const notesList = document.getElementById("notes-list");

addButton.addEventListener("click", addNote);

function addNote() {
  const noteContent = noteText.value.trim();

  if (noteContent !== "") {
    const noteItem = document.createElement("li");
    noteItem.textContent = noteContent;
    notesList.appendChild(noteItem);
    noteText.value = "";
  }
}
