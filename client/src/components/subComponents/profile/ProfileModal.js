import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import UploadArea from "./ProfileForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: 12,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    border: "2px solid",
    borderRadius: 12,
  },
  paperButton: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: 12,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1.325,
  },
  icon: {
    fontSize: 40,
    color: "#fff",
  },
}));

export default function ProfileModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.paperButton}
        variant="outlined"
        color="secondary"
        onClick={handleOpen}
        startIcon={<AddAPhotoIcon color="secondary" />}
      >
        Photo
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper} elevation={3}>
            <UploadArea />
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
