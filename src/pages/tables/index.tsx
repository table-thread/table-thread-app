import React, { useEffect } from 'react';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

const Tables = () => {
  useEffect(() => {
    const apiUrl = 'http://18.133.194.22:8000/analysis/countries';

    // Define the API URL

    // Make a GET request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },[0])
  return (
    <HomeLayout>
      <div className='col-12'>
        this is table.
      </div>

    </HomeLayout>
  )
}

export default Tables;
