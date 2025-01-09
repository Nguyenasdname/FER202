const Company = ({ company }) => {
    return (
        <div>

            <ul>
                <li>Company: {company.name}</li>
                <li>End Date: {company.end}</li>
            </ul>

        </div>
    )
}

const CompanySort = ({companies}) => {
    
    return (
        <div>
            <h1>Sort Company Base On End Date</h1>
            {
                companies.sort((a, b) => a.end - b.end)
                .map(companies => (
                    <Company
                        company={companies}
                    />
                ))
            }
        </div>
    )
}

export default CompanySort;