import React from 'react';
import { Line } from 'react-chartjs-2';

import { getInitialConfig } from './config';


const LineChart = props => (
	props.dataArr[0] === undefined ?
		null
		:
		(
			<div>
				<Line {...getInitialConfig(props)} />
			</div>
		)
);

export default LineChart;
