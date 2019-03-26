import { range } from 'lodash';

export const calculateDisplayPage = (activePage, lastPage) => {
	if (activePage < 3) return range(1, 6);
	if (activePage > lastPage - 2) return range(lastPage - 4, lastPage + 1);
	return range(activePage - 2, activePage + 3);
};
