import React from 'react';
import TabController from '../components/tabcontroller';
import MassFunctions from './sorting/massfunctions';
import TempuratureFunctions from './sorting/temperaturefunctions';
import LenghtFunctions from './sorting/lenghtfunctions';
import AllFunctions from './sorting/allfuncitons';
import SortedFunctions from './sorting/sortedFunctions';
//All card are not appearing on the height do to the material in them, why

const tabs = [
  {
    label: 'All',
    content: <div>
            <AllFunctions/>
        </div>,
  },
  {
    label: 'Sorted',
    content: <div>
            <SortedFunctions/>
    </div>,
  },
  {
    label: 'Lenght',
    content: <div>
        <LenghtFunctions/>
        </div>,
  },
  {
    label: 'Mass',
    content: <div>
        <MassFunctions/>
        </div>,
  },
  {
    label: 'Tempurature',
    content: <div className=''>
        <TempuratureFunctions/>
        </div>,
  },
];

export default function TabManager() {
  return (
    <div>
      <h1 class="bg-slate-700">Conversion.com, to enter an array of data, just enter the numbers seperated with spaces, ex&quot;12 12.5 15 17&quot;</h1>
      <TabController tabs={tabs} />
    </div>
  );
}
