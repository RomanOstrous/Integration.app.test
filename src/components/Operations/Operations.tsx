import Arrow from '../../assets/icons/arrow.svg';
import Plus from '../../assets/icons/plus.svg';
import Edit from '../../assets/icons/edit.svg';
import Delete from '../../assets/icons/x.svg';
import './Operations.scss';

const Operations = () => {
  return (
    <section className='operations'>
      <h1 className='operations__title'>Operations on Contacts Collection</h1>

      <a href='#' className='operations__link'>
        <div className="operations__link-container">
          <img src={Plus} alt="plus" className='operations__link-img' />
          <p className='operations__link-text'>Create a Contact</p>
        </div>

        <img src={Arrow} alt="arrow" className='operations__link-img' />
      </a>

      <a href='#' className='operations__link'>
        <div className="operations__link-container">
          <img src={Edit} alt="plus" className='operations__link-img' />
          <p className='operations__link-text'>Update a Contact</p>
        </div>

        <img src={Arrow} alt="arrow" className='operations__link-img' />
      </a>

      <a href='#' className='operations__link'>
        <div className="operations__link-container">
          <img src={Delete} alt="plus" className='operations__link-img' />
          <p className='operations__link-text'>Delete a contact</p>
        </div>
        
        <img src={Arrow} alt="arrow" className='operations__link-img' />
      </a>
    </section>
  )
}

export default Operations;
