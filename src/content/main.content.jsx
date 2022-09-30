import { Container, Tabs, TabList, Tab, TabPanels, TabPanel, Textarea, Box, HStack, IconButton, Wrap } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Widget } from "../components/widget.comp";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';

import { BiBold, BiListOl, BiListUl, BiImage } from 'react-icons/bi';
import { CgFormatHeading, CgFormatSeparator, CgFormatItalic, CgFormatStrike, CgLink, CgImage } from 'react-icons/cg';

const Main = () => {
	const [ value, setValue ] = useState('');

	const toolbarHandler = (key) => {
		const editor = document.querySelector('#editor');
		const s = editor.selectionStart;
		const e = editor.selectionEnd;
		const v = editor.value;

		const updateValue = (v) => {
			editor.value = v;
			setValue(v);
			editor.focus();
		};

		switch (key) {
			case 'bold':
				const _bold = v.substring(0, s) + '**' + v.substring(s, e) + '**' + v.substring(e);
				updateValue(_bold);
				editor.selectionEnd = e + 2;
				break;

			case 'italic':
				const _italic = v.substring(0, s) + '*' + v.substring(s, e) + '*' + v.substring(e);
				updateValue(_italic);
				editor.selectionEnd = e + 1;
				break;

			case 'strike':
				const _strike = v.substring(0, s) + '~~' + v.substring(s, e) + '~~' + v.substring(e);
				updateValue(_strike);
				editor.selectionEnd = e + 2;
				break;

			case 'link':
				const _link = v.substring(0, s) + '[title](https://)' + v.substring(e);
				updateValue(_link);
				editor.selectionEnd = e + 16;
				break;

			case 'image':
				const _imageLink = v.substring(0, s) + '![title](https://)' + v.substring(e);
				updateValue(_imageLink);
				editor.selectionEnd = e + 17;
				break;

			case 'heading':
				const _heading = v.substring(0, s) + '## head' + v.substring(e);
				updateValue(_heading);
				editor.selectionEnd = e + 7;
				break;
			
			case 'separator':
				const _separator = v.substring(0, s) + '\n\n---\n\n' + v.substring(e);
				updateValue(_separator);
				editor.selectionEnd = e + 7;
				break;
			
			case 'ul':
				const _ul = v.substring(0, s) + '\n- ul' + v.substring(e);
				updateValue(_ul);
				editor.selectionEnd = e + 7;
				break;
			case 'ol':
				const _ol = v.substring(0, s) + `\n${0}. ol` + v.substring(e);
				updateValue(_ol);
				editor.selectionEnd = e + 7;
				break;
		};
	};



	return (
		<Container maxW={'container.md'}>
			<Widget>
				<Tabs variant={'unstyled'}>
					<TabList justifyContent={'space-between'}>
						<Wrap mb={-1.4}>
							<Tab>write</Tab>
							<Tab>preview</Tab>
						</Wrap>
						<HStack alignItems={'center'} justifyContent={'center'}>
							<IconButton onClick={() => toolbarHandler('bold')} icon={<BiBold />} />
							<IconButton onClick={() => toolbarHandler('italic')} icon={<CgFormatItalic />} />
							<IconButton onClick={() => toolbarHandler('strike')} icon={<CgFormatStrike />} />
							<IconButton onClick={() => toolbarHandler('heading')} icon={<CgFormatHeading />} />
							<IconButton onClick={() => toolbarHandler('ul')} icon={<BiListUl />} />
							<IconButton onClick={() => toolbarHandler('ol')} icon={<BiListOl />} />
							<IconButton onClick={() => toolbarHandler('separator')} icon={<CgFormatSeparator />} />
							<IconButton onClick={() => toolbarHandler('link')} icon={<CgLink />} />
							<IconButton onClick={() => toolbarHandler('image')} icon={<BiImage/>}/>
						</HStack>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Textarea id={'editor'} defaultValue={value}  onChange={(e) => setValue(e.target.value)} placeholder={'write here...'} autoFocus/>
						</TabPanel>
						<TabPanel>
							<Box h={'15rem'} overflowY={'scroll'} px={4} rounded={'md'} css={{'::-webkit-scrollbar':{display: 'none'}}}>
								<ReactMarkdown components={ChakraUIRenderer()} remarkPlugins={[remarkGfm]} children={value} />
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Widget>
		</Container>
	);
};

export default Main;