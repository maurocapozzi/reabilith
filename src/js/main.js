// Basic interactive logic for FAQ items
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const icon = item.querySelector('i');
        if (icon.classList.contains('ti-plus')) {
            icon.classList.remove('ti-plus');
            icon.classList.add('ti-minus');
            // Could toggle an answer div here if added to the DOM structure
        } else {
            icon.classList.remove('ti-minus');
            icon.classList.add('ti-plus');
        }
    });
});
