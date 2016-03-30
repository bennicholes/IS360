function add()
{
    var monthIncome, aliIncome, interestIncome, totalIncome,
        creditCardExpenses, carExpenses, otherExpenses,
        x,y,z,v;

    monthIncome = document.getElementById("monthlyIncome");
    aliIncome = document.getElementById("alimonyIncome");
    interestIncome = document.getElementById("interestIncome");
    x = document.getElementById("totalIncome");

    monthIncome = parseFloat(monthIncome.value);
    aliIncome = parseFloat(alimonyIncome.value);
    interestIncome = parseFloat(interestIncome.value);

    totalIncome = monthIncome + aliIncome + interestIncome;
    x.innerHTML = '$' + totalIncome.toString().match(/^\d+(?:\.\d{0,2})?/);

    creditCardExpenses = document.getElementById("creditCardExpenses");
    carExpenses = document.getElementById("carExpenses");
    otherExpenses = document.getElementById("otherExpenses");
    y = document.getElementById("totalExpenses");

    creditCardExpenses = parseFloat(creditCardExpenses.value);
    carExpenses = parseFloat(carExpenses.value);
    otherExpenses = parseFloat(otherExpenses.value);

    totalExpenses = creditCardExpenses + carExpenses + otherExpenses;
    y.innerHTML = '$' +totalExpenses.toString().match(/^\d+(?:\.\d{0,2})?/)

    option29 = totalIncome * 0.29;
    option39 = (totalIncome - totalExpenses) * 0.39;

    z = document.getElementById("percentage");
    v = document.getElementById("maximum");

    if( option29 < option39 ){
        z.innerHTML = "29%";
        v.innerHTML = '$' + option29.toString().match(/^\d+(?:\.\d{0,2})?/);
    }
    else{
        z.innerHTML = "39%";
        v.innerHTML = '$' + option39.toString().match(/^\d+(?:\.\d{0,2})?/);
    }
}
