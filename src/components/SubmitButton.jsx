import React from 'react';
import './Loader.css';
function SubmitButton(props) {
	return props.isLoading ? (
		<div className="loader-container">
			<span className="loader" />
		</div>
	) : (
		<button className={props.className} onClick={props.onClick} disabled={props.isLoading || props.isError}>
			{props.label}
		</button>
	);
}

export default SubmitButton;
