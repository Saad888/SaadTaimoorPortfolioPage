import { useEffect, useState } from "react";

const HomeContent = (props) => {
  const [initiatedA, setInitiatedA] = useState(false);
  const [initiatedB, setInitiatedB] = useState(false);
  const [initiatedC, setInitiatedC] = useState(false);
  const [disableTransitions, setDisableTransitions] = useState(false);

  useEffect(() => {
    setTimeout(() => {setInitiatedA(true)}, 500);
    setTimeout(() => {setInitiatedB(true)}, 400);
    setTimeout(() => {setInitiatedC(true)}, 300);
    setTimeout(() => {setDisableTransitions(true)}, 1500);
  }
    , []);

  return (
    <div className={`home-content-wrapper home-content-wrapper-A ${initiatedA ? 'initiated-a' : ''} home-design ${disableTransitions ? 'disable-transition' : ''}`} >
      <div className={`home-content-wrapper home-content-wrapper-B ${initiatedB ? 'initiated-b' : ''} home-design ${disableTransitions ? 'disable-transition' : ''}`}>
        <div className={`home-content-wrapper home-content-wrapper-C ${initiatedC ? 'initiated-c' : ''} home-design ${disableTransitions ? 'disable-transition' : ''}`}>

        </div>
      </div>
    </div>
  )
}

export default HomeContent;