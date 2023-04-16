import Map from '../../components/form/map'
import TabView from '../../components/ui/tabView'
import LocationPicker from './locationPicker'
import { AiOutlineFieldTime, AiOutlineSetting } from 'react-icons/ai'
import Trips from './trips'

const tabData = [
    {
        id: 'TRIPS', header: {
            label: "TRIPS",
            icon: <AiOutlineFieldTime size={35} />
        }, content: <Trips />
    },
    {
        id: 'SETTINGS', header: {
            label: "SETTINGS",
            icon: <AiOutlineSetting size={35} />
        }, content: 'Content for SETTINGS'
    },
];

export default function Tickets() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
            <div className='border border-gray-200 p-5'>
                <LocationPicker />
                <TabView tabs={tabData} />
            </div>
            <div className='w-full h-full'>
                <Map />
            </div>
        </div>
    )
}
