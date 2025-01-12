const AddValueToArray = (...args) => {
    const result = []

    args.forEach(arg => {
        Array.isArray(arg) ? result.push(...arg) : result.push(arg)
    })
    return result
}

const ShowResult = () => {
    return(
        <div>
            <h2>Add Value To Array</h2>
            <p>{AddValueToArray(1, 2, [3, 4], "React", [7, 8], false).join(" ")}</p>
        </div>
    )
}
export default ShowResult