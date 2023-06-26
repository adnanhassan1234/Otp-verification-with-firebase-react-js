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
import { useSnackbar } from "notistack";
import AddUpdateNewUser from "Components/Adduser/AddUpdateNewUser";
import phones from "../../Images/home/Call.png";
import emails from "../../Images/home/Message.png";
import profiles from "../../Images/home/Group 48095894.png";
import DeletePopup from "./DeletePopup";
import ViewUser from "Components/Adduser/ViewUser";
import { Box } from "@mui/material";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [selectedEditData, setSelectedEditData] = useState({});
  const [selectedViewData, setSelectedViewData] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false); // popup
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  // fetch data
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: {
          search: searchValue, // Add the search parameter
        },
      });
      setUserData(response.data);
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
          horizontal: "left",
        },
      });
    } catch (error) {
      console.error(error);
      console.log(error.response);
      enqueueSnackbar("An error occurred while deleting the user.", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    }
  };

  // open and close popup
  const handleClosePopup = () => {
    setOpen(false);
  };

  // edit popup model open
  const handleOpenEditModal = (user) => {
    setSelectedEditData(user);
    setOpenEditModal(true);
  };

  // View popup model open
  const handleOpenViewModal = (user) => {
    setSelectedViewData(user);
    setOpenViewModal(true);
  };

  // id base user delete
  const handleOpenDeleteModal = (id) => {
    setDeleteUserId(id);
    setOpenDeleteModal(true);
  };

  // popup close
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
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
            title="Delete"
            onClick={() => handleOpenDeleteModal(row.id)}
          />
          <img
            src={edit}
            width="100%"
            alt=""
            title="Edit"
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
          <img src={view} title="View" width="100%" alt=""    onClick={() =>
              handleOpenViewModal({
                id: row.id,
                name: row.name,
                email: row.email,
                department: row.department,
                phone: row.phone,
              })
            } />
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
      cell: (row) => (
        <div className="iconImg">
          &nbsp;
          <img src={phones} alt="" />
          &nbsp; {row.phone}
        </div>
      ),
    },
    {
      name: "Email",
      sortable: true,
      selector: (row) => row.email,
      cell: (row) => (
        <div className="iconImg">
          &nbsp;
          <img src={emails} height={28} alt="" /> {row.email}
        </div>
      ),
    },
    {
      name: "User",
      sortable: true,
      selector: (row) => row.name,
      cell: (row) => (
        <div
          className="icon_menus d-flex"
          style={{ color: "##767D87 !important" }}
        >
          <div>
            <b>{row.name} </b>
            {row.email}
          </div>
          <img
            src={profiles}
            className="profile"
            height={36}
            alt=""
            style={{ marginLeft: "8px !important" }}
          />
        </div>
      ),
    },
  ];

  const filteredData = userData.filter((row) => {
    const fullName = row.name.toLowerCase().replace(/\s+/g, "");
    const search = searchValue.toLowerCase().replace(/\s+/g, "");
    return (
      fullName.includes(search) ||
      fullName.startsWith(search) ||
      row.email.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <Header title={"Home"} />
      {isLoader ? (
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

          {/* Delete confirmation popup */}
          <DeletePopup
            open={openDeleteModal}
            onClose={handleCloseDeleteModal}
            handleCloseDeleteModal={handleCloseDeleteModal}
            deleteUser={deleteUser}
            deleteUserId={deleteUserId}
          />
        </section>
      ) : (
        <Box>
          <Typography variant="h5">Loading...</Typography>
        </Box>
      )}

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

      {/* View user same popup */}
      <ViewUser
        handleClosePopup={() => setOpenViewModal(false)}
        open={openViewModal}
        selectedViewData={selectedViewData}
      />
    </>
  );
};

export default Home;
