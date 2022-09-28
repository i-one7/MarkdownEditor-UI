import { Box } from '@chakra-ui/react';

const config = {
	widget: {
		outline: '1.4px solid',
		outlineColor: 'dark.600',
		overflow: 'hidden',
		bg: 'dark.700',
		rounded: 'lg',
		w: 'full',
		py: 6,
		px: 2,
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