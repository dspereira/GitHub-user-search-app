export default function InfoDisplay({ icon, alt, info, link }) {
	return (
		<div>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={icon} alt={alt}/>
				<span>{info}</span>
			</a>
		</div>
	)
}