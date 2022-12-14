import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_INPUT, DELETE_ELEMENT } from '../actions/actions';

export const ShowList = ({drow:{pen, cros}}) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.changelist);
  useSelector((state) =>state.changeform);

  function edit(evt) {
    const geting_V_name = evt.target.closest('.list_el').querySelector('.name').textContent;
    const geting_V_prise = evt.target.closest('.list_el').querySelector('.prise').textContent;
    const geting_V_id = evt.target.closest('.list_el').id;
    dispatch({
      type: CHANGE_INPUT,
      payload: {name: geting_V_name, prise: geting_V_prise, id: geting_V_id}
    })
  }

  function delet(evt) {
    const geting_V_id = evt.target.closest('.list_el').id;
    dispatch({
      type: DELETE_ELEMENT,
      payload: {ide: geting_V_id}
    })
  }
  return (
    <ul className='list'>
        {list.map((el) => {
          return(
            <li key={el.id} id={el.id} className='list_el'>
              <span className='name'>{el.name}</span> - <span className='prise'>{el.prise}</span> 
              <button className='btn_li' id='pen' onClick={edit}><img src={pen} alt='pensil'/></button>
              <button className='btn_li' id='cros' onClick={delet}><img src={cros} alt='cros'/></button>
            </li>)
        })}
      </ul>
  )
}
