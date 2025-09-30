import Title from './Title';
import Navigation from './Navigation';

import './Items.css';


export default function Items({index, story, handleNext, handlePrev}) {
    if ((story != null)) {
      return (
        <>
        <div className="stories ">
          <div className="panel">
            <Title story={story}></Title>
          </div>
        </div>
          <Navigation index={index} story={story} handleNext={handleNext} handlePrev={handlePrev}/>
      </>
      ) 
    } else {
        return (
          <div id="loading-container" className="container">
            <div>
              <span>Loading...</span>
            </div>
          </div>
        )
    } 
}