import React, { useState } from "react";

const FormComp = (props) => {
  const [formState, setFormState] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
    id: 0,
  });

  const newInvestmentHandler = (event) => {
    const {value, name} = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: +value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormState({
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: '',
        id: 0,
    });
    props.formData(formState);
  };
  const formResetHandler = (event) => {
    event.preventDefault();
    setFormState({
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: '',
        id: 0,
    });
    props.formData(formState);
  }

  return (
    <form className="form" onSubmit={formSubmitHandler} onReset={formResetHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            name="currentSavings"
            onChange={newInvestmentHandler}
            value={formState.currentSavings}
            type="number"
            id="current-savings"
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            name="yearlyContribution"
            onChange={newInvestmentHandler}
            value={formState.yearlyContribution}
            type="number"
            id="yearly-contribution"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            name="expectedReturn"
            onChange={newInvestmentHandler}
            value={formState.expectedReturn}
            type="number"
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            name="duration"
            onChange={newInvestmentHandler}
            value={formState.duration}
            type="number"
            id="duration"
            required
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormComp;
