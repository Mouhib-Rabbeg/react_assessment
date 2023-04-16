import AsyncInputSelect from '../../components/form/asyncInputSelect'
import LocationService from '../../service/httpService'
import IconButton from '../../components/ui/iconbutton'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { TbArrowsExchange2 } from 'react-icons/tb'


export default function LocationPicker() {

    const loadLoacations = (data: any) => {
        return LocationService.getLocations({ name_sf: data })
    }

    return (
        <div>
            <div className='mb-2'>
                <div className="grid grid-cols-3 gap-4">
                    <div className='col-span-2'>
                        <AsyncInputSelect label={'Start'} onSearch={loadLoacations} required />
                    </div>
                    <div className="flex items-end ">
                        <IconButton color='green' onClick={() => { }} icon={<AiOutlinePlusCircle />} />
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-4">
                    <div className='col-span-2'>
                        <AsyncInputSelect label={'Destination'} onSearch={loadLoacations} required />
                    </div >
                    <div className="flex items-end ">
                        <IconButton color='green' onClick={() => { }} icon={<TbArrowsExchange2 />} />
                    </div>
                </div>
            </div>
        </div>
    )
}
