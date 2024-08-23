import React from 'react';
import jsonData from '../sample.json';

const WorkflowSidebar = () => {
  const workFlow = jsonData.workflow_steps;

  return (
    <div className="workflow-sidebar">
      <h3>Workflow</h3>
      <hr></hr>
      <br></br>
      {workFlow?.map((item)=>{

         const style={
          backgroundColor:"rgb(89, 31, 183)",
          color:"white",
          margin:"-3px -10px",
          padding: "7px",
         }
        return(
          <div>
            <span style={item.name_title ==="DATASET SELECTION" ? style :{}}>{item.name_title}</span>
            <br></br>
            {item.name === "select_dataset" ?
            <span>name: {item.params_extra?.name}</span>
            :""}
            {item.name_title === "JOIN" ?
            <>
            <span>{`type:${item.params_extra.type}`}</span>
            <span>{`extras:${["Object"]}`}</span>
            <span>{`left:${item.params_extra.type}`}</span>
            <span>{`type:${item.params_extra.type}`}</span>
            </>
            :""}
          </div>
        )
      })}
      {/* Add additional buttons/actions as needed */}
    </div>
  );
};

export default WorkflowSidebar;
