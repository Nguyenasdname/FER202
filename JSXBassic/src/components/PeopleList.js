const PeopleList = ({people}) => {
    return (
        <div>
            <h2>People List</h2>
            <ul>
                {people.map((peo, index) => (
                    <li key={index}>{peo.name} - {peo.age}</li>
                ))}
            </ul>
        </div>
    )
}
export default PeopleList