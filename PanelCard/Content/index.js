import React, { PureComponent } from 'react';
import style from './index.css';
// import { Consumer } from '../context';

export default class Content extends PureComponent {
	render() {
		const {
			children,
		} = this.props;
		return (
			<ul className={style.contentContainer}>
				{children}
			</ul>
		);
	}
}
