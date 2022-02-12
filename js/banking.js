document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText)
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
  // clear input box
  depositInput.value = '';
  // console.log(depositTotalText) 

})

// handel withdraw button start 
document.getElementById('withdrow-btn').addEventListener('click', function(){
  const withdrawInput = document.getElementById('withdrow-input');
  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText)
  
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