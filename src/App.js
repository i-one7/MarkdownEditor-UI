import { ChakraProvider } from '@chakra-ui/react';
import Main from './content/main.content';
import themes from './theme/theme';

const App = () => {
	return (
		<ChakraProvider theme={themes}>
			<Main/>
		</ChakraProvider>
	);
};

export default App;
