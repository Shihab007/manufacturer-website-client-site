import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' container mx-auto'>
            <h1 className='text-center font-bold'>Md.Nasir Uddin Nahid</h1>
            <p className='text-center font-bold'> Email: nahidahmed17762@gmail.com</p>
            <div>

                <div class="divider"></div>
                <h1 className='text-2xl font-bold mb-3'>Education Background:</h1>
                <p > <b>Higher Secondary School certificate (HSC) </b><span>: 2018, GPA: 4.00 Out of 5</span> </p>

                Dania College
                Dhaka-1236
                <p > <b>Computer Science And Engineering(CSE) </b><span>: Running (3rd Semester)</span> </p>
                Sonargon University
                <div class="divider"></div>
                <h1 className='text-2xl font-bold'>List of technologies:</h1>
                <ul className='list-disc list-inside '>
                    <li>JavaScript</li>
                    <li>ES6</li>
                    <li>REST API</li>
                    <li>React.js</li>
                    <li>SPA</li>
                    <li>React Hooks</li>
                    <li>React Router</li>
                    <li>HTML5</li>
                    <li>CSS3 </li>
                    <li>Bootstrap5 </li>
                    <li>Tailwind Css </li>
                </ul>

            </div>
            <div class="divider"></div>
            <div className='mb-4'>
                <h1 className='text-2xl font-bold'>Project:</h1>
                <ul className='list-disc list-inside '>
                    <li> <a className='text-info' target={"blank"} href="https://make-your-body-fit.firebaseapp.com/">Independant Service provider website</a></li>
                    <li> <a className='text-info' target={"blank"} href="https://musical-blancmange-491178.netlify.app/home">Product Analysis</a></li>
                    <li> <a className='text-info' target={"blank"} href="https://assignment-11-3a9a2.web.app/">Warehouse management site</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;