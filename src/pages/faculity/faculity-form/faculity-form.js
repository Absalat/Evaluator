import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Container,
  Card,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Select,
  InputLabel,
  Radio,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import faculityFormStyle from "./faculity-form-style";
import { useFormik } from "formik";
import StudentFeedback from "./components/student_feedback";
import ImprovedCapacity from "./components/improved_capacity";
import CourseTaught from "./components/course_taught";
import CustomTextField from "./components/custom-text-field";
const FaculityForm = () => {
  const classes = faculityFormStyle();
  const course_types = {
    bsc_course: "bsc_course",
    msc_course: "msc_course",
    phd_course: "phd_course",
  };
  const [bscCourses, setBscCourses] = useState([{ bsc: "" }]);
  const [mscCourses, setMscCourses] = useState([{ msc: "" }]);
  const [phdCourses, setPhdCourses] = useState([{ phd: "" }]);

  const formik = useFormik({
    initialValues: {
      HTPTraining: "no",
      entrepreneurshipTraining: "no",
      otherTraining: "no",
      higherDegreeEarned: "",
      teachingQuality: "1",
      motivation: "1",
      overallSatisfaction: "1",
    },
  });

  const handleAddElement = (srcButton) => {
    switch (srcButton) {
      case course_types.bsc_course:
        setBscCourses([...bscCourses, { bsc: "" }]);
        break;
      case course_types.msc_course:
        setMscCourses([...mscCourses, { msc: "" }]);
        break;
      case course_types.phd_course:
        setPhdCourses([...phdCourses, { phd: "" }]);
        break;
    }
  };
  const handleRemoveElement = (srcButton, index) => {
    switch (srcButton) {
      case course_types.bsc_course: {
        const list = [...bscCourses];
        list.splice(index, 1);
        setBscCourses(list);
        break;
      }
      case course_types.msc_course: {
        const list = [...mscCourses];
        list.splice(index, 1);
        setMscCourses(list);
        break;
      }
      case course_types.phd_course: {
        const list = [...phdCourses];
        list.splice(index, 1);
        setPhdCourses(list);
        break;
      }
    }
  };

  return (
    <div>
      <Card className={classes.card} variant="outlined">
        <Typography>Faculity Profile</Typography>
        <Typography>Degree Earned</Typography>
        <Box mt={2} />
        <Typography>B.Sc</Typography>
        <TextField
          variant="outlined"
          label="Nomenclature"
          margin="dense"
          fullWidth
        />
        <Typography>M.Sc</Typography>
        <Grid container spacing="2">
          <Grid item xs="12" md="6">
            <TextField
              variant="outlined"
              label="Nomenclature"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs="12" md="6">
            <TextField
              variant="outlined"
              label="Thesis Title"
              margin="dense"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography>PHD</Typography>
        <Grid container spacing="2">
          <Grid item xs="12" md="6">
            <TextField
              variant="outlined"
              label="Nomenclature"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs="12" md="6">
            <TextField
              variant="outlined"
              label="Thesis Title"
              margin="dense"
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          variant="outlined"
          label="Academic Rank"
          margin="dense"
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Chair Membership"
          margin="dense"
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Administrative Role"
          margin="dense"
          fullWidth
        />
      </Card>

      <Box my={2} />

      <Card className={classes.card} variant="outlined">
        <Typography>Improved Capacity or Skills</Typography>
        <Box mt={2} />
        <ImprovedCapacity
          label="HDP Training"
          name="HTPTraining"
          onChangeHandler={formik.handleChange}
          value={formik.values.HTPTraining}
        />
        <ImprovedCapacity
          label="Entrepreneurship Training"
          name="entrepreneurshipTraining"
          onChangeHandler={formik.handleChange}
          value={formik.values.entrepreneurshipTraining}
        />
        <ImprovedCapacity
          label="Other Training/ Skill Gained"
          name="otherTraining"
          onChangeHandler={formik.handleChange}
          value={formik.values.otherTraining}
        />
        <Box mt={2} />
        <FormControl fullWidth>
          <InputLabel>Higher Degree Earned</InputLabel>
          <Select
            value={formik.values.higherDegreeEarned}
            name="higherDegreeEarned"
            onChange={formik.handleChange}
          >
            <MenuItem value="bsc">B.Sc</MenuItem>
            <MenuItem value="msc">M.Sc</MenuItem>
            <MenuItem value="phd">P.H.D</MenuItem>
          </Select>
        </FormControl>
      </Card>
      <Box my={2} />

      <Card className={classes.card} variant="outlined">
        <Typography>Course Taught</Typography>
        <Box mt={2} />
        <CourseTaught
          title="B.Sc Courses"
          courseType={course_types.bsc_course}
          courses={bscCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
        <Box mt={2} />
        <CourseTaught
          title="M.Sc Courses"
          courseType={course_types.msc_course}
          courses={mscCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
        <Box mt={2} />
        <CourseTaught
          title="PhD Courses"
          courseType={course_types.phd_course}
          courses={phdCourses}
          handleAddElement={handleAddElement}
          handleRemoveElement={handleRemoveElement}
        />
      </Card>
      <Box my={2} />

      <Card className={classes.card} variant="outlined">
        <Typography>Tutored Courses</Typography>
        <Box mt={2} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              type="number"
              margin="dense"
              label="B.Sc course"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              type="number"
              label="M.Sc course"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="outlined"
              type="number"
              margin="dense"
              label="PhD course"
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
      <Box my={2} />
      <Card className={classes.card} variant="outlined">
        <Typography>Teaching and Learining</Typography>
        <Box mt={2} />
        <StudentFeedback
          label="Teaching Quality"
          name="teachingQuality"
          value={formik.values.teachingQuality}
          onChangeHandler={formik.handleChange}
        />
        <StudentFeedback
          label="Motivation"
          name="motivation"
          value={formik.values.motivation}
          onChangeHandler={formik.handleChange}
        />
        <StudentFeedback
          label="Overall Satisfaction"
          name="overallSatisfaction"
          value={formik.values.overallSatisfaction}
          onChangeHandler={formik.handleChange}
        />
        <Box mt={2} />
        <Typography>Teaching Materials</Typography>
        <Box mt={2} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Hard Copy"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              label="e-materials"
              margin="dense"
              fullWidth
            />
          </Grid>
        </Grid>
        <Box mt={2} />
        <Typography>E-learning lectures</Typography>
        <Box mt={2} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              margin="dense"
              label="full course"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              type="number"
              label="part of course"
              margin="dense"
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
      <Box mt={2} />
      <Card className={classes.card}>
        <Typography>Research</Typography>
        <CustomTextField title="No. research grants secured" />
        <CustomTextField title="Amount of grant secured" />
        <CustomTextField title="PhD students supervision" />
        <CustomTextField title="M.Sc students supervision" />
      </Card>
      <Box mt={2} />
      <Card className={classes.card}>
        <Typography>Publication</Typography>
        <CustomTextField title="Published Journal Papers" />
        <CustomTextField title="Submitted Journal Papers" />
        <CustomTextField title="Conference Preceedings" />
        <CustomTextField title="Paper Presented on Conference" />
        <CustomTextField title="Seminar Speaker" />
      </Card>
    </div>
  );
};

export default FaculityForm;
