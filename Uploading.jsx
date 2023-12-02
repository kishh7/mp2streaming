import { useState } from 'react';

const Uploading = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleUpload = () => {
      
      console.log('Uploaded file:', selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile));
      alert('Successfully updated your profile.');
  
      setSelectedFile(null);
    };
  return (
    <div>
      <label htmlFor="file-upload">Choose a profile picture:</label>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleFileChange}
      />
    <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Uploading