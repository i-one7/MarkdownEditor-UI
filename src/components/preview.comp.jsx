import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import { Box, Text } from '@chakra-ui/react';
import remarkGfm from 'remark-gfm';

const config = {
	overflowY: 'scroll',
	rounded: 'md',
	px: 4,
	sx: {
		'::-webkit-scrollbar': {
			display: 'none'
		},
	},
};

const customRender = {
	p: props => {
		const { children } = props;
		return (
			<Text fontSize={'1.1rem'} mb={4}>
				{children}
			</Text>
		)
	},
}

const Preview = props => {
	const { children } = props;
	return (
		<Box {...config}>
			<ReactMarkdown
				components={ChakraUIRenderer(customRender)}
				remarkPlugins={[remarkGfm]}
				children={children}
			/>
		</Box>
	);
};

export default Preview;