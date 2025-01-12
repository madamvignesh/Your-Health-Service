import { Component } from "react";

import {
    LoaderContainer,
    ErrorContainer,
    Heading,
    Message,
    QuestionContainer,
    QuestionTitle,
    ReviewContainer,
    ReviewHeading,
    UserDetails,
    RatingDetails,
    ReviewesContainer,
    Rating,
    Feedback,
    UserName,
    UserDate,
} from "./styledComponents";

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}

class UserAnswer extends Component{
    state={
        data: [],
        apiStatus:apiCallLists.initially,
    }

    getData = async () =>{
        this.setState({apiStatus: apiCallLists.isProgress})
        const url ='https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            const updatedData = data[0].page_config[5]
            this.setState({data: updatedData, apiStatus: apiCallLists.success})
        } else {
            this.setState({apiStatus: apiCallLists.failure})
        }
    }

    componentDidMount(){
        this.getData()
    }

    displayData = () =>{
        const {data} = this.state
        return(
            <QuestionContainer>
                <div>
                <QuestionTitle>{data.title}</QuestionTitle>
                </div>
                <ReviewesContainer>
                    {data.props.map((each, index) => (
                        <ReviewContainer key={index}>
                            <ReviewHeading>
                                <UserDetails>
                                    <UserName>{each.name}</UserName>
                                    <UserDate>{each.days}</UserDate>
                                </UserDetails>
                                <RatingDetails>
                                    <Rating>⭐ {each.rating}</Rating>
                                </RatingDetails>
                            </ReviewHeading>
                            <Feedback>{each.content}</Feedback>
                        </ReviewContainer>
                    ))}
                </ReviewesContainer>
            </QuestionContainer>
        )
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

    getRenderContent=()=>{
        const{apiStatus} = this.state
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

export default UserAnswer
