let graph = document.getElementById('Chart');

let covideRate = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','oct','nov','dec'],
    datasets:[
        {
            label:'covid-19 affecting rate in 2020',
            data: [40,50,30,25,60,80,90,50,70,60,55,85],
            borderColor: "red",
            borderWidth: 1,
            backgroundColor:['blue','green', 'lime', 'yellow', 'gray', 'aqua', 'red', 'green', 'white', 'gray', 'pink', 'brown'],
        }
    ]
};

let chartData = {
    type:'line',
    data: covideRate ,
    options: {
        responsive: true,
        scales:{
            x:{
                position: 'bottom',
                backgroundColor:'white',
                TextColor:'red'
            },
            y:{
                innerWidth:100,
                backgroundColor:'white',
                beginAtZero: true,
            }
        }
    }
};


let presentdata = new Chart(graph,chartData);
