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
    rateNum = parseFloat(operand3.value) / 100 / 12;
    exponent = Math.pow((1 + rateNum),(-periodNum));

    paymentAmount = (rateNum * initialNum) / (1 - Math.pow(1 + rateNum, -1 * periodNum));
    
    v.innerHTML = "The total amount is: " + '$' + paymentAmount.toString().match(/^\d+(?:\.\d{0,2})?/);
}