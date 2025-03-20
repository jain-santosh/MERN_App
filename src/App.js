import { useState } from 'react';
import PackingList from './module-1/Conditional Rendering/PackingList'
import PackingListTernary from './module-1/Conditional Rendering/PackingListTernary'
import PackingListAnd from './module-1/Conditional Rendering/PackingListAnd'
import Button from './module-1/Event/Button';
import AlertButton from './module-1/Event/AlertButton';
import Increment from './module-2/useState/Increment';
import IncrementState from './module-2/useState/IncrementState';
import StateVariable from './module-2/useState/StateVariable'
import Timer from './module-2/useEffect/Timer';
import ThemeWindow from './module-2/useContext/ThemeWindow';
import BasicForm from './module-2/React-Form/BasicForm';
import ReactForm from './module-2/React-Form/ReactForm';
import BasicReactForm from './module-2/React-Form/BasicReactForm';


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
    {/* <IncrementState /> */}
    {/* <StateVariable /> */}
    <ThemeWindow />
    <BasicForm />
    <BasicReactForm />

  </>
  );
}

export default App;