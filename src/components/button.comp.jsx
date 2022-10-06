import { IconButton } from '@chakra-ui/react';

const IButton = props => {
	const { icon, click, sx } = props;

	const config = {
		onClick: click,
		icon: icon,
		sx: sx
	};
	return <IconButton {...config} />
};

export default IButton;