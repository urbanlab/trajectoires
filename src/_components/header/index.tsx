import TrajectoiresLogo from '@Commons/img/trajectoires-logo.png';
import { useAuth } from '@Hooks/auth';
import { PoweroffOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Image,  Typography, theme } from 'antd';

const { useToken } = theme;

export function Header() {
  const {token} = useToken()
  const { user, logout } = useAuth();

  return (
    <div className=" h-25 w-full shadow-lg flex justify-between p-4 fixed ">
      <div className=" flex items-center">
        <Image src={TrajectoiresLogo} preview={false} width={250} className='' /> 
      </div>
      {user && (
        <div className="flex py-4 gap-5  items-center">
          <div className="rounded-full bg-gray-300 px-3 py-2 flex gap-3">
            <Typography.Text style={{fontSize:18}} className='font-bold'>{`${user.fields.Firstname} ${user.fields.Lastname.toUpperCase()}`}{' '}<Typography.Text  style={{color: token.colorPrimary, fontSize:18 }}>-{' '}{user.fields.ref_company_Name}</Typography.Text></Typography.Text>
            <UserOutlined style={{fontSize:25 }} className="" />
          </div>
          <InfoCircleOutlined style={{color:"#048BA8", fontSize:25}} />
          <PoweroffOutlined onClick={logout} style={{color: token.colorPrimary, fontSize:25 }} />
        </div>
      )}
    </div>
  );
}
