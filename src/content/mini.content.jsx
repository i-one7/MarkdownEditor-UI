import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Show } from '@chakra-ui/react';
import { Editor, IButton, Preview, Toolbar } from '../components/@components';
import { EventContext } from '../util/@util';
import { CgMaximize } from 'react-icons/cg';
import { useContext } from 'react';

const Minimize = () => {
	const { value, tabs, handleValue, handleTabs, handleFullScreen } = useContext(EventContext);

	return (
		<>
			<Tabs variant={'unstyled'} index={tabs} onChange={handleTabs}>
				<TabList>
					<Tab>write</Tab>
					<Tab>preview</Tab>
					<Flex w={'full'} alignItems={'center'} justifyContent={'end'} gap={2}>
						<Show above={'689px'} >
							{
								tabs === 0 && <Toolbar/>
							}
						</Show>
						<IButton click={handleFullScreen} icon={<CgMaximize/>} sx={{ my: 3, mx: 1, fontSize: '1.3rem' }} />
					</Flex>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Show below={'689px'} >
							<Toolbar sx={{pr: 4, pb: 2}}/>
						</Show>
						<Editor defValue={value} onChange={(e) => handleValue(e.target.value)} pholder={'write here'} sx={{ h: 'xs' }}/>
					</TabPanel>
					<TabPanel>
						<Preview children={value} sx={{ h: 'xs' }} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default Minimize;