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
  type: string;
  name: string;
  content: string | null;
  ratings: number;
  isPrivate: boolean;
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

const WriteReview = () => {
  const [formData, setFormData] = useState({
    img: "",
    type: "",
    name: "",
    content: "",
    ratings: 0,
    isPrivate: false,
  });

  // 모달 오픈 변수
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setFormData({ ...formData, ratings: newValue });
    }
  };

  const handleSubmit = (formData: FormData) => {
    // 제출 api호출
    navigate(-1);
  };

  const WriteHeader = () => {
    return (
      <div className={`${styles[`header-container`]}`}>
        <CloseIcon onClick={() => navigate(-1)} />
        <div>게시글 작성</div>
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
          {/* 술상세페이지에서 리뷰작성으로 넘어오면 */}
          {/* navigate state로 주종 같이 넘겨줘서 select value에 담아놓기  */}
          <div className={`${styles[`subtitle-container`]}`}>주종</div>
          <select
            style={{
              width: "30vw",
              fontSize: "100%",
              backgroundColor: "#06031a",
              borderColor: "#06031a",
              color: "white",
            }}
            value={formData.type}
            onChange={(e) => {
              setFormData({ ...formData, type: e.target.value });
            }}
          >
            <option value="" disabled>
              선택
            </option>
            {Object.keys(DrinkTypeList).map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>술 이름</div>
          <div className={`${styles[`end-container`]}`}>
            <Search onClick={() => setOpen(true)} />
          </div>
        </div>

        <div className={`${styles[`row-container`]}`}>
          <textarea
            style={{}}
            placeholder="내용 입력..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>별점</div>
          <Rating
            value={formData.ratings}
            onChange={handleRatingChange}
            emptyIcon={<StarIcon style={{ color: "#6c6c6c" }} fontSize="inherit" />}
          />
        </div>

        <div className={`${styles[`row-container`]}`}>
          <div className={`${styles[`subtitle-container`]}`}>
            {formData.isPrivate ? <LockIcon sx={{ fontSize: 35 }} /> : <LockOpenIcon sx={{ fontSize: 35 }} />}
          </div>
          <StyleSwitch onClick={() => setFormData({ ...formData, isPrivate: !formData.isPrivate })} />
          {/* <button onClick={() => setPrivate(false)}>공개</button>
          <button onClick={() => setPrivate(true)}>비공개</button> */}
        </div>
      </form>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog color="neutral" variant="plain">
          술 이름 검색
        </ModalDialog>
      </Modal>

      <div>
        데이터 확인 :
        {formData.type}
        {formData.name}
        {formData.content}
        {formData.ratings}
        {formData.isPrivate}
      </div>
    </div>
  );
};

export default WriteReview;
