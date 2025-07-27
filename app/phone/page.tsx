'use client';

import { IMaskInput } from 'react-imask';
import { useState } from 'react';

export default function PhoneInput() {
    const [value, setValue] = useState('');
    console.log(value);
    

    const EMPTY_MASK = '+998(__)___-__-__';

    const isEmpty = !value || value === EMPTY_MASK;

    const digitsOnly = value.replace(/\D/g, '');

    const isPhoneComplete = digitsOnly.length === 12;

    return (
        <div className="p-4 mt-30 h-screen">
            <div className='flex flex-col items-center justify-center gap-6 mx-auto'>
                <label htmlFor="phone" className="block text-[30px] mb-1 font-medium">
                    Raqamingizni kiriting
                </label>
                <IMaskInput
                    mask="+998(00)000-00-00"
                    lazy={false}
                    overwrite={true}
                    unmask={false}
                    value={value}
                    onAccept={(val) => setValue(val)}
                    placeholder="+998(00)000-00-00"
                    className={`rounded-2xl p-2 w-[350px] border-0 bg-gray-100 text-center text-[25px]
                        ${isEmpty ? 'text-gray-400' : 'text-black'}`}
                />

                {/* Tugma */}
                <button
                    disabled={!isPhoneComplete}
                    className={`mt-4 px-6 py-3 w-80 rounded-4xl text-white text-[20px] transition 
                        ${isPhoneComplete ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                    Davom etish
                </button>
            </div>
        </div>
    );
}
