import React from 'react';
import InputConverter from '../inputComponent';
import { Card } from '../card';

export default function MassFunctions(){
    return(
    <span>
        <Card>
            <p>Convert Pounds(lb) to kilograms(Kg)</p>
            <InputConverter buttonFunction={"LbTokg"}/>
        </Card>
        <Card>
            <p>Convert kilograms(Kg) to Pounds(lb)</p>
            <InputConverter buttonFunction={"kgToLb"}/>
        </Card>
    </span>
    )
}