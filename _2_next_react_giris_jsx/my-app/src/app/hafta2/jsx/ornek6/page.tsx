import Image from "next/image";

export default function Home() {
  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello";
  }

  const myElement = <h1>{text}</h1>;
  if (x<10)
    return <h1>Merhaba</h1>;
  else
    return (myElement);
}
