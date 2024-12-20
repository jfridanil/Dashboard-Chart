const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar', // Specify chart type
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // X-axis labels
        datasets: [{
            label: '2022', // Dataset label for 2022
            data: [4.017, 6.135, 7.091, 5.841, 5.036, 4.547, 3.467, 3.970, 6.313, 3.595, 9.207, 5.945], // Data points for 2022
            backgroundColor: 'rgba(0, 75, 160, 0.8)', // Color for 2022
            borderColor: 'rgba(0, 75, 160, 1)', // Border color for 2022
            borderWidth: 1 // Border width for 2022
        }, {
            label: '2023', // Dataset label for 2023
            data: [2.415, 4.136, 7.935, 8.004, 9.505, 5.026, 6.108, 6.343, 9.404, 9.280, 9.287, 8.689], // Data points for 2023
            backgroundColor: 'rgba(36, 153, 128, 0.8)', // Color for 2023
            borderColor: 'rgba(80, 227, 194, 1)', // Border color for 2023
            borderWidth: 1 // Border width for 2023
        }]
    },
    options: {
        responsive: true, // Make chart responsive
        maintainAspectRatio: false, // Allow custom container size
        animation: {
            duration: 1000, // Animation duration in ms
            easing: 'easeInOutQuart' // Animation easing function
        },
        plugins: {
            legend: {
                display: true, // Show the legend
                position: 'top' // Position legend at the top
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Hide vertical grid lines
                },
                ticks: {
                    color: '#333' // X-axis label color
                }
            },
            y: {
                grid: {
                    color: '#eaeaea' // Grid line color
                },
                ticks: {
                    color: '#333' // Y-axis label color
                },
                beginAtZero: true // Y-axis starts at zero
            }
        }
    }
});
