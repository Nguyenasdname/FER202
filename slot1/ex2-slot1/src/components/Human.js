const HumanInfor = () =>{
    const human=[
        {
            name: 'John',
            age: 10
        },
        {
            name: 'Nguyen',
            age: 10
        },
        {
            name: 'Son',
            age: 10
        },
        {
            name: 'Loi',
            age: 10
        },
        {
            name: 'Thanh',
            age: 10
        },
        {
            name: 'John2',
            age: 10
        },
    ]
    return (
        <>
         <h1>List People</h1>
         {
            human.map((human, index )=>{
                return (
                    <div>
                        <h3>Number: {index + 1}</h3>
                        <p style={{color: "red"}}>Name: {human.name}</p>
                        <p>Age: {human.age}</p>
                    </div>
                )
            })
         }  
        </>
    )
}

export default HumanInfor;