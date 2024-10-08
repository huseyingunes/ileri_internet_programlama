function Araba(props:any)
{
    return <li>{props.marka} - {props.model}</li>
}

export default function Arabalar()
{
    const arabalar = [
        {"marka": "TOGG", model:"T10X"},
        {"marka": "Anadol", model:"A1"},
        {"marka": "BMC", model:"Fatih"},
        {"marka": "Devrim", model:"Otto"}
    ]
    return (
        <ul>
            {arabalar.map((araba) => 
                <Araba marka={araba.marka} model={araba.model} />
            )}
        </ul>
    )
}