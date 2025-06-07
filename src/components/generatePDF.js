import html2pdf from "html2pdf.js";

export default function generatePDF() {
  const element = document.querySelector(".pdf-content");

  if (!element) {
    console.error("Element .pdf-content not found");
    return;
  }

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  const options = {
    margin: 0,
    filename: "yourResume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: {
      unit: "px",
      format: [width, height],
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(element).save();
}
