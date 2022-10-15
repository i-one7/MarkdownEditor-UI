import { ChakraProvider } from '@chakra-ui/react';
import { EventProvider } from './util/@util';
import { Main } from './content/@content';
import themes from './theme/theme';

const App = () => {
	return (
		<ChakraProvider theme={themes}>
			<EventProvider>
				<Main />
			</EventProvider>
		</ChakraProvider>
	);
};

export default App;
