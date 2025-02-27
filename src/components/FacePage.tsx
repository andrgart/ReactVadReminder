import FaceCard from "./FaceCard";
import '../css/facePage.css';
import SidebBar from "./SideBar";

import vadSmok from '../gif/vadSmok.mp4';
import andEats from '../gif/andEats.mp4';
import semenRun from '../gif/semenRun.mp4';
import katzevill from '../gif/katzEvill.mp4';

const gifArray = [
  vadSmok,
  andEats,
  semenRun,
  katzevill
]

function FacePage() {
    return (
      <div className="face-page">
        <SidebBar/>
        <div className="card-container">
          {gifArray.map((gif, index) => {
              return (
                <FaceCard key={index} gif={gif}/>
              )
            } 
          )}
        </div>
      </div>
    );
}
  
export default FacePage;