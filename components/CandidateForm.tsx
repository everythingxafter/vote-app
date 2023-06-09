import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
  candidate: Candidate;
  submitCandidate: (candidate: Candidate) => void;
  removeCandidate: (key: number) => void;
}

export default function CandidateForm(props: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    key: 0,
    name: "",
    title: "",
  });

  useEffect(() => {
    setCandidate(props.candidate);
  }, [props.candidate]);

  useEffect(() => {
    props.submitCandidate(candidate);
  }, [candidate]);

  return (
    <div className="flex flex-col border border-zinc-100 p-5">
      <div className="self-end">
        <XCircleIcon
          className="h-6 w-6 cursor-pointer hover:bg-zinc-100 hover:text-zinc-300"
          onClick={() => props.removeCandidate(candidate.key)}
        />
      </div>
      <h1 className="flex aspect-square w-1/2 items-center justify-center self-center rounded-full bg-zinc-100 text-center text-4xl">
        {props.candidate.key}
      </h1>
      <label className="mt-3 mb-1 text-sm">Nama Kandidat</label>
      <Form
        placeHolder="Masukan Nama Kandidat"
        value={candidate.name}
        onChange={(e) => {
          setCandidate({ ...candidate, name: e });
        }}
      />
    </div>
  );
}
