import { useState, useEffect } from "react";
import axios from "axios";

export const useTodos = (time = 0) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalData = null;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (time) {
      setInterval(() => {
        fetchData();
      }, time * 1000);
    } else {
      fetchData();
    }
    return () => {
      if (intervalData) clearInterval(intervalData);
    };
  }, [time]);

  return { todos, loading, fetchData };
};
