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
            <div class="bg-slate-700">Mass calculaters</div>
            <MassFunctions/>
            <div class="bg-slate-700">Tempurature calculaters</div>
            <TempuratureFunctions/>
            <div class="bg-slate-700">Lenght calculaters</div>
            <LenghtFunctions/>
        </span>
    )
}