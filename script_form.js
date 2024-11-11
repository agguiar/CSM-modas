// document.getElementById('cadastro-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   let isValid = true;

//   // Limpar mensagens de erro
//   document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');

//   // Validações
//   const nome = document.getElementById('nome').value.trim();
//   if (nome.length < 3) {
//     showError('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
//     isValid = false;
//   }

//   const endereco = document.getElementById('endereco').value.trim();
//   if (endereco.length < 5) {
//     showError('erro-endereco', 'O endereço deve ter pelo menos 5 caracteres.');
//     isValid = false;
//   }

//   const dataNascimento = document.getElementById('data-nascimento').value;
//   if (!dataNascimento) {
//     showError('erro-data-nascimento', 'Data de nascimento é obrigatória.');
//     isValid = false;
//   }

//   const sexo = document.querySelector('input[name="sexo"]:checked');
//   if (!sexo) {
//     showError('erro-sexo', 'Por favor, selecione seu sexo.');
//     isValid = false;
//   }

//   const cep = document.getElementById('cep').value.trim();
//   if (!/^\d{5}-?\d{3}$/.test(cep)) {
//     showError('erro-cep', 'CEP inválido.');
    isValid = false;
  }

  const cidade = document.getElementById('cidade').value.trim();
  if (cidade.length < 3) {
    showError('erro-cidade', 'A cidade deve ter pelo menos 3 caracteres.');
    isValid = false;
  }

  const cpf = document.getElementById('cpf').value.trim();
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
    showError('erro-cpf', 'CPF inválido (formato: xxx.xxx.xxx-xx).');
    isValid = false;
  }

  const identidade = document.getElementById('identidade').value.trim();
  if (identidade.length < 6) {
    showError('erro-identidade', 'Identidade deve ter pelo menos 6 caracteres.');
    isValid = false;
  }

  const email = document.getElementById('email').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('erro-email', 'E-mail inválido.');
    isValid = false;
  }

  const telefone = document.getElementById('telefone').value.trim();
  if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
    showError('erro-telefone', 'Telefone inválido (formato: (xx) xxxxx-xxxx).');
    isValid = false;
  }

  if (isValid) {
    alert('Cadastro realizado com sucesso!');
    this.reset();
  }
});

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}