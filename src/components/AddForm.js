import React, { useState } from 'react';

function AddForm() {
  const [hex, setHex] = useState({color: '#9CFFBF'});
  const [rgb, setRgb] = useState({mess: 'rgb(156, 255, 191)'})
  const changeHendler = (evt) => {
    evt.preventDefault();
    const newColor = evt.target.value;
    const colorForm = evt.target.closest('.form');
    setHex({color: newColor});
    if (newColor.length === 7) {
      const rexep = /^#\w{6}$/ig;
      if(!rexep.test(newColor)) {
        setRgb({mess: 'Ошибка!'});
        colorForm.style.background = 'red';
      } else {
        const num = newColor.split('#');
        const R = parseInt(num[1].slice(0, 2), 16);
        const G = parseInt(num[1].slice(2, 4), 16);
        const B = parseInt(num[1].slice(4), 16);
        const RGB = `rgb(${R}, ${G}, ${B})`;
        setRgb({mess: RGB});
        colorForm.style.background = RGB;
      }
    }
  }
  return (
    <form className='form'>
      <input className='input' value={hex.color} onChange={changeHendler}/>
      <p className='outRgb'>{rgb.mess}</p>
    </form>
  )
}

export default AddForm;
