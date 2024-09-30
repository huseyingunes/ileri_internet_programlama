import {Dorduncu, Ucuncu} from './ucuncu'

function Ikinci()
{
    return <>Dünya</>
}

export default function Ilk()
{
    return <div>
        Merhaba 
        <Ikinci />
        <Ucuncu />
        <Dorduncu />
    </div>;
}