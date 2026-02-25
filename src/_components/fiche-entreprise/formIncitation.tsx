import { Form, Input, Radio, Switch} from "antd"
import {useState} from 'react'
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';
import {sendToGrist} from '@Domains/companies/api'


export default function FormIncitation ({companyId}: {companyId:number}) {
    const [form] = Form.useForm()
    const [Fdm, setFmd] = useState(false)
    const [covoit, setCovoit] = useState(false)
    const [enquete, setEnquete] = useState(false)

    const onFinish = (values: any) => {
        sendToGrist(values, companyId)
    }


    return (
        <div className="bg-(--light-grey) flex flex-col p-5">
            <Form layout="vertical" className="flex flex-col gap-5" onFinish={onFinish} form={form}>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-5">
                        <p className="text-[1.2em]">FMD mis en place ? (Forfait mobilité douces)</p>
                        <div className="flex gap-5" >
                            <Switch
                            onChange={() => setFmd(!Fdm)}/>
                            <p>{Fdm ? "Oui": "Non"}</p>
                        </div>
                    </div>
                    <Form.Item
                        label={"Nombre de personne l’ayant demandé"}
                        name="Nb_Velo_recharge"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place avec prise disponibles." },
                        ]}
                        >
                        <Input />
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
                    <div className="flex flex-col gap-5 flex-1">
                        <p className="text-[1.2em]">Mise à disposition d'un outil de mise en relation pour le covoiturage ?</p>
                        <div className="flex gap-5" >
                            <div className="flex gap-5 ">
                                <Switch
                                onChange={() => setCovoit(!covoit)}/>
                                <p>{covoit ? "Oui": "Non"}</p>
                            </div>
                        </div>
                    </div>
                    <Form.Item className="flex-1">
                        <Radio.Group  buttonStyle="solid" >
                            <div className="flex flex-col">
                                <Radio value="Aros">En covoit Rendez-vous (Aros)</Radio>
                                <Radio value="Blablacar">Blablacar Daily</Radio>
                                <Radio value="Autre">Autre</Radio>
                            </div>
                    </Radio.Group>
                    </Form.Item>

                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-5 flex-1">
                        <p className="text-[1.2em]">Avez-vous déjà organisé une enquête mobilité ?</p>
                        <div className="flex gap-5" >
                            <div className="flex gap-5 ">
                                <Switch
                                onChange={() => setEnquete(!enquete)}/>
                                <p>{enquete ? "Oui": "Non"}</p>
                            </div>
                        </div>
                    </div>
                    <Form.Item
                        label={"En quelle année ?"}
                        name="Annee_enquete_mob"
                        rules={[
                            { required: true, message: "Veuillez saisir un valeure." },
                        ]}
                        >
                        <Input />
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