function Araba(props:any)
{
    return <li>{props.marka}</li>
}

export default function Arabalar()
{
    const arabalar = ["TOGG", "Anadol", "BMC", "Devrim"]
    return (
        <ul>
            {arabalar.map((araba) => <Araba marka={araba} />)}
        </ul>
    )
}