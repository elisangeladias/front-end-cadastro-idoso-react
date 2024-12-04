import { useState, useEffect } from "react"
import {useNavigate} from "react-router"
import FormDialog from "../components/FormDialog";
import Grid2 from "@mui/material/Unstable_Grid2";
import Item from "../components/Item"
import idosos from '../idososDetalhes.json'
import capa from '../assets/capa.jpg'

export default function Idosos() {
 
  const [idosoList, setIdosoList] = useState([])
  const [buttonCount, setButtonCount] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
     
    }, 1000);
  }, [buttonCount]);

  useEffect(() => {
    setIdosoList(idosos.arrayidoso)
  }, [])

  return (
    <div className="content-idoso">
      <header>
        <div className="user">
          <span>Usuário</span>
        </div>
      </header>

      <section className="capa">
        <img src={capa} alt="Capa"/>
      </section>

      <section className="main-idosos">
        {idosoList.map((i, index) => (
          <Item key={index} idoso={i} buttonCount={buttonCount} setButtonCount={setButtonCount}/>
        ))}
      </section>

      
      <div>
                <button className="back" onClick={() => navigate('/')}>Voltar</button>
             
                <div>
                    

                    <Grid2
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                       
                       <FormDialog />

                    </Grid2> 

                </div>
            </div>
      <footer></footer>
    </div>
  )
}
