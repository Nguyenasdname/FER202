const AllIsTeenager = ({people}) => {
    return(
        <div>
            <h2>All Teenager</h2>
            <ul>
            {
                people.filter(({age}) => age >= 10 && age <= 20)
                .map(teenager => (
                    
                        <li>{teenager.name}</li>
                    
                ))
            }
            </ul>
        </div>
    )
}
export default AllIsTeenager;