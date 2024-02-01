import React, {useState} from 'react'
import items from '../../StaticData/Data'
import Catagories from '../Catagories/Catagories'
import Menu from '../Menu/Menu'
const allCatagories = ['all', ...new Set(items.map((item)=>item.category))]

function Home() {
    const [menuItems, setMenuItems] = useState(items);
    const [catagories, setCatagories] = useState(allCatagories);

    const filterItems = (category)=>{
        if (category === 'all'){
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item)=>item.category === category)
        setMenuItems(newItems)
    }
  return (
   <main>
    <section>
        <div className='menu section'>
            <div className='title'>
                <h2>Mess App</h2>
                <div className='underline'></div>
            </div>
        </div>
        <Catagories catagories={catagories} filterItems={filterItems} />
        <Menu items={menuItems} />
    </section>
   </main>
  )
}

export default Home
