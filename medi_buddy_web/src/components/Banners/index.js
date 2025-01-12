import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Component } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    LoaderContainer,
    ErrorContainer,
    Heading,
    Message,
    BannerContainer,
    BannerImage,
    BannerButton,
 } from './styledComponents';

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
  }
  
class Banner extends Component{
    state={
        data: [],
        apiStatus: apiCallLists.initially,
    }

    getData = async () =>{
        this.setState({apiStatus: apiCallLists.isProgress})
        const url ='https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            const updatedData = {
                id: data[0].page_config[1].id,
                title: data[0].page_config[1].title,
                props: data[0].page_config[1].props.map(each=>({
                    banner_url: each.bannerUrl,
                    check_for_corporates: each.checkForCorporates,
                    deeplink: each.deeplink,
                    is_active: each.is_active,
                    order: each.order,
                    type: each.type,
                }))
            }
            this.setState({data: updatedData, apiStatus: apiCallLists.success})
        } else {
            this.setState({apiStatus: apiCallLists.failure})
        }
    }

    componentDidMount(){
        this.getData()
    }

    Loader = () => (
        <LoaderContainer>
          <Heading>Loading...</Heading>
        </LoaderContainer>
      );
      
    ErrorPage = () => (
        <ErrorContainer>
            <Heading>Error</Heading>
            <Message>Something went wrong! Please try again.</Message>
        </ErrorContainer>
    )

    displayData= () =>{
        const {data} = this.state 
        return(
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {data.props.map((banner, index) => (
                    <SwiperSlide key={index}>
                    <BannerContainer>
                        <BannerImage src={banner.banner_url} alt={`Banner ${index + 1}`} />
                        <BannerButton href={banner.deeplink} target="_blank" rel="noopener noreferrer">
                            View More
                        </BannerButton>
                    </BannerContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    getRenderContent=()=>{
        const {apiStatus} = this.state
        switch (apiStatus){
            case apiCallLists.isProgress:
                return this.Loader()
            case apiCallLists.success:
                return this.displayData()
            case apiCallLists.failure:
                return this.ErrorPage()
            default:
                return null
    }
    }

    render(){
        return(
            <>
                {this.getRenderContent()}
            </>
        )
    }

}

export default Banner