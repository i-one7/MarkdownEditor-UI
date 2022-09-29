import { Container, Tabs, TabList, Tab, TabPanels, TabPanel, Textarea, Box, HStack, IconButton } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Widget } from "../components/widget.comp";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

import { BiBold, BiUnderline, BiItalic, BiStrikethrough } from 'react-icons/bi';

const Main = () => {
	const [ value, setValue ] = useState();
	const editor = document.querySelector('#kontil');

	/**const bold = () => {
		const start 	= editor.selectionStart;
		const end   	= editor.selectionEnd;
		const selected = editor.value.substring(start, end);
		const _bold  	= editor.value.substring(0, start) + '**' + selected + '**' + editor.value.substring(end);

		editor.value = _bold;
		setValue(_bold);
		editor.focus();
	}*/

	return (
		<Container maxW={'container.md'}>
			<Widget>
				<Tabs variant={'unstyled'}>
					<TabList justifyContent={'space-between'}>
						<HStack mb={-1.4}>
							<Tab>write</Tab>
							<Tab>preview</Tab>
						</HStack>
						<HStack>
							<IconButton icon={<BiBold />} />
							<IconButton icon={<BiItalic />} />
							<IconButton icon={<BiUnderline />} />
							<IconButton icon={<BiStrikethrough/>}/>
						</HStack>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Textarea id={'kontil'} onChange={(e) => setValue(e.target.value)} placeholder={'write here...'} autoFocus/>
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