import { Textarea } from '@chakra-ui/react';

const Editor = props => {
	const { onChange, pholder, defValue } = props;

	return (
		<Textarea
			defaultValue={defValue}
			placeholder={pholder}
			onChange={onChange}
			id={'editor'}
			autoFocus
		/>
	);
};

export default Editor;