import React from 'react';
import TabController from '../components/tabcontroller';
import InputConverter from './inputComponent';
import InputWhichConverter from './inputAnyComponent';

//All card are not appearing on the height do to the material in them, why
const tabs = [
  {
    label: 'All',
    content: <div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Enter and check(Units have to spelt percisely)</p>
            <InputWhichConverter buttonFunction={"whichFunction"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Miles to Km</p>
            <InputConverter buttonFunction={"MilesTokm"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert km to Miles</p>
            <InputConverter buttonFunction={"kmToMiles"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Pounds(lb) to kilograms(Kg)</p>
            <InputConverter buttonFunction={"LbTokg"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert kilograms(Kg) to Pounds(lb)</p>
            <InputConverter buttonFunction={"kgToLb"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p class="">Convert Fahrenheit To Celsius</p>
            <InputConverter buttonFunction={"FahrenheitToCelsius"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Celsius to Fahrenheit</p>
            <InputConverter buttonFunction="CelsiusToFahrenheit" />
        </div>
        </div>,
  },
  {
    label: 'Lenght',
    content: <div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Miles to Km</p>
            <InputConverter buttonFunction={"MilesTokm"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert km to Miles</p>
            <InputConverter buttonFunction={"kmToMiles"}/>
        </div>
        </div>,
  },
  {
    label: 'Mass',
    content: <div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Pounds(lb) to kilograms(Kg)</p>
            <InputConverter buttonFunction={"LbTokg"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert kilograms(Kg) to Pounds(lb)</p>
            <InputConverter buttonFunction={"kgToLb"}/>
        </div>
        </div>,
  },
  {
    label: 'Tempurature',
    content: <div className=''>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p class="">Convert Fahrenheit To Celsius</p>
            <InputConverter buttonFunction={"FahrenheitToCelsius"}/>
        </div>
        <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
            <p>Convert Celsius to Fahrenheit</p>
            <InputConverter buttonFunction="CelsiusToFahrenheit" />
        </div>
        </div>,
  },
];

export default function TabManager() {
  return (
    <div>
      <h1 class="" className='bg-slate-700'>Conversion.com, to enter an array of data, just enter the numbers seperated with spaces, ex&quot;12 12.5 15 17&quot;</h1>
      <TabController tabs={tabs} />
    </div>
  );
}
