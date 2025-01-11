import { Component } from "react";

import './index.css'

const apiCallLists = {
    initially: 'INITIALLY',
    success: 'SUCCESS',
    failure: 'FAILURE',
    isProgress: 'ISPROGRESS',
}

class HealthCategories extends Component {
    state = {
        data: [],
        currentStatus: apiCallLists.initially,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ currentStatus: apiCallLists.isProgress });
        const url = 'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const updatedData = data[0].page_config[3].props.map(each => ({
                title: each.title,
                value: each.value,
                img_src: each.imgSrc,
            }));
            this.setState({ data: updatedData, currentStatus: apiCallLists.success });
        } else {
            this.setState({ currentStatus: apiCallLists.failure });
        }
    }

    Loader = () => (
        <div className="loader-container">
            <h1>Loading...</h1>
        </div>
    )

    ErrorPage = () => (
        <div className="error-container">
            <h1>Error</h1>
            <p>Something went wrong! Please try again.</p>
        </div>
    )

    displayData = () => {
        const { data } = this.state;
        return (
            <div className="medicalPageContainer">
                <header className="header">
                    <h1>Health Categories</h1>
                </header>
                <div className="categoriesContainer">
                    {data.map((item, index) => (
                        <div key={index} className="categoryCard">
                            <img src={item.img_src} alt={item.title} className="categoryImage" />
                            <h2 className="categoryTitle">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    renderContent = () => {
        const { currentStatus } = this.state;
        switch (currentStatus) {
            case apiCallLists.isProgress:
                return this.Loader();
            case apiCallLists.success:
                return this.displayData();
            case apiCallLists.failure:
                return this.ErrorPage();
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="healthContainer">
                {this.renderContent()}
            </div>
        );
    }
}

export default HealthCategories;
