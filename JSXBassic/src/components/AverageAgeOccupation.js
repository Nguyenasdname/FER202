const AverageAge = ({persons}) => {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0)
    return totalAge/persons.length
}
const AverageAgeOccupation = ({people}) =>{
    const group = (
        people.reduce((grouped, person) => {

            const { job } = person

            if(!grouped[job]){
                grouped[job] = []
            }

            grouped[job].push(person)

            return grouped
        }, {})
    )


    return (
        <div>
            <h2>Group People</h2>
            {Object.entries(group).map(([job, persons]) =>(
                <div>
                    <h3>{job} Average Age: {<AverageAge persons={persons}/>}</h3>
                    <ul>
                        {persons.map((person) => (
                            <li>{person.name} - {person.age}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default AverageAgeOccupation;