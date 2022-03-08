import React, { useEffect, useState } from "react";
import { useAuthStatus } from "../../hooks/auth";
import { getAllJobData, addRow, save } from "../../firebase/action";
import Layout from "../../layout";
import Spreadsheet from "react-spreadsheet";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../../components/Alert";

export default function Index(props) {
  const params = useParams();

  const navigate = useNavigate();

  const { uid } = params;

  const user = useAuthStatus();

  const [newRow] = useState(() => {
    const row = [];

    const column = {
      value: "",
    };

    for (let index = 0; index < 23; index++) {
      row.push(column);
    }

    return row;
  });

  const [data, setData] = useState([
    [
      { value: "", className: "pre-background" },
      { value: "", className: "pre-background" },
      { value: "", className: "pre-background" },
      { value: "", className: "pre-background" },
      {
        value: "Pre-interview",
        readOnly: true,
        className: "cell-title pre-background color-white",
      },
      { value: "", className: "pre-background" },
      { value: "", className: "pre-background" },
      { value: "", className: "pre-background" },
      { value: "", className: "int1-background" },
      { value: "", className: "int1-background" },
      {
        value: "Interview #1",
        readOnly: true,
        className: "cell-title int1-background",
      },
      { value: "", className: "int1-background" },
      { value: "", className: "int1-background" },
      { value: "", className: "int2-background" },
      { value: "", className: "int2-background" },
      {
        value: "Interview #2",
        readOnly: true,
        className: "cell-title int2-background",
      },
      { value: "", className: "int2-background" },
      { value: "", className: "int2-background" },
      { value: "", className: "int3-background" },
      { value: "", className: "int3-background" },
      {
        value: "Proficiency Test",
        readOnly: true,
        className: "cell-title int3-background",
      },
      { value: "", className: "int3-background" },
      { value: "", className: "pre-background" },
    ],
    [
      {
        value: "Company",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Job Posting",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Date Job Was Found",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Apply",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Date Applied",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Do Research",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Add on LinkedIn",
        className: "pre-background color-white",
        readOnly: true,
      },
      {
        value: "Date Sent",
        className: "pre-background color-white",
        readOnly: true,
      },
      { value: "Do Interview", className: "int1-background", readOnly: true },
      {
        value: "Date of Interview",
        className: "int1-background",
        readOnly: true,
      },
      { value: "Interviewer", className: "int1-background", readOnly: true },
      {
        value: "Send a Thank You Note",
        className: "int1-background",
        readOnly: true,
      },
      { value: "Date Sent", className: "int1-background", readOnly: true },
      { value: "Do Interview", className: "int2-background", readOnly: true },
      {
        value: "Date of Interview",
        className: "int2-background",
        readOnly: true,
      },
      { value: "Interviewer", className: "int2-background", readOnly: true },
      {
        value: "Send a Thank You Note",
        className: "int2-background",
        readOnly: true,
      },
      { value: "Date Sent", className: "int2-background", readOnly: true },
      {
        value: "Take the Test",
        className: "int3-background",
        readOnly: true,
      },
      { value: "Date Completed", className: "int3-background", readOnly: true },
      {
        value: "Send a Follow-up Link",
        className: "int3-background",
        readOnly: true,
      },
      { value: "Date Sent", className: "int3-background", readOnly: true },
      { value: "NOTES", className: "pre-background", readOnly: true },
    ],
  ]);

  const handleAddRow = async () => {
    await addRow([...newRow], data.length - 2, uid);

    setData((oldArray) => [...oldArray, newRow]);
  };

  const handleSave = async () => {
    await save(data, uid, (err, success) => {
      if (success) {
        handleMessage("Data saved!");

        handleOpen();
      }

      return;
    });
  };

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleMessage = (m) => {
    setMessage(m);
  };

  useEffect(() => {
    const handleJobData = async () => {
      const jobs = await getAllJobData(uid, (err, success) => {
        if (err) {
          handleMessage("User not found");

          handleOpen();
        }
      });

      setData((oldArray) => {
        return [oldArray[0], oldArray[1], ...jobs];
      });

      return;
    };

    handleJobData();
  }, [navigate, uid]);

  return (
    <Layout>
      <Box mt={10}>
        <Spreadsheet data={data} onChange={setData} />
      </Box>
      <button disabled={!user || uid !== user.uid} onClick={handleAddRow}>
        Add row
      </button>
      <button
        disabled={!user || uid !== user.uid}
        style={{ marginLeft: "5px" }}
        onClick={handleSave}
      >
        Save
      </button>
      <Alert
        open={open}
        message={message}
        handleClose={handleClose}
        handleMessage={handleMessage}
      />
    </Layout>
  );
}
