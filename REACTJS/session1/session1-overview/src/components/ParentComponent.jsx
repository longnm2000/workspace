import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import InfoSection from "./InfoSection";
import SignSection from "./SignSection";
import ClientSection from "./ClientSection";
import FindSection from "./FindSection";
import DetailSection from "./DetailSection";
import SliderSection from "./SliderSection";
import ProductItem from "./ProductItem";

export default class ParentComponent extends Component {
  render() {
    return (
      <div>
        <div className="hero_area">
          {/* header section strats */}
          <HeaderPage />
          {/* end header section */}
          {/* slider section */}
          <SliderSection />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailSection />
        {/* end detail section */}
        {/* products section */}
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <FindSection />
        {/* end find section */}
        {/* client section */}
        <ClientSection />
        {/* end client section */}
        {/* sign section */}
        <SignSection />
        {/* end sign section */}
        {/* info section */}
        <InfoSection />
        {/* end info section */}

        {/* footer section */}
        <FooterPage />
        {/* footer section */}
      </div>
    );
  }
}
