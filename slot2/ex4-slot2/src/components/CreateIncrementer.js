const CreateIncrementer = () => {
    let counter = 0

    return function() {
        return counter++
    }
    
}

const ReturnIncrementer = () =>{
    const increment = CreateIncrementer()

    return(
        <div>
            <h2>Incrementer</h2>
            <p>{increment()}</p>
            <p>{increment()}</p>
            <p>{increment()}</p>
            <p>{increment()}</p>
        </div>
    )
}
export default ReturnIncrementer;