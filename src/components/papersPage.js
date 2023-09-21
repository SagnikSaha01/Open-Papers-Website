import React from 'react';
import '../App.css';
import  './papersPage.css';
import CardItem from './CardItem';
function ViewPapers() {
  return (
    <>
      <div className='cards'>
      <h1>Our current papers</h1>
      <p>Click to view</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= '../images/ima.JPG'
              text='Research paper placeholder 1'
              label='experimental'
              path="https://firebasestorage.googleapis.com/v0/b/test-44c5c.appspot.com/o/Annotated%20Bib.pdf?alt=media&token=c564fddb-0226-4a2a-b72d-45521f879951" 
              rel = "noopener" 
              target="_blank"
            />
            <CardItem
              src='../images/largepreview.jpg'
              text='Research paper placeholder 2'
              label='testing'
              path='https://firebasestorage.googleapis.com/v0/b/test-44c5c.appspot.com/o/Essay%202%20Proposed%20Ideas%20(1).pdf?alt=media&token=6a73de02-fb28-47de-b929-2533095e3ecb'
              rel = "noopener" 
              target="_blank"
            />
              <CardItem
              src='images/imageplace.jpg'
              text='Reserach paper placeholder 3'
              label='categories'
              path='https://firebasestorage.googleapis.com/v0/b/test-44c5c.appspot.com/o/Poetry.Handout.112.pdf?alt=media&token=09d14802-e0e0-43ec-a042-6b895c5d1217'
              rel = "noopener" 
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </div>
      
    </>
    
  );
}

export default ViewPapers;

