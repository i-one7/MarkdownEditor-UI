import { Box, Textarea } from '@chakra-ui/react';

const config = {
	rounded: 'md',
	overflowY: 'scroll',
	h: '100%',
	px: 4,
	sx: {
		'::-webkit-scrollbar': {
			display: 'none'
		},
	},
};

const Editor = props => {
	const { onChange, pholder, defValue } = props;

	return (
		<Box {...config}>
			<Textarea
				defaultValue={defValue}
				placeholder={pholder}
				onChange={onChange}
				id={'editor'}
				autoFocus
			/>
		</Box>
	);
};

export default Editor;