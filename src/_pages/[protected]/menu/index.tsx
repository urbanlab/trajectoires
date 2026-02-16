
import { Typography } from 'antd';
import {CardStep} from '@Components/cardStep'
import content from '../../../../../content.json'



export function PageMenu() {
  const onClick = () => {
    console.log("boutonc cliqué")
  }
  return (
    <div className="grid grid-cols-3 gap-10">
      <CardStep title="Etape 1" subtitle="Fiche entreprise" text="Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour" disabled={false} onClick={onClick}></CardStep>
      <CardStep title="Etape 2" subtitle="Informations salariés" text="Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour" disabled={false} onClick={onClick}></CardStep>
      <CardStep title="Etape 3" subtitle="Enquête" text="Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour Bonjour" disabled={true} buttonText={"Lancer l'enquête"} onClick={onClick}></CardStep>
    </div>
  );
}
