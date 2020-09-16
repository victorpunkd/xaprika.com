let endpoint = "http://3.128.33.13:8080";

//http://3.128.33.13:8080        *Test Environment
//http://localhost:8080          *Local Environment
//http://192.168.0.4:8080        *Local Environment on home network
//https://api.xaprika.com        *Production Environment

export const getApiEndpoint = () => {
  return endpoint;
};
