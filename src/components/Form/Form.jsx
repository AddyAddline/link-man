// Form.js
import React from 'react';
import './Form.css';
import InputBox from '../InputBox/InputBox';
import Eye from '../Eye/Eye';

export function Form(props) {
	return (
		<div className="form-container">
			<div className="eye-input" style={{ display: 'flex', flexDirection: 'column' }}>
				<InputBox
					className="url-box"
					name="url"
					type="string"
					placeholder="Enter URL"
					value={props.data.url}
					onChange={props.handleChange}
				/>
				<Eye uniqueId="url-eye" />
			</div>
			<div className="eye-input" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<InputBox
					className="password-box"
					name="password"
					type="password"
					placeholder="Enter password"
					uniqueId="password-eye"
					onChange={props.handleChange}
				/>
				<Eye uniqueId="password-eye" />
			</div>
		</div>
	);
}

export default Form;
