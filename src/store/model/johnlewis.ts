import {Store} from './store';

export const JohnLewis: Store = {
	currency: '£',
	labels: {
		inStock: {
			container: '.buyingOptions',
			text: ['Pre-order Now', 'Buy New']
		},
		maxPrice: {
			container: '.buyingOptions .btnPrice',
			euroFormat: false
		},
		outOfStock: {
			container: '.cq-bf-middle',
			text: ['out of stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.game.co.uk/en/ea-sports-fifa-21-500gb-ps4-bundle-2832947'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.johnlewis.com/sony-playstation-5-console-with-dualsense-controller/white/p5115192'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.johnlewis.com/sony-playstation-5-console-with-dualsense-controller/white/p5115192'
		},
	],
	name: 'johnlewis'
};
