import { useState } from 'react';
import './GeneratedLink.css';
import { Link } from 'react-router-dom';
export default function GeneratedLink({ link }) {
	const [ copied, setCopied ] = useState(false);

	async function copyToClipboard() {
		await navigator.clipboard.writeText(link);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2500);
	}

	return (
		<div className="link-container">
			<div className="link-link">
				<div className="link-text">
					<a href={link} target="_blank" rel="noopener noreferrer">
						{link}
					</a>
				</div>
			</div>

			<button className={`copy-button ${copied ? 'copied' : null}`} onClick={copyToClipboard} disabled={copied}>
				{copied ? 'copied!' : 'copy'}
			</button>
		</div>
	);
}
