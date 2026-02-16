import { useAuth } from '@Hooks/auth';
import { useState } from 'react';
import { Button, Form, Input, Typography, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from '@Commons/img/trajectoires-logo.png'
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
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className="flex flex-col gap-4 lg:w-100 md:w-100">
        <div className=" flex px-10">
          <Image src={Logo} className="object-fit"/>
        </div>
        <div className=" p-5 bg-[#EDEDED] shadow-lg flex flex-col gap-5 " >
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
                placeholder={"Mot de Passe"}
                onPressEnter={() => {}}
              />
            </Form.Item>

            {error && (
              <Typography.Text type="danger" style={{ display: 'block', marginBottom: 12 }}>
                {error}
              </Typography.Text>
            )}
            <div className="flex justify-end ">
              <Button type="primary"  htmlType="submit">
                Connexion
              </Button>
            </div>
            <div className='mt-2 flex gap-5  justify-center'>
              <span>Pototype {pkg.version}</span>
              <span className ="rounded-full bg-[#FCBA5B] px-1 ">Alpha</span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
