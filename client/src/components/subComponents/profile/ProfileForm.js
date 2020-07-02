import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/alert";
import Button from "@material-ui/core/Button";
import axios from "axios";
import getAuthUser from "../../../services/getAuthUser";

const useStyles = makeStyles((theme) => ({}));

export default function UploadArea() {
  const classes = useStyles();
  const [file, setFile] = useState({});
  const [success, setSuccess] = useState(null);
  const authUser = getAuthUser();

  const handleChange = (e) => {
    const inputFile = e.target.files[0];
    setFile(inputFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", file, file.name);
    try {
      await axios.put(
        process.env.REACT_APP_BASE_URL + `/users/${authUser._id}/avatar`,
        fd
      );
      setFile({});
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setSuccess(false);
    }
  };

  //Render
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {success === true ? (
          <Alert severity="success">Updated successfully!</Alert>
        ) : success === false ? (
          <Alert severity="error">Updated failed!</Alert>
        ) : null}
        <input type="file" onChange={handleChange} required></input>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Update Photo
        </Button>
      </form>
    </div>
  );
}
