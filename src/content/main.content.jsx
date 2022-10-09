import { Container, Tabs, TabList, Tab, TabPanels, TabPanel, Hide } from "@chakra-ui/react";
import { Editor, IButton, Widget, Preview, Toolbar } from '../components/@components';
import { toolbarEvent, toolbarItem } from '../util/toolbar.util';
import { useState } from 'react';

const Main = () => {
	const [ value, setValue ] = useState('');
	const [ tabIndex, setTabIndex ] = useState(0);

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
		<Container maxW={'container.md'} inset={0} display={'inline-flex'} position={'absolute'}>
			<Widget>
				<Tabs variant={'unstyled'} index={tabIndex} onChange={ index => setTabIndex(index)}>
					<TabList>
						<Tab>write</Tab>
						<Tab>preview</Tab>
						<Hide below={'550px'}>
							{
								tabIndex === 0 && <Toolbars/>
							}
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
			</Widget>
		</Container>
	);
};

export default Main;