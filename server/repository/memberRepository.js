import { db } from "../db/database_mysql80.js";

export const getLogin = (userId, userPass) => {
  //did =test, dpass = 1234
  const did = "test";
  const dpass = "1234";
  const result = {};
  //패스워드 체크 후 숫자로 결과 전송
  if (did === userId && dpass === userPass) {
    /* 로그인 성공 */
    result.cnt = 1;
  } else {
    /* 로그인 실패 */
    result.cnt = 0;
  }
  return result;
};
/* 아이디 중복 체크 */
export const getIdCheck = (userId) => {
  const did = "test";
  const result = {};
  if (did === userId) {
    result.cnt = 1; //사용불가(사용중)
  } else {
    result.cnt = 0; //사용가능
  }
  return result;
};
/* 회원가입 */
export const getSignup = async (formData) => {
  console.log(formData);
  let result_rows = 0;
  const phone1 = formData.phoneNumber1;
  let phone2 = "";
  let phone3 = "";
  if (formData.phoneNumber2.length === 8) {
    phone2 = formData.phoneNumber2.slice(0, 4);
    phone3 = formData.phoneNumber2.slice(4);
  } else {
    phone2 = formData.phoneNumber2.slice(0, 3);
    phone3 = formData.phoneNumber2.slice(3);
  }
  console.log(formData);
  console.log(phone1.concat("-", phone2, "-", phone3));

  //db 연동

  const params = [
    formData.userId,
    formData.userPass,
    formData.userName,
    formData.emailId,
    formData.emailDomain,
    phone1.concat("-", phone2, "-", phone3),
    formData.zipcode,
    formData.address.concat(" ", formData.detailAddress),
  ];
  const sql = `
  insert into shoppy_member(
    user_id,
    user_pass,
    user_name,
    email_id,
    email_domain,
    phone,
    zipcode,
    address,
    signup_date
  ) 
    values(
      ?, 
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      now()
    )
  `;

  console.log(sql);
  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};
