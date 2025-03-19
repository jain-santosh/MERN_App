import { useState } from 'react';
import PackingList from './module-1/PackingList'
import PackingListTernary from './module-1/PackingListTernary'
import PackingListAnd from './module-1/PackingListAnd'
import Button from './module-1/Button';
import AlertButton from './module-1/AlertButton';
import Increment from './module-2/Increment';
import IncrementState from './module-2/IncrementState';
import StateVariable from './module-2/StateVariable'
import Timer from './module-2/Timer';
import ThemeWindow from './module-2/ThemeWindow';
import BasicForm from './module-2/BasicForm';
import ReactForm from './module-2/ReactForm';

function App() {

  return (
      <div>
      {/* Module 1 */}
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

      // Module 2 
      <br /> <br /> 
      <Increment /> */}
      {/* <IncrementState /> */}
      {/* <StateVariable /> */}
      <Timer />
      <ThemeWindow />

      <BasicForm />
      <ReactForm />

    </div>
  );
}

export default App;