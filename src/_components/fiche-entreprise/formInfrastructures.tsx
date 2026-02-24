import { Form, Input, Radio, Switch} from "antd"
import {useState} from 'react'
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';


export default function FormInfra () {
    const [yes, isYes] = useState(false)

    return (
        <div className="bg-(--light-grey) flex flex-col p-5">
            <Form layout="vertical" className="flex flex-col gap-5">
                <div className=" bg-(--select-grey) flex flex-col gap-5 p-5">
                    <p className="text-[1.2em]">Nombre de places de stationnement voiture</p>
                    <Form.Item
                    label={"Places dédiées au covoiturage"}
                    name="Nb_Places_covoit"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de place de covoiturage." },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Places équipées d’une borne de recharge électrique"}
                        name="Nb_Places_borne"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place équipée d'une borne éléctrique." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Places sans distinctions"}
                        name="Nb_Places_normales"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place sans distinction." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </div>
                < div className=" bg-(--select-grey) flex flex-col gap-5 p-5">
                    <p className="text-[1.2em]">Nombre de places de stationnement vélo</p>
                    <Form.Item
                        label={"Places abritées des intempéries"}
                        name="Nb_Velo_abritees"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place abritées des intempéries." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Places sécurisées (à l’intérieur de l’enceinte ou dans un local prévu à cet effet)"}
                        name="Nb_Velo_securisees"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place sécurisées." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Places sans distinctions"}
                        name="Nb_Velo_normales"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place sans distinction." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <div className="flex gap-5 items-center">

                        <div className="flex-1 flex flex-col gap-5">
                            <p className="text-[1.2em]">Certaines des places sont équipées de prise pour recharger une batterie ? </p>
                            <div className="flex-1 flex gap-2">
                                <Switch
                                onChange={() => isYes(!yes)}/>
                                <p>{yes ? "Oui" : "Non"}</p>
                            </div>
                        </div>
                        <div className="flex-1">
                        <Form.Item
                        label={"Nombre de places avec prises disponibles"}
                        name="Nb_Velo_recharge"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de place avec prise disponibles." },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                        </div>
                    </div>    
                </div>
                <Form.Item
                    label={"Nombre de douches"}
                    name="Nb_Douches"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de douche." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Nombre de vestiaires"}
                    name="Nb_vestiaires"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de vestiaires." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Nombre d’espace de réparation avec outil à disposition"}
                    name="Nb_espaces_reparation"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre d'espace de réparation avec outil disponibles'." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <div className="flex justify-end gap-2">
                    <Button title="Annuler" bgColor={"white"}/>
                    <Button iconPath={mdiCheckCircleOutline} title="Sauvagarder" bgColor={"blue"}/>
                </div>
            </Form>
        </div>
    )
}