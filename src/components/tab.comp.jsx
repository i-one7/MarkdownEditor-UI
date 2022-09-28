import { Tabs, TabList, Tab, TabPanels, TabPanel, Textarea } from '@chakra-ui/react';

const TabContainer = () => {
	return (
		<Tabs variant={'unstyled'}>
			<TabList>
				<Tab>write</Tab>
				<Tab>preview</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Textarea placeholder={'write here...'}/>
				</TabPanel>
				<TabPanel>
					<Textarea readOnly placeholder={'preview'}/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export { TabContainer };