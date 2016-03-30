        function btnCalc_Click()
        {
            // Variable declaration
            var monIncome, alIncome, intIncome;
            var monIncomeNum, alIncomeNum, intIncomeNum;
            var totalIncome, incomeOutput;

            var ccPayment, carPayment, otherPayment;
            var ccPaymentNum, carPaymentNum, otherPaymentNum;
            var totalExpenses, expensesOutput;

            var option29, option39;
            var percentOutput, paymentOutput;

            // Total income calculations
            monIncome = document.getElementById("txtMonIncome");
            alIncome = document.getElementById("txtAlIncome");
            intIncome = document.getElementById("txtIntIncome");
            incomeOutput = document.getElementById("outIncome");

            monIncomeNum = parseFloat(monIncome.value);
            alIncomeNum = parseFloat(alIncome.value);
            intIncomeNum = parseFloat(intIncome.value);

            totalIncome = monIncomeNum + alIncomeNum + intIncomeNum;
            incomeOutput.innerHTML = totalIncome.toString();

            // Total expense calculations
            ccPayment = document.getElementById("txtCCPay");
            carPayment = document.getElementById("txtCarPay");
            otherPayment = document.getElementById("txtOtherPay");
            expensesOutput = document.getElementById("outExpenses");

            ccPaymentNum = parseFloat(ccPayment.value);
            carPaymentNum = parseFloat(carPayment.value);
            otherPaymentNum = parseFloat(otherPayment.value);

            totalExpenses = ccPaymentNum + carPaymentNum + otherPaymentNum;
            expensesOutput.innerHTML = totalExpenses.toString();

            // Calculate possible payments
            option29 = totalIncome * 0.29;
            option39 = (totalIncome - totalExpenses) * 0.39;
            percentOutput = document.getElementById("outPercentage");
            paymentOutput = document.getElementById("outMaxPay");

            // Display lesser
            if( option29 < option39 )
            {
                percentOutput.innerHTML = "29%";
                paymentOutput.innerHTML = roundNum(option29);
            }
            else
            {
                percentOutput.innerHTML = "39%";
                paymentOutput.innerHTML = roundNum(option39);
            }

        }

        // Function rounds number to two decimal places
        // Converts to string datatype to preserve trailing zeros
