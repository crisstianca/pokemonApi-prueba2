import { useSelector } from "react-redux";

export const Propiedades = ( props ) => {

    const { orderType } = props;
    const { name, sprites, stats } = useSelector( state => state.pokemon );
    
    const arrayForSort = [...stats]

    let statOrdened = arrayForSort;

    if ( orderType === 'ASC' ) {
      statOrdened = arrayForSort.sort((a, b) => a.base_stat - b.base_stat);
    }  
    if ( orderType === 'DES' ) {
      statOrdened = arrayForSort.sort((a, b) => b.base_stat - a.base_stat);
    }

    return (
    <>
        <h2> Nombre del Pokemon: { name } </h2>
        <ul>
            { 
              statOrdened.map( (stat, index ) => {

                const pokemon = stat
                const pokemonStat = pokemon.stat
                const statName = pokemonStat.name

                return <li key={ index }> { 'base_stat: ' + stat.base_stat + ' --- ' + ' Stat: ' + statName }</li>
             
              } ) 
            }
        </ul>

        <div>
          {
            sprites.front_default ? <img src={ sprites.front_default } alt="Imagen_pokemon" /> : null
          }
        </div>  
    </>
  )
}
