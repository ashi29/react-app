import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import InfoCard from "../../Components/InfoCard/Index";
import "./Style.css";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import "./Style.css";
import Group from "../../Images/Dashboard/Group.png";
import Vector from "../../Images/Dashboard/Vector.png";
import Layout from "./Layout";
import MuiDataGrid from "../../MuiComponents/MuiDataGrid/Index";
import { API_PREFIX } from "../../config";

const Dashboard = () => {
  const [approved, setApproved] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [userDataNew, setUserDataNew] = useState([]);
  let userData = {
    id: [],
    role: [],
    approval: [],
    username: [],
    number: [],
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
  };

  const rows = [
    {
      id: 1,
      role: "Vendor",
      approval: "Yes",
      name: "Daniel",
      number: "123456789",
      email: "daniel@gmail.com",
      birthdate: "05-06-24",
      address: "street 20",
      country: "india",
      state: "delhi",
      city: "saket",
      zipCode: "1234",
      profession: "android developer",
      ipAddress: "12.23.34.55",
      accountType: "vendor",
      salary: "500000",
    },
    {
      id: 2,
      role: "Vendor",
      approval: "Yes",
      name: "Daniel",
      number: "123456789",
      email: "daniel@gmail.com",
      birthdate: "05-06-24",
      address: "street 20",
      country: "india",
      state: "delhi",
      city: "saket",
      zipCode: "1234",
      profession: "android developer",
      ipAddress: "12.23.34.55",
      accountType: "vendor",
      salary: "500000",
    },
  ];

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    fetch(`${API_PREFIX}getUserList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "jainpushpak326@gmail.com",
        password: "12345",
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResponseData(data); // Update state with fetched data
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  // userDataNew = convertData(responseData).

  useEffect(() => {
    setUserDataNew(convertData(responseData));
  }, [responseData]);
  function convertData(data) {
    data.map((element) => userData.id.push(element.userId));
    data.map((element) => userData.username.push(element.name));
    data.map((element) => userData.number.push(element.number));
    data.map((element) => userData.country.push(element.country));
    data.map((element) => userData.accountType.push(element.accountType));
    data.map((element) => userData.approval.push(element.approval));
    data.map((element) => userData.email.push(element.email));
    data.map((element) => userData.profession.push(element.profession));
    data.map((element) => userData.birthdate.push(element.dob));
    data.map((element) => userData.ipAddress.push("undefined"));
    data.map((element) => userData.address.push(element.address));
    data.map((element) => userData.city.push(element.city));
    data.map((element) => userData.role.push(""));
    data.map((element) => userData.salary.push(element.monthlySalary));
    data.map((element) => userData.state.push(element.state));
    data.map((element) => userData.zipCode.push(element.zipcode));

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
    // console.log("userDataNew", userDataConverted);
    return userDataConverted;
  }

  // console.log("response outside the function", responseData);
  // console.log("userDataNew outside the function", userDataNew);

  const handleApprove = (id, accountType) => {
    const approvedData = {
      userId: id,
      accountType: accountType,
      successURL: "",
      terminateURL: "",
      quotaFullURL: "",
      securityTerminateURL: "",
      description: "",
    };
    fetch(`${API_PREFIX}setroletouser`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(approvedData),
    }).then(function (response) {
      return response.json();
    });
    // console.log("user is approved123");

    // console.log("approvedData :>> ", approvedData);

    // console.log("user is approved");
  };

  const columns = [
    {
      field: "id",
      headerName: "User id",
      width: 120,
      align: "center",
      editable: false,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "approval",
      headerName: "Approval",
      // flex: 1.2,
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => {
        return approved ? (
          <MuiContainedButton
            buttonText={"Approved"}
            onClick={() => handleApprove(params.row.id, params.row.accountType)}
            type={"button"}
          />
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleApprove(params.row.id, params.row.accountType)}
          >
            Approve
          </Button>
        );
      },
    },
    {
      field: "username",
      headerName: "Name",
      align: "center",
      type: "text",
      // flex: 1.5,
      width: 150,
      headerAlign: "center",
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      // valueGetter: (params) =>
      // `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "number",
      headerName: "Number",
      sortable: false,
      // flex: 1.5,
      width: 170,
      editable: false,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      // flex: 1.7,
      width: 180,
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
      headerAlign: "center",
      align: "center",
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => {
        // console.log("hi====", params.row);
        return (
          <MuiDropDown
            defaultValue="Vendor"
            options={["Vendor", "Admin", "Client"]}
            onChange={onChangeRole}
          />
        );
      },
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      sortable: false,
      width: 180,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 180,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      sortable: false,
      width: 170,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "state",
      align: "center",
      headerName: "State/Province",
      sortable: false,
      width: 170,
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      align: "center",
      sortable: false,
      width: 170,
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      align: "center",
      sortable: false,
      width: 170,
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "profession",
      headerName: "Profession",
      sortable: false,
      align: "center",
      editable: false,
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "ipAddress",
      headerName: "IP Address",
      sortable: false,
      width: 170,
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "accountType",
      headerName: "Account Type",
      sortable: false,
      width: 170,
      align: "center",
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "salary",
      headerName: "Salary/mo",
      sortable: false,
      width: 170,
      editable: false,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ];

  const onChangeRole = () => {
    // console.log("onChange called ");
  };

  // function getRowId(userDataNew) {
  //   return userDataNew.id;
  // }

  const content = (
    <Grid container className="dashboard-container">
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={3}>
          <InfoCard
            title="New Leads"
            value="21"
            subtitle="This week"
            image={Group}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard title="Leads Approved" value="20" subtitle="This week" />
        </Grid>
        <Grid item xs={12} md={3}>
          <InfoCard
            title="Ongoing Projects"
            value="50"
            subtitle="CAWI"
            image={Vector}
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <MuiDataGrid
          rows={userDataNew}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="DASHBOARD" />;
};

export default Dashboard;
