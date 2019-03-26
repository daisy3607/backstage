import React, { PureComponent } from 'react';

import style from './index.css';

export default class Content extends PureComponent {
	render() {
		const {
			children,
		} = this.props;
		return (
			<div className={style.itemContent}>
				{children}
			</div>
		);
	}
}
