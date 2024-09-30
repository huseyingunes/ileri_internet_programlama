'use client'

function atis()
{
    alert("Atış yapıldı...")
}

export default function EventDeneme()
{
    return <>
        <h1>Eventler Eventler</h1>
        <button onClick={atis}>Take the Shot!</button>
    </>
}