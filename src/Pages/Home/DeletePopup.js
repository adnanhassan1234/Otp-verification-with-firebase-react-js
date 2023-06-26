import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DeletePopup = (props) => {
    
  const { open, handleCloseDeleteModal, deleteUserId, deleteUser } = props;

  return (
    <Dialog
      open={open}
      onClose={handleCloseDeleteModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDeleteModal} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            deleteUser(deleteUserId);
            handleCloseDeleteModal();
          }}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
