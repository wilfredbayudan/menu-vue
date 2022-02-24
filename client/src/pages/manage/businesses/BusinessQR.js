import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import styled from "styled-components";
import { primaryColor } from "../../../styles/colorList";
import DialogContent from '@mui/material/DialogContent';

const BusinessName = styled.span`
  color: ${primaryColor};
`;

const StyledDialogTitle = styled(DialogTitle)`
  text-transform: uppercase;
`;

const QRCode = styled.img`
  width: 100%;
`;

const BusinessQR = ({ business }) => {

  console.log(business);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(window.location.host);

  const url = `http://www.menuvue.com/${business.slug}`;

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={() => setOpen(true)}>
        <QrCodeScannerIcon />
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          <BusinessName>{business.name} ⇢</BusinessName> QR Code
        </StyledDialogTitle>
        <DialogContent>
          <QRCode src={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${url}`} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default BusinessQR;