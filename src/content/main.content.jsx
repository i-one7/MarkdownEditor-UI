import { Widget } from '../components/@components';
import { Minimize, Maximize } from './@content';
import { EventContext } from '../util/@util';
import { Container } from '@chakra-ui/react';
import { useContext } from 'react';

const Main = () => {
	const { fullScreen } = useContext(EventContext);
	const config = {
		container: {
			maxW: fullScreen ? 'container.2xl' : 'container.md',
			display: 'inline-flex',
			position: 'absolute',
			inset: 0,
		},
		widget: {
			sx: fullScreen ? {
				flexDir: 'column',
				display: 'flex',
				h: '94%',
			} : { pt: 4 }
		}
	};

	return (
		<Container {...config.container}>
			<Widget {...config.widget}>
				{
					fullScreen? <Maximize/> : <Minimize/>
				}
			</Widget>
		</Container>
	);
};

export default Main;