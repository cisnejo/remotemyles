import type { NextPage } from "next";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Overview: NextPage = () => {
  const data = [
    {
      month: "January",
      week: "1",
      day: "1",
      exercises: [
        {
          exercise: "clean and jerk",
          sets: {
            warmup: [
              { order: "1", reps: "3", weight: "40kg" },
              { order: "2", reps: "3", weight: "55kg" },
              { order: "3", reps: "3", weight: "62kg" },
              { order: "4", reps: "2", weight: "70kg" },
            ],
            working: [
              ,
              { order: "1", reps: 2, weight: "75kg" },
              { order: "2", reps: 2, weight: "80kg" },
              { order: "3", reps: 2, weight: "85kg" },
            ],
          },
        },
      ],
    },
    {
      month: "January",
      week: "1",
      day: "2",
      exercises: [
        {
          exercise: "snatch",
          sets: {
            warmup: [
              { order: "1", reps: "3", weight: "30kg" },
              { order: "2", reps: "3", weight: "40kg" },
              { order: "3", reps: "3", weight: "45kg" },
              { order: "4", reps: "2", weight: "50kg" },
            ],
            working: [
              ,
              { order: "1", reps: 2, weight: "55kg" },
              { order: "2", reps: 2, weight: "55kg" },
              { order: "3", reps: 2, weight: "55kg" },
            ],
          },
        },
      ],
    },
  ];

  const programData = data.map((dayData) => {
    return (
      <div style={{ marginTop: "2rem" }}>
        <div> month:{dayData.month}</div>
        <div> week:{dayData.week}</div>
        <div> day:{dayData.day}</div>
        <div>
          exercises:
          {dayData.exercises.map((data) => {
            return (
              <div>
                <span>{data.exercise}</span>
                <div>warmups:</div>
                {data.sets.warmup.map((warpupSets) => {
                  return (
                    <div>
                      <span> reps: {warpupSets.reps}</span>,
                      <span> weight: {warpupSets.weight}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return <div>{programData}</div>;
};

export default Overview;
