const OldAndYoung = ({people}) =>{
    let young = people[0]
    let old = people[0]

    people.forEach(person => {
        if (person.age < young.age) {
            young = person;
        }
        if (person.age > old.age) {
            old = person;
        }
      })

      return(
        <div>
            <h2>Youngest and Oldest</h2>
            <ul>
                <li>Youngest: {young.name} - {young.age}</li>
                <li>Oldest: {old.name} - {old.age}</li>
            </ul>
        </div>
      )
}
export default OldAndYoung