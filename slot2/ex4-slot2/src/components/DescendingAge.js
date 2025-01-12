const DescendingAge = ({ ages }) => {
    return (
        <div>
            <h1>Sort Age</h1>
            <div style={{display: "flex"}}>
                {ages.sort((a, b) => b - a).
                    map(age => (
                        <div> {age}. </div>
                    ))}
            </div>

        </div>
    )
}
export default DescendingAge;