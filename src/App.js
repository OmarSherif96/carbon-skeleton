import React from 'react';
import './index.scss';
import { Button, Dropdown} from 'carbon-components-react';
import { Home32 } from '@carbon/icons-react';
// import  from 'carbon-components';

function onSelectItem(event) {



  console.log(event);

}

function onClickButton(e) {
  alert('Hello');

}

function App() {
  return (
    <div className="App">
    <Home32></Home32>

    <br></br>

      <Button
        className="button-hello"
        disabled={false}
        iconDescription="Button icon"
        kind="primary"
        onClick={onClickButton}
        // onFocus={function noRefCheck(){}}
        renderIcon={undefined}
        size="default"
        tabIndex={0}
        type="button">
              Hello Button
              
    </Button>
    
    


    <Dropdown ariaLabel="Dropdown"
      disabled={false}
      helperText="This is not some helper text."
      id="carbon-dropdown-example"
      invalidText="A valid value is required"
      // itemToElement={function noRefCheck(){}}
      itemToString={item => (item ? item.id : '')}
      items={[
        {
          id: 'option-1',
          text: 'Option 1',
          name: 'name'
        },
        {
          id: 'option-2',
          text: 'Option 2'
        },
        {
          id: 'option-3',
          text: 'Option 3'
        },
        {
          id: 'option-4',
          text: 'Option 4'
        }
      ]}
      label="Dropdown menu options"
      light={false}
      onChange={onSelectItem}
      // or
      // onChange={event=>onSelectItem(event)}
      titleText="This is not a dropdown title."
      type="default" >
      </Dropdown>


    </div>
  );
}

export default App;
