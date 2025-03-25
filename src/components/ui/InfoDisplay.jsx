import "./InfoDisplay.css"

export default function InfoDisplay({ className, icon, alt, info, link }) {
  if (info && info.length && link) {
    return (
      <div className={`info-display-container ${className}`}>

        <a className="info-link" href={link} target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            <img src={icon} alt={alt}/>
          </div>
          <span className="text-primary-color">{info}</span>
        </a>
      </div>
    )
  }

  return (
    <div className={`info-display-container ${className}`}>
      <div className="img-container">
        <img fill="test" src={icon} alt={alt}/>
      </div>
      <span className="text-primary-color">
        { info && info.length ? info : "Not Available" }
      </span>
    </div>
  )
}