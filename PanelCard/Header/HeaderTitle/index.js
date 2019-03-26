import React, { PureComponent } from 'react';
import style from './index.css';

export default class Title extends PureComponent {
	render() {
		const {
			children,
		} = this.props;
		return (
			<div className={style.headerTitle}>
				{children}
			</div>
		);
	}
}
