// Only show student data for code '4456874601'
const studentData = {
    '4456874601': {
        name: 'Ammar Ahmed',
        number: '01055200927',
        faculty: 'Field of Artificial Intelligence & Computer Engineering Technology',
        program: 'Artificial Intelligence & Data Science Program',
        email: 'ammar.ahmed@eleswedy.edu.eg',
        address: 'Eleswedy University, 10th of Ramadan'
    }
};

function searchStudent() {
    const codeInput = document.getElementById('student-code').value.trim();
    const infoSection = document.getElementById('student-info');
    if (studentData[codeInput]) {
        document.getElementById('student-name').textContent = studentData[codeInput].name;
        document.getElementById('student-number').textContent = studentData[codeInput].number;
        document.getElementById('student-faculty').textContent = studentData[codeInput].faculty;
        document.getElementById('student-program').textContent = studentData[codeInput].program;
        document.getElementById('student-email').textContent = studentData[codeInput].email;
        document.getElementById('student-address').textContent = studentData[codeInput].address;
        infoSection.classList.remove('hidden');
    } else {
        infoSection.classList.add('hidden');
        alert('No student found for this code.');
    }
} 