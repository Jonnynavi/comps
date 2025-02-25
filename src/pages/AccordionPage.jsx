import Accordion from "../components/Accordion";


function AccordionPage(){
  const items = [
    {
      label: "Can I se React on a project?",
      content: 'You can use React on any project you want. You can use React on any project!',
      id: 'sadghksfaf'
    },
    {
      label: "Can I se React on a project?",
      content: 'You can use React on any project you want. You can use React on any project!',
      id: 'hfjf'
    },
    {
      label: "Can I se React on a project?",
      content: 'You can use React on any project you want. You can use React on any project!',
      id: 'sadsdhfdhfaf'
    },
    {
      label: "Can I se React on a project?",
      content: 'You can use React on any project you want. You can use React on any project!',
      id: 'sadsa'
    }
  ];
  return <Accordion items={items} />
}

export default AccordionPage;