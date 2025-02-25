import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoArrowDown } from "react-icons/go";


function ButtonPage(){
  return <div className='flex-auto'>
    <Button primary rounded outline className="mb-3"><GoBell />Click me!!</Button>
    <Button secondary outline className="mb-3"><GoArrowDown/>Click me!!</Button>
    <Button success rounded className="mb-3"><GoCloudDownload />Click me!!</Button>
    <Button warning className="mb-3">Click me!!</Button>
    <Button danger className="mb-3">Click me!!</Button>
    <Button className="mb-3">Click me!!</Button>

  </div>;
}

export default ButtonPage;