import { getValue } from "@mui/system";
import React, { useEffect } from "react";

export default function Input(this: any, props: any) {
  return props.mode === "email" ? (
    <input
      className={props.className}
      value={props.email}
      id={props.id}
      onChange={(event) => {
        props.setEmail(event.target.value);
        props.setEmailStatus(true);
      }}
      style={{
        border: props.status ? "1px solid #E8E9ED" : "1px solid #E53829",
        backgroundColor: props.status ? "#F9F9FA" : "#FBF5F4",
      }}
    />
  ) : (
    <input
      className={props.className}
      value={props.password}
      id={props.id}
      type={props.show ? "text" : "password"}
      onChange={(event) => {
        props.setPassword(event.target.value);
        props.setPasswordStatus(true);
      }}
      style={{
        border: props.status ? "1px solid #E8E9ED" : "1px solid #E53829",
        backgroundColor: props.status ? "#F9F9FA" : "#FBF5F4",
      }}
    />
  );
}
