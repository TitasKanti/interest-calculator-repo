document.getElementById('calculate').addEventListener('click', function () {
    //getting the user inputs
    const firstDate = document.getElementById('first-date');
    const start = firstDate.value;

    const lastDate = document.getElementById('last-date');
    const end = lastDate.value;

    const principleAmount = document.getElementById('amount');
    const amount = parseFloat(principleAmount.value);

    //calculation
    const result = getInterest(start, end, amount);

    //display result
    const div = document.getElementById('result');
    div.innerHTML = `
    <h1 class = "design">The Interest is ${result} BDT. </h1>
    `;

    //clear inputs
    firstDate.value = '';
    lastDate.value = '';
    principleAmount.value = '';

})
const getInterest = (start, end, amount) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const timeDifference = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(timeDifference / oneDay);
    const interest = amount * 0.12 * diffInDays / 365;

    return Math.abs(interest.toFixed(3));
}


