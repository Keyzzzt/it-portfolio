import styles from './CustomInput.module.scss'
import React, {FC, ChangeEvent, useState, useEffect, ChangeEventHandler} from 'react'
import {isEmail} from "../../../utils/isEmail";

type CustomInputProps = {
    type: string
    placeholder: string
    name: string
    inputError: boolean
    value: string
    returnValue(value: string): void
    setInputError(value: boolean): void
}

export const CustomInput: FC<CustomInputProps> = ({type, placeholder, name, inputError, returnValue, setInputError, value}) => {
    const [errorMessage, setErrorMessage] = useState('Empty field')
    const [isDirty, setIsDirty] = useState(false)
    const showError = errorMessage && isDirty

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setInputError(false)
        returnValue(e.currentTarget.value)
    }

    useEffect(() => {
        if (inputError) {
            setIsDirty(true)
        }
    }, [inputError])

    useEffect(() => {
        // Handle Error Messages
        switch (name) {
            case 'email':
                if (isEmail(value)) {
                    setErrorMessage('')
                    break
                } else {
                    setErrorMessage('Enter a valid email')
                    break
                }
            default:
                if (value.length > 1) {
                    setErrorMessage('')
                    break
                } else {
                    setErrorMessage('Field is required')
                    break
                }
        }
    }, [value])

    return (
        <div className={`${styles.field} ${showError ? styles.shake : ''}`}>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className={`${showError ? styles.borderError : ''} ${styles.customInput}`}
                    onBlur={() => setIsDirty(true)}
                />
            ) : (
                <input
                    onBlur={() => setIsDirty(true)}
                    className={`${showError ? styles.borderError : ''} ${styles.customInput}`}
                    onChange={onChangeHandler}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                />
            )}
            {showError && <div className={styles.errorText}>{errorMessage}</div>}
        </div>
    )
}
