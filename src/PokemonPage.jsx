import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { getPokemons } from "./store/thunks/thunks";
import { Propiedades } from "./components/Propiedades";
import { useForm } from "./hooks/useForm"

const ASC = 'ASC'
const DES = 'DES'

export const PokemonPage = () => {

    const [orderType, setOrderType] = useState()
    const { formState, onImputChange, onResetForm } = useForm();
  
    const dispatch = useDispatch()

    const onClickValorButton = ( event ) => {
        if ( orderType === ASC ) {
            setOrderType( DES )   
        } else if ( orderType === DES ) {
            setOrderType( ASC )   
        } else {
            setOrderType( ASC )   
        }
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch(getPokemons( formState.name ));
    }

    return (
    <>
        <div className="navbar navbar-dark bg-dark mb-4 px-4 navbar">
            <h1> PokeApi </h1>
        </div>
            
        <div className="row">
            <div className="col-5">
                <h4> Busqueda </h4>
                <hr />
                <form onSubmit={ onSubmit }>
                    <input 
                        type="text" 
                        className="form-control mt-4"
                        placeholder="Nombre del pokemon"
                        name="name"
                        autoComplete="off"
                        onChange={ onImputChange }          
                    />

                    <button 
                        type='submit'
                        className="btn btn-primary mt-4" 
                    >
                        Buscar Pokemon
                    </button>
                    <button
                        type='button'
                        onClick={ onClickValorButton } 
                        className="btn btn-danger mt-4"
                    > 
                        valor { orderType } 
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4> Resultados </h4>
                <hr />
                
                <Propiedades orderType={ orderType } />
            </div>
        </div>
    </>
  )
}
