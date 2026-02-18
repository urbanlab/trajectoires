import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Icon from '@mdi/react';
import { mdiDownloadOutline  } from '@mdi/js';
import readXlsxFile from 'read-excel-file'

interface DropZoneProps {
    settingArray: (data: any[]) => void
}

export default function MyDropzone({settingArray}: DropZoneProps) {
    
    const onDrop = useCallback(Files => {
        const xlsx = Files[0]
        readXlsxFile(xlsx).then((rows) => {
            settingArray(rows)
        
        })
        

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
    <div {...getRootProps()} className='dash p-8 cursor-pointer h-[250px]'>
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center h-full">
        {isDragActive ?
            <p className="text-[1.6em]">Déposer ici ...</p>
            :
            <div className="flex flex-col items-center">
                <Icon path={mdiDownloadOutline} color="var(--green)" size={3}/>
                <p className="text-[1.6em]">Déposer le gabarit préalablement complété.</p>
                <p className="italic text-[1.3em] ">Format accepté : xlsx</p>
            </div>
            }
            </div>
    </div>
    )
}