const Age = ({ age }) => {
    return (
        <div>
            <div> {age}</div>
        </div>
    )
}

const SortAge = ({ ages }) => {
    return (
        <div>
            <h1>Sort Age</h1>
            <div style={{display: "flex"}}>
                {ages.sort((a, b) => b - a).
                    map(age => (
                        <Age
                            age={age}
                        />
                    ))}
            </div>

        </div>
    )
}
export default SortAge;