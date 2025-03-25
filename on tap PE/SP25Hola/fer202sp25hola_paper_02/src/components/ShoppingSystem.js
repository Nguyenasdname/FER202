import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Button, Col, Row, Form, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All"); // State để lưu danh mục đã chọn
    const [search, setSearch] = useState("")
    const [cart, setCart] = useState([]); // Giỏ hàng
    const [address, setAddress] = useState(""); // Địa chỉ mua hàng
    const [error, setError] = useState(""); // Lưu lỗi nhập địa chỉ
    const [success, setSuccess] = useState(""); // Lưu thông báo thành công
    const [order, setOrder] = useState(false)
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get("http://localhost:9999/products");

                const productRating = response.data.map((product) => ({
                    ...product,
                    rate:
                        product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
                }));

                setProducts(productRating);
            } catch (err) {
                console.log("Error ", err);
            }
        };

        fetchProduct();
    }, []);

    // Lấy danh mục không trùng lặp
    const uniqueCategories = [...new Set(products.map((p) => p.category))];

    // Xử lý lọc sản phẩm dựa trên danh mục đã chọn
    const filteredProducts = products
        .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

    const addToCart = ((product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    })

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    const placeOrder = () => {
        if (!address.trim()) {
            setError("Please Enter Address");
            return;
        }

        const saveOrder = {
            orderDate: new Date().toISOString(),
            products: cart.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
            shipAddress: address,
        }
        axios
            .post("http://localhost:9999/orders", saveOrder)
            .then(() => {
                setError("");
                setSuccess("Your order has been placed");
                setCart([]);
                setAddress("");
                setOrder(true);

                // Sau 3 giây, đặt order về false
                const timeoutId = setTimeout(() => {
                    setOrder(false);
                }, 3000);

                return () => clearTimeout(timeoutId);
            })
            .catch((err) => {
                console.error("Failed to place order:", err);
                alert("Failed to place order!");
            });


    };

    return (
        <Container>
            {/* Bộ lọc danh mục */}
            <Row className="mb-3">
                <div className="d-flex justify-content-between">
                    <Col>
                        <Form.Select
                            value={selectedCategory} // Giá trị của select
                            onChange={(e) => setSelectedCategory(e.target.value)} // Khi thay đổi danh mục
                            style={{ width: "350px" }}
                        >
                            <option value="All">All</option>
                            {uniqueCategories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </Form.Select>

                        <Form.Control
                            style={{ width: "350px" }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        >

                        </Form.Control>
                    </Col>
                    <div>
                        <Button variant="success">Order History</Button>
                    </div>
                </div>
            </Row>

            {/* Bảng hiển thị sản phẩm */}
            <Row>
                <Col className="col-md-8">
                    <Table striped bordered hover className="text-left">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Rate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.rate.toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={() => addToCart(product)}
                                        >
                                            Add To Cart
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col className="border">
                    <h2 className="text-center">Cart</h2>
                    <div className="text-center mt-3">
                        {cart.length > 0 && (
                            <Button className="" variant="secondary"
                                onClick={() => setExpand(!expand)}
                            >
                                {expand ? "Collapse" : "Expand"}
                            </Button>
                        )}
                    </div>
                    {cart.length === 0 ? (
                        <div>
                            {!order && (
                                <p className='text-center text-muted mb-2'>Your cart is empty!</p>
                            )}

                            {order && (
                                <div className="text-center">
                                    <h5 className='text-success fw-bold'>
                                        Thank you for your order!
                                    </h5>
                                    <p className='text-success'>
                                        Your order has been placed successfully.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            {expand && (
                                <div>
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.title}</td>
                                                    <td>${item.price.toFixed(2)}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => removeFromCart(item.id)}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>

                                    {/* Nhập địa chỉ */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Shipping Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                        {error && <Alert variant="danger">{error}</Alert>}
                                    </Form.Group>

                                    {/* Đặt hàng */}
                                    <Button variant="warning" onClick={placeOrder}>
                                        Place Order
                                    </Button>
                                </div>
                            )}

                            {!expand && (
                                <div className='text-center'>
                                    <p>
                                        {cart.length} item(s) in cart Total: $
                                        {cart
                                            .reduce(
                                                (total, item) => total + item.price * item.quantity,
                                                0,
                                            )
                                            .toFixed(2)}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </Col>
            </Row>
        </Container >
    );
};

Products.propTypes = {
    products: PropTypes.array,
    selectedCategory: PropTypes.string,
    search: PropTypes.string,
    cart: PropTypes.array,
    address: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
};

export default Products;
