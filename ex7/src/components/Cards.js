import 'bootstrap/dist/css/bootstrap.min.css';

const CardsColum = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Cards Columns</h2>
            <div className="row">
            
                <div className="col-md-4">
                    <div className="card border-primary text-center bg-primary">
                        <img
                            src="images/Car.png"
                            className="card-img-top py-3 px-3"
                            alt="Car"
                        />
                        <div className="card-body">
                            <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                </div>

               
                <div className="col-md-4">
                    <div className="card border-warning text-center bg-warning">
                        <img
                            src="images/Car.png"
                            className="card-img-top py-3 px-3"
                            alt="Car"
                        />
                        <div className="card-body">
                            <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                </div>

               
                <div className="col-md-4">
                    <div className="card border-danger text-center bg-danger">
                        <img
                            src="images/Car.png"
                            className="card-img-top py-3 px-3"
                            alt="Car"
                        />
                        <div className="card-body">
                            <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardsColum;