/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useEffect } from 'react';

import SearchSelect from '@/component/searchselect/searchselect';
import ToastComponent from '@/component/Toast/Toast';

import endPoints from '@/ApiHandler/AppConfig';
import NetworkOps from '@/ApiHandler/NetworkOps';
import { filterAllState, getCountryValue ,filterAllCountry} from '../../utils/helper';

const TAG = "State: ";
const State = (props: any) => {

  const { loading, setLoading, selectedCountry, setFieldValue, stateList, setStateList, selectedState, setSelectedState } = props;

  useEffect(() => {
    // fetchAllCountries()

    if (selectedCountry?.value) {
        fetchState(selectedCountry?.value);
      }    
    
  }, [selectedCountry]);

  

  async function fetchState(countryCode :any): Promise<void> {
    setLoading(true);
    NetworkOps.makeGetRequest(`${endPoints.getStates}?countryCode=${countryCode}`, false)
      .then(async (response: any) => {
        setLoading(false);
        if (response?.status == 200 && response?.data?.success == true) {
          const filteredStateList : any = filterAllState(response?.data?.data?.state)
          setStateList(filterAllState(response?.data?.data?.state));
          if(selectedState.value === selectedState.label){
              const filteredState :any = filteredStateList.filter((i:any) => i.label === selectedState.label)
              setSelectedState(filteredState[0])          }
        } else {
          ToastComponent(response?.data?.msg);
          console.log(TAG, ' error got in else ');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(TAG, ' error i got in catch ', error);
      });
  }


  return (
    <SearchSelect
      option={stateList}
      label="State"
      disabled={loading}
      id="state"
      placeholder="Select State"
      selected={selectedState}
      onChangeEvent={(value: any) => { setSelectedState(value); setFieldValue('state', value.label); }}
    />
  );
}

export default State;