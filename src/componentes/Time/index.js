import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.5) }}>
            <input type="color" value={time.cor} onChange={e => mudarCor(e.target.value, time.id)} className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )}
                )}
            </div>
        </section>

    )
}

export default Time