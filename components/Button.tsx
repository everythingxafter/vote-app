interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button(props: Props) {
  return (
    <button
      className={`bg-black px-3 py-2 text-white hover:bg-zinc-800 border-2 border-black
    ${
      props.type === "secondary" &&
      "text-black bg-white px-3 py-2  border-2 hover:bg-black hover:text-white "
    }
    ${props.className}`}
    >
      {props.text}
    </button>
  );
}
