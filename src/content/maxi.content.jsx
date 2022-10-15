import { IButton, Editor, Preview, Toolbar } from '../components/@components';
import { EventContext } from '../util/@util';
import { Box, Flex } from '@chakra-ui/react';
import { CgMinimize } from 'react-icons/cg';
import { useContext } from 'react';

const Maximize = () => {
	const { handleFullScreen, value, handleValue } = useContext(EventContext);

	return (
		<>
			<Box sx={{p: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2}}>
				<Toolbar />
				<IButton click={handleFullScreen} icon={<CgMinimize />} sx={{my: 18, mx: 1, fontSize: '1.3rem'}} />
			</Box>
			<Flex w={'full'} overflow={'hidden'} h={'full'} flexDir={['column', null, 'column', 'row']} gap={.5}>
				<Box py={4} bg={'dark.900'} w={['100%', null, '100%', '50%']} h={['50%', null, '50%', '100%']}>
					<Editor defValue={value} onChange={(e) => handleValue(e.target.value)} pholder={'write here'} sx={{h: 'full'}}/>
				</Box>
				<Box py={4} bg={'dark.900'} w={[ '100%', null, '100%', '50%' ]} h={[ '50%', null, '50%', '100%' ]}>
					<Preview children={value} sx={{h: 'full'}}/>
				</Box>
			</Flex>
		</>
	);
};

export default Maximize;