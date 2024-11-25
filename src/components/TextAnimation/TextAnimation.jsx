import "./TextAnimation.css"
function TextAnimation() {
 return (
    <div className="intro">
      <div className="container_intro">
        <span>Hola,</span>
        <div className="animated_intro-text">
          <span>gracias</span>
        </div>
      </div>
      <div className="container_intro-description">
        <p>por visitar nuestra página</p>
        <p>
        Contáctate con nosotros sin compromiso y estaremos encantados de ayudarte con lo que necesites.
        </p>
        <button className="join_button">Únete</button>
      </div>
    </div>
  )
}

export default TextAnimation