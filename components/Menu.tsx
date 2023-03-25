import Image from "next/image";
import Button from "./Button";

export default function Menu() {
  return (
    <div className="flex justify-between py-5">
      <Image
        src={"/assets/Jujurly.svg"}
        width={100}
        height={100}
        alt="jujurly-head"
      />
      <Button text="Login" />
    </div>
  );
}
