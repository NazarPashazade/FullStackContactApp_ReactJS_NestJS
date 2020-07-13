import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ selected_id }) {
  ///-------------------------------- DELETE CONTACT------------------------------------//////////

  function deleteContact(event) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3001/contacts/" + selected_id, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("Success"));
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const accept = () => {
    deleteContact();
    setOpen(false);
  };

  const reject = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={reject}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this Contact "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="alert alert-success mt-3 pt-3"  style={{width:"280px",height:"70px"}}  id="alert-dialog-description">
            Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={accept} color="primary">
            Yes
          </Button>
          <Button onClick={reject} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
