document.getElementById("Cadastro").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Exibe os valores obtidos do formulário no console
  console.log("Nome: " + nome);
  console.log("Email: " + email);
  console.log("Senha: " + senha);
  



  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("meuBotao").addEventListener("click", function() {
            // Exibindo um alerta quando o botão é clicado
  alert("Cadastro realizado com sucesso");
  });
});