document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const fileName = params.get('file');

    if (fileName) {
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = `path_to_uploaded_documents/${fileName}`;
    } else {
        alert("No document to view.");
    }
});
