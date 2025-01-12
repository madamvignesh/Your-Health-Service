import { Component } from "react";
import {
  LoaderContainer,
  ErrorContainer,
  Heading,
  Message,
  QuestionContainer,
  QuestionTitle,
  AnswerContainer,
  ToggleIcon,
} from "./styledComponents.js";

const apiCallLists = {
  initially: "INITIALLY",
  success: "SUCCESS",
  failure: "FAILURE",
  isProgress: "ISPROGRESS",
};

class QuestionsAnswers extends Component {
  state = {
    apiStatus: apiCallLists.initially,
    data: [],
  };

  getData = async () => {
    this.setState({ apiStatus: apiCallLists.isProgress });
    const url = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const updatedData = {
        id: data[0].page_config[6].id,
        title: data[0].page_config[6].title,
        props: data[0].page_config[6].props.map((each) => ({
          id: each.id,
          icon: each.icon,
          is_expanded: false, // Default to false for all
          question: each.question,
          type: each.type,
          points: each.points.map((e) => ({
            idx: e.idx,
            pnt: e.pnt,
            img: e.img,
          })),
        })),
      };
      this.setState({ apiStatus: apiCallLists.success, data: updatedData });
    } else {
      this.setState({ apiStatus: apiCallLists.failure });
    }
  };

  componentDidMount() {
    this.getData();
  }

  toggleExpand = (id) => {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        props: prevState.data.props.map((item) =>
          item.id === id
            ? { ...item, is_expanded: !item.is_expanded }
            : item
        ),
      },
    }));
  };

  displayData = () => {
    const { data } = this.state;

    return (
      <QuestionContainer>
        <Heading>{data.title}</Heading>
        {data.props.map((item) => (
          <div key={item.id}>
            <QuestionTitle>
              <span>{item.question}</span>
              <ToggleIcon onClick={() => this.toggleExpand(item.id)}>
                {item.is_expanded ? "-" : "+"}
              </ToggleIcon>
            </QuestionTitle>
            {item.is_expanded && (
              <AnswerContainer>
                {item.points.map((point) => (
                  <div key={point.idx}>
                    <img src={point.img} alt={`Step ${point.idx}`} />
                    <p>{point.pnt}</p>
                  </div>
                ))}
              </AnswerContainer>
            )}
          </div>
        ))}
      </QuestionContainer>
    );
  };

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
  );

  getRenderContent = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiCallLists.isProgress:
        return this.Loader();
      case apiCallLists.success:
        return this.displayData();
      case apiCallLists.failure:
        return this.ErrorPage();
      default:
        return null;
    }
  };

  render() {
    return <>{this.getRenderContent()}</>;
  }
}

export default QuestionsAnswers;
