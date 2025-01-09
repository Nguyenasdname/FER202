const CompanyRetail = ({ companies }) => {
    return (
        <div>
            <h1>Company Category Retail</h1>
            {
                companies.filter(({ category }) => category === "Retail")
                    .map(company => (
                        <table border="1" style={{ width: "300px", textAlign: "center" }}>
                            <tbody>
                                <tr>
                                    <td>{company.name}</td>
                                    <td>{company.start + 1}</td>
                                    <td>{company.end}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))
            }
        </div>
    )
}
export default CompanyRetail