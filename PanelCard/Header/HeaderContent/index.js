import React, { PureComponent } from 'react';
import style from './index.css';

export default class Compound extends PureComponent {
	render() {
		const {
			children,
		} = this.props;
		return (
			<div className={style.compoundContainer}>
				{children}
			</div>
		);
	}
}
