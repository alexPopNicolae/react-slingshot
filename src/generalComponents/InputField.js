import React from 'react';

const InputField = ({label, onChange}) => {
    return(
        <div className='inputfield_component'>
            <label htmlFor='input'>{label}</label>
            <input type='text' className='input_text' onChange={onChange}/>
        </div>
    );
};
export default InputField;