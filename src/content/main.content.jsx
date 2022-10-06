import { Container, Tabs, TabList, Tab, TabPanels, TabPanel, Show, Hide } from "@chakra-ui/react";
import { Editor, IButton, Widget, Preview, Toolbar } from '../components/@components';
import { toolbarEvent, toolbarItem } from '../util/toolbar.util';
import { useState } from 'react';

const Main = () => {
	const [ value, setValue ] = useState('');

	const Toolbars = () => {
		return (
			<Toolbar>
				{
					toolbarItem.map((v, i) => <IButton
						click={() => setValue(toolbarEvent(v.type))}
						sx={{ my: 3, mx: 1, fontSize: '1.3rem' }}
						icon={v.icon}
						key={i}
					/>)
				}
			</Toolbar>
		);
	};

	return (
		<Container maxW={'container.md'} inset={0} display={'grid'} position={'absolute'}>
			<Widget>
				<Tabs variant={'unstyled'}>
					<TabList>
						<Tab>write</Tab>
						<Tab>preview</Tab>
						<Hide below={'550px'}>
							<Toolbars/>
						</Hide>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Editor defValue={value} onChange={e => setValue(e.target.value)} pholder={ 'write here' }/>
						</TabPanel>
						<TabPanel>
							<Preview children={value} />
						</TabPanel>
					</TabPanels>
				</Tabs>
				<Show below={'550px'}>
					<Toolbars/>
				</Show>
			</Widget>
		</Container>
	);
};

export default Main;