const Accumulator = ({array}) => {
    const result = array.reduce((a,b) => a + b, 0)
    return(
        <div>
            <h2>Accumulator</h2>
            <div>{result}</div>
        </div>
    )
}
export default Accumulator;
