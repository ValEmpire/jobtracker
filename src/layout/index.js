import React from "react";
import ButtonAppBar from "./Appbar";

export default function Index(props) {
  return (
    <>
      <ButtonAppBar />
      {props.children}
    </>
  );
}
