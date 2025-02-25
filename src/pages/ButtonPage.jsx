import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoArrowDown } from "react-icons/go";


function ButtonPage(){
  return <div>
    <Button primary rounded outline><GoBell />Click me!!</Button>
    <Button secondary outline><GoArrowDown/>Click me!!</Button>
    <Button success rounded><GoCloudDownload />Click me!!</Button>
    <Button warning>Click me!!</Button>
    <Button danger>Click me!!</Button>
    <Button>Click me!!</Button>

  </div>;
}

export default ButtonPage;