import React from 'react';
import InputWhichConverter from '../inputAnyComponent';
import { Card } from '../card';

//Other functions
import MassFunctions from './massfunctions';
import TempuratureFunctions from './temperaturefunctions';
import LenghtFunctions from './lenghtfunctions';

export default function AllFunctions(){
    return(
        <span>
            <Card>
                <p>Enter and check(Units have to spelt percisely)</p>
                <InputWhichConverter buttonFunction={"whichFunction"}/>
            </Card>
            <MassFunctions/>
            <TempuratureFunctions/>
            <LenghtFunctions/>
        </span>
    )
}