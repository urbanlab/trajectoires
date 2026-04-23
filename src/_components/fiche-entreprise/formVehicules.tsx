import { Form, InputNumber, message} from "antd"
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';
import {sendToGrist} from '@Domains/companies/api'
import {useEffect} from 'react'
import {CompanyData} from '@Domains/companies/type'


export default function FormVehicules ({companyId, data, onSave}: {companyId:number, data?: CompanyData,  onSave:() => void}) {
    const [form] = Form.useForm()

    const FormData = data?.fields

    useEffect (() => {
        form.setFieldsValue(FormData)
    }, [data])

    const onFinish = async (values: any) => {
        try{
            await sendToGrist(values, companyId)
            onSave()
            message.success("Informations sauvegardées avec succès !")
        } catch(error) {
            message.error("Impossible de sauvegarder les informations")
        }
    }
    const onCancel = () => {
        form.resetFields()
        onSave()
        message.success("Modifications annulées !")
    }

    return (
        <div className="bg-(--light-grey) flex flex-col p-5">
            <Form layout="vertical" className="flex flex-col gap-5" onFinish={onFinish} form={form}>
                <div className="bg-(--select-grey) flex flex-col p-5" >
                    <p className="text-[1.2em]">Nombre de voitures de fonction par niveau du Crit’Air</p>
                    <Form.Item
                        label={"Crit’Air 0"}
                        name="Nb_voiture_fonction_critair0"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 0" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_voiture_fonction_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 1" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_voiture_fonction_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 2" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_voiture_fonction_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 3 et +" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                </div>
                <div className="bg-(--select-grey) flex flex-col p-5" >
                    <p className="text-[1.2em]">Nombre de voitures de service par niveau du Crit’Air</p>
                    <Form.Item
                        label={"Crit’Air 0"}
                        name="Nb_voiture_service_critair0"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 0" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_voiture_service_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 1" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_voiture_service_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 2" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_voiture_service_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 3 et +" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                </div>
                <div className="bg-(--select-grey) flex flex-col p-5" >
                    <p className="text-[1.2em]">Nombre de poids lourds en fonction du Crit’Air</p>
                    <Form.Item
                        label={"Crit’Air 0"}
                        name="Nb_poids_lourds_critair0"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 0" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_poids_lourds_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 1" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_poids_lourds_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 2" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_poids_lourds_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 3 et +" },
                        ]}
                        >
                        <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                    </Form.Item>
                </div>
                <Form.Item
                    label={"Nombre de vélo de service"}
                    name="Nb_velo_service"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de vélo de service" },
                    ]}
                    >
                    <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                </Form.Item>
                <Form.Item
                    label={"Nombre de vélo de fonction"}
                    name="Nb_velo_fonction"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de vélo de fonction" },
                    ]}
                    >
                    <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                </Form.Item>
                <div className="flex justify-end gap-2">
                    <Button title="Annuler" bgColor={"white"} onPress={onCancel}/>
                    <Button htmlType="submit" iconPath={mdiCheckCircleOutline} title="Sauvegarder" bgColor={"blue"}/>
                </div>
            </Form>
        </div>
    )
}