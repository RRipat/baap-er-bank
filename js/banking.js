
function getInputValue (inputId){
  const inputFeild = document.getElementById(inputId);
  const inputAmountText = inputFeild.value;
  const amountValue = parseFloat(inputAmountText)
  // clear input box
  inputFeild.value = '';
  return amountValue;
}
function updateTotalField(totalFeildId, amount){
  const totalElement = document.getElementById(totalFeildId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = amount + previousTotal;
}
function updateBalance(depositAmount, isAdd){
  const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  }
  else{
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}

document.getElementById('deposit-btn').addEventListener('click', function(){
  //   const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText)
    
  // get current deposit
  // const depositTotal = document.getElementById('deposite-totle');
  // const depositTotalText = depositTotal.innerText;
  // const previousDepositTotal = parseFloat(depositTotalText);
  

  // depositTotal.innerText = depositAmount + previousDepositTotal;
  // update balance positive
  // const balanceTotal = document.getElementById('balance-total');
  //  const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);
  // balanceTotal.innerText = previousBalanceTotal + depositAmount;
  const depositAmount = getInputValue('deposit-input')
  if(depositAmount > 0){
     updateTotalField('deposite-totle', depositAmount)
  updateBalance(depositAmount, true)
  }
 

})

// handel withdraw button start 
document.getElementById('withdrow-btn').addEventListener('click', function(){
  // const withdrawInput = document.getElementById('withdrow-input');
  // const withdrawAmountText = withdrawInput.value;
  // const withdrawAmount = parseFloat(withdrawAmountText)
  

  // const withdrawTotal = document.getElementById('withdrow-total');
  // const withdrawTotalText = withdrawTotal.innerText;
  // const previousWithdrawTotal = parseFloat(withdrawTotalText)
  // withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;
  

  // update balance negative
  // const balanceTotal = document.getElementById('balance-total');
  // const balanceTotalText = balanceTotal.innerText;
  // const previousBalanceTotal = parseFloat(balanceTotalText);
  // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  const withdrawAmount = getInputValue('withdrow-input')
  if(withdrawAmount > 0){
    updateTotalField('withdrow-total', withdrawAmount)
  updateBalance(withdrawAmount, false)
  }
  
  
})