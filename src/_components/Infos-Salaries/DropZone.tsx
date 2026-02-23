import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Icon from '@mdi/react';
import { mdiDownloadOutline  } from '@mdi/js';
import readXlsxFile from 'read-excel-file'
import { P } from '@antv/g2plot';

interface DropZoneProps {
    settingArray: (data: any[]) => void
}

export default function MyDropzone({settingArray}: DropZoneProps) {
    const [error, setError] = useState<string | null>(null)
    
    const onDrop = useCallback((Files: File[])  => {
        setError(null)
        const file = Files[0]
        readXlsxFile(file).then((rows) => {
            if (rows[0].length !== 6){
                setError("Le fichier déposé ne correspond pas au gabarit.")
                return
            }else {
                settingArray(rows)
            }

        })
        
        
    }, [])
    
    const {getRootProps, getInputProps, isDragActive, fileRejections} = useDropzone({onDrop, accept: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    }})

    return (
    <div {...getRootProps()} className='dash  cursor-pointer h-[180px]'>
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center h-full p-8">
        {isDragActive ?
            <p className="text-[1.6em]">Déposer ici ...</p>
            :
            <div className="flex flex-col items-center gap-3">
                <Icon path={mdiDownloadOutline} color="var(--green)" size={2}/>
                <p className="text-[1.3em] mb-0 ">Déposer le gabarit préalablement complété.</p>
                <p className="italic text-[1em] mb-0 ">Format accepté : xlsx</p>
                {fileRejections.length > 0 ? 
                    <p className="text-(--red) text-[1.3em] ">Le format de ce document n'est pas pris en charge.</p>
                : error ? 
                <p className="text-(--red) text-[1.3em] ">{error}</p>
                : null
                }
            </div>
            }
            </div>
    </div>
    )
}