import type { NextPage } from "next";

import { useEffect, useState, useReducer } from "react";
import ProgramTable from "./components/ProgramTable";

interface RowData {
  id: string;
  programName: string;
  programDate: string;
  location: string;
}

interface Program {
  id: string,
  month: string,
  week: string,
  day: string,
  movement_data: object,
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
      warmup: { id: "0", sets: "bar, 40/2, 55/2, 62/2, 67/2" },
      working: [
        { id: "1", set: "77/2" },
        { id: "2", set: "80/2" },
        { id: "3", set: "82/2" },
      ],
    },
  }, {
    id: "2",
    month: "January",
    week: "1",
    day: "1",
    movement_data: {
      movement_name: "snatch",
      warmup: { id: "0", sets: "bar, 30/2, 40/2, 45/2, 50/2" },
      working: [
        { id: "1", set: "55/2" },
        { id: "2", set: "57/2" },
        { id: "3", set: "60/2" },
      ],
    },
  },
];

function reducer(state: any, action: any) {

  if (action === "add_row") {
    const newId = state.reduce((acc: number, curr: Program) => {
      const parsedId = parseInt(curr.id)

      if (parsedId >= acc) acc = parsedId + 1
      return acc
    }, 0)

    const templateRow = {
      id: newId.toString(),
      month: "",
      week: "",
      day: "",
      movement_data: {
        movement_name: "",
        warmup: { id: "0", sets: "" },
        working: [
          { id: "1", set: "" },

        ]
      }
    }

    return [...state, templateRow]
  }

  let idArray = action.input.split('-');
  let programId = idArray[0];
  let setId = idArray[1];
  let currentProgram = state.find((program: any) => {
    return program.id === idArray[0]
  })


  //if it's  warmup weight
  if (setId === "0") {
    return state.map((program: any) => {
      if (program.id === programId) {
        program.movement_data.warmup.sets = action.value
      }
      return program
    })
  }
  // else if it's a working weight
  else {
    const newArray = currentProgram?.movement_data.working.map((working_weight: any) => {
      if (working_weight.id === setId) {
        working_weight.set = action.value
      }
      return working_weight
    })

    return state.map((program: any) => {
      if (program.id === programId) {
        program.movement_data.working = newArray
      }
      return program
    })
  }


}

const CustomTable: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, apiData);
  const [highestOrder, setHighestorder] = useState(0)

  //const [data, setData] = useState<RowData[]>([]);
  const [data, setData] = useState([] as any);

  useEffect(() => {
    FakeTimeout(0);


  }, []);

  useEffect(() => {
    setHighestorder(getHighestId(state))


  }, [state]);


  function FakeTimeout(timeout: number) {
    setTimeout(() => {

      setData(apiData);

      setIsLoading(false);
    }, timeout);
  }
  function getHighestId(stateArray: []) {
    return stateArray.reduce((acc: number, curr: Program) => {
      const parsedId = parseInt(curr.id)
      if (parsedId > acc) acc = parsedId
      return acc
    }, 0)
  }

  function InputHandleChange(e: any) {
    const action = {
      key: e.target.key,
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  }

  function AddRow() {
    dispatch('add_row')
  }

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Program Name</td>
              <td>Warm-Ups</td>
              <td>Working Weights</td>
            </tr>
          </thead>
          <tbody>
            {state.map((program: any) => {

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
                    {program.movement_data.working.map((weight_reps: any) => {

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
        <button onClick={AddRow}>Add Row</button>
      </div>
    );
  }
};

export default CustomTable;
