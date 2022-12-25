import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { getData } from "../Redux/action";

const Details = () => {
  let { data, isLoading } = useSelector((state) => state);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleChangebyGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangebyCountry = (e) => {
    setCountry(e.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  if (gender) {
    data = data.filter((e) => e.gender === gender);
  }

  if (country) {
    data = data.filter((e) => e.country === country);
  }

  const perPage = 10;
  let totalPages;
  if (data) {
    totalPages = Math.ceil(data.length / perPage);
  }

  let end = page * perPage;
  let start = end - perPage;
  let paginatedData = data.slice(start, end);

  const handlePagination = (ChangeEvent, value) => {
    setPage(value);
  };

  if (isLoading) {
    return (
      <Box
        fontFamily="sans-serif"
        fontSize="1.5rem"
        textAlign="center"
        m="5rem"
      >
        Loading...
      </Box>
    );
  }

  return (
    <Box width="95%" m="auto" mt="2rem">
      <Button variant="contained" >
        <Link to="/" style={{textDecoration:"none" , color:"#fff"}}>
          Back to Home
        </Link>
      </Button>
      <Box m="1rem">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="gender"
            label="Gender"
            onChange={handleChangebyGender}
          >
            <MenuItem value="">default</MenuItem>
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="gender"
            label="Gender"
            onChange={handleChangebyCountry}
          >
            <MenuItem value="">default</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            <MenuItem value="Switzerland">Switzerland</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {data.length === 0 && (
        <Box textAlign="center" m="1rem">
          No Data
        </Box>
      )}

      {data.length > 0 && (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead fontWeight="bold">
                <TableRow>
                  <StyledTableCell>User's Name</StyledTableCell>
                  <StyledTableCell align="right">Gender</StyledTableCell>
                  <StyledTableCell align="right">Location</StyledTableCell>
                  <StyledTableCell align="right">Email_Id</StyledTableCell>
                  <StyledTableCell align="right">Phone No</StyledTableCell>
                  <StyledTableCell align="right">Picture</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData &&
                  paginatedData.map((data) => (
                    <TableRow key={data._id}>
                      <TableCell component="th" scope="row">
                        {data.userName}
                      </TableCell>
                      <TableCell align="right">{data.gender}</TableCell>
                      <TableCell align="right">{data.location}</TableCell>
                      <TableCell align="right">{data.email}</TableCell>
                      <TableCell align="right">{data.phone}</TableCell>
                      <TableCell align="right">
                        <Avatar src={data.img} alt={data.userName} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box m="2rem" textAlign="center">
            <Stack spacing={8}>
              <Pagination
                count={totalPages}
                page={page}
                defaultPage={1}
                onChange={handlePagination}
                siblingCount={3}
              />
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Details;