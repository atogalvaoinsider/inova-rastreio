document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const pdfList = document.getElementById('pdfList');
    pdfList.innerHTML = ''; // Clear previous list

    Array.from(files).forEach((file, index) => {
        if (file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create list item for each PDF
                const listItem = document.createElement('div');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                
                const fileNameSpan = document.createElement('span');
                fileNameSpan.textContent = file.name;

                const viewButton = document.createElement('button');
                viewButton.className = 'btn btn-primary btn-sm';
                viewButton.textContent = 'View PDF';
                viewButton.onclick = function() {
                    document.getElementById('filePreviewPDF').src = e.target.result;
                    const modal = new bootstrap.Modal(document.getElementById('fileModal'));
                    modal.show();
                };

                listItem.appendChild(fileNameSpan);
                listItem.appendChild(viewButton);
                pdfList.appendChild(listItem);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Unsupported file type.");
        }
    });
});
