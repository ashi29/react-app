import React from "react";
import logo from "./../../logo_sg.png";
import { Grid, Modal, Stack, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Style.css";
// import { PdfDownloader } from "../PdfDownloader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceModal = ({
  show,
  handleClose,
  ClientName,
  totalNoofSurveys,
  successfulSurveys,
  costPerSurvey,
}) => {
  const today = new Date();
  const options = { weekday: "long" };
  const day = today.toLocaleDateString("en-IN", options);
  const date = today.toLocaleDateString("en-IN");

  const totalCost = successfulSurveys * costPerSurvey;

  const handlePdfDownload = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      // pdf.addImage(imgData, "PNG", 0, 0);
      // pdf.save("Invoice.pdf");
      const pdf = new jsPDF("p", "pt", "a4"); // 'p' for portrait, 'pt' for points unit, 'a4' for size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Invoice.pdf");
    });
  };

  return (
    <Modal open={show}>
      <Grid container className="invoice-modal-container">
        <Grid item container justifyContent="space-between">
          <Grid item xs={3} className="modal-close" justifyContent="flex-start">
            <IconButton onClick={handlePdfDownload}>
              <DownloadOutlinedIcon className="muiIcon" />
            </IconButton>
          </Grid>
          <Grid item xs={3} className="modal-close" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon className="muiIcon" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid id="pdf-content">
          <Grid item className="invoice-grid">
            <Grid item container className="forBorderTop">
              <Grid item xs={4}>
                <img src={logo} alt="Logo" className="invoiceLogo" />{" "}
              </Grid>
              <Grid
                item
                container
                xs={8}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4" component="div" gutterbottom>
                    SCRUTINY GLOBAL
                  </Typography>
                  <Grid item xs={8}>
                    <Typography variant="body" component="div" gutterBottom>
                      Second floor L-295, Mohan Garden, Uttam Nagar, New Delhi-
                      110059. INDIA Contact +91-7678294335 Email Id -
                      business@scrutinyglobal.com GSTIN - 071GJPK820IEIZF
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className="forBorder" textAlign="center">
              <Typography variant="h4" component="div">
                EXPORT INVOICE
              </Typography>
            </Grid>
            <Grid item container direction="row">
              <Grid item xs={8} md={8} className="forBorder">
                <Typography variant="h6" component="div">
                  Invoice to:
                </Typography>
              </Grid>
              <Grid item xs={4} md={4} className="forBorder">
                <Typography variant="h6" component="div">
                  Invoice Details:
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item xs={8} md={8} className="forBorder">
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Name:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    {ClientName ? ClientName : "Client Name"}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Address:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Client Address
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4} md={4} className="forBorder">
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Date:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    {date}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Invoice No:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    12
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Buyer's PO Number:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    UK1234566
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className="forBorder">
              <br />
              <br />
            </Grid>
            <Grid item container xs={12} sm={12}>
              <Grid item xs={6} sm={6} className="forBorder">
                <Typography variant="h6" component="div">
                  Invoice Description:
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} className="forBorder">
                <Typography variant="h6" component="div">
                  HSN Code
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} className="forBorder">
                <Typography variant="h6" component="div">
                  Amount (in Eur)
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={12}>
              <Grid item xs={6} sm={6} className="forBorder">
                <Typography variant="body" component="div">
                  Market Research Services
                </Typography>
                <Typography variant="body" component="div">
                  PID - P1076678
                </Typography>
                <Typography variant="body" component="div">
                  (133755 -P107667 - Sleeping Beauty SKU - France)
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={2}
                className="forBorder"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography variant="body" component="div">
                  987665
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                className="forBorder"
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-end"
              >
                <Typography variant="body" component="div">
                  120
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={12}>
              <Grid item xs={6} sm={6} className="forBorder">
                <Typography variant="h6" component="div" textAlign="center">
                  Total Value(USD)
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} className="forBorder">
                <Typography variant="h6" component="div">
                  {" "}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} className="forBorder">
                <Typography variant="body" component="div">
                  120
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={12}>
              <Grid item xs={6} sm={6} className="forBorder">
                <Typography variant="h6" component="div">
                  Total Value(INR)
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} className="forBorder">
                <Typography variant="h6" component="div">
                  {" "}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} className="forBorder">
                <Typography variant="h6" component="div">
                  Rs 10,300/-
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className="forBorder">
              <br />
            </Grid>
            <Grid item container direction="row">
              <Grid item xs={3} md={3} className="forBorder">
                <Typography variant="h6" component="div">
                  Amount in words
                </Typography>
              </Grid>
              <Grid item xs={9} md={9} className="forBorder">
                <Stack textAlign="center">
                  <Typography variant="body" component="div">
                    One hundred and twenty euros is equal to Ten thousand and
                    eight hundred indian rupees.
                  </Typography>
                  <Typography variant="body" component="div">
                    ( 1 EUR = 50 INR )
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className="forBorder">
              <Grid xs={9} md={9}>
                <Typography variant="h6" component="div" gutterBottom>
                  SUPPLY MEANT FOR EXPORT OF SERVICE UNDER LETTER OF UNDERTAKING
                  WITHOUT PAYMENT OF INTEGRATED TAX
                </Typography>
                <Typography variant="body" component="div" gutterBottom>
                  LUT (ARN no.) - ADD70456789765, dated {date}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item xs={8} md={8} className="forBorder">
                <Typography variant="h6" component="div">
                  Bank Details:
                </Typography>
              </Grid>
              <Grid item xs={4} md={4} className="forBorder">
                <Typography variant="h6" component="div">
                  For Scrutiny Global:
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row">
              <Grid item xs={8} md={8} className="forBorderBottomLeft">
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Name:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Bank Name:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Account Type:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Account Number:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    IFSC:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h6" component="span" gutterBottom>
                    Swift Code:
                  </Typography>
                  <Typography variant="body" component="span" gutterBottom>
                    Bank Details
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                className="forBorderBottomRight"
                justifyContent="flex-end"
                textAlign="right"
                alignItems="flex-end"
                gutterBottom
              >
                <Typography variant="h6" component="div">
                  PRASHANT KUMAR (prop.)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default InvoiceModal;
