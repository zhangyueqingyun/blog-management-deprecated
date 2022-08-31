import {useState} from 'react'

export default function useMouse() {
    const [ isOver, setOver ]= useState(false);

    function enter() {
        setOver(true)
    }

    function leave () {
        setOver(false)
    }

    return {
        isOver,
        enter,
        leave
    };
}