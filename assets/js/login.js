function openModal() {
    document.getElementById("registerModal").style.display = "block";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
}

function toggleFields() {
    const nameFields = document.getElementById("nameFields");
    const cnpjFields = document.getElementById("cnpjFields");
    const cpfFields = document.getElementById("cpfFields");
    const selectedOption = document.querySelector('input[name="type"]:checked').value;

    if (selectedOption === 'cnpj') {
        nameFields.style.display = "none";
        cpfFields.style.display = "none";
        cnpjFields.style.display = "block";
    } else {
        nameFields.style.display = "block";
        cnpjFields.style.display = "none";
        cpfFields.style.display = "block";
    }

    function openPasswordRecoveryModal() {
        document.getElementById("passwordRecoveryModal").style.display = "block";
    }
    
    function closePasswordRecoveryModal() {
        document.getElementById("passwordRecoveryModal").style.display = "none";
    }

}
