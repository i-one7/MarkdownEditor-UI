import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {  } from 'react-syntax-highlighter'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Text, Code } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const customRender = {
	p: props => <Text
		fontSize={'1.2em'}
		lineHeight={1.7}
		w={'full'}
		my={4}
	>{props.children}</Text>,

	code: props => {
		const matcher = /language-(\w+)/.exec(props.className || '');
		return !props.inline && matcher ? <SyntaxHighlighter
			children={String(props.children).replace(/\n$/, '')}
			language={matcher[ 1 ]}
			style={oneDark}
		/> : <Code
			color={'#e91e63'}
			px={1}
			py={0}
		>{props.children}</Code>
	}
};

const Preview = props => {
	const { children, sx } = props;
	const config = {
		overflowY: 'scroll',
		sx: sx,
		px: 4,
		__css: {
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	};

	return (
		<Box {...config}>
			<ReactMarkdown
				components={ChakraUIRenderer(customRender)}
				remarkPlugins={[remarkGfm]}
				children={children}
				skipHtml
			/>
		</Box>
	);
};

export default Preview;