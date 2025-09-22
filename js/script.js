// Setting storage key as variable
const STORAGE_KEY = "students";

// Handle form submission
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Grab inputs with trimming
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const classes = document.getElementById("classes").value
    .split(",")
    .map(c => c.trim())
    .filter(c => c !== "");

  // Create student "object"
  const student = { name, age, phone, email, classes };

  // Get existing students or empty array
  let students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  students.push(student);

  // Save back to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));

  // Reset form
  this.reset();
  alert("Student added!");
});

// Display students when button is clicked/pressed
document.getElementById("showStudents").addEventListener("click", function() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  const students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  students.forEach(student => {
    const card = document.createElement("div");
    card.classList.add("student-card");
    card.innerHTML = `
      <h3>${student.name} (Age: ${student.age})</h3>
      <p><strong>Phone:</strong> ${student.phone}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Classes:</strong></p>
      <ul>${student.classes.map(c => `<li>${c}</li>`).join("")}</ul>
    `;
    studentList.appendChild(card);
  });
});
