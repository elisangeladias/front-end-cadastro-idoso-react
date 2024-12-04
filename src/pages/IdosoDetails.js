import { useLocation, useNavigate, useParams } from "react-router"
import FormDialog from "../components/FormDialog";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function IdosoDetails() {

    let { state } = useLocation();
    let { id } = useParams();

    const navigate = useNavigate();

    return (
        <div className="detailed-content">
            <div>
                <button className="back" onClick={() => navigate('/idosos')}>Voltar</button>
                <div>
                    <img className="detailed-image" src={state.i.image} alt="" />
                </div>
                <div>
                    <h2>{state.i.title} - {id}</h2>
                    <p>{state.i.description}</p>

                    <Grid2
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                       
                       <FormDialog />

                    </Grid2> 

                </div>
            </div>
        </div>
    )
}