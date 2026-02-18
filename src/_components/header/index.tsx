import {useState} from 'react'
import TrajectoiresLogo from '@Commons/img/trajectoires-logo.png';
import { useAuth } from '@Hooks/auth';
import { PoweroffOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiInformationVariantCircleOutline, mdiPowerStandby} from '@mdi/js';

import { Image,  Typography, theme } from 'antd';
import Modale from '@Components/modale'

const { useToken } = theme;

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const {token} = useToken()
  const { user, logout } = useAuth();

  const onClick = () => {
    setIsOpen(true)
  }

  return (
    <div className=" bg-white h-20 w-full shadow-lg flex justify-between p-4 fixed z-100 ">
      <Modale isOpen={isOpen} onClose={()=> setIsOpen(false)}/>
      <div className=" flex items-center">
        <Image src={TrajectoiresLogo} preview={false} width={250} className='' /> 
      </div>
      {user && (
        <div className="flex py-4 gap-5  items-center">
          <div className="rounded-full bg-(--dark-grey) px-3 py-2 flex gap-3 items-center">
            <Typography.Text style={{fontSize:18}} className='font-medium'>{`${user.fields.Firstname} ${user.fields.Lastname.toUpperCase()}`}{' '}<Typography.Text  style={{color: token.colorPrimary, fontSize:18 }}>-{' '}{user.fields.ref_company_Name}</Typography.Text></Typography.Text>
            <Icon path={mdiAccountCircleOutline} size={1.5}/>
          </div>
          <button onClick={onClick} className="cursor-pointer">
            <Icon path={mdiInformationVariantCircleOutline} size={1.5} color="var(--blue)"/>
          </button>
          <button onClick={()=> logout()} className="cursor-pointer">
            <Icon path={mdiPowerStandby} size={1.5} color="var(--red)"/>
          </button>
        </div>
      )}
    </div>
  );
}
