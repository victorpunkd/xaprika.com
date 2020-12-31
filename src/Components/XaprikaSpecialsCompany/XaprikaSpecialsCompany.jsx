import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./XaprikaSpecialsCompany.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import BannerNonSliding from "../BannerNonSliding/BannerNonSliding";
import ProductList from "../ProductList/ProductList";
import {
  fetchXapSpecialCompanyBrandingAction,
  clearFetchXapSpecialCompanyBrandingAction,
} from "../../Actions/FetchXaprikaSpecialsCompanyBranding";
import {
  fetchXapSpecialCompanyProductsAction,
  clearFetchXapSpecialCompanyProductsAction,
} from "../../Actions/FetchXaprikaSpecialsCompanyProducts";
import {
  fetchGroupOfProducts,
  clearFetchGroupOfProducts,
} from "../../Actions/FetchGroupOfProducts";

const XaprikaSpecialsCompany = ({ match }) => {
  const dispatched = useDispatch();
  const {
    xapSpecialsCompanyBrandingReducer,
    xapSpecialsCompanyProductsReducer,
    groupOfProductsReducer,
  } = useSelector((state) => state);

  const checkIfProductsAreFetched = useCallback(() => {
    if (xapSpecialsCompanyProductsReducer.isLoaded) {
      if (
        !xapSpecialsCompanyProductsReducer.error &&
        xapSpecialsCompanyProductsReducer.data.length
      ) {
        dispatched(clearFetchGroupOfProducts());
        dispatched(
          fetchGroupOfProducts(
            xapSpecialsCompanyProductsReducer.data[0].products_list.split(",")
          )
        );
      }
    }
  }, [xapSpecialsCompanyProductsReducer, dispatched]);

  useEffect(() => {
    checkIfProductsAreFetched();
  }, [checkIfProductsAreFetched]);

  useEffect(() => {
    dispatched(clearFetchXapSpecialCompanyBrandingAction());
    dispatched(fetchXapSpecialCompanyBrandingAction(match.params.companyName));
    dispatched(clearFetchXapSpecialCompanyProductsAction());
    dispatched(fetchXapSpecialCompanyProductsAction(match.params.companyName));
  }, [dispatched, match.params.companyName]);

  return (
    <div className="xaprikaSpecialsCompanyContainer">
      <CurrentPageNameHeader categoryName={match.params.companyName} />
      <div className="xaprikaSpecialsCompanyContent">
        {xapSpecialsCompanyBrandingReducer.isLoaded ? (
          xapSpecialsCompanyBrandingReducer.error ? (
            <Error
              errorMessage={xapSpecialsCompanyBrandingReducer.errorMessage}
            />
          ) : xapSpecialsCompanyBrandingReducer.data.length ? (
            <div className="companyBrandingImages">
              <BannerNonSliding
                key={xapSpecialsCompanyBrandingReducer.data[0].company_id}
                image={xapSpecialsCompanyBrandingReducer.data[0].cover_image}
                name={xapSpecialsCompanyBrandingReducer.data[0].company_link}
                link={null}
                clickable={false}
              />
              <div className="instructionsImage">
                <BannerNonSliding
                  key={xapSpecialsCompanyBrandingReducer.data[0].company_id}
                  image={
                    xapSpecialsCompanyBrandingReducer.data[0].instructions_image
                  }
                  name={xapSpecialsCompanyBrandingReducer.data[0].company_link}
                  link={null}
                  clickable={false}
                />
              </div>
            </div>
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
        <div className="xapSpecialsCompanyProducts">
          <ProductList products={groupOfProductsReducer} />
        </div>
      </div>
    </div>
  );
};

export default XaprikaSpecialsCompany;
