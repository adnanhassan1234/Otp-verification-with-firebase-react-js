import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "Components/Header";
import { Col, Dropdown, Row, Card, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import edit from "../../Images/navbar/Edit Square.png";
import delet from "../../Images/navbar/Delete.png";
import view from "../../Images/navbar/Show.png";
import user from "../../Images/home/Group 48095894.png";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import AddUpdateNewUser from "Components/Adduser/AddUpdateNewUser";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [selectedEditData, setSelectedEditData] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false); // popup
  const { enqueueSnackbar } = useSnackbar();

  // fetch data
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: {
          search: searchValue, // Add the search parameter
        },
      });
      setCardContent(response.data);
      setIsLoader(true);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  // deleteUser
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/` + id);
      fetchData();
      enqueueSnackbar("User deleted successfully!", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    } catch (error) {
      console.error(error);
      console.log(error.response);
      enqueueSnackbar("An error occurred while deleting the user.", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    }
  };

  // open and close popup
  const handleClosePopup = () => {
    setOpen(false);
  };

  const handleOpenEditModal = (user) => {
    setSelectedEditData(user);
    setOpenEditModal(true);
  };


  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="icon_menu">
          <img
            src={delet}
            width="100%"
            alt=""
            onClick={() => {
              deleteUser(row.id);
            }}
          />
          <img
            src={edit}
            width="100%"
            alt=""
            onClick={() =>
              handleOpenEditModal({
                id: row.id,
                name: row.name,
                email: row.email,
                department: row.department,
                phone: row.phone,
              })
            }
          />
          <img src={view} width="100%" alt="" />
        </div>
      ),
    },
    {
      name: "Department",
      sortable: true,
      selector: (row) => row.department,
    },

    {
      name: "Phone",
      sortable: true,
      selector: (row) => row.phone,
    },

    {
      name: "Email",
      sortable: true,
      selector: (row) => row.email,
    },

    {
      name: "User",
      sortable: true,
      selector: (row) => row.name,
      // selector: (row) => row.action,
      cell: (row) => (
        <div className="icon_menu">
          {row.name}
          {row.email}
        </div>
      ),
    },
  ];

  const filteredData = userData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header title={"Home"} />
      {isLoader?
        <section>
        <Card className="card p-0" style={{ border: "none" }}>
          <Card.Header>
            <div className="tableHeader d-flex justify-content-between mt-3">
              <Button
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add User <span>+</span>
              </Button>
              <h4>
                Users <img src={user} width={38} alt="" />
              </h4>
            </div>
            <input
  type="search"
  className="form-control my-3"
  placeholder="Search by user Name and Email..."
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
/>

          </Card.Header>

          <DataTable
            columns={columns}
            data={filteredData}
            selectableRows
            pagination
          />
        </Card>

        {/* add user popup */}
        <AddUpdateNewUser
          fetchData={fetchData}
          open={open}
          handleClosePopup={handleClosePopup}
          onHide={() => setOpen(false)}
        />

{/* Edit user same popup */}
        <AddUpdateNewUser
          handleClosePopup={() => setOpenEditModal(false)}
          open={openEditModal}
          fetchData={fetchData}
          selectedEditData={selectedEditData}
        />
      </section> :
      <Box>
        <Typography variant="h4">Loading...</Typography>
      </Box>
      }
     
    </>
  );
};

export default Home;
