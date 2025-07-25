'use client';

import { IMaskInput } from 'react-imask';
import { useState } from 'react';

export default function PhoneInput() {
    const [value, setValue] = useState('');

    return (
        <div className="p-4 mt-30 h-screen">
            <div className='flex flex-col items-center justify-center gap-6 mx-auto '>
                <label htmlFor="phone" className="block text-[30px]  mb-1 font-medium">
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
                    className=" rounded-2xl p-2 w-[350px] border-0 bg-gray-100  text-center text-[25px]"
                />
            </div>
        </div>
    );
}
