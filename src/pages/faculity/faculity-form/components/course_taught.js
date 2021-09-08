import { Box, IconButton, TextField, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";

const CourseTaught = ({
  title,
  courses,
  courseType,
  handleAddElement,
  handleRemoveElement,
  handleOnChange,
  disable,
}) => {
  // [{course_name:"", course_code:""}]
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography>{title}</Typography>
        <Box flexGrow="1" />
        {!disable && (
          <IconButton onClick={() => handleAddElement(courseType)}>
            <AddCircleIcon color="primary" />
          </IconButton>
        )}
      </Box>
      {courses.map((_, index) => {
        return (
          <Box display="flex">
            <TextField
              variant="outlined"
              label="course code"
              name="course_code"
              margin="dense"
              value={courses[index].course_code}
              fullWidth
              onChange={(e) => handleOnChange(e, courseType, index)}
              disabled={disable}
            />
            <Box ml={2} />
            <TextField
              variant="outlined"
              label="course name"
              name="course_name"
              margin="dense"
              fullWidth
              value={courses[index].course_name}
              onChange={(e) => handleOnChange(e, courseType, index)}
              disabled={disable}
            />

            {!disable && courses.length > 1 && (
              <IconButton
                onClick={() => handleRemoveElement(courseType, index)}
              >
                <HighlightOffIcon color="secondary" />
              </IconButton>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default CourseTaught;
