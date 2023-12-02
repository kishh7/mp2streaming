
import React, { useState } from 'react';


const Upload = () => {
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
    <h2>Edit Profile</h2>
    <div>
      {previewImage && (
        <div>
          <h4>Preview:</h4>
          <img src={previewImage} alt="Preview" style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
    <div>
      <label htmlFor="file-upload">Choose a profile picture:</label>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
    <button onClick={handleUpload}>Upload & Update Profile Picture</button>
  </div>
);
};

export default Upload;