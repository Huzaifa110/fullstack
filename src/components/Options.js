// import React from 'react';
// import data from './foodData.json';

// const Options = () => {
//     data.forEach((dish) => {
//         let options = dish.options[0];
//         let keys = Object.keys(options)
//         console.log(keys)

//     })

//     return (
//         <div>
//             <select name="" id="" className='m-2 h-100 bg-danger rounded'>
//                 <option value="half">Half</option>
//                 <option value="full">Full</option>                 <option value="double">Double</option>
//             </select>
//         </div>
//     )
// }

// export default Options;

// import React from 'react';
// import data from './foodData.json';

// const Options = () => {
//     let allOptions = [];
//     data.forEach((dish) => {
//         let options = dish.options[0];
//         Object.keys(options).forEach(key => {
//             allOptions.push({ key: key, value: options[key] });
//         });
//     });

//     return (
//         <div>
//             <select name="" id="" className='m-2 h-100 bg-danger rounded'>
//                 {allOptions.map((option, index) => (
//                     <option key={index} value={option.value}>{option.key} : {option.value}</option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// export default Options;

// I am continously facing issues with dropdown, I will recommend you to use this type of logic accordingly


import React from 'react';
import data from './foodData.json';

const Options = () => {
    const optionDropdowns = data.map((dish, index) => {
        const options = dish.options[0];
        const dropdownOptions = Object.keys(options).map((key, index) => (
            <option key={index} value={options[key]}>{key} : {options[key]}</option>
        ));

        return (
            <div key={index}>
                <select name="" id="" className='m-2 h-100 bg-danger rounded'>
                    {dropdownOptions}
                </select>
            </div>
        );
    });

    return (
        <div>
            {optionDropdowns}
        </div>
    );
}

export default Options;
