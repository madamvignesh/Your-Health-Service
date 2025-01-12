import './index.css'

import { FaArrowLeft } from "react-icons/fa"
import { MdOutlineLocationOn } from "react-icons/md"
import { CiWallet } from "react-icons/ci"
import { BsCart } from "react-icons/bs"

const Header = () =>(
    <nav className='navBar'>
        <div className='navHeading'>
            <FaArrowLeft size={36}/>
            <div className='navloaction'>
                <h1>Medi Buddy Health Services</h1>
                <div className='navhead'>
                    <h3>Billekahalli</h3>
                    <MdOutlineLocationOn size={28}/>
                </div>
            </div>
        </div>
        <div className='navCartSection'>
            <div>
                <CiWallet size={32}/>
            </div>
            <div>
                <BsCart size={32}/>
            </div>
        </div>
    </nav>
)
export default Header
