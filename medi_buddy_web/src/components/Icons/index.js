import {Component} from 'react'

import {LoaderContainer, ErrorContainer, Heading, Message, IconContainer, IconItem, IconImage, IconTitle} from './styledComponents'

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}
class Icons extends Component{
    state={
        data:[],
        apiStatus: apiCallLists.initially,
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({apiStatus: apiCallLists.isProgress})
        this.setState({apiStatus: apiCallLists.isProgress})
        const url ='https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            console.log("Responsed Data is:")
            console.log(data)
            const updatedData= {
                id: data[0].page_config[0].id,
                title: data[0].page_config[0].title,
                props: data[0].page_config[0].props.map(eachProps=>({
                    type: eachProps.type,
                    icon_text: eachProps.iconText,
                    icon_tag: eachProps.iconTag,
                    icon_url: eachProps.iconUrl,
                    deeplink: eachProps.deeplink,
                    service_name: eachProps.serviceName,
                    service_type: eachProps.serviceType, 
                }))
            }
            this.setState({data: updatedData,apiStatus: apiCallLists.success})
        } else {
            this.setState({apiStatus: apiCallLists.failure})
        }
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

    displayData = () =>{
        const {data} = this.state
        return(
            <IconContainer>
                {data.props.map((eachIcon, index) => (
                <IconItem key={index}>
                    <IconImage src={eachIcon.icon_url} alt={eachIcon.icon_text} />
                    <IconTitle>{eachIcon.icon_text}</IconTitle>
                </IconItem>
                ))}
            </IconContainer>
        )
    }

    getRenderContent = () =>{
        const {apiStatus} = this.state
        switch(apiStatus){
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

export default Icons
