import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | iLearnToys`;
  }, [title]);
};

export default useTitle;
