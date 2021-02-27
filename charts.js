// twee variabelen aangeven die in de doughnut weergeven zal worden
let labels1 = ['drinking water', 'shower water'];
// Eentje zal met 69% worden weergegeven en de ander met 31%
let data1 = [69, 31];
// De kleuren van de percentages
let colors1 = ['#1E71B0', '#E36200'];

// Dit wordt gepakt uit het html document
let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
	// Zal worden weergegeven als een doughnut
	type: 'doughnut',
	// gegevens van hierboven worden eruit gehaald en erin verwerkt
	data: {
		labels: labels1,
		datasets: [ {
			data: data1,
			backgroundColor: colors1
		}]
	},
	options: {
		title: {
			// Koptitel boven doughnut
			text: "Available water",
			display: true
		}
	}
});


// Variabelen die in het grafiek worden weergegeven
let labels2 = ['Canned beans', 'Dried apricot', 'Canned salmon', 'Unsalted nuts'];
// Hoeveelheid die beschikbaar is
let data2 = [1250, 1340, 999, 1400];
// De kleuren van de hoeveelheden 
let colors2 = ['#B8639B', '#9D4147', '#DDDD12', '#733BD5' ];

// Dit wordt gepakt uit het html document
let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
	// Zal worden weergegeven als een bar
	type: 'bar',
	// Gegevens van hierboven worden eruit gehaald en erin verwerkt
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2
		}]
	},
	options: {
		title: {
			// Koptitel boven bar
			text: "Number of food present",
			display: true
		},
		legend: {
			// Zodat titel boven de bar verschijnt zonder een icoon of iets erbij
			display: false
		}
	}
});