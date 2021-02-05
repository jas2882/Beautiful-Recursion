import Canvas from "./components/Canvas";
import CanvasContext from './contexts/CanvasContext'
import LeftMenu from "./components/LeftMenu";
import React, { useContext } from 'react';
import RightMenu from "./components/RightMenu";

const ContentBody = () => {

  const CanvasValues = useContext(CanvasContext);

  return (
    <CanvasContext.Provider value={CanvasValues}>
      <div className="content-body">
        {/*<LeftMenu value={CanvasValues} />*/}
        {/*<Canvas />*/}
        {/*<RightMenu value={CanvasValues} />*/}
      </div>
    </CanvasContext.Provider>
  )
}
export default ContentBody;
