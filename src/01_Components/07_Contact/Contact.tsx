import s from './contact.module.scss'
import globalStyles from "../../02_Styles/global.module.scss";

import {CustomInput} from "../999_Chunks/CustomInput/CustomInput";
import React, {FormEvent, useState} from "react";

type MessageBody = {
    name: string
    lastName: string
    subject: string
    text: string
    email: string
}
// FIXME
export const Contact = () => {
    // TODO check localstorage for saved data
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [inputError, setInputError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const message: MessageBody = {
            name,
            lastName,
            subject,
            text,
            email
        }
    }
    const handleSave = () => {
        const body: MessageBody = {
            name,
            lastName,
            subject,
            text,
            email
        }
        // TODO Save to localStorage
        // TODO Show success message

    }


    return (
        <section className={s.contactSection} id='contact'>
            <div className={globalStyles.container + ' ' + s.container}>
                <div><h2 className={s.sectionTitle}>Contact</h2></div>
                <form className={s.contactForm} onSubmit={handleSubmit}>
                    <CustomInput
                        value={name}
                        returnValue={setName}
                        setInputError={setInputError}
                        inputError={inputError}
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                    <CustomInput
                        value={lastName}
                        returnValue={setLastName}
                        setInputError={setInputError}
                        inputError={inputError}
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                    />
                    <CustomInput
                        value={subject}
                        returnValue={setSubject}
                        setInputError={setInputError}
                        inputError={inputError}
                        type="text"
                        placeholder="Subject"
                        name="subject"
                    />
                    <CustomInput
                        value={email}
                        returnValue={setEmail}
                        setInputError={setInputError}
                        inputError={inputError}
                        type="email"
                        placeholder="Email"
                        name="email"
                    />

                    <CustomInput
                        value={text}
                        returnValue={setText}
                        setInputError={setInputError}
                        inputError={inputError}
                        type="textarea"
                        placeholder="Type your message here..."
                        name="mail"
                    />
                    <div className={s.buttons}>
                        <input
                            type="submit"
                            value='Send'
                        />
                        <input
                            type="button"
                            onClick={handleSave}
                            value='Save'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}