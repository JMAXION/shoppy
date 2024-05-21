import React, { useState } from "react";
import SignupStep1 from "../components/SignupStep1";
import SignupStep2 from "../components/SignupStep2";
import SignupStep3 from "../components/SignupStep3";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: false,
    personal: false,
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    emailId: "",
    emailDomain: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  /* step1에서 checkbox 이벤트가 발생하면 부모에서 처리 */
  const handleCheck = (type, isChecked) => {
    if (type === "all") {
      /* service, personal을 ischecked값으로 치환 */
      setFormData({ ...formData, service: isChecked, personal: isChecked });
    } else {
      setFormData({ ...formData, [type]: !formData[type] });
    }
  };

  /* step2에서 발생하는 폼의 이벤트가 발생하면 부모에서 처리 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const preStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="content">
      {step === 1 && (
        <SignupStep1
          next={nextStep}
          formData={formData}
          handleCheck={handleCheck}
        />
      )}
      {step === 2 && (
        <SignupStep2
          pre={preStep}
          next={nextStep}
          formData={formData}
          handleChange={handleChange}
          handleAddress={handleAddress}
        />
      )}
      {step === 3 && <SignupStep3 />}
    </div>
  );
}

// export function SignupStep1({ next, formData, handleCheck }) {
//   /* validation check- service, personal 체크박스 */
//   const validateCheck = () => {
//     if (!formData.service) {
//       alert("서비스 약관에 동의해주세요.");
//       document.getElementById("service").style.outline = "3px solid red";
//     } else if (!formData.personal) {
//       alert("개인정보 이용 약관에 동의해주세요.");
//       document.getElementById("personal").style.outline = "3px solid red";
//     } else {
//       next();
//     }
//   };
//   const handleFocus = (type) => {
//     if (type === "service") {
//       document.getElementById("service").style.outline = "none";
//     } else if (type === "personal") {
//       document.getElementById("personal").style.outline = "none";
//     } else if (type === "all") {
//       document.getElementById("service").style.outline = "none";
//       document.getElementById("personal").style.outline = "none";
//     }
//   };

//   const [] = useState();
//   return (
//     <div className="signup">
//       <h2>hopenearus signup</h2>
//       <div>
//         <h3>약관동의</h3>
//         <p>회원가입에 필요한 약관에 동의해주세요</p>
//       </div>
//       <div>
//         <div>
//           <input
//             type="checkbox"
//             onChange={(e) => handleCheck("all", e.target.checked)}
//             onFocus={() => handleFocus("all")}
//           />
//           <span>모두 동의합니다.</span>
//         </div>
//         <p>
//           전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
//           개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를
//           거부하시는 경우에도 서비스는 이용이 가능합니다.
//         </p>
//       </div>
//       <div>
//         <h4>서비스 약관 동의</h4>
//         <textarea>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
//           optio qui modi ipsum cupiditate voluptatem quibusdam magni similique.
//           Doloribus itaque dolorum magni iste quo ad alias magnam voluptates
//           provident.
//         </textarea>
//         <div>
//           <input
//             type="checkbox"
//             name="service"
//             id="service"
//             checked={formData.service}
//             onChange={() => handleCheck("service")}
//             onFocus={() => handleFocus("service")}
//           />
//           <span>동의합니다.</span>
//         </div>
//       </div>
//       <div>
//         <h4>개인정보 수집 및 이용 동의</h4>
//         <textarea>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
//           optio qui modi ipsum cupiditate voluptatem quibusdam magni similique.
//           Doloribus itaque dolorum magni iste quo ad alias magnam voluptates
//           provident.
//         </textarea>
//         <div>
//           <input
//             type="checkbox"
//             name="personal"
//             id="personal"
//             checked={formData.personal}
//             onChange={() => handleCheck("personal")}
//             onFocus={() => handleFocus("personal")}
//           />
//           <span>동의합니다.</span>
//         </div>
//       </div>
//       <button type="button" onClick={validateCheck}>
//         다음
//       </button>
//     </div>
//   );
// }

