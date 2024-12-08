import React from "react";


function Result ({ComNum,term}){
    let Res ;
    
    if(term){
        if(term>ComNum){
            Res= 'Higher'
    } else if (term<ComNum) {
        Res = 'Lower'
    } else if(term==ComNum){
        Res = 'Yeppi Correct'
        
    } else {
        Res = 'Invalid Input'
    }
    }




    return <h3>Your Guess is : {Res}</h3>
}
export default Result