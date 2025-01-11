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
                <div className='navhead'>
                    <h1>Billekahalli</h1>
                    <MdOutlineLocationOn size={28}/>
                </div>
                <p>Sarvabhoumanagar Billekahalli</p>
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
