function calculateProduct() {
    const windowType = document.getElementById('window-type').value;
    const size = parseInt(document.getElementById('size').value);

    const productsList = document.getElementById('products-list');
    productsList.innerHTML = ''; // Leere Liste, bevor neue Produkte angezeigt werden.

    if (isNaN(size) || size < 30 || size > 200) {
        alert('Bitte geben Sie eine gültige Größe zwischen 30 und 200 cm ein.');
        return;
    }

    let product = '';

    // Logik zur Auswahl des Produkts basierend auf Fenster-Typ und Größe
    if (windowType === 'rechteckig') {
        product = `Rechteckiges Fliegengitter (${size} cm)`;
    } else if (windowType === 'quadratisch') {
        product = `Quadratisches Fliegengitter (${size} cm)`;
    } else if (windowType === 'dachfenster') {
        product = `Fliegengitter für Dachfenster (${size} cm)`;
    }

    const li = document.createElement('li');
    li.textContent = product;
    productsList.appendChild(li);
}
