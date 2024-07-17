import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  return (
    <section className='contacts'>
      <h1 className='contacts__title '>How to work with Contacts in Hubspot API</h1>
      <h2 className='contacts__text'>
        Contacts represent records about people in Hubspot API.
        They are typically <br />
        associated with Companies and Activities such as Emails,
        Meetings, Notes, etc.
      </h2>
      <h2 className='contacts__subtitle'>Contact Fields</h2>

      <div className="contacts__container">
        <table className='contacts__table'>
          <thead>
            <tr>
              <th className='contacts__table-text'>Field Name</th>
              <th className='contacts__table-text'>API Key</th>
              <th className='contacts__table-text'>Type</th>
              <th className='contacts__table-text'>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='contacts__table-text'>First Name</td>
              <td className='contacts__table-text--fira'>first_name</td>
              <td className='contacts__table-text--fira'>string</td>
              <td className='contacts__table-text'>First name of the person</td>
            </tr>
            <tr className='contacts__table-row'>
              <td className='contacts__table-text'>Last Name</td>
              <td className='contacts__table-text--fira'>last_name</td>
              <td className='contacts__table-text--fira'>string</td>
              <td className='contacts__table-text'>Last name of the person</td>
            </tr>
            <tr className='contacts__table-row'>
              <td className='contacts__table-text'>Address</td>
              <td className='contacts__table-text--fira'>adress</td>
              <td className='contacts__table-text--fira'>object</td>
              <td className='contacts__table-text'>Address associated with the person</td>
            </tr>
            <tr className='contacts__table-row'>
              <td className='contacts__table-text'>Full</td>
              <td className='contacts__table-text--fira'>address.full</td>
              <td className='contacts__table-text--fira'>string</td>
              <td className='contacts__table-text'>Full address associated with the person</td>
            </tr>
            <tr className='contacts__table-row'>
              <td className='contacts__table-text'>Street</td>
              <td className='contacts__table-text--fira'>address.streeet</td>
              <td className='contacts__table-text--fira'>string</td>
              <td className='contacts__table-text'>Street address</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Contacts;
