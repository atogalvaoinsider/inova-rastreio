document.getElementById('btn-cadastrar').addEventListener('click', function() {
    var selectedOption = document.getElementById('event-category').value;
    window.location.href = selectedOption;
});