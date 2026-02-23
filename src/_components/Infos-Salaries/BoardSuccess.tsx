
import {Typography} from 'antd'
import Icon from '@mdi/react';
import {mdiAlertCircle} from '@mdi/js';
import Button from '@Components/Button'

interface Props {

    cancel?: () => void
    qty?: number
    children: React.ReactNode;
}

export default function BoardInfos({cancel, qty, children}: Props) {
    
    return(
        <div className="flex flex-col bg-(--light-grey) p-8 gap-5 ">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Typography.Title level={4}>Salariés renseignés</Typography.Title>
                    <div>
                        <p className="italic rounded-full bg-(--light-orange) px-2 text-[1.3em] ">{qty} Salariés</p>
                    </div>
                </div>
                <Button iconPath={mdiAlertCircle} title="Réinitialiser" bgColor="white" onPress={cancel}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}