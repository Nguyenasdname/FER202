const Company = ({ company }) => {
    return (
        <div>
            
            <ul>
                <li>Company: {company.name}</li>
            </ul>

        </div>
    )
}

const CompanyAfter1987 = ({ companies }) => {
    return (
        <div>
            <h1>Company After 1987</h1>
            {
                companies.filter(({ start }) => start > 1987)
                    .map(company => (
                        <Company
                            company={company}
                        />
                    ))
            }
        </div>
    )
}

export default CompanyAfter1987