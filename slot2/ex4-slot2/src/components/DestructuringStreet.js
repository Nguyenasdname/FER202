const DestructuringStreet = ({person}) =>{
    const { address: {street}} = person
    return(
        <div>
            <h2>Destructuring Street</h2>
            <p>{street}</p>
        </div>
        
    )
}
export default DestructuringStreet;