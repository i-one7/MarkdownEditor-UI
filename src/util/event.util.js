import { createContext, useState } from 'react';

const EventContext = createContext();

const EventProvider = props => {
	const { children } = props;
	const [ fullScreen, setFullScreen ] = useState(false);
	const handleFullScreen = () => setFullScreen(!fullScreen);
	const [ value, setValue ] = useState('');
	const handleValue = v => setValue(v);
	const [ tabs, setTabs ] = useState(0);
	const handleTabs = i => setTabs(i);

	return (
		<EventContext.Provider value={{
			handleFullScreen,
			handleValue,
			handleTabs,
			setValue,
			fullScreen,
			value,
			tabs,
		}}>
			{children}
		</EventContext.Provider>
	);
};

export { EventContext, EventProvider };