// export function SignupStep2({ pre, next }) {
//   const initFormData = {
//     id: "",
//     pass: "",
//     cpass: "",
//     name: "",
//     email: "",
//     eDomain: "",
//     phone: "",
//   };
//   const [formData, setFormData] = useState(initFormData);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onSelectChange = () => {
//     let selectValue = document.getElementById("selectEmail").value;
//     if (selectValue === "naver.com") {
//       document.getElementById("emailSelect").value = "naver.com";
//     } else if (selectValue === "gmail.com") {
//       document.getElementById("emailSelect").value = "gmail.com";
//     }
//   };
//   console.log(formData);

//   const handlePassCheck = () => {
//     if (formData.pass.trim()) {
//       if (formData.pass === formData.cpass) {
//         alert("암호일치");
//       } else {
//         alert("암호 불일치! 다시 입력하세요!");
//         setFormData({ ...formData, pass: "", cpass: "" });
//       }
//     }
//   };
//   return (
//     <div className="signup">
//       <h2>hopenearus signup</h2>
//       <div>
//         <h3>정보입력</h3>
//         <p>회원가입에 필요한 정보를 입력합니다.</p>
//       </div>
//       <form>
//         <div>
//           <div>
//             아이디<span>*</span>
//           </div>
//           <input
//             type="text"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//           />
//           <button type="button">중복확인</button>
//         </div>
//         <div>
//           <div>
//             비밀번호<span>*</span>
//           </div>
//           <input
//             type="text"
//             name="pass"
//             value={formData.pass}
//             onChange={handleChange}
//             placeholder="8~32자의 영문 대소문자, 숫자, 특수문자를 조합해서 입력해주세요."
//           />
//         </div>
//         <div>
//           <div>
//             비밀번호 확인<span>*</span>
//           </div>
//           <input
//             type="text"
//             name="cpass"
//             value={formData.cpass}
//             onChange={handleChange}
//             onBlur={handlePassCheck}
//             placeholder="확인을 위하여 위와 동일하게 입력해주세요."
//           />
//         </div>
//         <div>
//           <div>
//             이름<span>*</span>
//           </div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="한글/영문으로 입력해주세요."
//           />
//         </div>
//         <div>
//           <div>
//             이메일<span>*</span>
//           </div>
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <span>@</span>
//           <input
//             type="text"
//             id="emailSelect"
//             name="eDomain"
//             value={formData.eDomain}
//           />
//           <select
//             id="selectEmail"
//             name="eDomain"
//             value={formData.eDomain}
//             onChange={(onSelectChange, handleChange)}
//           >
//             <option value="직접입력">직접입력</option>
//             <option value="naver.com">naver.com</option>
//             <option value="gmail.com">gmail.com</option>
//           </select>
//         </div>
//         <div>
//           <div>
//             휴대폰 번호<span>*</span>
//           </div>
//           <select name="phone" value={formData.phone} onChange={handleChange}>
//             <option value="010">010</option>
//           </select>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="-없이 입력해주세요."
//           />
//           <button>인증번호 전송</button>
//         </div>
//         <div>
//           <div>주소</div>
//           <input type="text" />
//           <button>주소검색</button>
//           <div>
//             <input type="text" placeholder="상세주소를 입력해주세요." />
//           </div>
//         </div>
//       </form>
//       <button type="button" onClick={pre}>
//         뒤로
//       </button>
//       <button type="button" onClick={next}>
//         가입완료
//       </button>
//     </div>
//   );
// }
// export function SignupStep3({ pre }) {
//   return (
//     <div>
//       <h2>hellohellohello</h2>
//       <button type="button" onClick={pre}>
//         이전
//       </button>
//       <button type="button">가입완료</button>
//     </div>
//   );
// }
