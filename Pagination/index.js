import React, { PureComponent } from 'react';
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'react-feather';
import classnames from 'classnames';
import style from './index.css';
import { calculateDisplayPage } from './calculatePage';

class Pagination extends PureComponent {
	render() {
		const { currentPage, lastPage, changeActivePage } = this.props;
		const pageArray = Array(lastPage).fill().map((_, idx) => idx + 1);
		const displayPageArray = calculateDisplayPage(currentPage, lastPage);

		if (lastPage === 1) {
			return null;
		} else if (lastPage <= 5) {
			return (
				<div className={style.pagination}>
					<button className={style.iconLeft}>
						<ChevronsLeft size={12} color="#95aac9" />
					</button>
					{
						pageArray.map((page, index) =>
							(currentPage === page ?
								<button className={style.active} key={index.toString()}>{page}</button>
								:
								<button
									className={style.inactiveBtn}
									key={index.toString()}
									onClick={() => changeActivePage(page)}
								>
									{page}
								</button>
							))
					}
					<button className={style.iconRight}>
						<ChevronsRight size={12} color="#95aac9" />
					</button>
				</div>
			);
		}
		return (
			<div className={style.pagination}>
				{
					displayPageArray[0] === 1 ? (
						<button className={style.iconLeft}>
							<ChevronsLeft size={12} color="#95aac9" />
						</button>
					) : (
						<button
							className={classnames(style.iconLeft, style.pointer)}
							onClick={() => changeActivePage(1)}
						>
							<ChevronsLeft size={12} color="black" />
						</button>
					)
				}
				{
					currentPage === 1 ? (
						<button className={style.inactiveBtn}>
							<ChevronLeft size={12} color="#95aac9" />
						</button>
					) : (
						<button
							className={classnames(style.inactiveBtn, style.pointer)}
							onClick={() => changeActivePage(currentPage - 1)}
						>
							<ChevronLeft
								size={12}
								color="black"
							/>
						</button>
					)
				}
				{
					displayPageArray.map((page, index) =>
						(currentPage === page ?
							<button className={style.active} key={index.toString()}>
								{page}
							</button>
							:
							<button
								className={style.inactiveBtn}
								key={index.toString()}
								onClick={() => changeActivePage(page)}
							>
								{page}
							</button>
						))
				}
				{
					currentPage === lastPage ? (
						<button className={style.inactiveBtn}>
							<ChevronRight size={12} color="#95aac9" />
						</button>
					) : (
						<button
							className={classnames(style.inactiveBtn, style.pointer)}
							onClick={() => changeActivePage(currentPage + 1)}
						>
							<ChevronRight size={12} color="black" />
						</button>
					)
				}
				{
					displayPageArray[4] === lastPage ? (
						<button className={style.iconRight}>
							<ChevronsRight size={12} color="#95aac9" />
						</button>
					) : (
						<button
							className={classnames(style.iconRight, style.pointer)}
							onClick={() => changeActivePage(lastPage)}
						>
							<ChevronsRight size={12} color="black" />
						</button>
					)
				}
			</div>
		);
	}
}

export default Pagination;
