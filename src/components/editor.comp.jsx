import { Box, Textarea } from '@chakra-ui/react';

const Editor = props => {
	const { onChange, pholder, defValue, sx } = props;
	const config = {
		overflowY: 'scroll',
		sx: sx,
		px: 4,
		__css	: {
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	};

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