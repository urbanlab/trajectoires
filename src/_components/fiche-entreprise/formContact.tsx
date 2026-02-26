import { Form, Input,} from "antd"
import Icon from '@mdi/react';
import { mdiCheckCircleOutline, mdiInformationVariantCircleOutline} from '@mdi/js';

export default function FormContact ({data}: {data?:[]}) {
    console.log('datauser' , data)
    return (
        <div className="bg-(--light-grey) flex flex-col gap-5 p-5">
            <p className="text-[1.5em]">Contacts renseignés</p>
            <div className="bg-white border-l-2 border-(--blue) flex gap-5 p-2 items-center">
                <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1}/>
                <p className="text-[1.2em] italic">Si une erreur existe, merci de contacter votre référents à l’agence des mobilités</p>
            </div>
            {
                data?.map((user:any, index) => {
                    return(
                        <Form layout="vertical" className='flex flex-col gap-5'>
                            <div  className="bg-(--select-grey) p-5 ">
                                <div className="flex gap-2">
                                    <Form.Item
                                        className="flex-1"
                                        label={"Nom"}
                                        name=""
                                        rules={[
                                            { },
                                        ]}
                                        >
                                        <Input disabled placeholder={user.Nom}/>
                                    </Form.Item>
                                    <Form.Item
                                        className="flex-1"
                                        label={"Prénom"}
                                        name=""
                                        rules={[
                                            { required: false, message: "Veuillez renseigner le champs." },
                                        ]}
                                        >
                                        <Input disabled placeholder={user.Prenom} />
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
                                        <Input disabled placeholder={user.Email} />
                                    </Form.Item>
                                    <Form.Item
                                        className="flex-1"
                                        label={"Numéro de téléphone"}
                                        name=""
                                        rules={[
                                            { required: false, message: "Veuillez renseigner le champs." },
                                        ]}
                                        >
                                        <Input disabled placeholder={user.Telephone} />
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
                                        <Input disabled placeholder={user.Fonction} />
                                    </Form.Item>
                                    <Form.Item
                                        className="flex-1"
                                        label={"Rôle"}
                                        name=""
                                        rules={[
                                            { required: false, message: "Veuillez renseigner le champs." },
                                        ]}
                                        >
                                        <Input disabled placeholder={user.Role} />
                                    </Form.Item>
                                </div>
                            </div>
                            
                        </Form>
                    )
                })
            }

            
        </div>
    )
}