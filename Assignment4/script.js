function calculate() {
        // Variable declaration
     var initLoan, numPeriods, intRate,
     initLoanNum, totalPeriods, intRateNum,
     numerator, denominator, payment,
     interest, principal;

    // used http://www.1728.org/loanform.htm for reference
    initLoan = document.getElementById("initialLoan");
    numPeriods = document.getElementById("numPeriods");
    intRate = document.getElementById("initialRate");

    intRateNum = parseFloat(intRate.value) / 100 / 12;
    initLoanNum = parseFloat(initLoan.value);
    totalPeriods = 12 * parseFloat(numPeriods.value);

    numerator = intRateNum;
    denominator = Math.pow(1 + intRateNum, totalPeriods) - 1;
    payment = intRateNum + (numerator/denominator);
    payment = payment * initLoanNum;

    var tbl = document.getElementById("output");
    var balance = initLoanNum;

    for( var period = 1; period <= totalPeriods; period++ ){
        
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(roundNumber(balance)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(roundNumber(payment)));
        tr.appendChild(td);

        td = document.createElement('td');
        interest = balance * intRateNum;
        td.appendChild(document.createTextNode(roundNumber(interest)));
        tr.appendChild(td);

        td = document.createElement('td');
        principal = payment - interest;
        td.appendChild(document.createTextNode(roundNumber(principal)));
        tr.appendChild(td);

        td = document.createElement('td');
        balance = balance - principal;
        td.appendChild(document.createTextNode(roundNumber(balance)));
        tr.appendChild(td);

        td = document.createElement('td');
        td.appendChild(document.createTextNode(period));
        tr.appendChild(td);

        tbl.appendChild(tr);
    }

}

function roundNumber( number ){
    var rounded = number.toFixed(2);
    return rounded;
}
