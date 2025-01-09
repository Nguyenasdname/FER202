const SumAgeReduce = ({ages}) =>{

    return(
        <div>
            <h1>Total Age</h1>
            {ages.reduce((a, b) => a + b, 0)}
        </div>
    )
}
export default SumAgeReduce;