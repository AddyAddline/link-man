import React, { useState } from 'react';
import './InputBox.css';
import Eye from '../Eye/Eye';

const InputBox = (props) => {
	const [ isFocused, setIsFocused ] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={`input-container ${isFocused ? 'focused' : ''}`}>
			<input
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className="input-input"
			/>
		</div>
	);
};

export default InputBox;
