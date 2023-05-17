import React from "react";
import MetaLayout from "@/components/Layout/MetaLayout";
import axios from "axios";
import { Base_Url } from "@/config/Base_Url";
import { API_Parameters } from "@/config/Api_Parameters";
import { ITodoData } from "@/types/InterfaceTodo";

import styles from "./todos.module.scss";
export async function getServerSideProps() {
  const response = await axios.get(Base_Url + API_Parameters.todos);
  const { data } = response;
  return {
    props: {
      todosData: data,
    },
  };
}

interface ITodoProps {
  todosData: ITodoData;
}

export default function Todos({ todosData }: ITodoProps) {
  const { todos } = todosData;
  return (
    <MetaLayout title="Todos | Project">
      <section className={styles.todos}>
        <table className={styles.todos_table}>
          <thead className={styles.todos_thead}>
            <tr>
              <th>ID</th>
              <th>Todos</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody className={styles.todos_tbody}>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>
                  <div className={styles.checkbox_wrapper_55}>
                    <label
                      className={`${styles.rocker} ${styles.rocker_small}`}
                    >
                      <input type="checkbox" defaultChecked={todo.completed} />
                      <span className={styles.switch_left}>Yes</span>
                      <span className={styles.switch_right}>No</span>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </MetaLayout>
  );
}
