import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, number } from '@storybook/addon-knobs/react';

import withTests from 'util/storybook';

import BarChart from 'components/atoms/BarChart';

const BarCategoriesLabel = ['paid', 'pro'];
const BarChartData = [
	[20, 50, 30, 20, 40, 30, 45, 20, 30, 30, 20, 20],
	[50, 20, 50, 35, 30, 50, 30, 25, 40, 45, 50, 25],
];
const labels = [
	'2017-10-22', '2017-10-15', '2017-10-08', '2017-10-29', '2017-11-05', '2017-11-12',
	'2017-11-19', '2017-11-26', '2017-12-03', '2017-12-10', '2017-12-17', '2017-12-24',
	'2017-12-31', '2018-01-07', '2018-01-14', '2018-01-21', '2018-01-28', '2018-02-04',
	'2018-02-11', '2018-02-18', '2018-02-25',
];
const enableBarChartTooltips = true;
const BarChartHeight = 600;
const BarChartWidth = 1348;


const stories = storiesOf('Atoms|BarChart', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withTests('BarChart'));

stories.add('__interactive', () => (
	<BarChart
		categoriesLabel={object('categories label', BarCategoriesLabel)}
		labels={object('categories label', labels)}
		data={object('data', BarChartData)}
		options={enableBarChartTooltips}
		height={number('chart height', BarChartHeight)}
		width={number('chart width', BarChartWidth)}
	/>
));
