import { Form, Input, Radio} from "antd"

export default function FormGeneraux () {

    return (
        <div className="bg-(--light-grey) p-5">
            <Form layout="vertical">
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
                        { required: true, message: "Veuillez saisir le code APE de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Secteur d'activité"}
                    name="Secteur_activite"
                    rules={[
                        { required: true, message: "Veuillez renseigner le secteur d'activité de l'entreprise." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <div className="bg-(--select-grey) p-5 flex flex-col gap-2">
                    <p className="text-[1.2em]">Addresse du Site</p>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <Form.Item
                                label={"Numéro"}
                                name="streetNumero"
                                rules={[
                                    { required: true, message: "Veuillez renseigner le numéro de voie." },
                                ]}
                                >
                                <Input />
                            </Form.Item>

                        </div>
                        <div className="flex-1">
                            <Form.Item
                                label={"Voie"}
                                name="streetName"
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
                                name="ZipCode"
                                rules={[
                                    { required: true, message: "Veuillez saisir le code postal." },
                                ]}
                                >
                                <Input />
                            </Form.Item>

                        </div>
                        <div className="flex-1">
                            <Form.Item
                                label={"Commune"}
                                name="District"
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
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre de salariés." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Nombre d’intérimaires, sous-traitants"}
                    name="Nb_Interim"
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre d'interimaires et/ou sous-traitants." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Nombre de jours travaillés par semaine"}
                    name="Nb_jours_travailles"
                    rules={[
                        { required: true, message: "Veuillez renseigner le nombre de jours travaillés." },
                    ]}
                    >
                    <Input />
                </Form.Item>
                    <Form.Item>
                        <Radio.Group optionType="" buttonStyle="solid">
                <div className="flex flex-col">
                            <Radio value="Horaires fixes">Sur une plage horaire fixe, quasiment toujours les mêmes horaires</Radio>
                            <Radio value="Horaires flexibles">Sur des horaires de bureaux flexibles : entre 8 h et 20 h</Radio>
                            <Radio value="Horaires décalés">Sur des plages horaires en décalé (ex : début à 5 h ou fin à 21 h)</Radio>
                            <Radio value="3/8 ou 2/8">Sur des plages horaires en décalé (ex : début à 5 h ou fin à 21 h)</Radio>
                            
                        
                </div>
                        </Radio.Group>
                    </Form.Item>

            </Form>
        </div>
    )
}