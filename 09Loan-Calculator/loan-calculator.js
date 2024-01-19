
function calculateLoan() {
loanAmountValue = document.getElementById("loan-amount").value;
interestRateValue = document.getElementById("interest-rate").value;
monthsToPayValue = document.getElementById("months-to-pay").value;
paymentEl = document.getElementById("payment");

interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment}`;
    
}