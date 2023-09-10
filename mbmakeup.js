// Este é apenas um exemplo básico de JavaScript para interatividade futura.

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Produto adicionado ao carrinho!');
        });
    });
});

