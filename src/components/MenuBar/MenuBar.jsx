import "./MenuBar.css"
function MenuBar() {
  return (
    <div className="menu">
    <p className='nav-item selected'>Inicio</p>
    <p className='nav-item'>Impacto Social</p>
    <p  className='nav-item'>Empresas</p>
    <p  className='nav-item'>Talento destacado</p>
    <p className='nav-item selected'>ES</p>
  </div>
  )
}

export default MenuBar