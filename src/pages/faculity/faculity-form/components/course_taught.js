import { Box, IconButton, TextField, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";

const CourseTaught = ({title,courses,courseType,handleAddElement,handleRemoveElement}) => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography>{title}</Typography>
        <Box flexGrow="1" />
        <IconButton onClick={() => handleAddElement(courseType)}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </Box>
      {courses.map((_, index) => {
        return (
          <Box display="flex">
            <TextField
              variant="outlined"
              label="course code"
              margin="dense"
              fullWidth
            />

            {courses.length > 1 && (
              <IconButton
                onClick={() =>
                  handleRemoveElement(courseType, index)
                }
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
