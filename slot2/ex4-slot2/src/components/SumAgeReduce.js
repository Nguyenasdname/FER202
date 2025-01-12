const SumAgeReduce = ({ages}) =>{

    return(
        <div>
            <h2>Total Age</h2>
            {ages.reduce((a, b) => a + b, 0)}
        </div>
    )
}
export default SumAgeReduce;