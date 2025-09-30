import './Navigation.css';

export default function Navigation({index, story, handlePrev, handleNext}) {
  return (
    <div className="navigation">
      <div>
        <div className="navigation-handlers">
          <div id="prev" onClick={handlePrev} className={(index > 0) ? 'active' : ''}>
            &lt;&lt;&lt;
          </div>
          <div className='story-link'>
            <a href={story.url} target="_blank">Read story</a>
          </div>
          <div id="next" onClick={handleNext} className='active'>
            &gt;&gt;&gt;
          </div>
        </div>
      </div>
    </div>
  )
}
