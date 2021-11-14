import React, { useState, useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling';
const styles = {
    inputWrapper: {
        margin: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    inputBox: {
        flexGrow: 1,
        marginRight: 20
    }
};

let qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    margin: 0,
    image:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "red",
        type: "rounded",
    },
    cornersSquareOptions: {
        color: "#000000",
        type: "square",
    },
    cornersDotOptions: {
        color: "#000000",
        type: "square",
    },
    backgroundOptions:{
        color:"#ffffff"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10,
        hideBackgroundDots:true,
        imageSize:0.4
    },
    qrOptions:{
        typeNumber:0,
        mode:"Byte",
        errorCorrectionLevel:"Q"
    }

});

const Qrcode = () => {

    const [url, setUrl] = useState("https://krishnadeveloper.github.io/react-qr-code-style/index.html");
    const [height, setHeight] = useState(300)
    const [width, setWidth] = useState(300)
    const [logo, setLogo] = useState("https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")
    const [mainMargin, setMainMargin] = useState(0);

    // Dot Options
    const [dotStyle, setDotStyle] = useState("square");
    const [dotColor, setDotColor] = useState("#000000");
    const [dotColorType, setDotColorType] = useState("single");
    const [dotGradientType, setDotGradientType] = useState("linear");
    const [dotGradientOne, setDotGradientOne] = useState("#000000");
    const [dotGradientTwo, setDotGradientTwo] = useState("#000000");
    const [dotRotation, setDotRotation] = useState(0)


    // Corners Square Options
    const [cornerSQRStyle, setcornerSQRStyle] = useState("square");
    const [cornerSQRColor, setcornerSQRColor] = useState("#000000");
    const [cornerSQRColorType, setcornerSQRColorType] = useState("single");
    const [cornerSQRGradientType, setcornerSQRGradientType] = useState("linear");
    const [cornerSQRGradientOne, setcornerSQRGradientOne] = useState("#000000");
    const [cornerSQRGradientTwo, setcornerSQRGradientTwo] = useState("#000000");
    const [cornerSQRRotation, setcornerSQRRotation] = useState(0)

    // Corners Dot Options
    const [cornerDotStyle, setcornerDotStyle] = useState("square");
    const [cornerDotColor, setcornerDotColor] = useState("#000000");
    const [cornerDotColorType, setcornerDotColorType] = useState("single");
    const [cornerDotGradientType, setcornerDotGradientType] = useState("linear");
    const [cornerDotGradientOne, setcornerDotGradientOne] = useState("#000000");
    const [cornerDotGradientTwo, setcornerDotGradientTwo] = useState("#000000");
    const [cornerDotRotation, setcornerDotRotation] = useState(0)


    // Background Options
    const [BackgroundColor, setBackgroundColor] = useState("#ffffff");
    const [BackgroundColorType, setBackgroundColorType] = useState("single");
    const [BackgroundGradientType, setBackgroundGradientType] = useState("linear");
    const [BackgroundGradientOne, setBackgroundGradientOne] = useState("#ffffff");
    const [BackgroundGradientTwo, setBackgroundGradientTwo] = useState("#ffffff");
    const [BackgroundRotation, setBackgroundRotation] = useState(0)

    // Image Options
    const [hideImageDots, setHideImageDots] = useState(true);
    const [imageSize, setImageSize] = useState(0.4);
    const [imageMargin, setImageMargin] = useState(10);

    // QR Options
    const [qrTypeNumber, setQrTypeNumber] = useState(0);
    const [qrMode, setQrMode] = useState("Byte");
    const [qrErrorCorrectionLevel, setQrErrorCorrectionLevel] = useState("Q")


    const [fileExt, setFileExt] = useState("png");
    const ref = useRef(null);

    useEffect(() => {
        qrCode.append(ref.current);
    }, []);

    // useEffect(() => {
    //     qrCode.update({
    //         data: url,
    //     });
    // }, [url]);

    useEffect(() => {


        // Corners Square Options
        let cornerSqrOpt = cornerSQRColorType === "single" ? {
            type: cornerSQRStyle,
            color: cornerSQRColor
        } : {
            type: cornerSQRStyle,
            gradient: {
                type: cornerSQRGradientType,
                rotation: cornerSQRRotation,
                colorStops: [{ offset: 0, color: cornerSQRGradientOne }, { offset: 1, color: cornerSQRGradientTwo }]
            }
        };

        // Corners Dot Options
        let cornerDotOpt = cornerDotColorType === "single" ? {
            type: cornerDotStyle,
            color: cornerDotColor
        } : {
            type: cornerDotStyle,
            gradient: {
                type: cornerDotGradientType,
                rotation: cornerDotRotation,
                colorStops: [{ offset: 0, color: cornerDotGradientOne }, { offset: 1, color: cornerDotGradientTwo }]
            }
        };

        // Background options
        let backgroundOpt = BackgroundColorType === "single" ? {
            color: BackgroundColor
        } : {
            gradient: {
                type: BackgroundGradientType,
                rotation: BackgroundRotation,
                colorStops: [{ offset: 0, color: BackgroundGradientOne }, { offset: 1, color: BackgroundGradientTwo }]
            }
        };


        // console.log(cornerDotOpt)
        const finalUpdate = {
            data: url,
            height, width,
            image: logo,
            margin: mainMargin,
            dotsOptions: {
                color: dotColor,
                type: dotStyle,
            },
            cornersSquareOptions: cornerSqrOpt,
            cornersDotOptions: cornerDotOpt,
            backgroundOptions: backgroundOpt,
            imageOptions: {
                margin: imageMargin,
                hideBackgroundDots:hideImageDots,
                imageSize:imageSize
            },
            // qrOptions:{
            //     typeNumber:qrTypeNumber,
            //     mode:qrMode,
            //     errorCorrectionLevel:qrErrorCorrectionLevel
            // }
            
        }

        updateOnColorChange(finalUpdate);
        qrCode.update(finalUpdate)


    }, [
        height,
    width,
    logo,
    mainMargin,
    dotStyle,
    dotColor,
    dotColorType,
    url,
    cornerSQRStyle,
    cornerSQRColor,
    cornerSQRColorType,
    cornerSQRGradientType,
    cornerSQRGradientOne,
    cornerSQRGradientTwo,
    cornerSQRRotation,
    cornerDotStyle,
    cornerDotColor,
    cornerDotColorType,
    cornerDotGradientType,
    cornerDotGradientOne,
    cornerDotGradientTwo,
    cornerDotRotation,
    BackgroundColor,
    BackgroundColorType,
    BackgroundGradientType,
    BackgroundGradientOne,
    BackgroundGradientTwo,
    BackgroundRotation,
    hideImageDots,
    imageSize,
    imageMargin,
    qrTypeNumber,
    qrMode,
    qrErrorCorrectionLevel,
    dotGradientType,
    dotGradientOne,
    dotGradientTwo,
    dotRotation
    ])

    useEffect(()=>{
        qrCode.update({
            dotsOptions:{
                gradient:{
                    type:dotGradientType,
                    rotation:dotRotation,
                    colorStops:[{ offset: 0, color: dotGradientOne }, { offset: 1, color: dotGradientTwo }]
                }
            }
        })

    },[dotGradientType, dotGradientOne, dotGradientTwo, dotRotation])

    const onUrlChange = (event) => {
        event.preventDefault();
        setUrl(event.target.value);
    };

    const onExtensionChange = (event) => {
        setFileExt(event.target.value);
    };

    const onDownloadClick = () => {
        // qrCode.getRawData("png").then(row => console.log(row))
        qrCode.download({
            extension: fileExt
        });
    };

    function handleImageChange(evt) {
        createBlob(evt.target.files)
    }

    const createBlob = (files) => {
        const rawFile = files[0];
        const reader = new FileReader();
        reader.onload = function (evt) {
            setLogo(reader.result)
        }
        reader.readAsDataURL(rawFile);
    }

    function updateOnColorChange(updatedProperties){
        if(ref.current.children[0]){
            qrCode = new QRCodeStyling(updatedProperties);
            ref.current.removeChild(ref.current.children[0]);
            qrCode.append(ref.current)
        }
    }
    return (
        <div>
            <fieldset>
                <legend>Main Data:</legend>
                URL/Data : <input defaultValue={url} onKeyUp={onUrlChange} style={styles.inputBox} /><br />
                Image : <input type="file" onChange={handleImageChange} /><br />
                Width : <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} style={styles.inputBox} />px<br />
                Height : <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} style={styles.inputBox} />px<br />
                Margin (Outer spacing) : <input type="number" value={mainMargin} onChange={(e) => setMainMargin(e.target.value)} style={styles.inputBox} />px
            </fieldset>
            <fieldset>
                <legend>Dot Options:</legend>
                Dot Style : <select node="dotsOptions.type" defaultValue={dotStyle} onChange={(e) => setDotStyle(e.target.value)} id="form-dots-type">
                    <option value="square">Square</option>
                    <option value="dots">Dots</option>
                    <option value="rounded">Rounded</option>
                    <option value="extra-rounded" selected="">Extra rounded</option>
                    <option value="classy">Classy</option>
                    <option value="classy-rounded">Classy rounded</option>
                </select><br />
                Color Type : <label><input type="radio" onClick={() => setDotColorType("single")} checked={dotColorType === "single"} value="single" name="colortype" /> Single</label>
                <label><input type="radio" onClick={() => setDotColorType("gradient")} value="gradient" checked={dotColorType === "gradient"} name="colortype" /> Color Gradient</label><br />
                {
                    dotColorType === "single" ?
                        <React.Fragment>
                            Dots Color : <input type="color" defaultValue={dotColor} onChange={(e) => setDotColor(e.target.value)} name="from" /> <br />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            Gradient Type : <label><input type="radio" value="linear" onClick={() => setDotGradientType("linear")} checked={dotGradientType === "linear"} name="gradienttype" /> Linear</label> <label><input type="radio" value="radial" name="gradienttype" checked={dotGradientType === "radial"} onClick={() => setDotGradientType("radial")} /> Radial</label><br />
                            Dots Gradient : <input type="color" onChange={(e) => setDotGradientOne(e.target.value)} defaultValue={dotGradientOne} name="from" /> <input type="color" onChange={(e) => setDotGradientTwo(e.target.value)} defaultValue={dotGradientTwo} name="to" /> <br />
                            Rotation : <input node="dotsOptionsHelper.gradient.rotation" id="form-dots-gradient-rotation" type="number" onChange={(e) => setDotRotation(e.target.value)} min="0" max="360" defaultValue={dotRotation} /> ° (degree) <br />
                        </React.Fragment>
                }

            </fieldset>

            <fieldset>
                <legend>Corners Square Options:</legend>
                Corners Square Style : <select node="cornersSquareOptions.type" defaultValue={cornerSQRStyle} onChange={(e) => setcornerSQRStyle(e.target.value)} id="form-cornerSQRs-type">
                    <option value="">None</option>
                    <option value="square">Square</option>
                    <option value="dot">Dot</option>
                    <option value="extra-rounded" selected="">Extra rounded</option>
                </select><br />
                Color Type : <label><input type="radio" onClick={() => setcornerSQRColorType("single")} checked={cornerSQRColorType === "single"} value="single" name="cornercolortype" /> Single</label>
                <label><input type="radio" onClick={() => setcornerSQRColorType("gradient")} value="gradient" checked={cornerSQRColorType === "gradient"} name="cornercolortype" /> Color Gradient</label><br />
                {
                    cornerSQRColorType === "single" ?
                        <React.Fragment>
                            Corners Square Color : <input type="color" defaultValue={cornerSQRColor} onChange={(e) => setcornerSQRColor(e.target.value)} name="from" /> <br />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            Gradient Type : <label><input type="radio" value="linear" onClick={() => setcornerSQRGradientType("linear")} checked={cornerSQRGradientType === "linear"} name="cornerSQRsOptionsHelper" /> Linear</label> <label><input type="radio" value="radial" name="cornerSQRsOptionsHelper" checked={cornerSQRGradientType === "radial"} onClick={() => setcornerSQRGradientType("radial")} /> Radial</label><br />
                            Dot Gradient : <input type="color" onChange={(e) => setcornerSQRGradientOne(e.target.value)} defaultValue={cornerSQRGradientOne} name="from" /> <input type="color" onChange={(e) => setcornerSQRGradientTwo(e.target.value)} defaultValue={cornerSQRGradientTwo} name="to" /> <br />
                            Rotation : <input node="cornerSQRsOptionsHelper.gradient.rotation" id="form-cornerSQRs-gradient-rotation" type="number" onChange={(e) => setcornerSQRRotation(e.target.value)} min="0" max="360" defaultValue={cornerSQRRotation} /> ° (degree) <br />
                        </React.Fragment>
                }

            </fieldset>

            <fieldset>
                <legend>Corners Dot Options:</legend>
                Corners Dot Style : <select node="cornersSquareOptions.type" defaultValue={cornerDotStyle} onChange={(e) => setcornerDotStyle(e.target.value)} id="form-cornerDots-type">
                    <option value="" >None</option>
                    <option value="square">Square</option>
                    <option value="dot">Dot</option>
                </select><br />
                Color Type : <label><input type="radio" onClick={() => setcornerDotColorType("single")} checked={cornerDotColorType === "single"} value="single" name="cornersqrcolortype" /> Single</label>
                <label><input type="radio" onClick={() => setcornerDotColorType("gradient")} value="gradient" checked={cornerDotColorType === "gradient"} name="cornersqrcolortype" /> Color Gradient</label><br />
                {
                    cornerDotColorType === "single" ?
                        <React.Fragment>
                            Corners Square Color : <input type="color" defaultValue={cornerDotColor} onChange={(e) => setcornerDotColor(e.target.value)} name="from" /> <br />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            Gradient Type : <label><input type="radio" value="linear" onClick={() => setcornerDotGradientType("linear")} checked={cornerDotGradientType === "linear"} name="cornerDotsOptionsHelper" /> Linear</label> <label><input type="radio" value="radial" name="cornerDotsOptionsHelper" checked={cornerDotGradientType === "radial"} onClick={() => setcornerDotGradientType("radial")} /> Radial</label><br />
                            Dot Gradient : <input type="color" onChange={(e) => setcornerDotGradientOne(e.target.value)} defaultValue={cornerDotGradientOne} name="from" /> <input type="color" onChange={(e) => setcornerDotGradientTwo(e.target.value)} defaultValue={cornerDotGradientTwo} name="to" /> <br />
                            Rotation : <input node="cornerDotsOptionsHelper.gradient.rotation" id="form-cornerDots-gradient-rotation" type="number" onChange={(e) => setcornerDotRotation(e.target.value)} min="0" max="360" defaultValue={cornerDotRotation} /> ° (degree) <br />
                        </React.Fragment>
                }
            </fieldset>
            
            <fieldset>
                <legend>Background Options:</legend>
                
                Color Type : <label><input type="radio" onClick={() => setBackgroundColorType("single")} checked={BackgroundColorType === "single"} value="single" name="bgcolortype" /> Single</label>
                <label><input type="radio" onClick={() => setBackgroundColorType("gradient")} value="gradient" checked={BackgroundColorType === "gradient"} name="bgcolortype" /> Color Gradient</label><br />
                {
                    BackgroundColorType === "single" ?
                        <React.Fragment>
                            Background Color : <input type="color" defaultValue={BackgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} name="from" /> <br />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            Gradient Type : <label><input type="radio" value="linear" onClick={() => setBackgroundGradientType("linear")} checked={BackgroundGradientType === "linear"} name="BackgroundsOptionsHelper" /> Linear</label> <label><input type="radio" value="radial" name="BackgroundsOptionsHelper" checked={BackgroundGradientType === "radial"} onClick={() => setBackgroundGradientType("radial")} /> Radial</label><br />
                            Background Gradient : <input type="color" onChange={(e) => setBackgroundGradientOne(e.target.value)} defaultValue={BackgroundGradientOne} name="from" /> <input type="color" onChange={(e) => setBackgroundGradientTwo(e.target.value)} defaultValue={BackgroundGradientTwo} name="to" /> <br />
                            Rotation : <input node="BackgroundsOptionsHelper.gradient.rotation" id="form-Backgrounds-gradient-rotation" type="number" onChange={(e) => setBackgroundRotation(e.target.value)} min="0" max="360" defaultValue={BackgroundRotation} /> ° (degree) <br />
                        </React.Fragment>
                }
            </fieldset>
            
            <fieldset>
                <legend>Image Options:</legend>
                Hide Background Dots : <input type="checkbox" defaultChecked={hideImageDots} value={hideImageDots} onChange={(e)=>setHideImageDots(!hideImageDots)} /><br/>
                Image Size : <input node="imageOptions.imageSize" id="form-image-size" type="number" min="0" max="1" step="0.1" onChange={(e)=>setImageSize(e.target.value)} onKeyUp={(e)=>setImageSize(e.target.value)} defaultValue={imageSize} /><br />
                Margin (Outer space) : <input node="imageOptions.margin" id="form-image-margin" type="number" min="0" max="10000" onChange={(e)=>setImageMargin(e.target.value)} onKeyUp={(e)=>setImageMargin(e.target.value)} defaultValue={imageMargin} /><br />
            </fieldset><br/>

            {/* <fieldset>
                <legend>QR Options:</legend>
                
                Type Number : <input node="qrOptions.typeNumber" defaultValue={qrTypeNumber} onChange={(e)=>setQrTypeNumber(e.target.value)} onKeyUp={(e)=>setQrTypeNumber(e.target.value)} id="form-qr-type-number" type="number" min="0" max="40" value="0"/><br />
                Mode : <select node="qrOptions.mode" defaultValue={qrMode} onChange={(e)=>setQrMode(e.target.value)} id="form-qr-mode">
                                <option value="Numeric">Numeric</option>
                                <option value="Alphanumeric">Alphanumeric</option>
                                <option value="Byte" selected="">Byte</option>
                                <option value="Kanji">Kanji</option>
                            </select><br/>
                Error Correction Level : <select node="qrOptions.errorCorrectionLevel" defaultValue={qrErrorCorrectionLevel} onChange={(e)=>setQrErrorCorrectionLevel(e.target.value)} id="form-qr-error-correction-level">
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="Q" selected="">Q</option>
                                <option value="H">H</option>
                            </select><br/>
            </fieldset><br/> */}

            <div style={styles.inputWrapper}>

                <select onChange={onExtensionChange} value={fileExt}>
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                </select>
                <button onClick={onDownloadClick}>Download</button>
            </div>
            <div ref={ref} style={{ border: "2px dotted red" }} />
        </div>
    )
}

export default Qrcode
