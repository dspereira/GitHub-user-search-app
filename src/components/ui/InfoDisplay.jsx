import "./InfoDisplay.css"

export default function InfoDisplay({ icon, alt, info, link }) {
	

	if (info && info.length && link) {
		return (
			<div className="info-display-container">
				<a className="info-link" href={link} target="_blank" rel="noopener noreferrer">
					<div className="img-container">
						<img src={icon} alt={alt}/>
					</div>
					<span>{info}</span>
				</a>
			</div>
		)
	}

	return (
		<div className="info-display-container">
				<div className="img-container">
					<img src={icon} alt={alt}/>
				</div>
				<span>
					{ info && info.length ? info : "Not Available" }
				</span>
		</div>
	)
}