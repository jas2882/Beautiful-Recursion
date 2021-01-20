import Canvas from './Canvas';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const ContentBody = () => {

  return (
    <div className="content-body">
      <LeftMenu />
      <div className="canvas-section">
        <Canvas />
      </div>
      <RightMenu />
    </div>
  )
}
export default ContentBody;