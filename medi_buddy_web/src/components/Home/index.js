
import { CiSearch } from "react-icons/ci";

import Header from '../Header'
import Checkup from '../Checkup';
import Banner from "../Banners";
import HealthCategories from '../HealthCategories';
import BookingPackages from '../BookingPackages';
import Icons from '../Icons';
import UserAnswer from "../UserAnswers";
import QuestionsAnswers from "../Questions&Answers";
import Assests from "../Assests";

import { BannerContainer, BannerTitle, BannerImageCard, BannerImage } from './styledComponents';
import './index.css'

const Home = () =>{
    const getBannerData = () =>{
        return(
            <BannerContainer>
                <BannerTitle>
                    <h1>Baby On Board? 
                    <br />
                    Get Pregnancy Care Tests!</h1>
                    <p>Diabetes, ANC, Ferritin, HIV/Elisa & Thyroid</p>
                    <button>BOOK NOW</button>
                </BannerTitle>
                <BannerImageCard>
                    <BannerImage 
                    src='https://s3-alpha-sig.figma.com/img/3052/fb58/9235d0f4d984a3789adf549082b7d8c9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYi2s6aFqeFq-ITOYaysvuV1BHpEElTZfNWXTauhdBBj-dPnuz-5t-K0VU7OKuhw855Va2Jg-TLs4JoHSM16CYR0je0hjXjV3xGeoZ6SowHICoBp2xhaYgiCJvTZgMwrCTf4cEQ3JlvgO-RixFaIoc0bWo0Vis4P8FjNQ8766mpa-FlIyciBm-L~xEISP7DtdpWs8WpQUf9rNRShJxOAB4jS7nwMSYTDZ3SBFIlsN2cMnSWrRTK6Cgo4nyK3zVSp3bhq-SJR~BK-Z-wfpqL65fMlLoFnyfQQqy~DbEly8fmZ866C54kKc716lFpXjQJx66v2CzTaZBITqLl~XuBTPw__'
                    alt='Pregnancy Care Tests'
                    className='banner-image'
                    />
                </BannerImageCard>
            </BannerContainer>
        )
    }
    return(
        <div className='mainContainer'>
            <Header />
            <Icons />
            <div className='searchContainer'>
                <input type='text' className='inputsearch' placeholder='Find lab test, diagnostics centers'/>
                <CiSearch size={25}/>
            </div>
            <Banner />
            {getBannerData()}
            <Checkup />
            <HealthCategories />
            <BookingPackages/>
            <UserAnswer />
            <QuestionsAnswers />
            <Assests />
        </div>
    )
}

export default Home
