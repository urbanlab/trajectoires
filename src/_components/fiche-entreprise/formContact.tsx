import { Form, Input,} from "antd"
import  Button from '@Components/Button'
import Icon from '@mdi/react';
import { mdiCheckCircleOutline, mdiInformationVariantCircleOutline} from '@mdi/js';
import {CompanyData} from '@Domains/companies/type'

export default function FormContact ({companyId, data}: {companyId:number, data?:CompanyData}) {
    return (
        <div className="bg-(--light-grey) flex flex-col gap-5 p-5">
            <p className="text-[1.5em]">Contacts renseignés</p>
            <div className="bg-white border-l-2 border-(--blue) flex gap-5 p-2 items-center">
                <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1}/>
                <p className="text-[1.2em] italic">Si une erreur existe, merci de contacter votre référents à l’agence des mobilités</p>
            </div>
                <Form layout="vertical" className='flex flex-col gap-5'>
                    <div  className="bg-(--select-grey) p-5 ">
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Nom"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Doe"}/>
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Prénom"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"John"} />
                            </Form.Item>
                        </div>
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Email"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"jdoe@email.com"} />
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Numéro de téléphone"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"06 23 22 55 44"} />
                            </Form.Item>
                        </div>
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Poste"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Directeur d’agence"} />
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Rôle"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Responsable de site"} />
                            </Form.Item>
                        </div>
                    </div>
                    <div  className="bg-(--select-grey) p-5 ">
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Nom"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Jane"}/>
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Prénom"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Mary"} />
                            </Form.Item>
                        </div>
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Email"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"maryj@email.com"} />
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Numéro de téléphone"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"06 55 44 11 44"} />
                            </Form.Item>
                        </div>
                        <div className="flex gap-2">
                            <Form.Item
                                className="flex-1"
                                label={"Poste"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Responsable RH"} />
                            </Form.Item>
                            <Form.Item
                                className="flex-1"
                                label={"Rôle"}
                                name=""
                                rules={[
                                    { required: false, message: "Veuillez renseigner le champs." },
                                ]}
                                >
                                <Input disabled placeholder={"Référent mobilité"} />
                            </Form.Item>
                        </div>
                    </div>
                </Form>

            
        </div>
    )
}