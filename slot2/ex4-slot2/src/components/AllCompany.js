const AllCompany = ({ companies }) => {
    const companyList = []

    companies.forEach((company) => {
        companyList.push(<li>Company: {company.name}</li>)
    })

    return (
        <div>
            <h2>All Company</h2>
            <ul>
                {companyList}
            </ul>
        </div>
    )
}

export default AllCompany;