function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) {
        alert('Please enter a valid birthdate.');
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();


    let age = currentYear - year;


    if (month > currentMonth || (month === currentMonth && day > currentDay)) {
        age--;
    }

    
    document.getElementById('result').innerHTML = `Your age is: ${age} years.`;
}
