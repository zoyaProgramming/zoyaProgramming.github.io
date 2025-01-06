
import { useLoaderData } from 'react-router'
import facePhoto from '../assets/images/Selfie.png'
export default function Home(){
  const image= useLoaderData;
  return( 
    <>
      
      <div style={{backgroundColor: "azure", padding: '2vw', width: 'max-content', display: 'block', margin: 'auto', marginTop: '2vw', borderRadius: '2vw', border: '2px solid white'}}>
      <img className="img-main" src={facePhoto} width="300" height="300" alt='a headshot photo of the author'/>
      
      <p className="main-paragraph"> Hello! My name is Zoya Clawson and I am a first-year student at Stony Brook University.
        I can code in React, JavaScript, and HTML, and I am learning Java in university. Check out my projects or my resume with the links above!
      </p>
      </div>
    </>
    )
}