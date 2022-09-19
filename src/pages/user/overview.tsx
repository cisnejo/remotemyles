import type { NextPage } from "next";
import { Grid } from "gridjs-react";
import Link from "next/link";
import "gridjs/dist/theme/mermaid.css";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";

const Overview: NextPage = () => {
  const [rowData, setRowData] = useState([] as any);
  const data = [
    {
      id: "1",
      month: "January",
      week: "1",
      day: "1",
      movement_data: {
        movement_name: "clean and jerk",
        warmup: [
          { order: "1", reps: "3", weight: "40kg" },
          { order: "2", reps: "3", weight: "55kg" },
          { order: "3", reps: "3", weight: "62kg" },
          { order: "4", reps: "2", weight: "67kg" },
        ],
        working: [
          { order: "1", reps: "2", weight: "72kg" },
          { order: "2", reps: "2", weight: "76kg" },
          { order: "3", reps: "2", weight: "80kg" },
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
          { order: "1", reps: "3", weight: "30kg" },
          { order: "2", reps: "3", weight: "40kg" },
          { order: "3", reps: "3", weight: "45kg" },
          { order: "4", reps: "2", weight: "50kg" },
        ],
        working: [
          { order: "1", reps: "2", weight: "55kg" },
          { order: "2", reps: "2", weight: "55kg" },
          { order: "3", reps: "2", weight: "55kg" },
        ],
      },
    },
  ];

  const columnData = data.map((dayData) => {
    const keys = Object.keys(dayData.movement_data);
    return keys;
  });

  useEffect(() => {
    setRowData(
      data.map((dayData) => {
        const warmup_weights = dayData.movement_data.warmup
          .flatMap((q) => `${q.weight}/${q.reps},`)
          .join(" ");

        const working_weights = dayData.movement_data.working
          .flatMap((a) => `${a.weight}/${a.reps},`)
          .join(" ");

        return [
          dayData.movement_data.movement_name,
          warmup_weights,
          working_weights,
        ];
      })
    );
  }, []);

  return (
    <Grid
      data={rowData}
      columns={columnData[0]}
      pagination={{ enabled: true }}
    />
  );
};

export default Overview;
