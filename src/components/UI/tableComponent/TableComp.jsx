import React from "react";
import TableDataRowComp from "./TableDataRowComp";

const TableComp = (props) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr> */}
                {
                    props.yearlyData.map(formValue => {
                        return(<TableDataRowComp key={'inv_' + formValue.id} tableData={formValue} ></TableDataRowComp>);
                    })
                }
            </tbody>
        </table>
    );
}

export default TableComp;