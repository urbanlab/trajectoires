import {useState} from 'react'
import { createPortal } from 'react-dom'
import {theme, Image } from 'antd'
import content from '@/content.json'
import Icon from '@mdi/react'
import { mdiChevronRight, mdiPlus } from '@mdi/js'
import Mobilites from '@Commons/img/logo-mobilites.png'
import Metro from '@Commons/img/logo-metro.png'

interface Modale {
    isOpen: boolean;
    onClose: () => void
}


export default function Modale({isOpen, onClose}: Modale){
  const Content = content.Modale

  if (!isOpen) {
    return null
  }
  return (
    createPortal(<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 ">
      <div className="relative flex flex-col gap-6 bg-(--light-grey) p-8 shadow-2xl w-full max-w-[500px] max-h-full   ">
        <button className="absolute top-10 right-10 cursor-pointer" onClick={onClose}>
          <span className="block rotate-45"><Icon path={mdiPlus} size={1}/></span>
        </button>
        <span className="text-[2em] font-bold">Trajectoires</span>
        <span className="text-[1.5em] font-bold text-(--red)">La démarche</span>
        <span className="text-[1em]">{Content.demarche1}</span>
        <span className="text-[1em]">{Content.demarche2}</span>
        <div className="rounded-4xl bg-white p-5 flex items-center mt-10">
          <Icon path={mdiChevronRight} color={'#99C24D'} size={1}/>
          <div className=" flex flex-col gap-1">
            <span className="italic text-[1em]">Contact :</span>
            <a href="mailto:agencedesmobilites@grandlyon.com">
              <span className="italic text-[1em] underline">agencedesmobilites@grandlyon.com</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-1">
          <span className="font-medium text-[1em]">Une expérimentation menée par </span>
          <div className="flex gap-3 items-center px-10">
            <a href="https://www.grandlyon.com/" target="_blank">
              <Image src={Metro} preview={false} height={100} className="object-contain"></Image>
            </a>
            <a href="https://mobilites.grandlyon.com/espace-pros" target="_blank">
              <Image src={Mobilites} preview={false} height={60} className="object-contain"></Image>
            </a>
          </div>
        </div>
      </div>
    </div>, document.body)
  )
}