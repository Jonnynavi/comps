import SortableTable from "../components/SortableTable";

function TablePage(){
    const data = [
        { name: "Blue Berry", color: "bg-blue-400", score: 5},
        { name: "Apple", color: "bg-red-400", score: 3},
        { name: "Banana", color: "bg-yellow-400", score: 6},
        { name: "Lime", color: "bg-green-400", score: 10}
    ];

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,

        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return(
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
};

export default TablePage;