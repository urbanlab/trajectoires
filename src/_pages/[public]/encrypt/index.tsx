import { useState } from 'react'
import { Form, Input, Typography } from 'antd'
import Button from '@Components/Button'
import { encryptPassword } from '@Providers/auth/crypto-utils'

const AES_KEY = import.meta.env.VITE_AES_KEY

export function EncryptPage() {

  const [error, setError] = useState<string>('')
  const [encryptedPass, setEncryptedPass] = useState<string>('')

  async function handleSubmit(values: { password: string }) {
    setError('')

    // Encrypt & Set password
    const encPwd = encryptPassword(values.password, AES_KEY)
    setEncryptedPass(encPwd)
  }

  return (
    <div className="w-130 m-auto pt-10">
      <Typography.Title level={3}>Encryption des mots de passe</Typography.Title>
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[{ required: true, message: 'Veuillez saisir un mot de passe' }]}
        >
          <Input.Password
            placeholder={'Mot de passe'}
            onPressEnter={() => {}}
          />
        </Form.Item>
        {error && (
          <Typography.Text type="danger" style={{ display: 'block', marginBottom: 12 }}>
            {error}
          </Typography.Text>
        )}
        <Button title="Valider" type="button" bgColor="green" />
        {encryptedPass && (
          <div className="pt-3">
            <Typography.Text style={{ display: 'block', fontSize: 19 }}>
              <u>Mot de passe encrypté :</u> <br></br>
              {encryptedPass}
            </Typography.Text>
          </div>
        )}
      </Form>
    </div>
  )
}