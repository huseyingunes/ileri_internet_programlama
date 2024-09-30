'use client'

export default function EventDeneme()
{
    const atis = (a:any) => {
        alert(a)
    }

    return <>
        <h1>Eventler Eventler</h1>
        <button onClick={() => atis("Goal!")}>Take the Shot!</button>
    </>
}