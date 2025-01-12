
const CompanyAfter1987 = ({ companies }) => {
    return (
        <div>
            <h2>Company After 1987</h2>
            {
                companies.filter(({ start }) => start > 1987)
                    .map(company => (
                        <ul>
                            <li>Company: {company.name}</li>
                        </ul>
                    ))
            }
        </div>
    )
}

export default CompanyAfter1987