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
      warmup: { id: 0, sets: "bar, 30/2, 40/2, 45/2, 50/2" },
      working: [
        { id: "1", set: "55/2" },
        { id: "2", set: "55/2" },
        { id: "3", set: "55/2" },
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
      warmup: { id: 0, sets: "bar, 30/2, 40/2, 45/2, 50/2" },
      working: [
        { id: "1", set: "55/3" },
        { id: "2", set: "55/3" },
        { id: "3", set: "55/3" },

      ],
    },
  },
];

function reducer(state: any, action: any) {
  let idArray = action.input.split('-');
  let programId = idArray[0];
  let setId = idArray[1];

  let currentProgram = apiData.find(program => {
    return program.id = idArray[0]
  })

  //if it's  warmup weight
  if (setId === "0") {
  }
  // else if it's a working weight
  else {
    console.log(currentProgram?.movement_data.working[setId])
  }


  return { ...state, [action.input]: action.value };
}

const CustomTable: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, apiData);
  //const [data, setData] = useState<RowData[]>([]);
  const [data, setData] = useState([] as any);

  useEffect(() => {
    FakeTimeout(0);
    //console.log(state)
  }, [state]);

  function FakeTimeout(timeout: number) {
    setTimeout(() => {
      setData(apiData);
      setIsLoading(false);
    }, timeout);
  }

  function InputHandleChange(e: any) {
    const action = {
      key: e.target.key,
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

                  <input key={program.id + "-" + program.movement_data.warmup.id}
                    name={program.id + "-" + program.movement_data.warmup.id}
                    defaultValue={`${program.movement_data.warmup.sets}`}
                    onChange={InputHandleChange}
                  />

                </td>
                <td>
                  {program.movement_data.working.map((weight_reps) => {
                    return (
                      <input key={program.id + "-" + weight_reps.id}
                        name={program.id + "-" + weight_reps.id}
                        defaultValue={`${weight_reps.set}`}
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
