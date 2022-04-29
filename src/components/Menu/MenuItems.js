import React , {useState} from 'react';

import MenuItem from './MenuItem';

//images
import all from '../../asset/Refreshments.png'
import burger from '../../asset/Hamburger.png'
import pizza from '../../asset/Pizza.png'
import taco from '../../asset/Taco.png'
import salad from '../../asset/Green Salad.png'
import doughnut from '../../asset/Doughnut.png'
import soda from '../../asset/Soda.png'

const data = [
    {
        image_src:all , 
        category : 'all dishes'
    },
    {
        image_src:burger , 
        category : 'Hamburger'
    },
    {
        image_src:pizza , 
        category : 'pizza'
    },
    {
        image_src:taco , 
        category : 'taco'
    },
    {
        image_src:salad , 
        category : 'salad'
    },
    {
        image_src:doughnut , 
        category : 'doughnut'
    },
    {
        image_src:soda , 
        category : 'soda'
    },
]


const MenuItems = () => {
    
    const [menu , setMenu] = useState("all")

    const changeHandler = event => {
        
    }

    return (
        <div>
            <ul>
            {data.map(item => <MenuItem data={item} key={item.category} onChange={changeHandler}/>)}
            </ul>
        </div>
    );
};

export default MenuItems;