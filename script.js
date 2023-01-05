// Fetch Json from data.json
const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    }
    )
    .catch(error => console.log(error));

// Convert data into array
let chartContainer = document.querySelector('.chart-area');

// Map through data and populate chart
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 7;
        let value = ""
        if (item.day == "wed") {
            value =`<div class="chart-value active" style="--height:${height}em"></div>`
        }else {
            value =`<div class="chart-value" style="--height:${height}em"></div>`;
        }
        chart.innerHTML = `
        <div class="chart-wrapper">
        ${value}
        </div>
        <div class="chart-title">${item.day}</div>
        `;
        chartContainer.appendChild(chart);
    }
    )
}
)