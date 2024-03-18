import React from 'react';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

const Calender = () => {
  return (
    <HomeLayout>
      {/* <> this is calender </> */}

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=YjE3YTA0YmYyMjc2ZjNlOWI0NWNhMWI4YzBjYzg0NjhhOWRkOTE5NWNmYzU3NDE5MWRlODdlZTVhMDMyMDkwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441&color=%230B8043"
        style={{ border: "solid 1px #777" }}
        width={800}
        height={600}
      />
    </HomeLayout>
  )
}

export default Calender;
