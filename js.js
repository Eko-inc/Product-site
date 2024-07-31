//Code to make button react when clicked, basically change color n text xd
function addtocart() {
    const button = document.querySelector('.cart');
    button.textContent = 'Added to Cart';
    button.classList.add('added');
}

//code to make a 7 second popup notification for when i press that button

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart');
    const notificationBox = document.getElementById('notification');

    function showNotification() {
        notificationBox.classList.add('show');
        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 7000);
    }

    cartButton.addEventListener('click', showNotification);
});

//send button fix

document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    sendButton.addEventListener('click', () => {
        messageInput.value = '';
        
    });
});