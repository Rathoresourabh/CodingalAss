import React, { useState , useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox, Collapse } from "@material-ui/core/";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "rgba(255,113,96)",
    borderColor: "rgba(255,90,67,)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255,113,96) ",
      borderColor: "rgba(255,90,67,)",
      color: "#fff",
    },
  },
  checkBox: {
    color: "rgba(255,113,96)",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10px" ,
    marginBottom: "20px"
  },
  container: {
    display: "flex",
  },
  text: {
    minWidth: "100%",
    color: "#fff"

  }
}));

export default function Modal({passItemData}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedOther, setCheckedOther] = useState(false);
  const onClickHandler = () => setChecked(false);

  const ClickHandler = () => setCheckedOther(!checkedOther);

  // const [endTime , setEndTime] = useState({timer});
  // const [timer, setTimer] = useState({timer});
  const handleChange = (event) => {
    // setChecked(event.target.checked)
    setChecked(!checked);
  };

  useEffect(() => {
    passItemData(open)
  },[open])

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.customButton} onClick={handleClickOpen} >
        End Class
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogTitle id="form-dialog-title">
          Select a reason to end class
        </DialogTitle>

        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon className={classes.checkBox} />}
                onClick={onClickHandler}
              />
            }
            label="Class completed"
          />
        </DialogContent>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon className={classes.checkBox} />}
                onClick={handleChange}
                checked={checked}
              />
            }
            label="Class interrupted/aborted"
          />
          <div className={classes.container}>
            <Collapse in={checked}>
              <DialogContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon className={classes.checkBox} />
                      }
                    />
                  }
                  label="Student didn't show up for the class"
                />
              </DialogContent>
              <DialogContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon className={classes.checkBox} />
                      }
                    />
                  }
                  label="Student didn't show any interest."
                />
              </DialogContent>
              <DialogContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon className={classes.checkBox} />
                      }
                    />
                  }
                  label="Student got disconnected"
                />
              </DialogContent>
              <DialogContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon className={classes.checkBox} />
                      }
                    />
                  }
                  label="I got disconnected"
                />
              </DialogContent>
              <DialogContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon className={classes.checkBox} />
                      }
                      onClick={ClickHandler}
                      checked ={checkedOther}
                    />
                  }
                  label="Other"
                />
                <div className={classes.container}>
                  <Collapse in={checkedOther}>
                    <DialogContent>
                      <TextField
                      className={classes.text}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Type Here"
                        type="text"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                      />
                    </DialogContent>
                  </Collapse>
                </div>
              </DialogContent>
            </Collapse>
          </div>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} className={classes.customButton}>
            End Class
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
