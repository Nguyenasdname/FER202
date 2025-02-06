import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
const Navbar = () => {
    return (
        <div className="bg-dark">
            <div className="container-s bg-dark nav-bar">
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex">
                            <div className="logo py-3">
                                <a href="#" className="text-decoration-none text-white fs-2 fw-bold ms-5">Pizza House</a>
                            </div>
                            <div className="items align-items-center justify-content-center mt-4 pt-2 ps-5">
                                <a href="#" className="text-decoration-none text-white pe-5 fw-bold">Home</a>
                                <a href="#" className="text-decoration-none text-white pe-5">About Us</a>
                                <a href="#" className="text-decoration-none text-white pe-5">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex ps-5">
                            <input type="text" className="form-control mt-4" placeholder="Search" />
                            <img src="images\search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="search-icon bg-danger rounded-1 mt-4 ms-1" alt="search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div class="container-s">
            <div class="row banner align-items-center justify-content-center">
                <div class="background-img ">
                    <img src="images/pizza.jpg" class="back-img" alt=""></img>
                </div>

                <div class="banner-content">
                    <div class="text-white fs-1 fw-bold text-time-new-roman">Neapolian Pizza</div>
                    <div class="text-white fs-5 text-time-new-roman">If you are looking for a traditional Italian pizza,
                        the Neapolian is the best option</div>
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ img, title, price, salePrice, infor }) => {
    return (
        <div className="card me-3 item" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top item-img" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                {salePrice !== null ? (
                        <div>
                            <span className="text-decoration-line-through">${price}</span>
                            <span className="text-warning ms-2">${salePrice}</span>
                        </div>
                    ) : (
                        <span>${price}</span>
                    )}
                </p>
                <a href="#" className="btn btn-dark">Buy</a>
            </div>
            <div className="new bg-warning text-center ps-3 pe-3">
                <strong className="text-time-new-roman">{infor}</strong>
            </div>
        </div>
    );
};

const Menu = () => {
    const menuItems = [
        { img: "images/pizza1.jpg", title: "Margherita Pizza", price: "40.00", salePrice: "24.00", infor: "Sale" },
        { img: "images/pizza2.jpg", title: "Pepperoni Pizza", price: "45.00", salePrice: null, infor: null },
        { img: "images/pizza3.jpg", title: "Veggie Pizza", price: "38.00", salePrice: null, infor: "New" },
        { img: "images/pizza4.jpg", title: "BBQ Chicken Pizza", price: "50.00", salePrice: "35.00", infor: "Sale" },
    ];
    return (
        <div className="container bg-dark text-white py-5">
            <h2 className="row ms-3 ps-4">Our Menu</h2>
            <div className="row justify-content-center">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

const BookingForm = () => {
    return (
        <div className="container text-white py-5">
            <h1 className="text-center">Book Your Table</h1>
            <div className="row mb-3">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Your Name*" />
                    </div>
                <div className="col-4"><input type="text" className="form-control" placeholder="Your Email*" /></div>
                <div className="col-4">
                    <select className="form-select">
                        <option value="" disabled selected>Select a Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                    </select>
                </div>
            </div>
            <div class="row mt-5 mb-3">
                <div class="col">
                    <textarea class="form-control" rows="8" placeholder="Please write your comment"></textarea>
                </div>
            </div>
            <div class="row mt-5">
                <div class="d-flex align-items-center justify-content-left col mb-5 ">
                    <a href="#" class=" btn btn-warning text-white fs-4 fw-bold text-time-new-roman mb-5 ">Send Message</a>
                </div>
            </div>
        </div>
    );
};

const PizzaWeb = () => {
    return (
        <div className="bg-dark">
            <Navbar />
            <Banner />
            <Menu />
            <BookingForm />
        </div>
    );
};

export default PizzaWeb;
