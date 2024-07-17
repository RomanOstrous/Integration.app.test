import React from 'react';
import Arrow from '../../assets/icons/arrow.svg';
import Plus from '../../assets/icons/plus.svg';
import Edit from '../../assets/icons/edit.svg';
import Delete from '../../assets/icons/x.svg';
import './Operations.scss';

const Operations = () => {
  return (
    <section className='operations'>
      <h1 className='operations__title'>Operations on Contacts Collection</h1>

      <button className='operations__button'>
        <div className="operations__button-container">
          <img src={Plus} alt="plus" className='operations__button-img' />
          <p className='operations__button-text'>Create a Contact</p>
        </div>

        <img src={Arrow} alt="arrow" className='operations__button-img' />
      </button>

      <button className='operations__button'>
        <div className="operations__button-container">
          <img src={Edit} alt="plus" className='operations__button-img' />
          <p className='operations__button-text'>Update a Contact</p>
        </div>

        <img src={Arrow} alt="arrow" className='operations__button-img' />
      </button>

      <button className='operations__button'>
        <div className="operations__button-container">
          <img src={Delete} alt="plus" className='operations__button-img' />
          <p className='operations__button-text'>Delete a contact</p>
        </div>
        
        <img src={Arrow} alt="arrow" className='operations__button-img' />
      </button>
    </section>
  )
}

export default Operations;
