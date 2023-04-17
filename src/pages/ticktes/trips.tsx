import React, { useState } from 'react'
import RadioButton from '../../components/form/radio'
import CustomDatePicker from '../../components/form/datePicker';
import CustomTimePicker from '../../components/form/timerPicker';
import CustomButton from '../../components/ui/button';
import { AiOutlineRollback, AiOutlineSearch } from 'react-icons/ai'
export default function Trips() {
    const [selectedOption, setSelectedOption] = useState('rd1');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (value: string) => {
        setSelectedTime(value);
    };
    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };
    const handleDateChange = (value: string) => {
        setSelectedDate(value);
    };
    return (
        <div className='w-full'>
            <div className='flex justify-center space-x-8'>
                <RadioButton label='Departure' checked={selectedOption === 'rd1'} onChange={handleOptionChange} name='rd2' value='rd1' />
                <RadioButton label='Arrival' checked={selectedOption === 'rd2'} onChange={handleOptionChange} name='rd2' value='rd2' />
            </div>
            <div className='flex justify-center flex-wrap'>
                <div className='w-full md:w-1/2 mb-2 md:flex md:justify-center'>
                    <CustomDatePicker label='' value={selectedDate} onChange={handleDateChange} />
                </div>
                <div className='w-full md:w-1/2  mb-2 md:flex md:justify-center'>
                    <CustomTimePicker label='' value={selectedDate} onChange={handleDateChange} />
                </div>
            </div>
            <div className='flex justify-between flex-wrap'>
                <div className='w-full md:w-1/3 mb-2'>
                    <CustomButton icon={<AiOutlineRollback />} label='Reset' onClick={() => { }} />
                </div>
                <div className='w-full md:w-1/3'>
                    <CustomButton icon={<AiOutlineSearch />} label='Search' onClick={() => { }} />
                </div>
            </div>

        </div>
    )
}
