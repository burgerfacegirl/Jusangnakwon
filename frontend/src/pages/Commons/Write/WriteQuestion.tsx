import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StarIcon from "@mui/icons-material/Star";
import styles from "./Write.module.css";
import ImageUpload from "@/components/Commons/ImageUpload/ImageUpload";

interface FormData {
  img: string | null;
  title: string;
  content: string | null;
  // isPrivate: boolean;
}

// const StyleModal = styled(ModalDialog)(({theme}) => ({
//     "& .JoyModal-backdrop": {
//       backgroundColor:" #000000"
//     },
// }));

const StyleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

// 임의 리스트
const DrinkTypeList = {
  와인: "l1",
  전통주: "l2",
  맥주: "l3",
  위스키: "l4",
  칵테일: "l5",
  홈테일: "l6",
};

const WriteQuestion = () => {
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    content: "",
    // isPrivate: false,
  });


  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    // 제출 api호출
    navigate(-1);
  };

  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>질문글 작성</div>
        <div onClick={() => handleSubmit(formData)}>완료</div>
      </div>
    );
  };

  
  return (
    <div className={`${styles[`container`]}`}>
      <WriteHeader></WriteHeader>
      <form className={`${styles[`container`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <div style={{width:"inherit"}}>
            <div className={`${styles[`subtitle-row`]}`}>
              사진
              <div style={{ fontSize: "0.8rem", color: "rgb(149, 149, 149)" }}> (선택)</div>
            </div>
            {/* 이미지 선택, 미리보기, 업로드 로직 컴포넌트 */}
            <ImageUpload></ImageUpload>
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>글 제목</div>
          <input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            placeholder="내용 입력..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>
      </form>
      <div>
        데이터 확인 :
        {formData.title}
        {formData.content}
      </div>
    </div>
  );
};

export default WriteQuestion;