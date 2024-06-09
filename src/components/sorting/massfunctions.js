import React from 'react';
import InputConverter from '../inputComponent';

export default function MassFunctions(){
    return(
    <div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Pounds(lb) to kilograms(Kg)</p>
            <InputConverter buttonFunction={"LbTokg"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert kilograms(Kg) to Pounds(lb)</p>
            <InputConverter buttonFunction={"kgToLb"}/>
        </div>
    </div>
    )
}