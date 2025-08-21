// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
});

// Formularverarbeitung und Mailto
document.getElementById('domainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const domain = document.getElementById('domain').value;
    const provider = document.getElementById('provider').value;
    const tlds = document.getElementById('tlds').value;
    const notes = document.getElementById('notes').value;

    // Neue Zeile in Tabelle
    const table = document.getElementById('domainTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${domain}</td><td>${provider}</td><td>${tlds}</td><td>${notes}</td>`;
    table.appendChild(newRow);

    // Mailto Link öffnen
    const subject = encodeURIComponent("Neuer Domain-Eintrag");
    const bodyMail = encodeURIComponent(`Domain: ${domain}\nHosting Anbieter: ${provider}\nTLDs: ${tlds}\nBemerkungen: ${notes}`);
    window.location.href = `mailto:deine-email@example.com?subject=${subject}&body=${bodyMail}`;

    this.reset();
});
