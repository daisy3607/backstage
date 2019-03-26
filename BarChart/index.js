import React from 'react';
import { Bar } from 'react-chartjs-2';

import './extension';
import { getInitialConfig } from './config';
import style from './index.css';

const BarChart = props => (
	props.data[0] === undefined ?
		null
		:
		(
			<div className={style.barWrapper}>
				<Bar {...getInitialConfig(props)} />
			</div>
		)
);

export default BarChart;
