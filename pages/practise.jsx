import { useEffect, useState } from "react";

function MyComponent() {
  const [number, setNumber] = useState(0);
  const data = {
    key: "o",
  };

  useEffect(() => {
    console.log("Hello world");
  }, [data]);
}

export default MyComponent;
