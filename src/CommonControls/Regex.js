export const phoneNoRegex = /^\d{10}$/; // takes only 10 digits
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // checks right format of mail, but also takes all the special characters
// export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const nameRegex = /^[a-zA-Z !@#$^&*()\-+{}|:"<>?_=[\];,.//]{3,50}$/;
export const passwordRegex = /^[a-zA-Z0-9!@#$^&*()\-+{}|:"<>?_=[\];,.//]{6,16}$/; // has to be 6 - 16 characters long, can take alphabets numbers and !@#$^&*
export const OTPRegex = /^\d{4}$/;
export const addressLine1Regex = /^[a-zA-Z0-9 !@#$^&*()\-+{}|:"<>?_=[\];,.//]{3,150}$/; // not supported special characters - ' \ %
export const couponCodeRegex = /^[a-zA-Z0-9]{3,50}$/; // no special characters, only alphanumeric, minimum 3 maximum 50
