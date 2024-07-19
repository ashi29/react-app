import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [target, setTarget] = useState(0);
  const [optimisticSearch, setOptimisticSearch] = useState(0);
  const [surveyLink, setSurveyLink] = useState("");
  const [description, setDescription] = useState("");

  const onChangeProjectName = (event) => {
    event.preventDefault();
    setProjectName(event.target.value);
  };
  const onChangeClientName = (event) => {
    event.preventDefault();
    setClientName(event.target.value);
  };

  const onChangeTarget = (event) => {
    event.preventDefault();
    setTarget(event.target.value);
  };

  const onChangeOptimisticSearch = (event) => {
    event.preventDefault();
    setOptimisticSearch(event.target.value);
  };

  const onChangeSurveyLink = (event) => {
    event.preventDefault();
    setSurveyLink(event.target.value);
  };

  const onChangeDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    // <Grid container justifyContent="left" alignItems="center" style={{position:"relative",height: '70vh', backgroundColor:"#CBC3E3"}}>
    //     <Grid item xs={10} sm={6} md={4}>
    <Card
      sx={{
        position: "relative",
        minHeight: "100vh",
        minWidth: "100vh",
        px: 0,
        backgroundColor: "#CBC3E3",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
          ADDING NEW PROJECT
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="projectName">Project Name</InputLabel>
          <TextField
            name="projectName"
            value={projectName}
            onChange={onChangeProjectName}
            margin="normal"
            size="small"
            focused
          />
          <InputLabel htmlFor="clientName">client Name</InputLabel>
          <TextField
            name="clientName"
            value={clientName}
            onChange={onChangeClientName}
            margin="normal"
            size="small"
          />
          <InputLabel htmlFor="target">Target</InputLabel>
          <TextField
            name="target"
            value={target}
            onChange={onChangeTarget}
            margin="normal"
            size="small"
          />
          <InputLabel htmlFor="optimisticSearch">Optimistic Search</InputLabel>
          <TextField
            name="optimisticSearch"
            value={optimisticSearch}
            onChange={onChangeOptimisticSearch}
            margin="normal"
            size="small"
          />
          <InputLabel htmlFor="surveyLink">Survey Link</InputLabel>
          <TextField
            name="surveyLink"
            value={surveyLink}
            onChange={onChangeSurveyLink}
            margin="normal"
            size="small"
          />
          <InputLabel htmlFor="description">Discription</InputLabel>
          <TextField
            name="description"
            value={description}
            onChange={onChangeDescription}
            margin="normal"
            size="small"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }}
          >
            Add Project
          </Button>
        </form>
      </CardContent>
    </Card>
    //     </Grid>
    // </Grid>
  );
};

export default AddProject;
