const TablePeople = ({ people }) => {
    return (
        <div>
            <h2>Table People</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>

                    {people.map((peo, index) => (

                        <tr>
                            <td>{index}</td>
                            <td>{peo.name}</td>
                            <td>{peo.age}</td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default TablePeople