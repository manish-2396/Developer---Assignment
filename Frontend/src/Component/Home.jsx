import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData, getData } from "../Redux/action";
import { useEffect } from "react";
import swal from "sweetalert";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  function handleFetch() {
    if (data.length === 0) {
      dispatch(fetchData());
    } else {
      swal("User Data Already Exists", "", "error");
    }
  }

  function handleDelate() {
    if (data.length > 0) {
      swal("All Exists User Data Deleted", "", "error");
      dispatch(deleteData());
    }
  }

  return (
    <Stack direction="row" spacing={10} justifyContent="center" m="2rem">
      <Button variant="outlined" onClick={handleFetch}>
        Fetch Users
      </Button>
      <Button variant="outlined" onClick={handleDelate}>
        Delete Users
      </Button>
      <Link to="/details" style={{ textDecoration: "none", color: "black" }}>
        <Button variant="outlined">User Details</Button>
      </Link>
    </Stack>
  );
};

export default Home;
