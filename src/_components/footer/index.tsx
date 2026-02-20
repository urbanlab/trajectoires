import Mobilites from '@Commons/img/logo-mobilites.png';
import Metro from '@Commons/img/logo-metro.png';
import Vehicules from'@Commons/img/illustrations.png'

import { Image  } from 'antd';

export function Footer() {
  return (
    <div className="pt-10 px-[4em] flex flex-row  justify-between gap-10  h-[150px] mb-1">
      <div className='flex flex-col h-full gap-5 '>
        <span className='font-medium text-[1.1em]  '>Une expérimentation menée par </span>
        <div className='flex gap-10 h-[45%]'>
          <Image src={Mobilites} preview={false} height="100%" className="object-contain"></Image>
          <Image src={Metro} preview={false} height="100%" className="object-contain"></Image>
        </div>
      </div>
      <Image src={Vehicules} preview={false} height="100%" className="object-contain"/>
    </div>
  );
}
