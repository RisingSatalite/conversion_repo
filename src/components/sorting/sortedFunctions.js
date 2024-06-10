import React from 'react';
import InputWhichConverter from '../inputAnyComponent';
import { Card } from '../card';

//Other functions
import MassFunctions from './massfunctions';
import TempuratureFunctions from './temperaturefunctions';
import LenghtFunctions from './lenghtfunctions';

export default function SortedFunctions(){
    return(
        <span>
            <Card>
                <div>
                    <p>Enter and check(Units have to spelt percisely)</p>
                    <InputWhichConverter buttonFunction={"whichFunction"}/>
                </div>
            </Card>
            <div>Mass calculaters</div>
            <MassFunctions/>
            <div>Tempurature calculaters</div>
            <TempuratureFunctions/>
            <div>Lenght calculaters</div>
            <LenghtFunctions/>
        </span>
    )
}