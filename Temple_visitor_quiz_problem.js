/*
    Problem Description :-
    There is a person who visits 'n' number of temples each day,
    The person has an initial amount and every time he/she visits any temple
    It becomes double and he/she donates Rs. 100 at each temple.
    After visiting the nth temple person has an empty pocket (i.e amount is 0)
    Find the initial amount the person was carrying before visiting the first temple.
*/

const numOfVisitedTemples = 4;

// Returns amount while visiting (n-i)th temple i-> 0 to n 
const getRemainingAmount = (currentBalance) =>{
    return (currentBalance + 100)/2;
}
const getInitialAmount = (num) =>{
    let currBalance = 0;
    for(let i=0; i<num; i++){
        currBalance = getRemainingAmount(currBalance);
    }
    return currBalance;
}

console.log(getInitialAmount(numOfVisitedTemples));