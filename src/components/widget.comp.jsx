import { Box } from '@chakra-ui/react';

const config = {
	widget: {
		overflow: 'hidden',
		bg: 'dark.700',
		rounded: 'lg',
		w: 'full',
		py: 6,
		px: 0,
	},
};

const Widget = (props) => {
	const { children } = props;
	return (
		<Box {...config.widget}>
			{children}
		</Box>
	);
};

export { Widget };