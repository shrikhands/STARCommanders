function uploadDocument() {
  const fileInput = document.getElementById('fileInput');
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
      // Simulate a server request to store the uploaded document
      // Replace this with actual server-side code to handle file uploads
      // For now, we'll just redirect to the viewer page with a query parameter
      window.location.href = `viewer.html?file=${selectedFile.name}`;
  } else {
      alert("Please select a document to upload.");
  }
}
