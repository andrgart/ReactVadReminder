import faceGif from '../gif/vadSmok.mp4';
import '../css/faceCard.css';
import { useState } from 'react';

function FaceCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    
    const centerX = rect.width / 2; 
    const centerY = rect.height / 2;

    const deltaX = event.clientX - (rect.left + centerX);
    const deltaY = event.clientY - (rect.top + centerY);

    setPositionX((deltaX / centerX) * 15); 
    setPositionY((deltaY / centerY) * -15);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPositionX(0);
        setPositionY(0);
      }}
      className={`faceCard ${isHovered ? 'faceCardActive' : ''}`}
      style={{
        transform: `rotateY(${positionX}deg) rotateX(${positionY}deg)`, 
      }} 
    >
      <video width="600" height="600" loop autoPlay muted>
        <source src={faceGif} type="video/mp4" />
      </video>
    </div>
  );
}
  
export default FaceCard;