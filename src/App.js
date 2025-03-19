import PackingList from './module-1/PackingList'
import PackingListTernary from './module-1/PackingListTernary'
import PackingListAnd from './module-1/PackingListAnd'
import Button from './module-1/Button';
import AlertButton from './module-1/AlertButton';
import Increment from './module-2/Increment';
import IncrementState from './module-2/IncrementState';
import StateVariable from './module-2/StateVariable'


function App() {
  return (
  <>
    {/* <PackingList />
    <PackingListTernary />
    <PackingListAnd />
    <Button /> <br /> <br />
    <AlertButton message="Uploading!!">
      Upload Image 
    </AlertButton> 
    <br /> <br />
    <AlertButton message="Playing!!">
      Play Movie
    </AlertButton>
    <br /> <br /> 
    <Increment /> */}
    <IncrementState />
    {/* <StateVariable /> */}

  </>
  );
}

export default App;