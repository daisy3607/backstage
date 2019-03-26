import { merge } from 'lodash';
import numeral from 'numeral';
import colors from '../../../../config/palette';
import { customTooltips } from '../../../util/chart/customTooltips';

const colorSetting = {
	lineColor: [colors.primary],
	tooltip: {
		titleFontColor: colors.dark,
		backgroundColor: colors.white,
		bodyFontColor: colors.gray,
		borderColor: colors.light,
		labelBackgroundColor: [colors.primary],
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
	const minYlabel = Math.min(...prop.dataArr[prop.activeIndex]);
	const maxYlabel = Math.max(...prop.dataArr[prop.activeIndex]);
	const yLabelStep = (maxYlabel - minYlabel) / 5;

	const labelFormat = ['0,0', '0,0', '$ 0.00 a'];

	const defaultConfig = {
		LineData: {
			datasets: [{
				fill: false,
				lineTension: 0.5,
				borderColor: colorSetting.lineColor,
				pointHoverRadius: 0,
				pointHitRadius: 50,
				pointRadius: 0,
			}],
		},
		defaultLineOptions: {
			legend: {
				display: false,
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				},
			},
			tooltips: {
				enabled: false,
				backgroundColor: colorSetting.tooltip.backgroundColor,
				titleFontSize: 20,
				bodyFontSize: 16,
				bodyFontColor: colorSetting.tooltip.bodyFontColor,
				titleFontColor: colorSetting.tooltip.titleFontColor,
				displayColors: true,
				borderColor: colorSetting.tooltip.borderColor,
				yAlign: 'bottom',
				xPadding: 20,
				yPadding: 14,
				cornerRadius: 6,
				custom: customTooltips,
				callbacks: {
					label: (tooltip, data) => (
						numeral(data.datasets[0].data[tooltip.index]).format(labelFormat[prop.activeIndex])
					),
					labelColor: () => ({
						backgroundColor: colorSetting.tooltip.labelBackgroundColor,
					}),
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: colorSetting.axis.x.ticksColor,
						fontSize: 14,
						beginAtZero: false,
						suggestedMin: minYlabel,
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
						stepSize: yLabelStep,
						fontSize: 12,
						maxTicksLimit: maxYlabel,
						callback: label => {
							if (prop.activeIndex === 2) {
								return (label === 0) ?
									numeral(label).format('$ 0 a')
									:
									numeral(label).format('$ 0.00 a');
							}
							return numeral(label).format('0,0');
						},
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


	const newData = {
		labels: prop.label,
	};

	const newDatasets = {
		datasets: [{
			data: prop.dataArr[prop.activeIndex],
		}],
	};

	const newOptions = {
		tooltips: {
			enabled: prop.options,
		},
	};

	merge(newData, merge(newDatasets, defaultConfig.LineData));
	merge(newOptions, defaultConfig.defaultLineOptions);

	return {
		data: newData,
		options: newOptions,
		height: prop.height,
		width: prop.width,
	};
};
