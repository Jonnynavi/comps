import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { useState } from 'react';
import useSort from '../hooks/use-sort';



function SortableTable(props) { 
    const { config, data } = props; // Destructuring props
    const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(data, config); // Custom hook to handle sorting logic

    // Updates config to add sorting functionality to columns
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) { // If column is not sortable, return as-is
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)} 
                        {column.label}
                    </div>
                </th>
            )
        };
    });


    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

// Determines which sorting icons to display based on current sorting state
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy || sortOrder === null) { // Default state (both arrows visible)
        return (
            <div>
                <GoArrowSmallDown />
                <GoArrowSmallUp /> 
            </div>
        );
    }
    
    if (sortOrder === 'asc') { // Show only up arrow for ascending sort
        return (
            <div>
                <GoArrowSmallUp /> 
            </div>
        );
    } else if (sortOrder === 'desc') { // Show only down arrow for descending sort
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    }
};

export default SortableTable;
