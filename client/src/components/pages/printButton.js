import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pxToMm = (px) => {
    return Math.floor(px/document.getElementById('myMm').offsetHeight);
  }
const mmToPx = (mm) => {
    return document.getElementById('myMm').offsetHeight*mm;
}
const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id){return id+start});
};
const printPDF = (id) => {
    const input = document.getElementById(id);
    if(input){
        const inputHeightMm = pxToMm(input.offsetHeight);
        const a4WidthMm = 210;
        const a4HeightMm = 297;
        const a4HeightPx = mmToPx(a4HeightMm);
        const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
        html2canvas(input)
        .then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            if(inputHeightMm > a4HeightMm){
                const pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
            } else {
                const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save('download.pdf');
            }
        });
    }
}
const PrintButton = ({getId, label}) => (<div type="button" className="btn btn-warning" onClick={printPDF(getId)}>
                                            <div id="myMm" style={{height:"1mm"}}></div>
                                            {label}
                                        </div>);
export default PrintButton;