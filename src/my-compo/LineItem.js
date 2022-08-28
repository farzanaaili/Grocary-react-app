import React from 'react'
import {RiDeleteBinFill} from 'react-icons/ri'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li style={{ listStyle:'none'}} className="item" >
              <input
              onChange={() => handleCheck(item.id)}
                    type='checkbox'
                    checked={item.checked}
              />
              <label 
              style={(item.checked) ? {textDecoration:'line-through'} : null}
              onDoubleClick={() =>handleCheck(item.id)}> {item.item} </label>
              <RiDeleteBinFill style={{color:'navy'}} onClick={() =>handleDelete(item.id)} role="button" tabIndex='0' aria-label={`Delete ${item.item}`} />

          </li>
  )
}

export default LineItem