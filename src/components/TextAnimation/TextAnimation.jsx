import "./TextAnimation.css"
function TextAnimation() {
 return (
    <div className="img_intro">
      <div className="container_intro">
        <span>Hola,</span>
        <div className="animated_intro-text">
          <span>MobileDev</span>
        </div>
      </div>
      <div className="container_intro-description">
        <p>¡Hay una comunidad que te espera!</p>
        <p>
          Te invitamos a compartir, aprender y crecer junto a una comunidad que
          busca siempre hacer algo más grande.
        </p>
        <button className="join_button">Únete</button>
      </div>
    </div>
  )
}

export default TextAnimation