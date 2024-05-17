import React, { useState } from "react";
import { validateCheckStep1, handleFocus } from "../apis/validate";

export default function SignupStep1({ next, formData, handleCheck }) {
  /* validation check- service, personal 체크박스 */
  /* const validateCheck = () => {
    if (!formData.service) {
      alert("서비스 약관에 동의해주세요.");
      document.getElementById("service").style.outline = "3px solid red";
    } else if (!formData.personal) {
      alert("개인정보 이용 약관에 동의해주세요.");
      document.getElementById("personal").style.outline = "3px solid red";
    } else {
      next();
    }
  }; */
  /*   const handleFocus = (type) => {
    if (type === "service") {
      document.getElementById("service").style.outline = "none";
    } else if (type === "personal") {
      document.getElementById("personal").style.outline = "none";
    } else if (type === "all") {
      document.getElementById("service").style.outline = "none";
      document.getElementById("personal").style.outline = "none";
    }
  }; */

  const [] = useState();
  return (
    <div className="signup">
      <h2>hopenearus signup</h2>
      <div>
        <h3>약관동의</h3>
        <p>회원가입에 필요한 약관에 동의해주세요</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => handleCheck("all", e.target.checked)}
            onFocus={() => handleFocus("all")}
          />
          <span>모두 동의합니다.</span>
        </div>
        <p>
          전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
          개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를
          거부하시는 경우에도 서비스는 이용이 가능합니다.
        </p>
      </div>
      <div>
        <h4>서비스 약관 동의</h4>
        <textarea>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
          optio qui modi ipsum cupiditate voluptatem quibusdam magni similique.
          Doloribus itaque dolorum magni iste quo ad alias magnam voluptates
          provident.
        </textarea>
        <div>
          <input
            type="checkbox"
            name="service"
            id="service"
            checked={formData.service}
            onChange={() => handleCheck("service")}
            onFocus={() => handleFocus("service")}
          />
          <span>동의합니다.</span>
        </div>
      </div>
      <div>
        <h4>개인정보 수집 및 이용 동의</h4>
        <textarea>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
          optio qui modi ipsum cupiditate voluptatem quibusdam magni similique.
          Doloribus itaque dolorum magni iste quo ad alias magnam voluptates
          provident.
        </textarea>
        <div>
          <input
            type="checkbox"
            name="personal"
            id="personal"
            checked={formData.personal}
            onChange={() => handleCheck("personal")}
            onFocus={() => handleFocus("personal")}
          />
          <span>동의합니다.</span>
        </div>
      </div>
      <button type="button" onClick={() => validateCheckStep1(next, formData)}>
        다음
      </button>
    </div>
  );
}
