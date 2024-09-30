function Araba(props:any)
{
    return <>
    Arabam {props.marka} {props.model}
    </>
}

export default function Cikti()
{
    const model = "T10X"
    return <Araba marka="TOGG" model={model} />;
}