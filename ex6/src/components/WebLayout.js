import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css/WebLayout.css";
const NavBar = () => {
    return (
        <div className="container-s bg-light nav-bar">
            <div className="row">
                <div className="col-md-8">
                    <div className="d-flex">
                        <div className="logo py-3">
                            <a href="#" className="text-decoration-none text-dark fs-2 fw-bold ms-5">NavBar</a>
                        </div>  
                        <div className="items align-items-center justify-content-center mt-4 pt-2 ps-5">
                            <a href="#" className="text-decoration-none text-dark pe-5 fw-bold">Home</a>
                            <a href="#" className="text-decoration-none text-dark pe-5">Link</a>
                            <a href="#" className="text-decoration-none text-dark pe-5">Dropdown</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex ps-5">
                        <input type="text" className="form-control mt-4" placeholder="Search" />
                        <a className="btn border border-primary pt-1 mt-4 text-primary ms-1">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Carousel = () => {
    return (
        <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>


            <div className="carousel-inner main-banner">
                <div className="carousel-item active">
                    <div className="d-block w-100 bg-cccccc item-img">

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100 bg-cccccc item-img">

                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100 bg-cccccc item-img">

                    </div>
                </div>
                <h1 className="text-969696 banner-content">1920 x 530</h1>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const MenuItem = ({ img, title, price, salePrice, infor }) => {
    return (
        <div className="card me-3 item px-0" style={{ width: "18rem" }}>
            <div className="card-img-top bg-cccccc" style={{ height: "280px" }}>

            </div>
            <div className="card-body">
                <h5 className="card-title fw-light fs-3">{title}</h5>
                <p className="card-text">
                    {salePrice !== null ? (
                        <div className="d-flex justify-content-between fs-5">
                            <span className="text-decoration-line-through">${price}</span>
                            <span className="text-warning ms-2">${salePrice}</span>
                        </div>
                    ) : (
                        <span className="fs-5">${price}</span>
                    )}
                </p>
                <span className="btn btn-primary me-1">C</span>
                <a href="#" className="btn border border-primary w-50">Buy</a>
            </div>
            <div className="new bg-warning text-center px-4 fs-5 fw-light text-white">
                <div className="text-time-new-roman">{infor}</div>
            </div>
        </div>
    );
};

const Menu = () => {
    const menuItems = [
        { img: "images/pizza1.jpg", title: "Product", price: "100.000 vnd", salePrice: "80.000 vnd", infor: null },
        { img: "images/pizza2.jpg", title: "Product", price: "100.000 vnd", salePrice: "80.000 vnd", infor: null },
        { img: "images/pizza3.jpg", title: "Product", price: "100.000 vnd", salePrice: "80.000 vnd", infor: null },
        { img: "images/pizza4.jpg", title: "Product", price: "100.000 vnd", salePrice: "80.000 vnd", infor: "Sale" },
    ];
    return (
        <div className="container text-dark mt-5 py-5">
            <h1 className="row ms-3 ps-4 fs-1 fw-light">Our Menu</h1>
            <div className="row ms-3 ps-4 fs-5 fw-light mb-3">List product description</div>
            <div className="row justify-content-center">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};


const WebLayout = () => {
    return (
        <div className="bg-light">
            <NavBar />
            <Carousel />
            <Menu />
        </div>
    );
};

export default WebLayout;