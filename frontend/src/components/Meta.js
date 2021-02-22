import { decodeBase64 } from 'bcryptjs';
import React from 'react'
import { Helmet } from "react-helmet";
const Meta = ({title, description, keywords}) => {
    return (
        <div>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
            
        </div>
    )
}

Meta.defaultProps = {
  title: "Welcome To BagxBill",
  description: "BuyBuy your favourite things here!",
  keywords: "electronics",
};

export default Meta
