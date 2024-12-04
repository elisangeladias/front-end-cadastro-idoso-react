import { Link } from "react-router-dom";

export default function Item({idoso}) {
  
    // Função para abrir detalhes sobre o responsável pelo idoso
    const idosoProduct = () => {
        if (idoso.id === 1) {
            alert('Nome: Marcos. Contato: 41 9999-9999.');
        } else if (idoso.id === 2) {
            alert('Nome: Ana. Contato: 41 8888-8888.');
        } else if (idoso.id === 3) {
            alert('Nome: João. Contato: 41 7777-7777.');
        } else if (idoso.id === 4) {
            alert('Nome: Carla. Contato: 41 6666-6666.');
        } else {
            alert('Produto não identificado.');
        }
    };

    return (
        <article className="idoso">
            {/* <button onClick={(e) => setButtonCount(!buttonCount)}>Mudança</button> */}
            <img src={idoso.image} alt="idoso"/>
            <h3 className="idade-idoso">
                Idade: <span>{idoso.idade}</span>
            </h3>
            
            <Link to={`/idosos/${idoso.id}`} state={{ i: idoso } } >
                <p className="name-idoso">{idoso.title}</p>
            </Link>

            <div className="cad">
                <span >N° Cadastro:</span>
                <span>{idoso.id}</span>
                
            </div>
            <button className="resp" onClick={idosoProduct}>Responsável</button>
        </article>

    );
}