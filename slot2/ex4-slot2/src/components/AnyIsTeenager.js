const AnyIsTeenager = ({people}) => {
    return(
        <div>
            <h2>Any Is Teenager</h2>
            <ul>
            {
                people.map(peo =>(
                    <li>{peo.name}: {peo.age >= 10 && peo.age <= 20 ? 'True' : 'False'}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default AnyIsTeenager;