const NewObject = ({companies}) => {
    const {name, category } = companies[0]

    const newObject = {
        name,
        category,
        print() {
            return `Company: ${this.name}`;
        }
    }
    return(
        <div>
            <h2>New Object</h2>
            <p>{newObject.print()}</p>
        </div>
    )
}

export default NewObject