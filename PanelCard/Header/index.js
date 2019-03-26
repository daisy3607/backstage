import React, { PureComponent } from 'react';
import Title from './HeaderTitle';
import Compound from './HeaderContent';
import style from './index.css';

export default class Header extends PureComponent {
	static Title = Title;
	static Compound = Compound;
	render() {
		const {
			children,
		} = this.props;
		return (
			<header className={style.header}>
				{children}
			</header>
		);
	}
}
