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