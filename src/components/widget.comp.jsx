import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Box = motion(chakra.div);

const Widget = props => {
	const { children, sx } = props;
	const config = {
		overflow: 'hidden',
		border: '2px solid',
		bg: 'dark.700',
		borderColor: 'dark.600',
		rounded: 'lg',
		my: 'auto',
		w: 'full',
		sx: sx,
	};

	return (
		<Box {...config} layout transition={{ duration: .2 }}>
			{children}
		</Box>
	);
};

export default Widget;