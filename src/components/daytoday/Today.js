import React from 'react';
import './today.css'

const Today = () => {

      let today = new Date().getDay();
        if (today === 0){
        return <p className='today'>Have a great Sunday! ☕️</p>;
      } else if (today === 1) {
        return <p className='today'>Have a great Monday! ☕️</p>;
      } else if (today === 2) {
        return <p className='today'>Have a great Tuesday! ☕️</p>;
      } else if (today === 3) {
        return <p className='today'>Have a great Wednesday! ☕️</p>;
      } else if (today === 4) {
        return <p className='today'>Have a great Thursday! ☕️</p>;
      } else if (today === 5) {
        return <p className='today'>Have a great Friday! ☕️</p>;
      } else if (today === 6) {
        return <p className='today'>Have a great Saturday! ☕️</p>;
      }
};

export default Today;