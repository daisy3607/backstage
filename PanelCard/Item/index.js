import React, { PureComponent } from 'react';
import Title from './Title';
import Content from './Content';

import style from './index.css';

export default class Item extends PureComponent {
	static Title = Title;
	static Content = Content;

	render() {
		const {
			children,
		} = this.props;
		return (
			<li className={style.item}>
				{children}
			</li>
		);
	}
}
