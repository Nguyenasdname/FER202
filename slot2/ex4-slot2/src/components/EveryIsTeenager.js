const EveryIsTeenager = ({people}) =>{
    const teenager = people.every(({age}) => age >= 10 && age <= 20)
    return(
        <div>
            <h2>Every person are teenager</h2>
            <div>{teenager ? 'True' : 'False'}</div>
        </div>
    )
}

export default EveryIsTeenager;