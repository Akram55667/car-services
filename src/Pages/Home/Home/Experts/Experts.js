import React from 'react';
import expert1 from '../../../../img/expert/expert-1.jpg'
import expert2 from '../../../../img/expert/expert-2.jpg'
import expert3 from '../../../../img/expert/expert-3.jpg'
import expert4 from '../../../../img/expert/expert-4.jpg'
import expert5 from '../../../../img/expert/expert-5.jpg'
import expert6 from '../../../../img/expert/expert-6.png'
import Expert from '../Expert/Expert';
import './Experts.css'



const Experts = () => {

    const experts = [
        {id: 1, name:'Akram Hossain', img:expert1},
        {id: 2, name:'Rohan mia', img:expert2},
        {id: 3, name:'Raisul', img:expert3},
        {id: 4, name:'Emon khan', img:expert4},
        {id: 5, name:'Soage khan', img:expert5},
        {id: 6, name:'will smit', img:expert6}
     ]
    
 
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5 mb-5'>Our Experts</h2>
            <div className="experts-container">
                {
                    experts.map(expert => <Expert
                     key={expert.id}
                     expert= {expert}
                    
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;