import { useNavigate } from 'react-router'
import capa from '../assets/capa.jpg'

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="content-idoso">
      <header>
         <div className="user">
          <span>Usuário</span>
        </div>
      </header>

      <section className="capa">
        <img src={capa} alt="Capa"/>
        <div className="text-intro">
            <p>Clique no botão abaixo para ver os idosos cadastrados</p>
            <button className="more-info" onClick={ () => navigate('/idosos') } >Lista de idosos</button>
        </div>
      </section>

    </div>
  )
}
