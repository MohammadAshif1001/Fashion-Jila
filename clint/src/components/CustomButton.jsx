import React from 'react'
import { useSnapshot } from 'valtio';
import state  from '../store';

const CustomButton = ({ type, customStyles, handleClick, title }) => {
  const snap = useSnapshot(state);
  const generatesStyle = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color:'#fff'

      }
    }
  }
  return (
    <div>
      <button className={'px-2 py-1.5 flex-1 rounded-md ${customStyles}'} style={generatesStyle(type)}
       onClick={handleClick}
      >
        {title}
      </button>
    </div>
  )
}

export default CustomButton