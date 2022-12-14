import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ELEMENT, CHANGE_INPUT, SELECT_ELEMENT, ALL_ELEMENTS } from '../actions/actions';

export const ShowForm = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.changeform);
  const select = useSelector((state) => state.changelist);
  const { name, prise, id } = list;
  function save(evt) {
    evt.preventDefault();
    const nam = document.getElementById('nm').value;
    const price = document.getElementById('ps').value;
    dispatch({
      type: ADD_ELEMENT,
      payload: {name: nam, prise: Number(price), id}
    });
    dispatch({
      type: CHANGE_INPUT,
      payload: {name: '', prise: '', id: ''}
    });
    dispatch({
      type: ALL_ELEMENTS,
      payload: select
    })
  }
  function hendleChange() {
    const string = document.getElementById('nm').value;
    dispatch({
      type: CHANGE_INPUT,
      payload: {
        name: string,
        prise: document.getElementById('ps').value,
        id
      }
    });
    dispatch({
      type: SELECT_ELEMENT,
      payload: {name: string}
    });
  }
  return (
    <>
      <form className="form" name='form' onSubmit={save}>
        <input name='name' className='input' id='nm' value={name} onChange={hendleChange} required/>
        <input name='prise' className='input' id='ps' type='number' value={prise} onChange={hendleChange} required/>
        <button className='btn' id='btn'>Save</button> 
      </form>
    </>
  )
}
// 
