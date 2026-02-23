
import {Typography} from 'antd'
import Icon from '@mdi/react';
import { mdiCheckCircleOutline} from '@mdi/js';
import Button from '@Components/Button'

interface Props {
    save?: () => void
    cancel?: () => void
    qty?: number
    children: React.ReactNode;
}

export default function BoardInfos({save, cancel, qty, children}: Props) {

    return(
        <div className="flex flex-col bg-(--light-grey) p-8 gap-5 ">
            <Typography.Title level={4}>Résultat de l'intégration</Typography.Title>
            <div className="flex lg:flex-row flex-col bg-white p-8  border-l-3  border-(--green)  justify-between gap-10">
                <div className="flex items-center gap-5">
                    <Icon path={mdiCheckCircleOutline} color="var(--green" size={1.5} className="min-w-[30px]"/>
                    <div className ="flex flex-col gap-3 ">
                        <p className="text-[1.3em] font-medium">{qty} entités ont été identifiées et sont prêtes à être intégrées</p>
                        <p className="text-[1.3em] italic">Vérifiez les informations et sauvegarder l’intégration. Si des erreurs sont présentes, vous pouvez annuler et déposer un nouveau gabarit</p>
                    </div>
                </div>
                <div className="flex lg:flex-row  gap-2 items-center justify-end">
                    <Button title="Annuler" bgColor="white" onPress={cancel}/>
                    <Button iconPath={mdiCheckCircleOutline} title="Sauvegarder" bgColor="blue" onPress={save}/>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}