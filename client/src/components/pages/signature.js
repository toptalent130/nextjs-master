import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import PropTypes from 'prop-types';
import SignaturePad from "react-signature-canvas";
import "./css/signature.css";


function Signature({imageUrl,type}){
        const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
        const sigCanvas = useRef({imageURL});
        const clear = () => sigCanvas.current.clear();
        const save = () => {
            const temimg = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
            if(type === "parent"){
                localStorage.setItem("signature",temimg);
            } else if(type === "teacher") {
                localStorage.setItem("signature1",temimg)
            } else if(type === "director"){
                localStorage.setItem("signature2",temimg)
            }
            return setImageURL(temimg);
        }
        return (
            <div className="signature">
            <Popup modal trigger={<button type="button" data-toggle="collapse" data-target="#demos" className="bubble-element Input" maxLength=""  tabIndex="57" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "218px", left: "0px", top: "-4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}>{<img src={imageUrl} alt="my signature" style={{ display: "block", margin: "0 auto", width: "150px", height: '20px' }}/>}</button>} closeOnDocumentClick={false}>
                {close => (
                <div><SignaturePad
                    ref={sigCanvas} canvasProps={{className: "signatureCanvas"}}/>
                    {/* Button to trigger save canvas image */}
                    <button onClick={save} className="btn btn-success">Save</button>
                    <button onClick={clear} className="btn btn-danger">Clear</button>
                    <button onClick={close} className="btn btn-primary">Close</button>
                </div>
                )}
            </Popup>
            <br />
            <br />
            </div>
        );
    }

Signature.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
export default Signature;
