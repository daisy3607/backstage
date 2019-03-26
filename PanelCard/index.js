import React, { PureComponent } from 'react';
import Header from './Header';
import Content from './Content';
import Item from './Item';
import styles from './index.css';

export default class PanelCard extends PureComponent {
	static Header = Header;
	static Content = Content;
	static Item = Item;

	render() {
		const {
			children,
		} = this.props;
		return (
			<main className={styles.PanelCardContainer}>
				{children}
			</main>
		);
	}
}
