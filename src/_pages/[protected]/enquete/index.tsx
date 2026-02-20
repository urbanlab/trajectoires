
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EnqueteDemarree from '@Components/Enquete_Demarree'
import EnqueteCloturee from '@Components/Enquete_Cloturee'
export function Enquete() {
    const [finished, isFinished] = useState(false)
    const navigate = useNavigate()
    const updateState = () => {
        isFinished(!finished)
    }

    return (
        <>
        { finished ? 
            <EnqueteCloturee updateState={updateState}/>
            : 
            <EnqueteDemarree updateState={updateState}/>
        }
        </>
    )
}