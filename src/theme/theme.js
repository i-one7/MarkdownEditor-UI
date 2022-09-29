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
	600: '#65737d',
	700: '#25282f',
	800: '#1c1f24',
	900: '#0e1118',
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
				boxShadow: 'none',
			},
			'::-webkit-scrollbar': {
				display: 'none',
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
			border: '1.6px dashed transparent',
			fontWeight: 'semibold',
			roundedTop: 'md',
			borderBottom: 0,
			_selected: {
				borderColor: 'dark.600',
				bg: 'dark.800',
			}
		},
		tabpanel: {
			borderY: '1.6px dashed',
			borderColor: 'dark.600',
			bg: 'dark.800',
			py: 6,
			p: 0,
		},
	},
};

const Divider = {
	variants: {
		solid: {
			rounded: 'full',
			borderWidth: '2.2px',
			my: 3,
		},
	},
};

const Button = {
	baseStyle: {
		fontWeight: 'normal',
		outline: 'none',
		rounded: 'full',
		ml: 0,
		mr: 0
	},
	sizes: {
		md: { minW: 'fit-content', w: 0, h: 0, px: 0, py: 0 }
	},
	variants: {
		solid: () => ({
			bg: 'none',
			_active: false,
			_hover: false,
		}),
	}
};

// declare custom theme
const themes = extendTheme({
	components: { Tabs, Textarea, Divider, Button },
	colors: { dark },
	config,
	styles,
});

export default themes;