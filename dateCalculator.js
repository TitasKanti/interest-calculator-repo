document.getElementById('calculate').addEventListener('click', function () {

    const firstDate = document.getElementById('first-date');
    const start = firstDate.value;

    const lastDate = document.getElementById('last-date');
    const end = lastDate.value; console.log(end);

    const principleAmount = document.getElementById('amount');
    const amount = parseFloat(principleAmount.value);

    //calculation
    const result = getInterest(start, end, amount);

    //display result
    const div = document.getElementById('result');
    div.innerHTML = `
    <h1>The Interest is ${result} </h1>
    `;
})
const getInterest = (start, end, amount) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    const interest = amount * 0.12 * diffInDays / 365;

    return interest.toFixed(4);
}


