import {RefObject, useRef, useState} from "react";

export function useStateRef<T>(defaultValue: T): [T, (value: T) => void, RefObject<T>] {
    const ref = useRef(defaultValue)
    const [state, _setState] = useState(defaultValue)
    const setState = (value: T) => {
        _setState(value)
        ref.current = value
    }
    return [state, setState, ref]
}
