import React from 'react'
import { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Cha.css';
import ReactPlayer from 'react-player';


const Channel = () => {
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
    <div className="gradient-custom-2" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="https://static-cdn.jtvnw.net/jtv_user_pictures/98ccac37-119c-4534-aba9-87c9b7d2c84f-profile_image-300x300.png"
                    alt="" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                
                  <MDBBtn outline color="dark" className="editProfileButton" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">velvetfrootloop</MDBTypography>
                  <MDBCardText>Philippines</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black">
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">4</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Videos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" >
                    <MDBCardText className="font-italic mb-1">www.youtube.com/@velvetbb</MDBCardText>
                    <MDBCardText className="font-italic mb-1">191K subscribers</MDBCardText>
                    <MDBCardText className="font-italic mb-0">81 videos</MDBCardText>
                    <MDBCardText className="font-italic mb-0">52,010,849 views</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Joined 6 Oct 2019</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent Videos</MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                  <div>
      <ReactPlayer
        url="https://www.youtube.com/shorts/uWzrcI5ikyA"
        width="100%"
        height="auto"
        controls={true}
      />
    </div>
                  </MDBCol>
                  
                  <MDBCol className="mb-2">
                  <div>
      <ReactPlayer
        url="https://www.youtube.com/shorts/hIATL_W36m4"
        width="100%"
        height="auto"
        controls={true}
      />
    </div>
           </MDBCol>
      </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                  <div>
      <ReactPlayer
        url="https://www.youtube.com/shorts/IqLsdqYaRSk"
        width="100%"
        height="auto"
        controls={true}
      />
    </div>
                  </MDBCol>
                  <MDBCol className="mb-2">
                  <div>
      <ReactPlayer
        url="https://www.youtube.com/shorts/AlxAMCGwxeE"
        width="100%"
        height="auto"
        controls={true}
      />
    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Channel;