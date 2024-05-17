import * as repository from "../repository/memberRepository.js";
/* 로그인 처리 */
export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);
  res.json(result);
  res.end();
};
/* 아이디 중복 체크 */
export const getIdCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getIdCheck(userId);
  res.json(result);
  res.end();
};
/* 회원가입 */
export const getSignup = async (req, res) => {
  const formData = req.body;
  const result = await repository.getSignup(formData);
  res.json(result); //{cnt : 1}
  res.end();
};
