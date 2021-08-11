import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import RanksList from "./data/ranks.json";
import UnitLists from "./data/units.json";
import IntrestsList from "./data/intrests.json";

const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>פרטים נוספים</h2>
      
      <label htmlFor="rank">דרגה:</label>
      <select
        name="rank"
        {...register('rank" {...register({ required: true })}', {
          required: true
        })}
      >
        {
           RanksList.map((item, index)=><option id='item.id'>{item.name}</option>)
        }
      </select>
      <label htmlFor="unit">יחידה:</label>
      <select
        name="unit"
        {...register('unit" {...register({ required: true })}', {
          required: true
        })}
      >
        {
           UnitLists.map((item, index)=><option id='item.id'>{item.name}</option>)
        }
      </select>
      <label htmlFor="intrests">
        תחומי עניין:
      </label>
      <ul class="ks-cboxtags" name="intrests">
        {
           IntrestsList.map((item, index)=>
           <li>
                <input type="checkbox" id={`checkbox${ item.id }`} value={item.value}/>
                    <label for={`checkbox${ item.id }`}>{item.name}</label>
            </li>
           )
        }
        
      </ul>
      
      <input type="submit" value="הרשם" />
    </form>
  );
};

export default withRouter(Step1);
