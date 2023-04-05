import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeFeed.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { apiGetDrinkList } from "@/api/drinks";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface RecipeList {
  recipeList: {
    id: number;
    name: string;
    img: string;
    liquorType: string;
    scrapped: boolean;
  }[];
}

interface RecipeType {
  id: number;
  name: string;
  img: string;
  liquorType: string;
  scrapped: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaginationItem-root:not(.Mui-selected)": {
      color: "white",
    },
  },
}));

const RecipeFeed = () => {
  const classes = useStyles();
  const [curPageNumber, setCurPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    const getDrinkList = async () => {
      const response = await apiGetDrinkList("l6", curPageNumber);
      if (response && response.data.success) {
        console.log(response);
        setDrinkList(response.data.body.content);
        setTotalPage(response.data.body.totalPage);
      }
    };
    getDrinkList();
  }, [curPageNumber, "l6"]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPageNumber(value);
  };

  return (
    <div className={`${styles[`drink-list-wrap`]}`}>
      <ul className={`${styles[`tab-drink-list`]}`}>
        {drinkList.map((drink: RecipeType) => (
          <li key={drink.id} className={`${styles[`tab-drink-item`]}`}>
            <div className={styles["item-container"]}>
              <Link to={`/details/l6/${drink.id}`}>
                <img src={drink.img}></img>
              </Link>
              <div className={styles["item-title"]}>
                <div>{drink.name}</div>
                <div className={styles["like-box"]}>
                  <FavoriteBorderIcon />
                  {drink.scrapped}
                </div>
              </div>
            </div>
          </li>
        ))}
        <Stack spacing={2} className={`${styles["pagination-wrap"]}`}>
          <Pagination
            className={`${styles["pagination"]}`}
            count={totalPage - 1}
            page={curPageNumber}
            variant="outlined"
            onChange={handlePageChange}
            color="secondary"
            classes={{ root: classes.root }}
          />
        </Stack>
      </ul>
    </div>
  );
};

export default RecipeFeed;
