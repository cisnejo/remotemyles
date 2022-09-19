import type { NextPage } from "next";
import { useEffect, useState } from "react";

interface RowData {
  id: string;
  programName: string;
  programDate: string;
  location: string;
}

interface Data {
  rowData: RowData[];
  isLoading: boolean;
}

const ProgramTable: NextPage<Data> = ({ rowData, isLoading }) => {
  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
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
  }
};

export default ProgramTable;
