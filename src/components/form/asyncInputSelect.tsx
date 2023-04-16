import AsyncSelect from 'react-select/async';
import { useDebouncedCallback } from '../../hooks/useDebounce';
import { locations } from '../../service/mockData';

interface SelectInputProps {
  required?: boolean
  label: string;
  onSearch: any
}



function AsyncInputSelect(props: SelectInputProps) {
  const loadOptions = (
    inputValue: string,
    callback: (options: any[]) => void
  ) => {
    //CALL API 
    props.onSearch(inputValue)
    .then((res: any) => {
    })
    .catch((err: any) => {
        //MOCKED API CALL CORS PROBLEM
        const mockedData = locations.map((elt:any) => {
          return {
            label:elt.disassembledName,
            value:elt.disassembledName
          }
        }).filter((elt:any) => {
          if(inputValue.length){
            return elt.value.includes(inputValue)
          }else {
            return true
          }
        } )
        callback(mockedData)
  
      })
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{props.required && <span className='text-red-700 mr-1'>*</span>}{props.label}</label>
      <AsyncSelect cacheOptions loadOptions={useDebouncedCallback(loadOptions, 1000)}  />
    </div>
  )
}

export default AsyncInputSelect