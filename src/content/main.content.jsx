import { Container} from "@chakra-ui/react";
import { TabContainer } from "../components/tab.comp";
import { Widget } from "../components/widget.comp";

const Main = () => {
	return (
		<Container maxW={'container.md'}>
			<Widget>
				<TabContainer></TabContainer>
			</Widget>
		</Container>
	);
};

export default Main;