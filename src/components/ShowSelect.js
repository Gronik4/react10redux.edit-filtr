import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { CHANGE_INPUT } from '../actions/actions';

export const ShowSelect = () => {
  const list = useSelector((state) => state.selectorlist);
  const dispatch = useDispatch();

  function showEl(evt) {
    const chosen = list.filter(item => item.id === evt.target.id)[0];
    dispatch({
      type: CHANGE_INPUT,
      payload: { name: chosen.name, prise: chosen.prise, id: chosen.id}
    });
  }
  const list_V_out = list?
    list.map((el) => {
      return(<p key={el.id} id={el.id} className='selected_el' onClick={showEl}>{el.name}</p>)
    }): 
    null;
  return (
    <div className='selected'>
      {list_V_out}
    </div>
  )
}
