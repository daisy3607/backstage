import React, { PureComponent } from 'react';

import style from './index.css';

export default class Item extends PureComponent {
	render() {
		const {
			children,
		} = this.props;
		return (
			<h3 className={style.itemTitle}>
				{children}
			</h3>
		);
	}
}
