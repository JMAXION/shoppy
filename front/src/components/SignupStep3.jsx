import { Link, useNavigate } from "react-router-dom";

export default function SignupStep3() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup">
      <h2>HOPENEARUS SIGNUP</h2>
      <img src="https://d2v80xjmx68n4w.cloudfront.net/gigs/EOYa41702649874.jpg" />
      <p>회원가입에 성공하셨습니다.</p>

      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}
