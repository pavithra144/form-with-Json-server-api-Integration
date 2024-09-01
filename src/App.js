import logo from './logo.svg';
import './App.css';
import FormInput from './form/FormInput';
import Accordion from './accordion/Accordion';
import AccordionItem from './accordion/AccordionItem';
import Checkbox from './check-box/Checkbox';
import { InputTypes } from './input-types/InputTypes';
import InputTypesReducer from './input-types/InputTypesReducer';
import Post from './testApiCalls/Posts';
import Input from './memo-handson/Input';


function App() {
  return (
    <div className="App">
      {/* <FormInput /> */}
      {/* <AccordionItem /> */}
      {/* <Checkbox /> */}
      {/* <InputTypes /> */}
      {/* <InputTypesReducer /> */}
      {/* <Post /> */}
      <Input />
    </div>
  );
}

export default App;
