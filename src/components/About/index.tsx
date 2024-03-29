import "./style.css";
import Graphic1 from "../../projectGraphics/graph-1.jpg";
import Graphic2 from "../../projectGraphics/graph-2.jpg";
import PhotoDisplay from "../PhotoDisplay";
import {useInView} from "react-intersection-observer";
import {AboutProps as Props} from "../../helpers/interfaces"

const images: Array<string> = [Graphic1, Graphic2];


const About = ({refLink, text}: Props) => {
  const { ref, inView } = useInView({
    threshold: [0.5],
})
  
  return (
    <div ref={refLink} className="main-component" style={{opacity: inView?1:0.1, transition: '1s'}}>
      <h1 className="segment-title">About me</h1>
      <div ref={ref} className="smaller-panel first-panel" >
        <div className="photo-container">
          <PhotoDisplay images={images} transitionTime={10000} />
        </div>
      </div>
      <div className="bigger-panel">
        <p>{text.map((line,index) => {
          return (<span key={index}>{line}<br/><br/></span>)
        })}
        </p>
      </div>
    </div>
  );
}

export default About;
