const FirstIsTeenager = ({people}) => {
    const teenager = people.find(({age}) => age >= 10 && age <= 20);

    return(
        <div>
            <h2>First Is Teenager</h2>
            <ul>
                <li>{teenager.name} - {teenager.age}</li>
            
            </ul>
        </div>
    )
}
export default FirstIsTeenager;