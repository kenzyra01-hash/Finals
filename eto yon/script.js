let students = ["Rene Batterbonia", "Kulot Maingay", "Jose Protacio", "Mino Cabusas", "Bini Tawan"];

/* DOM Elements */
const listEl = document.getElementById("student-list");
const lengthEl = document.getElementById("list-length");
const addInput = document.getElementById("add-input");
const findInput = document.getElementById("find-input");
const separatorInput = document.getElementById("separator-input");
const removeMessage = document.getElementById("remove-message");
const findResult = document.getElementById("find-result");
const joinResult = document.getElementById("join-result");
const toStringResult = document.getElementById("tostring-result");


function addStudent(name) {
    students.push(name);                  
}

function removeLastStudent() {
    return students.pop();                
}

function findStudent(index) {
    return students.at(index);        
}

function joinStudents(separator) {
    return students.join(separator);   
}

function studentsToString() {
    return students.toString();          
}

function renderList() {
    listEl.textContent = "";

    students.forEach((name, index) => {
        const li = document.createElement("li");
        li.dataset.number = String(index + 1);
        li.textContent = name;
        listEl.appendChild(li);
    });

    lengthEl.textContent = String(students.length);
}

function handleAdd() {
    const name = addInput.value.trim();

    if (name === "") {
        addInput.placeholder = "Please enter a name!";
        addInput.value = "";
        return;
    }

    addStudent(name);
    addInput.value = "";
    addInput.placeholder = "Enter student name";
    removeMessage.textContent = "";
    renderList();
}

function handleRemove() {
    const removed = removeLastStudent();

    if (removed === undefined) {
        removeMessage.textContent = "The list is already empty.";
    } else {
        removeMessage.textContent = "Removed: " + removed;
    }
    findResult.textContent = "";
    renderList();
}

function handleFind() {
    const value = findInput.value;

    if (value === "" || !Number.isInteger(Number(value))) {
        findResult.textContent = "Please enter a valid whole number.";
        return;
    }

    const index = Number(value);
    const found = findStudent(index);

    if (found === undefined) {
        findResult.textContent = "Index " + index + " is out of range.";
    } else {
        findResult.textContent = "Student at index " + index + ": " + found;
    }
}

function handleJoin() {
    joinResult.textContent = joinStudents(separatorInput.value);
}

function handleToString() {
    toStringResult.textContent = studentsToString();
}

document.getElementById("add-btn").addEventListener("click", handleAdd);
document.getElementById("remove-btn").addEventListener("click", handleRemove);
document.getElementById("find-btn").addEventListener("click", handleFind);
document.getElementById("join-btn").addEventListener("click", handleJoin);
document.getElementById("tostring-btn").addEventListener("click", handleToString);

renderList();