import React, { useState } from "react";
import {connect} from 'react-redux';
import {add} from '../store';
import ToDo from '../components/ToDo'

function Home({toDos, add}) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }


  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
      </form>
      <ul> 
        {<toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return {toDos: state};
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(add(text))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

