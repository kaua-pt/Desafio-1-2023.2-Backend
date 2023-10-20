function checkCashRegister(price, cash, cid) {
    let drawerMoney = 0,changeMoney =(cash-price) ;
  
    cid.map(elem => drawerMoney+=elem[1]);
  
    if(drawerMoney < changeMoney || drawerMoney % (cash-price) != 0)
        return {status:"INSUFFICIENT_FUNDS",change :[]};
    else if(drawerMoney == changeMoney)
        return {status:"CLOSED",change :cid};
    else{
        console.log("coe")
        let cidR = cid.reverse(),sum = 0,ret = [];
        cidR.map(prod => { 
            if((sum +prod[1])<= changeMoney){
            sum+=prod; 
            ret.push(prod)
        }
      })
  
       return {status:"OPEN",change:ret};
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);