import { Component } from "react"

import { 
    LoaderContainer,
    ErrorContainer,
    Heading, 
    Message,
    Container,
    CardContainer,
    Card,
    Image,
    Title,
    SubTitle,
    SubText
} from "./styledComponents"

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}

class Assests extends Component{
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
                id: data[0].page_config[7].id,
                props: data[0].page_config[7].props.map(each=>({
                    img: each.img,
                    sub_text: each.subText,
                    sub_title: each.subTitle,
                    title: each.title,   
                }))
            }
            this.setState({data: updatedData,apiStatus: apiCallLists.success})
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

    displayData = () =>{
        const {data} = this.state
        console.log(data)
        return(
            <Container>
                <h1>About us</h1>
                <CardContainer>
                    {data.props.map((item, index) => (
                        <Card key={index}>
                            <Image src={item.img} alt={item.title} />
                            <Title>{item.title}</Title>
                            <SubTitle>{item.sub_title}</SubTitle>
                            <SubText>{item.sub_text}</SubText>
                        </Card>
                    ))}
                </CardContainer>
        </Container>
        )
    }

    getRenderContent= ()=>{
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

export default Assests
