function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }

function GolDurum(props:any)
{
    const gol_durum = props.durum;
    if (gol_durum)
        return <MadeGoal />
    else
        return <MissedGoal />
}

export default function Sonuc()
{
    return <GolDurum durum={false} />
}