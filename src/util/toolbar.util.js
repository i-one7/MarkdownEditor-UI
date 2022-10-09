import { CgFormatHeading, CgFormatSeparator, CgFormatItalic, CgFormatStrike, CgLink } from 'react-icons/cg';
import { BiBold, BiListOl, BiListUl, BiImage } from 'react-icons/bi';

const toolbarItem = [
	{ type: 'bold', icon: <BiBold /> },
	{ type: 'italic', icon: <CgFormatItalic /> },
	{ type: 'strike', icon: <CgFormatStrike /> },
	{ type: 'h1', icon: <CgFormatHeading /> },
	{ type: 'h3', icon: <CgFormatHeading fontSize={'1.1rem'} /> },
	{ type: 'ul', icon: <BiListUl /> },
	{ type: 'ol', icon: <BiListOl /> },
	{ type: 'separator', icon: <CgFormatSeparator /> },
	{ type: 'link', icon: <CgLink /> },
	{ type: 'image', icon: <BiImage /> },
];

const toolbarEvent = key => {
	const editor = document.querySelector('#editor');
	let s = editor.selectionStart;
	let e = editor.selectionEnd;
	let v = editor.value;

	const setFocus = v => {
		editor.value = v;
		editor.focus();
	}

	switch (key) {
		case 'strike':
			const _strike = v.substring(0, s) + '~~' + v.substring(s, e) + '~~' + v.substring(e);
			setFocus(_strike);
			editor.selectionEnd = e + 2;
			return _strike;

		case 'italic':
			const _italic = v.substring(0, s) + '*' + v.substring(s, e) + '*' + v.substring(e);
			setFocus(_italic);
			editor.selectionEnd = e + 1;
			return _italic;

		case 'bold':
			const _bold = v.substring(0, s) + '**' + v.substring(s, e) + '**' + v.substring(e);
			setFocus(_bold);
			editor.selectionEnd = e + 2;
			return _bold;

		case 'separator':
			const _separator = v.substring(0, s) + '\n\n---\n\n' + v.substring(e);
			setFocus(_separator);
			editor.selectionEnd = e + 7;
			return _separator;

		case 'image':
			const _image = v.substring(0, s) + '![link]()' + v.substring(e);
			setFocus(_image);
			editor.selectionEnd = e + 8;
			return _image;

		case 'h1':
			const _h1 = v.substring(0, s) + '# ' + v.substring(e);
			setFocus(_h1);
			editor.selectionEnd = e + 2;
			return _h1;

		case 'h3':
			const _h3 = v.substring(0, s) + '### ' + v.substring(e);
			setFocus(_h3);
			editor.selectionEnd = e + 4;
			return _h3;

		case 'link':
			const _link = v.substring(0, s) + '[link]()' + v.substring(e);
			setFocus(_link);
			editor.selectionEnd = e + 7;
			return _link;

		case 'ol':
			const _ol = v.substring(0, s) + '\n0. ' + v.substring(e);
			setFocus(_ol);
			editor.selectionEnd = e + 3;
			return _ol;

		case 'ul':
			const _ul = v.substring(0, s) + '\n- ' + v.substring(e);
			setFocus(_ul);
			editor.selectionEnd = e + 3;
			return _ul;

		default:
			break;
	};
};

export { toolbarEvent, toolbarItem };