import Header_style from "./Header.module.css"

function Header(){
    return(
        <div className={Header_style.atras_header}>
            <h1 className={Header_style.logo}>Gatinhos Donato's</h1>
            <a className={Header_style.As}>Inicio</a>
            <a className={Header_style.As}>Gatinhos</a>
            <a className={Header_style.As}>Contato</a>

        </div>
    )
}

export default Header