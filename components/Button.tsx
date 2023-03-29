interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`border-2 border-black bg-black px-3 py-2 text-white hover:bg-zinc-800
    ${
      props.type === "secondary" &&
      "border-2 bg-white px-3 py-2  text-black  hover:bg-black hover:text-white"
    }
    ${props.className}`}
    >
      {props.text}
    </button>
  );
}
