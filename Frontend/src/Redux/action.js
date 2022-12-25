import * as types from "./actionType";
import swal from "sweetalert";

let url = "https://developer-assignment-production.up.railway.app";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  fetch(`${url}/get`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.GET_DATA_SUCCUCS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.GET_DATA_FAILUER }));
};

export const deleteData = () => (dispatch) => {
  console.log("delete");
  fetch(`${url}/delete`, {
    method: "DELETE",
  }).then((res) => dispatch(getData()));
};

const fetchData3 = (data) => (dispatch) => {
  fetch(`${url}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      swal("User Data Added to database", "", "success");
      dispatch(getData());
    });
};

const fetchData2 = (Data) => (dispatch) => {
  let postData = [];
  Data.forEach((data) => {
    const payload = {
      userName: `${data.name.title} ${data.name.first}  ${data.name.last}`,
      location: `${data.location.city} , ${data.location.state} , ${data.location.country} , ${data.location.postcode}`,
      email: data.email,
      img: data.picture.thumbnail,
      gender: data.gender,
      phone: data.phone,
      country: data.location.country,
    };
    postData.push(payload);
  });
  dispatch(fetchData3({ data: postData }));
};

export const fetchData = () => (dispatch) => {
  fetch(`https://randomuser.me/api/?results=100`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchData2(res.results));
    })
    .catch((err) => console.error(err));
};
