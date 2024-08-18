import logo from './logo.svg';
import './App.css';
import FormInput from './form/FormInput';
import Accordion from './accordion/Accordion';
import AccordionItem from './accordion/AccordionItem';
import Checkbox from './check-box/Checkbox';
import { InputTypes } from './input-types/InputTypes';
import InputTypesReducer from './input-types/InputTypesReducer';


function App() {
  return (
    <div className="App">
      {/* <FormInput /> */}
      {/* <AccordionItem /> */}
      {/* <Checkbox /> */}
      {/* <InputTypes /> */}
      <InputTypesReducer />
    </div>
  );
}

export default App;
