import { Form, Input, Radio, Switch} from "antd"
import {useState, useEffect} from 'react'
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';
import {sendToGrist} from '@Domains/companies/api'
import {CompanyData} from '@Domains/companies/type'



export default function FormIncitation ({companyId, data}: {companyId:number, data?: CompanyData}) {
    const [form] = Form.useForm()

    const FmdYes = Form.useWatch('FMD', form)
    const MER =Form.useWatch('Outil_MER_covoit', form)
    const Enquete = Form.useWatch ('Deja_fait_enquete_mob0', form)
    const FormData = data?.fields

    useEffect (() => {
        form.setFieldsValue(FormData)
    }, [data])

    useEffect (() => {
        if (FmdYes === false) {
            form.setFieldValue('Nb_pers_FMD', 0)
        }
        if (MER === false) {
            form.setFieldValue('Quelle_application_covoit', null)
        }

        if (Enquete === false) {
            form.setFieldValue('Annee_enquete_mob', null)
        }
    }, [FmdYes, Enquete, MER, form])

    const onFinish = (values: any) => {
        sendToGrist(values, companyId)
    }


    return (
        <div className="bg-(--light-grey) flex flex-col p-5">
            <Form layout="vertical" className="flex flex-col gap-5" onFinish={onFinish} form={form}>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5" >
                            <Form.Item
                            label ={"FMD mis en place ? (Forfait mobilité douces)"}
                            name={"FMD"}
                            valuePropName="checked">
                                <Switch/>
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item
                        label={"Nombre de personne l’ayant demandé"}
                        name="Nb_pers_FMD"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place avec prise disponibles." },
                        ]}
                        >
                        <Input disabled={!FmdYes}/>
                    </Form.Item>

                </div>
                <div className=" bg-(--select-grey) flex flex-col gap-5 p-5">
                    <p className="text-[1.2em]">Remboursement des transports en communs</p>
                        <Form.Item
                        label={"Pourcentage remboursement abonnement transports en commun mis en place :"}
                        name="Pourc_remb_transport"
                        rules={[
                            { required: true, message: "Veuillez saisir un valeure." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Nombre d’abonnements remboursés"}
                        name="Nb_abo_remb"
                        rules={[
                            { required: true, message: "Veuillez saisir un valeure." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Montant total d’abonnement remboursé annuel"}
                        name="Montant_total_remb"
                        rules={[
                            { required: true, message: "Veuillez saisir un valeure." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </div>
                <div className="flex gap-5">
                    <Form.Item
                        className="flex-1"
                        label={"Mise à disposition d'un outil de mise en relation pour le covoiturage ?"}
                        name={"Outil_MER_covoit"}
                        valuePropName="checked">
                        <Switch/>
                    </Form.Item>
                    <Form.Item className="flex-1"
                    label={"Via quelle application ?"}
                    name={"Quelle_application_covoit"}
                    >
                        <Radio.Group  buttonStyle="solid" disabled={!MER} >
                            <div className="flex flex-col">
                                <Radio value="Aros">En covoit Rendez-vous (Aros)</Radio>
                                <Radio value="Blablacar">Blablacar Daily</Radio>
                                <Radio value="Autre">Autre</Radio>
                            </div>
                    </Radio.Group>
                    </Form.Item>

                </div>
                <div className="flex gap-5">

                    <Form.Item
                    className="flex-1"
                    label={"Avez-vous déjà organisé une enquête mobilité ?"}
                    name={"Deja_fait_enquete_mob"}
                    valuePropName="checked">
                        <Switch/>
                    </Form.Item>
                    <Form.Item
                        className="flex-1"
                        label={"En quelle année ?"}
                        name="Annee_enquete_mob"
                        rules={[
                            { required: true, message: "Veuillez saisir un valeure." },
                        ]}
                        >
                        <Input disabled={!Enquete}/>
                    </Form.Item>

                </div>
                <div className="flex justify-end gap-2">
                    <Button title="Annuler" bgColor={"white"}/>
                    <Button iconPath={mdiCheckCircleOutline} title="Sauvagarder" bgColor={"blue"}/>
                </div>
            </Form>
        </div>
    )
}