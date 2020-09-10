import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./OrderHistory.css";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import OrderInfoCard from "../OrderInfoCard/OrderInfoCard";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NoDataFound from "../NoDataFound/NoDataFound";
import { fetchOrdersInfo } from "../../Actions/FetchOrdersInfo";
import { clearFetchOrdersInfo } from "../../Actions/FetchOrdersInfo";

const OrderHistory = () => {
  const { ordersInfoReducer } = useSelector((state) => state);
  const dispatched = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("userPhoneNo") === null) {
      history.push("/");
      return;
    }
    dispatched(clearFetchOrdersInfo());
    dispatched(fetchOrdersInfo(localStorage.getItem("userPhoneNo")));
  }, [dispatched, history]);

  return (
    <div className="orderHistoryContainer">
      <CurrentPageNameHeader categoryName="Order History" />
      {ordersInfoReducer.isLoaded ? (
        ordersInfoReducer.error ? (
          <Error errorMessage={ordersInfoReducer.errorMessage} />
        ) : ordersInfoReducer.data.length ? (
          <div className="orderHistoryBody">
            {ordersInfoReducer.data.map((data) => (
              <OrderInfoCard
                key={data.order_Id}
                orderId={data.order_Id}
                amount={data.total_amount}
                orderDate={data.order_receive_date}
                orderStatus={data.order_status}
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
  );
};

export default OrderHistory;
