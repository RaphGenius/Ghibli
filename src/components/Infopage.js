import { useEffect } from "react";
export default function Infopage() {
  //state
  const url = window.location;

  //comportment
  useEffect(() => {
    console.log(url);
  });
  //render
  return (
    <div>
      <h1>La page</h1>
    </div>
  );
}
