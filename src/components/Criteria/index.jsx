import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import popUp from "../../assets/popup.jpeg";
import { useEffect, useState } from "react";

const ImageModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          overflowY: "visible", 
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: -20,
          top: -20,
          zIndex: 1,
          color: "white", 
          border: "2px solid white", 
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <img
        src={popUp}
        alt="Placeholder"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Dialog>
  );
};

export default ImageModal;
