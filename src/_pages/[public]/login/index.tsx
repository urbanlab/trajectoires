import { useAuth } from '@Hooks/auth';
import { useState } from 'react';
import { Form, Input, Typography, Image } from 'antd';
import Button from '@Components/Button'
import { useNavigate } from 'react-router-dom';
import Logo from '@Commons/img/trajectoires-logo.png'
import Mobilites from '@Commons/img/logo-mobilites.png'
import Metro from '@Commons/img/logo-metro.png'
import pkg from '@Package'


export function PageLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  async function handleSubmit(values: { email: string; password: string }) {
    setError('');

    const ok = await login(values.email, values.password);

    if (!ok) {
      setError('Email ou mot de passe incorrect');
      return;
    }

    navigate('/');
  }

  return (
    <div className='min-h-screen flex flex-col p-5'>
      <div className="flex-1 items-center justify-center flex flex-col">
        <div className="flex flex-col gap-4 lg:w-100 md:w-120 ">
          <div className=" flex px-10 items-center justify-center">
            <Image src={Logo} className="object-fit" preview={false}/>
          </div>
          <div className=" bg-(--select-grey) shadow-lg flex flex-col gap-5 p-8 " >
            <Typography.Title level={3}>Connexion</Typography.Title>
            <Form onFinish={handleSubmit} layout="vertical">
              <Form.Item
                label={"Identifiant"}
                name="email"
                rules={[
                  { required: true, message: "Veuillez saisir votre adresse email." },
                  { type: 'email', message: "L'adresse email n'est pas valide." },
                ]}
              >
                <Input placeholder={"Adresse email"} />
              </Form.Item>

              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[{ required: true, message: "Veuillez saisir votre mot de passe." }]}
              >
                <Input.Password
                  placeholder={"Mot de passe"}
                  onPressEnter={() => {}}
                />
              </Form.Item>

              {error && (
                <Typography.Text type="danger" style={{ display: 'block', marginBottom: 12 }}>
                  {error}
                </Typography.Text>
              )}
              <div className="flex justify-end  ">
                <Button title="Connexion" type="button" bgColor="red" />
              </div>
              <div className='mt-5 flex gap-5  justify-center'>
                <span className="text-[1.1em] italic">Pototype - {pkg.version}</span>
                <span className ="rounded-full bg-(--light-orange) px-2 text-[1.1em] italic">Alpha</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <footer>
        <div className='h-[60px]   sm:mt-0 flex flex-col sm:flex-row justify-end sm:items-center gap-15'>
          <span className='font-medium text-[1.1em]'>Une expérimentation menée par </span>
          <div className='flex gap-10 h-full'>
            <Image src={Mobilites} preview={false} height="100%" className="object-contain"></Image>
            <Image src={Metro} preview={false} height="100%" className="object-contain"></Image>
          </div>
        </div>
      </footer>
    </div>
  );
}
