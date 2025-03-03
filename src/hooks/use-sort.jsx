import { useState } from "react";

function useSort(data, config) {

    // State variables to track sorting order and column
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);

   // Handles sorting logic when a column header is clicked
   const setSortColumn = (label) => {
       if (sortBy && label !== sortBy) { // If a different column is clicked, reset to ascending order
           setSortOrder('asc');
           setSortBy(label);
           return;
       }
       
       // Toggle between ascending, descending, and no sorting
       if (sortOrder === null) {
           setSortOrder('asc');
           setSortBy(label);
       } else if (sortOrder === 'asc') {
           setSortOrder('desc');
           setSortBy(label);
       } else {
           setSortOrder(null);
           setSortBy(null);
       }
   };

   let sortedData = data; // Default to original data

   // Sort data if a column is selected for sorting
   if (sortOrder && sortBy) {
       const { sortValue } = config.find(column => column.label === sortBy); // Find sorting function for column
       sortedData = [...data].sort((a, b) => { // Sort data copy
           const valueA = sortValue(a); 
           const valueB = sortValue(b);

           const reverseOrder = sortOrder === 'asc' ? 1 : -1; // Determines sort direction

           if (typeof valueA === 'string') {
               return valueA.localeCompare(valueB) * reverseOrder; // String comparison
           } else {
               return (valueA - valueB) * reverseOrder; // Numeric comparison
           }
       });
   }

   return { sortedData, setSortColumn, sortBy, sortOrder };
}

export default useSort;