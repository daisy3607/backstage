import React, { PureComponent } from 'react';
import Icon from 'surveycake-component/Icon';
import classnames from 'classnames';
import style from './index.css';

export class OrdersTable extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			sortStatus: props.heads
				.reduce((acc, target) => ({ ...acc, [target]: '' }), {}),
		};
		this.sortList = this.sortList.bind(this);
		this.renderSortIcon = this.renderSortIcon.bind(this);
	}

	sortList(targetKey) {
		this.setState({
			sortStatus: this.state.sortStatus[targetKey] === 'asc' ?
				{ ...this.state.sortStatus, [targetKey]: 'desc' }
				:
				{ ...this.state.sortStatus, [targetKey]: 'asc' },
		});
		this.props.changeSortOrder();
	}

	renderSortIcon(head) {
		const { data } = this.props;
		if (data.length > 1) {
			if (head === 'ACTION') return null;
			if (this.state.sortStatus[head]) {
				return this.state.sortStatus[head] === 'desc' ? (
					<div className={classnames(style.sortIconContainer, style.down)}>
						<Icon key="caret-down" iconName="caret-down" style={{ color: '#95aac9' }} />
					</div>
				) : (
					<div className={classnames(style.sortIconContainer, style.up)}>
						<Icon key="caret-up" iconName="caret-up" style={{ color: '#95aac9' }} />
					</div>
				);
			}
		}
		return (
			<div className={style.sortIconContainer}>
				<Icon key="sort" iconName="sort" style={{ color: '#95aac9' }} />
			</div>
		);
	}

	render() {
		const { heads, data } = this.props;

		return (
			<div className={style.tableWrapper}>
				<table className={style.table}>
					<tbody>
						<tr className={style.tableHeaderWrapper}>
							{
								heads.map(head => (
									<th
										onClick={() => this.sortList(head)}
										className={style.header}
										key={head}
									>
										{head}
										{this.renderSortIcon(head)}
									</th>
								))
							}
						</tr>
					</tbody>
					<tbody>
						{
							data.length ?
								data.map(arr => (
									<tr className={style.rowWrapper} key={Math.random()}>
										{arr.map(element => (
											<td
												className={style.element}
												key={Math.random()}
											>
												{element}
											</td>
										))}
									</tr>
								))
								:
								<tr>
									<td className={style.noResult}>查無資料</td>
								</tr>
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default OrdersTable;
