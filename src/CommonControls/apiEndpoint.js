let endpoint = "https://api.xaprika.com";

//http://3.138.198.107:8080      *Test Environment
//http://localhost:8080          *Local Environment
//http://192.168.0.4:8080        *Local Environment on home network
//https://api.xaprika.com        *Production Environment

export const getApiEndpoint = () => {
  return endpoint;
};
