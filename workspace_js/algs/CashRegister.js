/**
 * accepts purchase price as the first argument (price)
 * payment as the second argument (cash)
 * cash-in-drawer (cid) as the third argument.
 * function should always return an object with a status key and a change key.
 * 
 */


function checkCashRegister(price, cash, cid) {
    let  faceValue = [
      {name: "ONE HUNDRED", value: 100},
      {name: "TWENTY", value: 20},
      {name: "TEN", value: 10},
      {name: "FIVE", value: 5},
      {name: "ONE", value: 1},
      {name: "QUARTER", value: 0.25},
      {name: "DIME", value: 0.1},
      {name: "NICKEL", value: 0.05},
      {name: "PENNY", value: 0.01 }
    ]
  
    let delta = cash - price
  
    //                            sum of all cache + cid
    let register = cid.reduce((accumulator, current) => {
      //console.log(accumulator)
      //accumulator[0] = current[0]
      //console.log(accumulator)
      accumulator.total += current[1]
      accumulator[current[0]] = current[1]
      //console.log(accumulator)
      return accumulator;
    }, {total:0})
  /*
    for(let i in register) {
      console.log(i + ":" + register[i])
    } 
  */
    if(register.total < 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  
    if(register.total == delta) {
      return {status: "CLOSED", change: cid}
    }
  
    let change = faceValue.reduce((accumulator, current) => {
      let usedValue = 0
  
      while(register[current.name] > 0 && delta >= current.value) {
        delta -= current.value
        register[current.name] -= current.value
        usedValue += current.value
        delta = Math.round(delta * 100) / 100
      }
      if(usedValue > 0) {
        accumulator.push([current.name, usedValue])
      }
      return accumulator
    }, [])
    console.log(change)
    
    if(delta > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  
    return {status: "OPEN", change};
  }
  
  /*
  let check = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  for(let i in check) {
    console.log(i + ":" + check[i])
  }
  */
  /*
  let check = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  for(let i in check) {
    console.log(i + ":" + check[i])
  }
  */
  
  /*
  let check = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  for(let i in check) {
    console.log(i + ":" + check[i])
  }
  */
  
  let check = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  for(let i in check) {
    console.log(i + ":" + check[i])
  }