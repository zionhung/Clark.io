import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Paper, RaisedButton } from 'material-ui';

const propTypes = {};
const defaultProps = {};

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Container = styled.div`
      width: 100vw;
      min-height: calc(100vh - 180px);
      padding: 10vw 10vw;
    `;
    const Title = styled.div`
      font-size: 30px;
      font-weight: bold;
      padding: 3vw 0;
    `;
    const Block = styled.div`
      padding: 30px;
      font-size: 18px;
      text-align: left;
    `;

    const data = [
      "Clark is a product of Field-Test LLC",
      "By using this site, you are giving Field Test LLC the right to store your data.",
      "Field Test provides its members with a variety of services, including creating temporary or “pop-up” retail spaces, technology software and service platforms, data analytics, and consumer marketing and sales activities that help build brand awareness, increase the sales and profits of members and provide real time data and sentiment analytics, while providing retail customers with an immersive, elevated experience.",
      "All non-public technical and non-technical information of a party, including trade secrets, know-how and proprietary information, methods, processes, techniques, plans, designs, data, marketing plans, financial or personnel matters, present or future products, sales, suppliers, customers, that is disclosed or otherwise supplied to the other party and is marked as confidential or otherwise disclosed under circumstances that would lead a reasonable person to understand that such information is confidential or proprietary. The Confidential Information of Field Test includes the Reusable Materials, any lists created by Field Test (not including the lists provided by Brand), any Enhanced Data and all other information regarding the business of Field Test, which is not generally and readily available to the public. The Confidential Information of Brand includes all information that is obtained by us from you as a result of our permission-based integration with any customer databases, and any reports, formulations or compilations developed by us based on Brand Confidential Information that reveal the identity of any of your clients and/or your identity.",
      "“Field Test Materials” means any documents, data, methodologies, software, hardware, equipment, systems, technology, facilities, products or other materials provided by Field Test for inclusion into or for development of the Deliverables/Services that (a) are created by or for Field Test independent of this Agreement, or (b) are not otherwise Brand-Specific Materials.",
      "Field Test will provide real-time consumer data and analysis of such data, such as foot traffic, demographic insights, dwell times, traffic patterns, product engagement and sales data (such data and the analytic reports, outcomes, predictions and other results generated by Field Test, the “Enhanced Data”) to assist with Field Test’s marketing efforts and predictive data. The Enhanced Data will be provided by Field Test to Brand in either dynamic (dashboard) or static (report) format.",
      "License to Enhanced Data. Field Test is the sole and exclusive owner of all Enhanced Data and reserves all rights therein and thereto. Except as expressly permitted in this Agreement, Brand will not, and will not allow any third party to (a) sell, license, transfer, disclose or otherwise use or access to the Enhanced Data, or (b) copy, modify, distribute, decompile, reverse engineer or otherwise attempt to derive, obtain or modify the source code of any Enhanced Data.",
      "License to Field Test Marks. The Field Test Marks are the exclusive property of Field Test. Subject to the terms of the Agreement, Field Test hereby grants Brand a limited, non-exclusive, non-transferable, royalty-free license to use the Field Test Marks during the Term on Brand’s website, in marketing materials and in media releases. Field Test will retain all goodwill and all other rights to the Field Test Marks.",
    ];
    return (
      <Container>
        <Paper>
        <Title>Terms & Conditions</Title>
        {data.map((item, index) => {
          return (
            <Block id={index}>
              {item}
            </Block>
          )
        })}
        </Paper>
      </Container>
    );
  }
}

Terms.propTypes = propTypes;
Terms.defaultProps = defaultProps;

export default Terms;
