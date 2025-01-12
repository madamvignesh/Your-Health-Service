import React, { Component } from 'react';
import { GiStopwatch } from "react-icons/gi"
import { FaShippingFast } from "react-icons/fa"
import {
  CheckupContainer,
  Header,
  CategoryHolder,
  Category,
  PackagesSlider,
  Package,
  SponsoredContainer,
  Sponsored,
  PackageDetails,
  PackageData,
  Card,
  PackageRate,
  Quantity,
  LoaderContainer,
  ErrorContainer,
  Heading, Message,
  MainPrice,
  RateContainer,
} from './styledComponents.js'

const apiCallLists = {
  initially: 'INITIALLY',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isProgress: 'ISPROGRESS',
}

class Checkup extends Component {
  state = {
    data: [],
    highlightedCategory: '',
    apiStatus: apiCallLists.initially,
  };

  fetchData =async () =>{
    this.setState({apiStatus: apiCallLists.isProgress})
    const url ='https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
    const response = await fetch(url)
    if (response.ok){
      const data  =await response.json()
      const updatedData = {
        id: data[0].page_config[2].id,
        heading: data[0].page_config[2].heading,
        categories: data[0].page_config[2].categories,
        packages : data[0].page_config[2].props[0].packages.map((eachPack) => ({
          cart_id: eachPack.cartId,
          consultation_count: eachPack.consultationCount,
          contract_id: eachPack.contractId,
          current_visit_type: eachPack.currentVisitType,
          description: eachPack.description,
          discount: eachPack.discount,
          discount_info: {
            discount_price: eachPack.discountInfo.discountPrice,
            sale_name: eachPack.discountInfo.saleName,
            coupon: eachPack.discountInfo.coupon,
          },
          estimated_price: eachPack.estimatedPrice,
          fasting_hours_text: eachPack.fastingHoursText,
          gender: eachPack.gender,
          instructions: eachPack.instructions,
          is_available: eachPack.isAvailable,
          is_center_visit_package: eachPack.isCenterVisitPackage,
          is_covid_test: eachPack.isCovidTest,
          is_home_sample_available: eachPack.isHomeSampleAvailable,
          is_popular: eachPack.isPopular,
          is_present_in_cart: eachPack.isPresentInCart,
          is_radiology_included: eachPack.isRadiologyIncluded,
          is_sponsored: eachPack.isSponsored,
          max_age: eachPack.maxAge,
          min_age: eachPack.minAge,
          package_code: eachPack.packageCode,
          package_display_name: eachPack.packageDisplayName,
          package_id: eachPack.packageId,
          package_name: eachPack.packageName,
          package_type: eachPack.packageType,
          price: eachPack.price,
          price_range: eachPack.priceRange,
          reports_tat_text: eachPack.reportsTatText,
          sub_categories: eachPack.subCategories,
          tags: {
            top_right_tag: eachPack.tags.topRightTag,
            bottom_tag: eachPack.tags.bottomTag,
          },
          test_count: eachPack.testCount,
          tests_summary: eachPack.testsSummary,
          visit_type: eachPack.visitType,
        }))                  
      }
      this.setState({data:updatedData,apiStatus: apiCallLists.success})
    } else {
      this.setState({apiStatus: apiCallLists.failure})
    }
  }

  componentDidMount() {
    this.fetchData()
    this.setState({ highlightedCategory: 'Popular' });
  }

  setHighlightedCategory = (category) => {
    this.setState({ highlightedCategory: category });
  }

  displayData=()=>{
    const {data, highlightedCategory} = this.state
    const categoriesList = data.categories[10386]
    const packagesList = data.packages.filter(pkg =>
      pkg.sub_categories.includes(highlightedCategory.toUpperCase())
    ) || []
    return(
      <CheckupContainer>
        <Header>
          <h1>{data?.heading}</h1>
          <a>View All</a>
        </Header>
        <CategoryHolder>
          {categoriesList.map((each, index) => (
            <Category
              key={index}
              highlight={highlightedCategory === each}
              onClick={() => this.setHighlightedCategory(each)}
            >
              <button>{each}</button>
            </Category>
          ))}
        </CategoryHolder>
        <PackagesSlider>
          {packagesList.length > 0 ? (
            packagesList.map((pkg, index) => (
              <Package key={index}>
                <SponsoredContainer>
                  {!pkg.is_sponsored && <Sponsored>Sponsored</Sponsored>}
                </SponsoredContainer>
                <PackageDetails>
                  <h2>{pkg.package_display_name}</h2>
                  <p className="packageDesci">
                    <GiStopwatch size={25}/>
                    {pkg.reports_tat_text}
                  </p>
                  <PackageData>
                    <Card>
                      <h3>{pkg.test_count} Tests</h3>
                      <ul>
                        <li>{pkg.tests_summary[0]},</li>
                        <li>
                          {pkg.tests_summary[1]}... +{pkg.test_count - 2}
                        </li>
                      </ul>
                    </Card>
                    <Card>
                      <h3>Package Type</h3>
                      <ul>
                        <li>{pkg.package_type}</li>
                      </ul>
                    </Card>
                    <Card>
                      <h3>Fasting</h3>
                      <ul>
                        <li className='cardDesci'>
                          <FaShippingFast size={16}/>
                          {pkg.fasting_hours_text}</li>
                      </ul>
                    </Card>
                    <Card>
                      <h3>Available at</h3>
                      <p>{pkg.visit_type.join(", ")}</p>
                    </Card>
                  </PackageData>
                  <PackageRate>
                    <RateContainer>
                      <MainPrice>₹{pkg.price_range}</MainPrice>
                      <h2>₹{pkg.price}</h2>
                    </RateContainer>
                    <Quantity>
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </Quantity>
                  </PackageRate>
                </PackageDetails>
              </Package>
            ))
          ) : (
            <div>
              <h1>No Tests Found</h1>
            </div>
          )}
        </PackagesSlider>
    </CheckupContainer>
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
  );

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

  render() {
    return (
      <>
        {this.getRenderContent()}
      </>
    );
  }
}

export default Checkup
