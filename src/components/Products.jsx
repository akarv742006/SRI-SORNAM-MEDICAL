import React, { useState } from 'react';
import './Products.css';
import { medicines, getCategories } from '../data/medicines';

const Products = (props) => {
    // Placeholder WhatsApp Number - Replace with actual number
    const phoneNumber = "917708897598";

    const categories = getCategories();
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const { selectedItems, toggleSelection } = props;

    const filteredProducts = medicines.filter(p => {
        if (searchQuery) {
            return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return p.category === activeCategory;
    });

    const scrollToOrder = () => {
        const orderSection = document.getElementById('order');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="products" className="products">
            <div className="container">
                <h2 className="section-title">Product Catalog</h2>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for medicines, syrup, etc..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {!searchQuery && (
                    <div className="category-scroll-container">
                        <div className="category-tabs">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => {
                            const isSelected = selectedItems.includes(product.name);
                            return (
                                <div
                                    key={product.id}
                                    className={`product-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => toggleSelection(product.name)}
                                >
                                    <div className="product-image">{product.image}</div>
                                    <h3>{product.name}</h3>
                                    <div className="checkbox-container">
                                        <div className={`custom-checkbox ${isSelected ? 'checked' : ''}`}>
                                            {isSelected && '✓'}
                                        </div>
                                        <span>{isSelected ? 'Selected' : 'Add to Order'}</span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="no-results">
                            <p>No medicines found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>

            {selectedItems.length > 0 && (
                <div className="floating-cart-bar">
                    <div className="cart-info">
                        <span className="count-badge">{selectedItems.length}</span>
                        <span>Items Selected</span>
                    </div>
                    <button className="btn cart-btn" onClick={scrollToOrder}>
                        Proceed to Order 📝
                    </button>
                </div>
            )}
        </section>
    );
};

export default Products;
