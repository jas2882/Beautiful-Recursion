import Canvas from './Canvas';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const ContentBody = () => {

  return (
    <div className="content-body">
      <LeftMenu />
      <Canvas />
      <RightMenu />
    </div>
  )
}
export default ContentBody;