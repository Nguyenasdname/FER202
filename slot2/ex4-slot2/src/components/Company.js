const Company = ({ company }) => {
    return (
        <div>
            
            <ul>
                <li>Company: {company.name}</li>
            </ul>

        </div>
    )
}

const AllCompany = ({companies}) =>{
    return(
        <div>
            <h1>All Company</h1>
            {companies.map(companies => (
                <Company 
                company={companies} 
                />
            ))}
        </div>
    )
}

export default AllCompany;