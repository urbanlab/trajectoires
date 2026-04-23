import { Form, Input, Checkbox, InputNumber, message} from "antd"
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';
import {sendToGrist} from '@Domains/companies/api'
import {useEffect} from 'react'
import {CompanyData} from '@Domains/companies/type'


export default function FormGeneraux ({companyId, data, onSave}: {companyId:number, data?:CompanyData, onSave: () => void}) {
    const [form] = Form.useForm()

    const FormData = data?.fields

    useEffect (() => {
        if (!FormData) return
        const transformed = {...FormData}
        if (Array.isArray(transformed.Horaires_Travail) && transformed.Horaires_Travail[0] === "L") {
            transformed.Horaires_Travail = transformed.Horaires_Travail.slice(1)
        }
        form.setFieldsValue(transformed)
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
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item
                    label={"Nom de l'établissement"}
                    name="Nom"
                    rules={[
                        { required: true, message: "Veuillez saisir le nom de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Siret"}
                    name="Siret"
                    rules={[
                        { required: true, message: "Veuillez saisir le n° de Siret de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Code APE"}
                    name="Code_APE"
                    rules={[
                        { required: true, message: "Veuillez saisir le code APE de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Secteur d'activité"}
                    name="Secteur_activite"
                    rules={[
                        { required: true, message: "Veuillez saisir le secteur d'activité de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <div className="bg-(--select-grey) p-5 flex flex-col gap-2">
                    <p className="text-[1.2em]">Adresse du site</p>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <Form.Item
                                label={"Numéro de voie"}
                                name="Numero_voie"
                                rules={[
                                    { required: true, message: "Veuillez renseigner le numéro de voie." },
                                ]}
                                >
                                <Input />
                            </Form.Item>

                        </div>
                        <div className="flex-1">
                            <Form.Item
                                label={"Nom de voie"}
                                name="Nom_voie"
                                rules={[
                                    { required: true, message: "Veuillez renseigner le nom de la voie." },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <Form.Item
                                label={"Code postal"}
                                name="Code_Postal"
                                rules={[
                                    { required: true, message: "Veuillez saisir le code postal." },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className="flex-1">
                            <Form.Item
                                label={"Ville"}
                                name="Commune"
                                rules={[
                                    { required: true, message: "Veuillez renseigner le nom de la commune." },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>

                </div>
                
                <Form.Item
                    label={"Nombre de salariés rattachés au site"}
                    name="Nb_salaries"
                    style={{marginTop: "10px"}}
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre de salariés." },
                    ]}
                    >
                    <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                </Form.Item>
                <Form.Item
                    label={"Nombre d’intérimaires, sous-traitants"}
                    name="Nb_Interim"
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre d'interimaires et/ou sous-traitants." },
                    ]}
                    >
                    <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                </Form.Item>
                <Form.Item
                    label={"Nombre de jours travaillés par semaine"}
                    name="Nb_jours_travailles"
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre de jours travaillés." },
                    ]}
                    >
                    <InputNumber style={{width: "100%", fontSize:'20px'}}/>
                </Form.Item>
                    <Form.Item
                        label={"Rythme de travail"}
                        name="Horaires_Travail"
                        rules={[
                        { required: true, message: "Veuillez renseigner un rythme de travail." },
                    ]}>
                        <Checkbox.Group className="w-full">
                            <div className="flex flex-col gap-2">
                                <Checkbox value="Horaires fixes">Sur une plage horaire fixe, quasiment toujours les mêmes horaires</Checkbox>
                                <Checkbox value="Horaires flexibles">Sur des horaires de bureaux flexibles : entre 8 h et 20 h</Checkbox>
                                <Checkbox value="Horaires décalés">Sur des plages horaires en décalé (ex : début à 5 h ou fin à 21 h)</Checkbox>
                                <Checkbox value="3/8 ou 2/8">Travail en cycles (2/8, 3/8)</Checkbox>
                            </div>
                        </Checkbox.Group>
                    </Form.Item>
                    <div className="flex justify-end gap-2">
                        <Button title="Annuler" bgColor={"white"} onPress={onCancel} />
                        <Button iconPath={mdiCheckCircleOutline} title="Sauvegarder" bgColor={"blue"} htmlType={"submit"}/>
                    </div>
            </Form>
        </div>
    )
}