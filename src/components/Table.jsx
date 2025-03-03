//Fragment allows you to assign a key without the need of adding it to the element itself
import { Fragment } from "react";

function Table({data, config, keyFn}){
    const renderHeader = config.map((column) => {
        if(column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return(
            <th key={column.label}>{column.label}</th>
        )
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return(
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}        
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;