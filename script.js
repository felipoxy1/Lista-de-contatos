const menuButao = document.getElementById('menuButton');
const addContact = document.getElementById('addContact');
const savedContacts = document.getElementById('savedContacts');
const form = document.getElementById('addContact-form');
const table = document.getElementById('table');
let linhas = '';

menuButao.addEventListener('click', function() {
    menuButao.classList.toggle('open-menu')
    menuButao.classList.toggle('closed')
    openMenu()
});

addContact.addEventListener('click', function() {
    openAddContact()
});

savedContacts.addEventListener('click', function() {
    openSavedContacts()
});

function openMenu(){
    if(menuButao.classList.contains('open-menu')) {
        addContact.style.display = 'block'
        savedContacts.style.display = 'block'
    } else {
        addContact.style.display = 'none'
        savedContacts.style.display = 'none'
    }
};

function openAddContact() {
    if(form.style.display == 'block') {
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
        table.style.display = 'none'
    }
};

function openSavedContacts() {
    if(table.style.display == 'block') {
        table.style.display = 'none'
    } else {
        table.style.display = 'block'
        form.style.display = 'none'
    } 
};

form.addEventListener('submit', function(e) { // Adicionado o parâmetro 'e'
    e.preventDefault(); // 'e' é necessário aqui para evitar o comportamento padrão de envio do formulário

    const inputNome = document.getElementById('Nome')
    const inputNumero = document.getElementById('Numero')


    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    alert(`Nome: ${inputNome.value} - Numero: ${inputNumero.value}`)
});