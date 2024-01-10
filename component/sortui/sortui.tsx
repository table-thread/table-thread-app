import React from 'react';
import CustomTooltip from '@/component/tooltip/tooltip';

const SortUi = (props: any) => {

  const { callTo, keyToCall, typeSort, activeSortKey } = props;

  function retApprClass(calledWith: string) {
    if (keyToCall == activeSortKey) {
      return typeSort == calledWith ? " bg-nagative " : " sor_acti ";
    }
  }

  function sortAction(calledWith: string) {
    callTo(keyToCall, calledWith);
  }

  return (
    <div className='d-inline' >

      {/* <CustomTooltip placement="toLeft" title="Descending" > */}
      <svg
        className={` cp w-6 h-6 ${retApprClass('asc')} `}
        onClick={sortAction.bind('', 'asc')}
        width="15px"
        xmlns="http://www.w3.org/2000/svg"
        fill="#673275"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" stroke="#673275" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
      </svg>
      {/* </CustomTooltip> */}

      {/* <CustomTooltip placement="toLeft" title="Ascending" > */}
      <svg
        className={` cp w-6 h-6 ${retApprClass('desc')} `}
        onClick={sortAction.bind('', 'desc')}
        width="15px"
        // style={{ marginLeft: "-7px" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="#673275"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" stroke="#673275" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
      </svg>
      {/* </CustomTooltip> */}

    </div>
  );
}

export default SortUi;