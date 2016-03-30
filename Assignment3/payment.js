function payment() {
    
    var initialLoan, noPeriods, interestRate, result,
        operand1 = document.getElementById("initialLoan"),
        operand2 = document.getElementById("noPeriods"),
        operand3 = document.getElementById("interestRate"),
        v = document.getElementById("paymentAmount"),
        paymentAmount,
        exponent;
    
    initialNum = parseFloat(operand1.value);
    periodNum = 12 * parseFloat(operand2.value);
    rateNum = parseFloat(operand3.value) / 12;
    exponent = Math.pow((1 + rateNum),(-periodNum));

    paymentAmount = ((rateNum * initialNum) / (1 - exponent));

    v.innerHTML = "The total amount is: " + (Math.round(paymentAmount * 100) / 100).toString();
}