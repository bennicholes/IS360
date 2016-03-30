function interest() {
    
    var initialInvestment, noPeriods, interestRate, result,
        operand1 = document.getElementById("initialInvestment"),
        operand2 = document.getElementById("noPeriods"),
        operand3 = document.getElementById("interestRate"),
        v = document.getElementById("total");
    
    initialNum = parseFloat(operand1.value);
    periodNum = parseFloat(operand2.value);
    rateNum = parseFloat(operand3.value) / 100;
    
    result = initialNum * Math.pow(1 + rateNum, periodNum);

    for (i = 0; i < periodNum; i++) {
        interestAdded = initialNum * rateNum;
        initialNum += interestAdded;
    }
    
    v.innerHTML = "The total interest amount is: " + '$' + result.toString().match(/^\d+(?:\.\d{0,2})?/);
}