import { Button, Grid, Paper, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedRows } from "../../../Store/Slice/rowSelectionSlice";
import Layout from "../Layout";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);

  const handleAddProject = () => {
    navigate("/add-project");
  };
  const [columns, setColumns] = useState([
    {
      field: "id",
      headerName: "",
      headerClassName: "dataGrid-header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      editable: true,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => {
        return (
          <Switch
            // checked
            defaultChecked={params?.value === "Yes"}
            color="success"
          />
        );
      },
    },
    {
      field: "clientName",
      headerName: "Client Name",
      align: "center",
      type: "text",
      width: 190,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "contactName",
      headerName: "Contact Name",
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      sortable: false,
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 190,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "websiteLink",
      headerName: "Website Link",
      sortable: false,
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "currency",
      headerName: "Currency",
      align: "center",
      sortable: false,
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "industry",
      headerName: "Industry",
      align: "center",
      sortable: false,
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
  ]);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });

  const rows = [
    {
      id: 1,
      status: "Yes",
      clientName: "clientName",
      contactName: "contactName",
      contactNumber: "123456789",
      email: "daniel@gmail.com",
      websiteLink: "exampleLink.com",
      address: "street 20",
      country: "india",
      currency: "INR",
      industry: "HealthCare",
    },
    {
      id: 2,
      status: "No",
      clientName: "clientName",
      contactName: "contactName",
      contactNumber: "123456789",
      email: "daniel@gmail.com",
      websiteLink: "exampleLink.com",
      address: "street 20",
      country: "india",
      currency: "INR",
      industry: "HealthCare",
    },
  ];

  const [responseData, setResponseData] = useState([]);
  const [userDataNew, setUserDataNew] = useState([]);
  let userData = {
    id: [],
    role: [],
    approval: [],
    clientName: [],
    contactNumber: [],
    email: [],
    birthdate: [],
    address: [],
    country: [],
    state: [],
    city: [],
    zipCode: [],
    profession: [],
    ipAddress: [],
    accountType: [],
    salary: [],
    contactName: [],
    websiteLink: [],
    industry: [],
  };

  useEffect(() => {
    getClientData();
  }, []);

  function getClientData() {
    fetch(
      "http://ec2-13-239-62-154.ap-southeast-2.compute.amazonaws.com:8080/ScrutinyGlobal/getListAsAccountType?accountType=client",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResponseData(data);
        console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    setUserDataNew(convertData(responseData));
  }, [responseData]);
  function convertData(data) {
    console.log(data);
    data.map((element) => userData.id.push(element.user_id));
    data.map((element) => userData.clientName.push(element.name));
    data.map((element) => userData.websiteLink.push(element.website));
    data.map((element) => userData.industry.push(element.industry));
    data.map((element) => userData.contactName.push(element.contact_name));
    data.map((element) => userData.contactNumber.push(element.number));
    data.map((element) => userData.country.push(element.country));
    data.map((element) => userData.accountType.push(element.accountType));
    data.map((element) => userData.approval.push(element.approval));
    data.map((element) => userData.email.push(element.email));
    data.map((element) => userData.profession.push(element.profession));
    data.map((element) => userData.birthdate.push(element.dob));
    data.map((element) => userData.address.push(element.address));
    data.map((element) => userData.city.push(element.city));
    data.map((element) => userData.salary.push(element.monthlySalary));
    data.map((element) => userData.state.push(element.state));
    data.map((element) => userData.zipCode.push(element.zipcode));
    console.log("userData", userData);

    let userDataConverted = [];
    const keys = Object.keys(userData);
    const numObjects = userData[keys[0]].length;
    for (let i = 0; i < numObjects; i++) {
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = userData[key][i];
      });
      userDataConverted = [...userDataConverted, newObj];
    }
    console.log("userDataNew", userDataConverted);
    return userDataConverted;
  }

  const handleRowClick = () => {
    navigate(`/client/${checkedRows[0].id}`);
  };
  const handleRowSelection = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
    const selectedRowData = newRowSelectionModel.map((user_id) =>
      userDataNew.find((row) => row.id === user_id)
    );
    setCheckedRows(selectedRowData);
    dispatch(setSelectedRows(selectedRowData));
  };

  console.log("Selected Rows:", checkedRows);

  const content = (
    <Grid container>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item>
          <Paper elevation={0} className="screenHeading">
            CLIENT LIST
          </Paper>
        </Grid>
        <Grid item container justifyContent="flex-end" spacing={2} md={7}>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleAddProject}
              className="client-button add-class"
              disabled={checkedRows.length === 0}
              startIcon={<AddIcon color="success" fontSize="large" />}
            >
              Add Project
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleRowClick}
              className="client-button export-class"
              disabled={checkedRows.length === 0}
              startIcon={
                <DescriptionOutlinedIcon color="primary" size="large" />
              }
            >
              View Details
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              className="client-button delete-class"
              disabled={checkedRows.length === 0}
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="client-list-datagrid">
        <MuiDataGrid
          rows={userDataNew}
          getRowId={(row) => row.id}
          columns={columns}
          checkboxSelection={true}
          onRowSelectionModelChange={handleRowSelection}
          rowSelectionModel={rowSelectionModel}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Grid>
    </Grid>
  );
  return <Layout content={content} navbarHeading="CLIENTS" />;
};

export default Clients;
