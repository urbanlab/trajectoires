import { Form, Input,} from "antd"
import  Button from '@Components/Button'
import { mdiCheckCircleOutline} from '@mdi/js';

export default function FormVehicules ({companyId}: {companyId:number}) {
    return (
        <div className="bg-(--light-grey) flex flex-col p-5">
            <Form layout="vertical" className="flex flex-col gap-5">
                <div className="bg-(--select-grey) flex flex-col p-5" >
                    <p className="text-[1.2em]">Nombre de poids lourds en fonction du Crit’Air</p>
                    <Form.Item
                        label={"Crit’Air 0"}
                        name="Nb_poids_lourds_critair0"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 0" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_poids_lourds_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 1" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_poids_lourds_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 2" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_poids_lourds_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de poids lourd crit'Air 3 et +" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </div>
                <div className="bg-(--select-grey) flex flex-col p-5" >
                    <p className="text-[1.2em]">Nombre de voitures de fonction par niveau du Crit’Air</p>
                    <Form.Item
                        label={"Crit’Air 0"}
                        name="Nb_voiture_fonction_critair0"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 0" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_voiture_fonction_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 1" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_voiture_fonction_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 2" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_voiture_fonction_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de fonction crit'Air 3 et +" },
                        ]}
                        >
                        <Input />
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
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 1"}
                        name="Nb_voiture_service_critair1"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 1" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 2"}
                        name="Nb_voiture_service_critair2"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 2" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Crit’Air 3 et +"}
                        name="Nb_voiture_service_critair3_"
                        rules={[
                            { required: true, message: "Veuillez saisir le nombre de voitures de service crit'Air 3 et +" },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </div>
                <Form.Item
                    label={"Nombre de vélo de service"}
                    name="Nb_velo_service"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de vélo de service" },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Nombre de vélo de fonction"}
                    name="Nb_velo_fonction"
                    rules={[
                        { required: true, message: "Veuillez saisir le nombre de vélo de fonction" },
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