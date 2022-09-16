import { Grid } from "gridjs-react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

const data = [
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

interface RowData {
  id: string;
  programName: string;
  programDate: string;
  location: string;
}

const docoverview: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rowData, setRowData] = useState<RowData[]>([]);
  useEffect(() => {
    setRowData(data);
    setIsLoading(false);
  }, []);

  const table = (
    <table>
      <thead>
        <tr>
          <td>Program Name</td>
        </tr>
      </thead>
      <tbody>
        {rowData.map((program) => {
          return (
            <tr key={program.id}>
              <td>
                <a href={`#${program.location}`}>{program.programName}</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return <div>{table}</div>;
  }
};

export default docoverview;
