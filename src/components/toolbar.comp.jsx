import { Box } from '@chakra-ui/react';

const Toolbar = props => {
	const { children, sx } = props;
	const config = {
		justifyContent: 'flex-end',
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		w: 'full',
		sx: sx,
		py: 2,
	};
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

export default Toolbar;