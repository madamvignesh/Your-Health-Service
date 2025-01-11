import { Component } from "react";

import {
    CategoriesContainer,
    Title,
    CategoriesGrid,
    CategoryCard,
    CategoryImage,
    CategoryLabel,
    LoaderContainer, ErrorContainer, Heading, Message
  } from './styledComponents.js'

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}

class BookingPackages extends Component{
    state={
        data:[],
        currentStatus: apiCallLists.initially
    }

    getData = async () =>{
        this.setState({apiStatus: apiCallLists.isProgress})
        const url ='https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            const updatedData = {
                id: data[0].page_config[4].id,
                title: data[0].page_config[4].title,
                props: data[0].page_config[4].props.map(each=>({
                    color: each.color,
                    img_src: each.imgSrc,
                    label: each.label,
                    value: each.value,
                }))
            }
            this.setState({data: updatedData,currentStatus: apiCallLists.success})
        } else {
            this.setState({currentStatus: apiCallLists.failure})
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

    displayData=()=>{
        const {data} = this.state
        return(
            <CategoriesContainer>
                <Title>{data.title}</Title>
                <CategoriesGrid>
                    {data.props.map((item, index) => (
                    <CategoryCard key={index} style={{ borderColor: item.color }}>
                        <CategoryImage src={item.img_src} alt={item.label} />
                        <CategoryLabel>{item.label}</CategoryLabel>
                    </CategoryCard>
                    ))}
                </CategoriesGrid>
            </CategoriesContainer>
        )
    }

    renderContent = () =>{
        const{currentStatus} = this.state
        switch (currentStatus){
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
                {this.renderContent()}
            </>
        )
    }
}

export default BookingPackages