$(document).ready(function() {
    let students = []; // Array to store student data

    function displayStudents() {
        const tbody = $('#student-table tbody');
        tbody.empty();
        students.forEach(student => {
            const row = `<tr>
                            <td>${student.name}</td>
                            <td>${student.age}</td>
                            <td>${student.gender}</td>
                            <td>${student.email}</td>
                            <td>${student.phone}</td>
                            <td>${student.dob}</td>
                            <td>${student.course}</td>
                            <td>
                                <button class="edit-btn" data-index="${students.indexOf(student)}">Edit</button>
                                <button class="delete-btn" data-index="${students.indexOf(student)}">Delete</button>
                            </td>
                        </tr>`;
            tbody.append(row);
        });
    }

    $('#student-form').submit(function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const age = $('#age').val();
        const gender = $('input[name="gender"]:checked').val(); // Corrected
        const email = $('#email').val();
        const phone = $('#phone').val();
        const dob = $('#dob').val();
        const course = $('#course').val();

        // Simple validation
        if (!name || !age || !gender || !email || !phone || !dob || !course) {
            alert('All fields are required');
            return;
        }

        // More advanced validation can be added here

        students.push({ name, age, gender, email, phone, dob, course });
        displayStudents();
        $(this)[0].reset();
    });

    $(document).on('click', '.delete-btn', function() {
        const index = $(this).data('index');
        students.splice(index, 1);
        displayStudents();
    });

    $(document).on('click', '.edit-btn', function() {
        const index = $(this).data('index');
        const student = students[index];
        $('#name').val(student.name);
        $('#age').val(student.age);
        $(`input[name="gender"][value="${student.gender}"]`).prop('checked', true); // Corrected
        $('#email').val(student.email);
        $('#phone').val(student.phone);
        $('#dob').val(student.dob);
        $('#course').val(student.course);
        students.splice(index, 1);
        displayStudents();
    });
});
