import { extendTheme } from '@chakra-ui/react';

const styles = {
	global: {
		'#root': {
			background: 'dark.900',
			position: 'relative',
			alignItems: 'center',
			userSelect: 'none',
			color: 'gray.400',
			display: 'flex',
			h: '100vh',
		},
	},
};

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};

const dark = {
	600: '#272c35',
	700: '#1a1f28',
	800: '#121417',
	900: '#090b0d',
};

const Textarea = {
	variants: {
		outline: {
			fontSize: '1.1rem',
			rounded: 'none',
			resize: 'none',
			minH: '15rem',
			border: 0,
			px: 4,
			py: 0,
			_focus: {
				boxShadow: 'none'
			},
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	},
};

const Tabs = {
	baseStyle: {
		tablist: {
			borderBottom: 0,
			px: 4
		},
		tab: {
			fontWeight: 'semibold',
			roundedTop: 'md',
			borderBottom: 0,
			_selected: {
				bg: 'dark.800',
			}
		},
		tabpanel: {
			bg: 'dark.800',
			rounded: 'sm',
			py: 6,
			p: 0,
		},
	},
};

// declare custom theme
const themes = extendTheme({
	components: { Tabs, Textarea },
	colors: { dark },
	config,
	styles,
});

export default themes;