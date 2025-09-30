import './Title.css';

export default function Title({story}) {
  return (
    <div className='story-title'>
      <h2>{story.title}</h2>
      <h3>Story by {story.by}</h3>
      <div>
      </div>
    </div>
  )
}