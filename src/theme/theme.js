import { extendTheme } from '@chakra-ui/react';

const styles = {
	global: {
		'html, body, #root': {
			boxSizing: 'border-box',
			background: 'dark.800',
			position: 'relative',
			userSelect: 'none',
			color: 'gray.500',
			display: 'block',
			h: '100%',
			m: 0,
			p: 0,
		},
	},
};
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
};
const dark = {
	600: '#262a33',
	700: '#1a1d24',
	800: '#16181d',
	900: '#0e1118',
};
const lightblue = {
	300: '#1353ec',
};
const Textarea = {
	variants: {
		outline: {
			fontSize: '1.1rem',
			rounded: 'none',
			resize: 'none',
			bg: 'none',
			border: 0,
			h: '100%',
			p: 0,
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
	variants: {
		unstyled: {
			root: {
				h: '100%',
				display: 'block',
				position: 'relative'
			},
			tabpanels: {
				bg: 'dark.900',
				h: 'full',
				'::-webkit-scrollbar': {
					display: 'none',
				},
			},
			tabpanel: {
				position: 'relative',
				display: 'block',
				h: '100%',
				py: 5,
				p: 0,
			},
			tablist: {
				borderBottom: 0,
				px: 4
			},
			tab: {
				fontWeight: 'semibold',
				roundedTop: 'md',
				px: 6,
				py: 2,
				_selected: {
					bg: 'dark.900',
				}
			},
		}
	}
};
const Divider = {
	variants: {
		solid: {
			borderColor: 'dark.600',
			borderWidth: '2.2px',
			rounded: 'full',
			mt: 2,
			mb: 6,
		},
	},
};
const Button = {
	baseStyle: {
		fontWeight: 'bold',
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
	colors: { dark, lightblue },
	config,
	styles,
});

export default themes;