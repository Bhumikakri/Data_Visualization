let graph = document.getElementById('Chart');

let covideRate = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Aug'],
    datasets:[
        {
            label:'covid-19 affecting rate % in 2020',
            data: [40,50,30,25,60,80,90,50,70,60,55,85],
            borderColor: "red",
            borderWidth: 1,
            backgroundColor:['blue','green', 'red', 'yellow', 'gray', 'lime', 'orangerd', 'aqua', 'black', 'brown', 'pink', 'white'],
        }
    ]
};

let chartData = {
    type:'bar',
    data: covideRate ,
    options: {
        responsive: true,
    }
};


let presentdata = new Chart(graph,chartData);
