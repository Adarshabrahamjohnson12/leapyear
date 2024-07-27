function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    const result = document.getElementById('result');

    if (year === '') {
        result.textContent = 'Please enter a year.';
        return;
    }

    const yearNum = parseInt(year, 10);
    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0)) {
        result.textContent = `${yearNum} is a leap year.`;
    } else {
        result.textContent = `${yearNum} is not a leap year.`;
    }
}
