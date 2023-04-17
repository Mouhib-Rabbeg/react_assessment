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
      const locations = res.data.locations.map((elt:any) => {
        return {
          label:elt.disassembledName,
          value:elt.id
        }
      })
      callback(locations)
    })
    .catch((err: any) => {
        //ERROR HANDLER
      })
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{props.required && <span className='text-red-700 mr-1'>*</span>}{props.label}</label>
      <AsyncSelect cacheOptions loadOptions={useDebouncedCallback(loadOptions, 1000)} defaultOptions />
    </div>
  )
}

export default AsyncInputSelect