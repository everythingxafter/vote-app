import Head from "next/head";
import Image from "next/image";
import Form from "../../components/Form";
import Menu from "../../components/Menu";
import DatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import CandidateForm from "../../components/CandidateForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";

registerLocale("id", id);

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  const addCandidateForm = () => {
    const newCandidate: Candidate = {
      name: "",
      key: candidates.length + 1,
      title: "",
    };
    setCandidates([...candidates, newCandidate]);
  };

  const removeCandidateForm = (key: number) => {
    const newCandidate = candidates.filter(
      (candidate) => candidate.key !== key
    );

    newCandidate.forEach((candidate, index) => {
      candidate.key = index + 1;
    });

    setCandidates(newCandidate);
  };

  return (
    <div className="container mx-auto">
      <Head>
        <title>Voting Baru</title>
      </Head>
      <Menu />
      <div className="py-10">
        <Image
          src={"/assets/choice.svg"}
          alt="create vote"
          width={284}
          height={198}
        />
        <h1 className="text-4xl font-bold">Buat Voting Baru</h1>
        <h2 className="mt-3 text-zinc-700">
          Silahkan masukkan data yang dibutuhkan sebelum membuat vote online
        </h2>
        <form className="flex flex-col">
          <div className="space-y-5">
            <h3 className="mt-10 text-xl font-medium">Detail Voting</h3>
            <div className="flex flex-col">
              <label>Judul</label>
              <Form
                onChange={() => {}}
                value={""}
                placeHolder={"Contoh : Voting calon gurbernur"}
                className={"mt-1 w-1/2"}
              />
            </div>
            <div className="flex w-2/3 flex-col">
              <label className="text-sm">Kapan dimulai</label>
              <div className="inline-flex">
                <DatePicker
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  locale={"id"}
                  dateFormat={"Pp"}
                  minDate={new Date()}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
                <span className="p-3 text-center text-sm">sampai</span>
                <DatePicker
                  showTimeSelect
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  locale={"id"}
                  dateFormat={"Pp"}
                  minDate={startDate}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
              </div>
            </div>
          </div>
          <h3 className="mt-1 text-xl font-medium">Kandidat</h3>
          <div className="mt-5 grid grid-cols-4 gap-4">
            {candidates.map((candidate: Candidate, index: number) => (
              <CandidateForm
                key={index}
                candidate={candidate}
                submitCandidate={submitCandidate}
                removeCandidate={removeCandidateForm}
              />
            ))}
            <div
              className="flex aspect-square w-1/3 cursor-pointer flex-col items-center justify-center bg-zinc-100 text-zinc-400 hover:bg-black hover:text-white"
              onClick={() => addCandidateForm()}
            >
              <PlusIcon className="w-1/3" />
            </div>
            <div className="mt-10 text-right">
              <Button text="Buat Voting" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
