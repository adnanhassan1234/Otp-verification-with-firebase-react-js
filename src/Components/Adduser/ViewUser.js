import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewUser = ({ handleClosePopup, open, selectedViewData = {} }) => {
  const [formData, setFormData] = useState({ ...selectedViewData });


  useEffect(() => {
    if (Object.keys(selectedViewData).length > 0) {
      setFormData({ ...selectedViewData });
    }
  }, [selectedViewData]);

  return (
    <>
      <Dialog open={open} onClose={handleClosePopup} sx={{ p: 1 }}>
      <DialogActions>
          <Typography variant="h5" style={{ margin: "auto", marginTop: "9px" }}>
           View User
          </Typography>
          <Button onClick={handleClosePopup} autoFocus>
            <CancelOutlinedIcon />
          </Button>
        </DialogActions>
        <Box sx={{ p: 3 }}>
          <h5 className="text-left mt-2 mb-4">USER ID: {formData.id}</h5>{" "}
          <hr />
          <Grid container spacing={2}>
            <Grid item sm={6} xs={6}  >
              <h5>User Name: </h5> {formData.name || ""}
            </Grid>
            <Grid item sm={6} xs={6}  >
              <h5>User Email: </h5> {formData.email || ""}
            </Grid>
            <Grid item sm={6} xs={6}  >
              <h5 className="mt-4">User Phone: </h5> {formData.phone || ""}
            </Grid>
            <Grid item sm={6} xs={6}  >
              <h5 className="mt-4">User Department: </h5>{" "}
              {formData.department || ""}
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default ViewUser;
