import React from 'react';

export const useLocalStorage = <T>(key: string, initialValue?: T): [() => T, (item: T) => void] => {
	const getItem = React.useCallback(() => {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	}, []);

	const setItem = React.useCallback((item: T) => {
		localStorage.setItem(key, JSON.stringify(item));
	}, []);

	return [getItem, setItem];
};
