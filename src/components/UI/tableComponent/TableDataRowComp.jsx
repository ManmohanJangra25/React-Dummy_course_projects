import React from "react";

const TableDataRowComp = (props) => {    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    return (
        <tr>
            <td>{props.tableData.year}</td>
            <td>{formatter.format(Math.round(props.tableData.savingsEndOfYear))}</td>
            <td>{formatter.format(Math.round(props.tableData.yearlyInterest))}</td>
            <td>{formatter.format(Math.round(props.tableData.yearlyContribution))}</td>
            <td>{formatter.format(Math.round(props.tableData.yearlyContribution + props.tableData.yearlyContribution))}</td>
        </tr>
    );
}

export default TableDataRowComp;