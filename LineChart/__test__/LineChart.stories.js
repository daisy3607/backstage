import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, number, boolean } from '@storybook/addon-knobs/react';
import withTests from 'util/storybook';

import LineChart from 'components/atoms/LineChart';

const label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dataArr = [
	[20, 50, 10, 50, 10, 25, 30, 50, 10, 50, 10,
		50, 20, 50, 10, 50, 10, 25, 30, 50, 10, 50, 10, 50],
	[40, 10, 40, 20, 30, 10, 15, 50, 45, 30, 10,
		40, 20, 50, 10, 50, 10, 25, 30, 50, 10, 50, 10, 50],
	[30, 40, 50, 30, 25, 50, 20, 40, 50, 10, 25,
		30, 20, 50, 10, 50, 10, 25, 30, 50, 10, 50, 10, 50],
];
const activeIndex = 0;
const options = true;
const height = 300;
const width = 1116;

const stories = storiesOf('Atoms|LineChart', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withTests('LineChart'));

stories.add('__interactive', () => (
	<LineChart
		label={object('categories label', label)}
		activeIndex={number('tab index', activeIndex)}
		dataArr={object('display data', dataArr)}
		options={boolean('display tooltips', options)}
		height={number('height', height)}
		width={number('width', width)}
	/>
));

