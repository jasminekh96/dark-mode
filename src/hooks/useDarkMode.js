import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', true);
	//darkMode is a boolean and setDarkMode will be the function that decides the dark or light
	useEffect(
		() => {
			if (darkMode === true) {
				//do not need === true can just do if(darkMode)
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ darkMode ],
	);
	return [ darkMode, setDarkMode ];
};
