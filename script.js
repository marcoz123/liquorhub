// Function to get the value of a URL parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Update the order summary in payment.html based on the URL parameters
if (window.location.pathname.includes('payment.html')) {
    const itemName = getURLParameter('item');
    const itemPrice = getURLParameter('price');

    // Update the content with the item and price if available
    if (itemName && itemPrice) {
        document.getElementById('item-name').textContent = itemName;
        document.getElementById('item-price').textContent = itemPrice;
    } else {
        alert('Order details not found!');
    }
}

// Update the order summary in thankyou.html based on the URL parameters
if (window.location.pathname.includes('thankyou.html')) {
    const itemName = getURLParameter('item');
    const itemPrice = getURLParameter('price');

    // Update the content with the item and price if available
    if (itemName && itemPrice) {
        document.getElementById('thankyou-item-name').textContent = itemName;
        document.getElementById('thankyou-item-price').textContent = itemPrice;
    } else {
        alert('Order details not found!');
    }
}

// Function to highlight the "Order Now" button for a selected item in menu.html
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#f39c12';  // Change color on hover
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '#3498db';  // Revert to original color
    });
});

