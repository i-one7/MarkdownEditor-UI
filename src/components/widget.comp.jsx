import { Box } from '@chakra-ui/react';

const config = {
	widget: {
		display: 'block',
		bg: 'dark.700',
		rounded: 'lg',
		my: 'auto',
		w: 'full',
		py: 6,
		px: 0,
	},
};

const Widget = props => {
	const { children } = props;
	return (
		<Box {...config.widget}>
			{children}
		</Box>
	);
};

export default Widget;