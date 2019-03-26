import React, { PureComponent } from 'react';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import Icon from 'surveycake-component/Icon';

import style from './index.css';

class SearchBar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		};
		this.onSearch$ = new Subject();
		this.onSearch = this.onSearch.bind(this);
	}

	componentDidMount() {
		this.subscription = this.onSearch$
			.debounceTime(1000)
			.subscribe(debounced => {
				if (debounced) {
					this.props.searchByKeyword(debounced);
				} else {
					this.props.searchByKeyword('');
				}
			});
	}

	componentWillUnmount() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	onSearch(e) {
		this.setState({ search: e.target.value });
		this.onSearch$.next(e.target.value);
	}

	render() {
		const { search } = this.state;
		return (
			<div>
				<Icon
					key="search"
					iconName="search"
					style={{ color: '#95aac9', WebkitTextStroke: '1px white' }}
				/>
				<input
					className={style.searchBar}
					type="text"
					value={search}
					onChange={this.onSearch}
				/>
			</div>
		);
	}
}


export default SearchBar;
