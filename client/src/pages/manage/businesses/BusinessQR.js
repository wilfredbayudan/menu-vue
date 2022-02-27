import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import styled from "styled-components";
import { primaryColor } from "../../../styles/colorList";
import DialogContent from '@mui/material/DialogContent';
import LoaderOverlay from "../../../components/LoaderOverlay";

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

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const url = `http://www.menuvue.com/${business.slug}`;
  const codeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${url}`

  const handleViewClick = () => {
    setLoading(true);
    setOpen(true);
  }

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={handleViewClick}>
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
          <LoaderOverlay loaderStatus={loading} />
          <QRCode src={codeImageUrl} onLoad={() => setLoading(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default BusinessQR;