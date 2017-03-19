import {Link} from 'react-router';
import React from 'react';
import InputField from '../generalComponents/InputField';

const UserFillDetailsPage = () => {
    return(
        <div className='user_details_page'>
         <div className='container'>
             <div className='inner_container'>
                 <h1>Please fill in your details</h1>
                 <InputField label='Name'/>
                 <InputField label='Last name'/>
                 <div className='buttons'>
                    <Link className='button_square positive'>Start</Link>
                 </div>
             </div>
         </div>
        </div>
    );
};
export default UserFillDetailsPage;