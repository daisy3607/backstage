import { merge } from 'lodash';
import numeral from 'numeral';
import colors from '../../../../config/palette';
import { customTooltips } from '../../../util/chart/customTooltips';

const colorSetting = {
	bar: [
		colors.primary,
		'rgba(149, 170, 201, 0.5)',
	],
	barHover: [
		'blue',
		'#A5C2E8',
	],
	tooltip: {
		titleFontColor: colors.gray,
		backgroundColor: colors.white,
		bodyFontColor: colors.gray,
		borderColor: colors.light,
		labelBackgroundColor: [colors.primary, 'rgba(149, 170, 201, 0.5)'],
	},
	axis: {
		x: {
			ticksColor: colors.gray,
			gridlineColor: colors.gray,
		},
		y: {
			ticksColor: colors.gray,
			gridlinecolor: colors.gray,
		},
	},
};

export const getInitialConfig = prop => {
	const mainData = prop.data.reduce((acc, val) => acc.concat(val), []);
	const minYlabel = ((Math.min(...mainData) - 10) < 10) ? 0 : Math.min(...mainData) - 10;

	const maxYlabel = Math.max(...mainData);
	const yLabelStep = (maxYlabel - minYlabel) / 5;


	const defaultConfig = {
		BarData: {
			datasets: {
				label: prop.categoriesLabel,
				data: [],
			},
		},
		defaultBarOptions: {
			cornerRadius: 20,
			legend: {
				display: false,
			},
			tooltips: {
				enabled: false,
				mode: 'label',
				custom: customTooltips,
				callbacks: {
					label: (tooltip, data) => {
						const { yLabel } = tooltip;
						const formatedY = numeral(yLabel).format('0,0');
						const labelName = data.datasets[tooltip.datasetIndex].label;
						const tooltipBody = `${labelName}: ${formatedY}`;
						return tooltipBody;
					},
					labelColor: () => ({
						backgroundColor: colorSetting.tooltip.labelBackgroundColor,
					}),
				},
				backgroundColor: colorSetting.tooltip.backgroundColor,
				titleFontSize: 20,
				bodyFontSize: 16,
				bodyFontColor: colorSetting.tooltip.bodyFontColor,
				titleFontColor: colorSetting.tooltip.titleFontColor,
				borderWidth: 2,
				borderColor: colorSetting.tooltip.borderColor,
				displayColors: true,
				yAlign: 'bottom',
				xPadding: 26,
				yPadding: 18,
			},
			scales: {
				xAxes: [{
					categoryPercentage: 0.6,
					barPercentage: 0.7,
					ticks: {
						fontColor: colorSetting.axis.x.ticksColor,
						fontSize: 14,
						beginAtZero: true,
					},
					gridLines: {
						display: false,
						color: colorSetting.axis.x.gridlineColor,
						borderDash: [0.2, 0.5],
					},
				}],
				yAxes: [{
					ticks: {
						fontColor: colorSetting.axis.y.ticksColor,
						beginAtZero: false,
						suggestedMin: minYlabel,
						stepSize: yLabelStep,
						fontSize: 12,
						maxTicksLimit: maxYlabel,
					},
					gridLines: {
						drawBorder: false,
						display: true,
						color: colorSetting.axis.y.gridlineColor,
						borderDash: [0.2, 0.5],
					},
				}],
			},
		},
	};

	const newData = { labels: prop.labels };
	const newDatasets = {
		datasets: [],
	};

	prop.data.forEach((element, index) => {
		newDatasets.datasets.push({
			backgroundColor: colorSetting.bar[index],
			hoverBackgroundColor: colorSetting.barHover[index],
			data: element,
			label: prop.categoriesLabel[index],
		});
	});

	const newOptions = {
		tooltips: {
			enabled: prop.displayTooltips,
		},
	};

	merge(newData, merge(newDatasets, defaultConfig.BarData));
	merge(newOptions, defaultConfig.defaultBarOptions);

	return {
		categoriesLabel: prop.categoriesLabel,
		labels: prop.labels,
		data: newData,
		options: newOptions,
		height: prop.height,
		width: prop.width,
	};
};
