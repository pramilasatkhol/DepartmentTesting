const studentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

// Load saved students from browser storage or start with an empty list
let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents() {
    tableBody.innerHTML = "";

    if (students.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No students added yet.</td></tr>`;
        return;
    }

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
        `;
        tableBody.appendChild(row);
    });
}

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const department = document.getElementById("studentDept").value.trim();

    students.push({ id, name, department });
    localStorage.setItem("students", JSON.stringify(students));

    studentForm.reset();
    renderStudents();
});

// Display existing students on page load
renderStudents();
