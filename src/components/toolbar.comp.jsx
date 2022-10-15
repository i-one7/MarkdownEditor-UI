import { toolbarEvent, toolbarItem, EventContext } from '../util/@util';
import { IButton } from '../components/@components';
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';

const Toolbar = props => {
	const { handleValue } = useContext(EventContext);
	const { sx } = props;
	const config = {
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		display: 'flex',
		sx: sx,
	};

	return (
		<Box {...config}>
			{
				toolbarItem.map((v, i) => <IButton
					click={() => handleValue(toolbarEvent(v.type))}
					sx={{ my: 3, mx: 1, fontSize: '1.4rem' }}
					icon={v.icon}
					key={i}
				/>)
			}
		</Box>
	);
};

export default Toolbar;