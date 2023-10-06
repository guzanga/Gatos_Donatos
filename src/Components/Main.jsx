import Main_css from "./Main.module.css"

function Main(props){
    return(
        <div className={Main_css.display}>
            <div>
                <img className={Main_css.img} src={props.img}/>
            </div>
            <div>
                <h3 className={Main_css.nome}>{props.text}</h3>
            </div>
            <div>
                <h4 className={Main_css.descricao}>{props.desc}</h4>
            </div>
            <div>
                <button className={Main_css.valor}>{props.value}</button>
            </div>
        </div>
    )
}

export default Main