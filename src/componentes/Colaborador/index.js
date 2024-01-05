import './colaborador.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    return (
    <div className="colaborador">
        <AiFillCloseCircle onClick={() => aoDeletar(colaborador.id)}  size={25} className='deletar'/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {
                colaborador.favorito 
                ? <FaHeart {...propsfavorito} color="#ff0000"/> 
                : <FaRegHeart {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}
export default Colaborador