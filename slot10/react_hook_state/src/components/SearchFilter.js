import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const items = [
        "Apple", "Banana", "Orange", "Grapes", "Strawberry",
        "Pineapple", "Mango", "Watermelon", "Papaya", "Peach",
        "Cherry", "Blueberry", "Blackberry", "Raspberry", "Cranberry",
        "Kiwi", "Lemon", "Lime", "Coconut", "Pomegranate",
        "Avocado", "Fig", "Guava", "Lychee", "Melon",
        "Nectarine", "Pear", "Plum", "Passion Fruit", "Jackfruit",
        "Tangerine", "Dragon Fruit", "Starfruit", "Persimmon", "Mulberry",
        "Gooseberry", "Durian", "Sapodilla", "Cantaloupe", "Longan"
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Search Fruits</h2>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul className="list-group">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-muted">No results found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SearchFilter;
