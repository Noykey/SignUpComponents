import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>פרטים אישיים</h2>
      <label>
        שם פרטי:
        <input {...register("firstName")} defaultValue={state.data.firstName} />
      </label>
      <label>
        שם משפחה:
        <input {...register("lastName")} defaultValue={state.data.lastName} />
      </label>
      <label>
          Email:
        <input type="email" {...register("email")} defaultValue={state.data.email} />
      </label>
      <label>
          טלפון:
        <input type="phone" {...register("email")} defaultValue={state.data.phone} />
      </label>
      <label>
          סיסמא:
        <input type="password" {...register("password")} defaultValue={state.data.password} />
      </label>
      <label>
        תאריך לידה:
        <input type="date" {...register("age")} defaultValue={state.data.age} />
      </label>
      <input type="submit" value="המשך"/>
    </form>
  );
};

export default withRouter(Step1);
