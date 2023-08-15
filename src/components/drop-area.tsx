import { useState } from "react";

type DropAreaProps = {
	onDrop: () => void;
};
const DropArea = ({ onDrop }: DropAreaProps) => {
	const [isVisible, setVisible] = useState(false);
	const showArea = () => {
		setVisible(true);
	};
	const hideArea = () => {
		setVisible(false);
	};
	return (
		<div
			style={{
				opacity: isVisible ? 1 : 0,
				paddingTop: isVisible ? 100 : 0,
				
			}}
			className="drop-area "
			onDragEnter={showArea}
			onDragLeave={hideArea}
			onDrop={() => {
				onDrop()
				hideArea()
			}}
			onDragOver={(evt) => evt.preventDefault() }
		/>
	);
};

export default DropArea;
