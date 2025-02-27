import { createContext, useState, useContext } from "react";
import { Card, Button, ListGroup, Container, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (dish) => {
        setCartItems([...cartItems, dish]);
    };

    const removeFromCart = (dishId) => {
        setCartItems(cartItems.filter(item => item.id !== dishId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const confirmOrder = () => {
        if (cartItems.length > 0) {
            alert("🎉 Thanh toán thành công! Cảm ơn bạn đã đặt hàng.");
            setCartItems([]);
        } else {
            alert("🛒 Giỏ hàng trống! Hãy thêm món ăn trước khi thanh toán.");
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, confirmOrder }}>
            {children}
        </CartContext.Provider>
    );
};

const DishesList = () => {
    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");

    const dishes = [
        { id: 0, name: "Uthappizza", price: 4.99, description: "A unique combination of Indian Uthappam and Italian pizza.", image: "https://ristorante-con-fusion-2021.netlify.app/img/pizza.jpg" },
        { id: 1, name: "Zucchipakoda", price: 1.99, description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter.", image: "https://ristorante-con-fusion-2021.netlify.app/img/pasta.jpg" },
        { id: 2, name: "Vadonut", price: 1.99, description: "A quintessential ConFusion experience, is it a vada", image: "https://ristorante-con-fusion-2021.netlify.app/img/steak.png" },
        { id: 3, name: "ElaiCheese Cake", price: 2.99, description: "New York Style Cheese Cake, spiced with Indian cardamoms.", image: "https://ristorante-con-fusion-2021.netlify.app/img/burger.png" }
    ];

    const filteredDishes = dishes.filter(dish =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2>Menu</h2>

            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Tìm món ăn..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <div className="row">
                {filteredDishes.map(dish => (
                    <div className="col-md-3" key={dish.id}>
                        <Card className="mb-3 shadow-lg">
                            <Card.Img variant="top" src={dish.image} style={{ height: "200px", objectFit: "cover" }} />
                            <Card.Body className="text-center">
                                <Card.Title>{dish.name}</Card.Title>
                                <Card.Text>{dish.description}</Card.Text>
                                <Card.Text><strong>${dish.price}</strong></Card.Text>
                                <Button variant="success" onClick={() => addToCart(dish)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ShowCart = () => {
    const { cartItems, removeFromCart, clearCart, confirmOrder } = useContext(CartContext);

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>🛒 Cart is empty</p>
            ) : (
                <Card className="shadow-lg">
                    <ListGroup variant="flush">
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                {item.name} - ${item.price}
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Card.Footer className="text-center">
                        <strong>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
                        <Button variant="warning" className="ms-3" onClick={clearCart}>
                            Clear Cart
                        </Button>
                        <Button variant="primary" className="ms-3" onClick={confirmOrder}>
                            Confirm Order
                        </Button>
                    </Card.Footer>
                </Card>
            )}
        </div>
    );
};

const Cart = () => {
    return (
        <CartProvider>
            <Container>
                <h1 className="text-center mt-4">🍽 Food Ordering App</h1>
                <DishesList />
                <ShowCart />
            </Container>
        </CartProvider>
    );
};

export default Cart;
