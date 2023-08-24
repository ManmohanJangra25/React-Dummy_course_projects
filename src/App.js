import React, { useState } from 'react';
import HeaderComp from './components/UI/Header/HeaderComp';
import FormComp from './components/UI/Form/FormComp';
import TableComp from './components/UI/tableComponent/TableComp';

function App(props) {
  const [yearlyData, setYearlyData] = useState([]);
  const getFormData =  (formData) => {
    calculateHandler(formData);
  }
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results
    
    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        id: i + 1
      });
    }

    // do something with yearlyData ...
    console.log(yearlyData);
    setYearlyData(yearlyData);
  };

  const FormResetHandler = (event) => {
    if(yearlyData.length === 0) {
      return (
        <div className='header'>
          <h1>No data available</h1>
        </div>
      )
    } else {
      return <TableComp yearlyData={yearlyData} />
    }
  }


  return (
    <div>
      <HeaderComp />

      <FormComp formData={getFormData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <FormResetHandler />
    </div>
  );
}

export default App;
