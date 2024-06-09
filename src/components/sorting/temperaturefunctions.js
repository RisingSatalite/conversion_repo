import React from 'react';
import InputConverter from '../inputComponent';

export default function TempuratureFunctions(){
    return(
        <div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p class="">Convert Fahrenheit To Celsius</p>
                <InputConverter buttonFunction={"FahrenheitToCelsius"}/>
            </div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Convert Celsius to Fahrenheit</p>
                <InputConverter buttonFunction="CelsiusToFahrenheit" />
            </div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Convert Celsius to Kelvin</p>
                <InputConverter buttonFunction="CelsiusToKelvin" />
            </div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Convert Kelvin to Celsius</p>
                <InputConverter buttonFunction="KelvinToCelsius" />
            </div>
        </div>
    )
}