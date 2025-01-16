const PeopleSort = ({ people }) => {
    const peopleSort = (
        people.sort((a, b) => {
            const jobSort = a.job.localeCompare(b.job);
            if (jobSort !== 0) {
                return jobSort;
            }
            return a.age - b.age
        })
    )

    return (
        <div>
            <h2>People Sort</h2>
            <ul>
                {peopleSort.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} - {person.job}</li>
                ))}
            </ul>
        </div>
    )

}
export default PeopleSort