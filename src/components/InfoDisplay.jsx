import "./InfoDisplay.css"

export default function InfoDisplay({ children, className, info, link }) {

  if (info && info.length && link) {
    return (
      <div className={`info-display-container ${className}`}>

        <a className="info-link" href={link} target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            {children}
          </div>
          <span>{info}</span>
        </a>
      </div>
    )
  }

  return (
    <div className={`info-display-container ${className}`}>
      <div className="img-container">     
        {children}
      </div>
      <span>
        {info}
      </span>
    </div>
  )
}