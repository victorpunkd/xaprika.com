import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./XaprikaSpecials.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import BannerNonSliding from "../BannerNonSliding/BannerNonSliding";
import {
  fetchXapSpecialCompanyInfoAction,
  clearFetchXapSpecialCompanyInfoAction,
} from "../../Actions/FetchXapSpecialsCompanyInfo";

const XaprikaSpecials = () => {
  const dispatched = useDispatch();
  const { xapSpecialsCompanyInfoReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatched(clearFetchXapSpecialCompanyInfoAction());
    dispatched(fetchXapSpecialCompanyInfoAction());
  }, [dispatched]);
  return (
    <div className="xaprikaSpecialsContainer">
      <CurrentPageNameHeader categoryName="Xaprika Specials" />
      <div className="headerText">
        <div className="primaryText">A special treat for xapians</div>
        <div className="secondaryText">
          Xaprika brings to you an unique offering of special products. Under'
          Specials', you will find items and brands that have an X-Factor for
          the modern day online shopper
        </div>
      </div>
      <div className="xaprikaSpecialsBanners">
        {xapSpecialsCompanyInfoReducer.isLoaded ? (
          xapSpecialsCompanyInfoReducer.error ? (
            <Error errorMessage={xapSpecialsCompanyInfoReducer.errorMessage} />
          ) : xapSpecialsCompanyInfoReducer.data.length ? (
            <div className="xaprikaSpecialsCompanyBannersContainer">
              {xapSpecialsCompanyInfoReducer.data.map((data) => (
                <BannerNonSliding
                  key={data.company_id}
                  image={data.banner_image}
                  name={data.company_name}
                  link={`/xaprika-specials-company/${data.company_link}`}
                  clickable={true}
                />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default XaprikaSpecials;
