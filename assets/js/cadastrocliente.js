document.getElementById('cadastrarcliente').addEventListener('click', function(event) {
  event.preventDefault();
  
  // Captura dos valores dos campos
  const clientName = document.getElementById('client-name').value;
  const clientType = document.getElementById('client-type').value;
  const cpf = document.getElementById('cpf').value;
  const cnpj = document.getElementById('cnpj').value;
  const companyName = document.getElementById('company-name').value;

  // Validação básica
  if (!clientName || !clientType) {
      alert("Por favor, preencha o nome e selecione o tipo de cliente.");
      return;
  }

  // Montagem do objeto de dados
  const data = {
      name: clientName,
      type: clientType,
      cpf: clientType === 'cpf' ? cpf : null,
      cnpj: clientType === 'cnpj' ? cnpj : null,
      companyName: clientType === 'cnpj' ? companyName : null
  };

  // Envio da requisição POST via Fetch API
  fetch('http://localhost:8080/api/customers', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (response.ok) {
          alert("Cliente cadastrado com sucesso!");
      } else {
          alert("Erro ao cadastrar o cliente.");
      }
      return response.json();
  })
  .then(result => {
      console.log("Resultado:", result);
  })
  .catch(error => {
      console.error("Erro:", error);
  });
});

// Função para mostrar/esconder os campos de CPF/CNPJ
function toggleFields() {
  const clientType = document.getElementById('client-type').value;
  document.getElementById('cpf-field').style.display = clientType === 'cpf' ? 'block' : 'none';
  document.getElementById('cnpj-field').style.display = clientType === 'cnpj' ? 'block' : 'none';
  document.getElementById('company-name-field').style.display = clientType === 'cnpj' ? 'block' : 'none';
}
