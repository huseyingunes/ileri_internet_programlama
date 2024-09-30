import Image from "next/image";

export default function Home() {
  const x = 5;
  const myElement = <h1>{(x) < 4 ? "Hello" : "Goodbye"}</h1>;

  return (myElement);
}
