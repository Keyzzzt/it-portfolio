import s from './contact.module.scss'
import {CustomInput} from "../999_Chunks/CustomInput/CustomInput";
import React, {FormEvent, useState} from "react";

type MessageBody = {
    name: string
    text: string
    email: string
}
// FIXME
export const Contact = () => {
    // TODO check localstorage for saved data
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [inputError, setInputError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const message: MessageBody = {
            name,
            text,
            email
        }
    }
    return (
        <section className='section' id='contact'>
            <div className={`container ${s.localContainer}`}>
                <h2 className='sectionTitle'>Contact</h2>
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
                    <input
                        className='commonBtn'
                        type="submit"
                        value='Send'
                    />
                </form>
            </div>
        </section>
    )
}