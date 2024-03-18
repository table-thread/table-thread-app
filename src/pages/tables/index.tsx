import React from 'react';
import { useQRCode } from 'next-qrcode';
import { modernPageImage4 } from '@/utils/image';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

const Tables = () => {

  const { Canvas } = useQRCode();

  return (
    <HomeLayout>
      <div className='row gap-2'>
        <div><h4> Table 1</h4>
          <Canvas
            text={'https://table-thread-client-app.vercel.app/'}
            options={{
              errorCorrectionLevel: 'M',
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
              },
            }}
            logo={{
              src: modernPageImage4,
              options: {
                width: 60,
              }
            }}
          />
        </div>
      </div>

    </HomeLayout>
  )
}

export default Tables;
