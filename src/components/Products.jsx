import React, { useState } from 'react';
import './Products.css';
import { medicines, getCategories } from '../data/medicines';

const Products = () => {
    // Placeholder WhatsApp Number - Replace with actual number
    const phoneNumber = "917708897598";

    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedItems, setSelectedItems] = useState([]);

    const categories = getCategories();

    const filteredProducts = activeCategory === "All"
        ? medicines
        : medicines.filter(p => p.category === activeCategory);

    const toggleSelection = (productName) => {
        if (selectedItems.includes(productName)) {
            setSelectedItems(selectedItems.filter(item => item !== productName));
        } else {
            setSelectedItems([...selectedItems, productName]);
        }
    };

    const handleBulkOrder = () => {
        if (selectedItems.length === 0) return;

        const itemList = selectedItems.map(item => `• ${item}`).join('%0A');
        const message = `*New Bulk Order Order Request*%0A%0A*I would like to order the following items:*%0A${itemList}%0A%0A_Please confirm availability and price._`;

        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <section id="products" className="products">
            <div className="container">
                <h2 className="section-title">Product Catalog</h2>

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

                <div className="products-grid">
                    {filteredProducts.map(product => {
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
                    })}
                </div>
            </div>

            {selectedItems.length > 0 && (
                <div className="floating-cart-bar">
                    <div className="cart-info">
                        <span className="count-badge">{selectedItems.length}</span>
                        <span>Items Selected</span>
                    </div>
                    <button className="btn cart-btn" onClick={handleBulkOrder}>
                        Order via WhatsApp 📱
                    </button>
                </div>
            )}
        </section>
    );
};

export default Products;
