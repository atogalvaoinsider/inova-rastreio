function toggleFields() {
    var clientType = document.getElementById("client-type").value;
    var cpfField = document.getElementById("cpf-field");
    var cnpjField = document.getElementById("cnpj-field");
    var companyNameField = document.getElementById("company-name-field");

    if (clientType === "cpf") {
      cpfField.style.display = "block";
      cnpjField.style.display = "none";
      companyNameField.style.display = "none";
    } else if (clientType === "cnpj") {
      cpfField.style.display = "none";
      cnpjField.style.display = "block";
      companyNameField.style.display = "block";
    } else {
      cpfField.style.display = "none";
      cnpjField.style.display = "none";
      companyNameField.style.display = "none";
    }
  }