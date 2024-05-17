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
export const getSignup = (formData) => {
  console.log(formData);
  return { cnt: 1 };
};
