
function getInputValue (inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText)
  // clear input box
  inputField.value = '';
  return amountValue;
}



document.getElementById('deposit-btn').addEventListener('click', function(){
  //   const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText)
    const depositAmount = getInputValue('deposit-input')
  // get current deposit
  const depositTotal = document.getElementById('deposite-totle');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = depositAmount + previousDepositTotal;
  // update balance positive
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
  
  // console.log(depositTotalText) 

})

// handel withdraw button start 
document.getElementById('withdrow-btn').addEventListener('click', function(){
  // const withdrawInput = document.getElementById('withdrow-input');
  // const withdrawAmountText = withdrawInput.value;
  // const withdrawAmount = parseFloat(withdrawAmountText)
    const withdrawAmount = getInputValue('withdrow-input')
  const withdrawTotal = document.getElementById('withdrow-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotalText)
  withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

  // update balance negative
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  
  
})