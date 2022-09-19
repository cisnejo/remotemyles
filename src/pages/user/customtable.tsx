import type { NextPage } from "next";

import { useEffect, useState, useReducer } from "react";
import ProgramTable from "./components/ProgramTable";

interface RowData {
  id: string;
  programName: string;
  programDate: string;
  location: string;
}
/* 
const apiData: RowData[] = [
*/

const apiData = [
  {
    id: "1",
    month: "January",
    week: "1",
    day: "1",
    movement_data: {
      movement_name: "clean and jerk",
      warmup: [
        { id: "8", order: "1", reps: "3", weight: "40" },
        { id: "9", order: "2", reps: "3", weight: "55" },
        { id: "10", order: "3", reps: "3", weight: "62" },
        { id: "11", order: "4", reps: "2", weight: "67" },
      ],
      working: [
        { id: "12", order: "1", reps: "2", weight: "72" },
        { id: "13", order: "2", reps: "2", weight: "76" },
        { id: "14", order: "3", reps: "2", weight: "80" },
      ],
    },
  },
  {
    id: "2",
    month: "January",
    week: "1",
    day: "2",
    movement_data: {
      movement_name: "snatch",
      warmup: [
        { id: "1", order: "1", reps: "3", weight: "30" },
        { id: "2", order: "2", reps: "3", weight: "40" },
        { id: "3", order: "3", reps: "3", weight: "45" },
        { id: "4", order: "4", reps: "2", weight: "50" },
      ],
      working: [
        { id: "3", order: "1", reps: "2", weight: "55" },
        { id: "6", order: "2", reps: "2", weight: "55" },
        { id: "7", order: "3", reps: "2", weight: "55" },
        { id: "8", order: "3", reps: "2", weight: "55" },
        { id: "9", order: "3", reps: "2", weight: "55" },
        { id: "10", order: "3", reps: "2", weight: "55" },
      ],
    },
  },
];

function reducer(state: any, action: any) {
  return { ...state, [action.input]: action.value };
}

const CustomTable: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, {});
  //const [data, setData] = useState<RowData[]>([]);
  const [data, setData] = useState([] as any);

  useEffect(() => {
    FakeTimeout(0);
  }, []);

  function FakeTimeout(timeout: number) {
    setTimeout(() => {
      setData(apiData);
      setIsLoading(false);
    }, timeout);
  }

  function InputHandleChange(e: any) {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  }

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <td>Program Name</td>
            <td>Warm-Ups</td>
            <td>Working Weights</td>
          </tr>
        </thead>
        <tbody>
          {apiData.map((program) => {
            return (
              <tr key={program.id}>
                <td>{program.movement_data.movement_name}</td>
                <td>
                  {program.movement_data.warmup.map((weight_reps) => {
                    return (
                      <input
                        name={weight_reps.id}
                        defaultValue={`${weight_reps.weight}/${weight_reps.reps}`}
                        onChange={InputHandleChange}
                      />
                    );
                  })}
                </td>
                <td>
                  {program.movement_data.working.map((weight_reps) => {
                    return (
                      <input
                        name={weight_reps.id}
                        defaultValue={`${weight_reps.weight}/${weight_reps.reps}`}
                        onChange={InputHandleChange}
                      />
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default CustomTable;
