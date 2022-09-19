import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ProgramTable from "./components/ProgramTable";

interface RowData {
  id: string;
  programName: string;
  programDate: string;
  location: string;
}

const apiData: RowData[] = [
  {
    id: "1",
    programName: "JC_9/16/2022",
    programDate: "09/16/2022",
    location: "somewhere_1.docx",
  },
  {
    id: "2",
    programName: "JC_9/09/2022",
    programDate: "09/09/2022",
    location: "somewhere_2.docx",
  },
  {
    id: "3",
    programName: "JC_9/02/2022",
    programDate: "09/02/2022",
    location: "somewhere_3.docx",
  },
];

const docoverview: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<RowData[]>([]);
  useEffect(() => {
    FakeTimeout(1000);
  }, []);

  function FakeTimeout(timeout: number) {
    setTimeout(() => {
      setData(apiData);
      setIsLoading(false);
    }, timeout);
  }

  return <ProgramTable rowData={data} isLoading={isLoading} />;
};

export default docoverview;
