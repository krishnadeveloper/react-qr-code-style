import React, { useState, useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling';
import { Accordion, ButtonGroup, Card, Col, Container, Form, InputGroup, ListGroup, Row, Tab, Button } from 'react-bootstrap';

let qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    margin: 0,
    image: "", // "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
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
    backgroundOptions: {
        color: "#ffffff"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10,
        hideBackgroundDots: true,
        imageSize: 0.4
    },
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q"
    }

});

const Qrcode = () => {

    const [url, setUrl] = useState("https://krishnadeveloper.github.io/react-qr-code-style/index.html");
    const [height, setHeight] = useState(300)
    const [width, setWidth] = useState(300)
    const [logo, setLogo] = useState(""); //https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg
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

        // Dot Options
        let dotsOpt =
            dotColorType === "single"
                ? {
                    color: dotColor,
                    type: dotStyle,
                }
                : {
                    type: dotStyle,
                    gradient: {
                        type: dotGradientType,
                        rotation: dotRotation,
                        colorStops: [
                            { offset: 0, color: dotGradientOne },
                            { offset: 1, color: dotGradientTwo },
                        ],
                    },
                };

        // Corners Square Options
        let cornerSqrOpt =
            cornerSQRColorType === "single"
                ? {
                    type: cornerSQRStyle,
                    color: cornerSQRColor,
                }
                : {
                    type: cornerSQRStyle,
                    gradient: {
                        type: cornerSQRGradientType,
                        rotation: cornerSQRRotation,
                        colorStops: [
                            { offset: 0, color: cornerSQRGradientOne },
                            { offset: 1, color: cornerSQRGradientTwo },
                        ],
                    },
                };

        // Corners Dot Options
        let cornerDotOpt =
            cornerDotColorType === "single"
                ? {
                    type: cornerDotStyle,
                    color: cornerDotColor,
                }
                : {
                    type: cornerDotStyle,
                    gradient: {
                        type: cornerDotGradientType,
                        rotation: cornerDotRotation,
                        colorStops: [
                            { offset: 0, color: cornerDotGradientOne },
                            { offset: 1, color: cornerDotGradientTwo },
                        ],
                    },
                };

        // Background options
        let backgroundOpt =
            BackgroundColorType === "single"
                ? {
                    color: BackgroundColor,
                }
                : {
                    gradient: {
                        type: BackgroundGradientType,
                        rotation: BackgroundRotation,
                        colorStops: [
                            { offset: 0, color: BackgroundGradientOne },
                            { offset: 1, color: BackgroundGradientTwo },
                        ],
                    },
                };


        // console.log(cornerDotOpt)
        const finalUpdate = {
            data: url,
            height,
            width,
            image: logo,
            margin: mainMargin,
            dotsOptions: dotsOpt,
            cornersSquareOptions: cornerSqrOpt,
            cornersDotOptions: cornerDotOpt,
            backgroundOptions: backgroundOpt,
            imageOptions: {
                margin: imageMargin,
                hideBackgroundDots: hideImageDots,
                imageSize: imageSize,
            },
            // qrOptions:{
            //     typeNumber:qrTypeNumber,
            //     mode:qrMode,
            //     errorCorrectionLevel:qrErrorCorrectionLevel
            // }

        }
        // console.log({finalUpdate})
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

    function updateOnColorChange(updatedProperties) {
        if (ref.current.children[0]) {
            qrCode = new QRCodeStyling(updatedProperties);
            ref.current.removeChild(ref.current.children[0]);
            qrCode.append(ref.current)
        }
    }
    return (

        <Container fluid={true}>
            <Row>
                <Col sm={12} md={6} lg={4} >
                    <Card>
                        <Card.Body>
                            <div ref={ref} style={{ border: "2px dotted red" }} />
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                            <Col sm={12} md={6}>
                            <Form.Select onChange={onExtensionChange} value={fileExt} defaultValue={fileExt}>
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                                <option value="webp">WEBP</option>
                            </Form.Select>
                            </Col>
                            <Col sm={12} md={6}>
                            <Button type="button" onClick={onDownloadClick} variant="success">Download</Button>
                            </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <Row>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>Set QR Data</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>URL/JSON/text</Form.Label>
                                        <Form.Control as="textarea" rows={3} defaultValue={url} onKeyUp={onUrlChange} onChange={onUrlChange} value={url} />
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion>
                        </Col>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>
                                    QR dimension & background
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>Dimension</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Width:</InputGroup.Text>
                                            <Form.Control type="number" value={width} onChange={(e) => setWidth(e.target.value)} onKeyUp={(e) => setWidth(e.target.value)} />
                                            <InputGroup.Text>px</InputGroup.Text>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Height:</InputGroup.Text>
                                            <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} onKeyUp={(e) => setHeight(e.target.value)} />
                                            <InputGroup.Text>px</InputGroup.Text>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Margin (Outer spacing):</InputGroup.Text>
                                            <Form.Control type="number" value={mainMargin} onChange={(e) => setMainMargin(e.target.value)} onKeyUp={(e) => setMainMargin(e.target.value)} />
                                            <InputGroup.Text>px</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Background</Form.Label>
                                        <Tab.Container id="background-color-options" defaultActiveKey={BackgroundColorType} onSelect={(sOp) => setBackgroundColorType(sOp)}>
                                            <ListGroup defaultActiveKey={BackgroundColorType} horizontal>
                                                <ListGroup.Item eventKey="single">Single Color</ListGroup.Item>
                                                <ListGroup.Item eventKey="gradient">Gradient Color</ListGroup.Item>
                                            </ListGroup>

                                            <Tab.Content className="mt-3">
                                                <Tab.Pane eventKey="single">
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text>Background Color:</InputGroup.Text>
                                                        <Form.Control type="color" defaultValue={BackgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                                                    </InputGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gradient">
                                                    <Form.Group>
                                                        <Form.Label>Gradient Type</Form.Label>
                                                        <ButtonGroup aria-label="Gradient Type">
                                                            <Button variant={BackgroundGradientType === "linear" ? "success" : "outline-success"} onClick={() => setBackgroundGradientType("linear")}>Linear</Button>
                                                            <Button variant={BackgroundGradientType === "radial" ? "success" : "outline-success"} onClick={() => setBackgroundGradientType("radial")}>Radial</Button>
                                                        </ButtonGroup>
                                                    </Form.Group>
                                                    {/* <label><input type="radio" value="linear" onClick={() => setBackgroundGradientType("linear")} checked={BackgroundGradientType === "linear"} name="BackgroundsOptionsHelper" /> Linear</label> <label><input type="radio" value="radial" name="BackgroundsOptionsHelper" checked={BackgroundGradientType === "radial"} onClick={() => setBackgroundGradientType("radial")} /> Radial</label> */}
                                                    <Form.Group>
                                                        <Form.Label>Background Gradient</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="color" onChange={(e) => setBackgroundGradientOne(e.target.value)} defaultValue={BackgroundGradientOne} value={BackgroundGradientOne} name="from" />
                                                            <Form.Control type="color" onChange={(e) => setBackgroundGradientTwo(e.target.value)} defaultValue={BackgroundGradientTwo} value={BackgroundGradientTwo} name="to" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <InputGroup.Text>Rotation:</InputGroup.Text>
                                                            <Form.Control id="form-Backgrounds-gradient-rotation" type="number" onChange={(e) => setBackgroundRotation(e.target.value)} min="0" max="360" defaultValue={BackgroundRotation} />
                                                            <InputGroup.Text>° (degree)</InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion>
                        </Col>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>
                                    Logo / Image
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>Logo</Form.Label>
                                        <Form.Control type="file" onChange={handleImageChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Image option</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Hide Background:</InputGroup.Text>
                                            <Form.Check type="checkbox" className="p-2" defaultChecked={hideImageDots} value={hideImageDots} onChange={(e) => setHideImageDots(!hideImageDots)} />
                                            
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Image Size:</InputGroup.Text>
                                            <Form.Control type="number" min="0" max="1" step="0.1" onChange={(e) => setImageSize(e.target.value)} onKeyUp={(e) => setImageSize(e.target.value)} defaultValue={imageSize} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>Margin (Outer space):</InputGroup.Text>
                                            <Form.Control id="form-image-margin" type="number" min="0" max="10000" onChange={(e) => setImageMargin(e.target.value)} onKeyUp={(e) => setImageMargin(e.target.value)} defaultValue={imageMargin} />
                                        </InputGroup>

                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion>
                        </Col>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>
                                    Dot Options
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>Style</Form.Label>
                                        <Form.Select defaultValue={dotStyle} onChange={(e) => setDotStyle(e.target.value)} id="form-dots-type">
                                            <option value="square">Square</option>
                                            <option value="dots">Dots</option>
                                            <option value="rounded">Rounded</option>
                                            <option value="extra-rounded" selected="">Extra rounded</option>
                                            <option value="classy">Classy</option>
                                            <option value="classy-rounded">Classy rounded</option>
                                        </Form.Select>
                                    </Form.Group>


                                    <Form.Group>
                                        <Form.Label>Color Type</Form.Label>
                                        <Tab.Container id="dot-color-options-tab-container" defaultActiveKey={dotColorType} onSelect={(sOp) => setDotColorType(sOp)}>
                                            <ListGroup defaultActiveKey={dotColorType} horizontal>
                                                <ListGroup.Item eventKey="single">Single Color</ListGroup.Item>
                                                <ListGroup.Item eventKey="gradient">Gradient Color</ListGroup.Item>
                                            </ListGroup>

                                            <Tab.Content className="mt-3">
                                                <Tab.Pane eventKey="single">
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text>Color:</InputGroup.Text>
                                                        <Form.Control type="color" defaultValue={dotColor} onChange={(e) => setDotColor(e.target.value)} name="from" />
                                                    </InputGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gradient">
                                                    <Form.Group>
                                                        <Form.Label>Gradient Type</Form.Label>
                                                        <ButtonGroup aria-label="Gradient Type">
                                                            <Button variant={dotGradientType === "linear" ? "success" : "outline-success"} onClick={() => setDotGradientType("linear")}>Linear</Button>
                                                            <Button variant={dotGradientType === "radial" ? "success" : "outline-success"} onClick={() => setDotGradientType("radial")}>Radial</Button>
                                                        </ButtonGroup>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Background Gradient</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="color" onChange={(e) => setDotGradientOne(e.target.value)} defaultValue={dotGradientOne} name="from" />
                                                            <Form.Control type="color" onChange={(e) => setDotGradientTwo(e.target.value)} defaultValue={dotGradientTwo} name="to" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <InputGroup.Text>Rotation:</InputGroup.Text>
                                                            <Form.Control id="form-dots-gradient-rotation" type="number" onChange={(e) => setDotRotation(e.target.value)} min="0" max="360" defaultValue={dotRotation} />
                                                            <InputGroup.Text>° (degree)</InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form.Group>

                                </Accordion.Body>
                            </Accordion>
                        </Col>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>
                                    Corners Square Options
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>Style</Form.Label>
                                        <Form.Select defaultValue={cornerSQRStyle} onChange={(e) => setcornerSQRStyle(e.target.value)} id="form-cornerSQRs-type">
                                            <option value="">None</option>
                                            <option value="square">Square</option>
                                            <option value="dot">Dot</option>
                                            <option value="extra-rounded" selected="">Extra rounded</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Color Type</Form.Label>
                                        <Tab.Container id="corner-sqr-dot-color-options-tab-container" defaultActiveKey={cornerSQRColorType} onSelect={(sOp) => setcornerSQRColorType(sOp)}>
                                            <ListGroup defaultActiveKey={cornerSQRColorType} horizontal>
                                                <ListGroup.Item eventKey="single">Single Color</ListGroup.Item>
                                                <ListGroup.Item eventKey="gradient">Gradient Color</ListGroup.Item>
                                            </ListGroup>

                                            <Tab.Content className="mt-3">
                                                <Tab.Pane eventKey="single">
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text>Color:</InputGroup.Text>
                                                        <Form.Control type="color" defaultValue={cornerSQRColor} onChange={(e) => setcornerSQRColor(e.target.value)} name="from" />
                                                    </InputGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gradient">
                                                    <Form.Group>
                                                        <Form.Label>Gradient Type</Form.Label>
                                                        <ButtonGroup aria-label="Gradient Type">
                                                            <Button variant={cornerSQRGradientType === "linear" ? "success" : "outline-success"} onClick={() => setcornerSQRGradientType("linear")}>Linear</Button>
                                                            <Button variant={cornerSQRGradientType === "radial" ? "success" : "outline-success"} onClick={() => setcornerSQRGradientType("radial")}>Radial</Button>
                                                        </ButtonGroup>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Color Gradient</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="color" onChange={(e) => setcornerSQRGradientOne(e.target.value)} defaultValue={cornerSQRGradientOne} name="from" />
                                                            <Form.Control type="color" onChange={(e) => setcornerSQRGradientTwo(e.target.value)} defaultValue={cornerSQRGradientTwo} name="to" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <InputGroup.Text>Rotation:</InputGroup.Text>
                                                            <Form.Control id="form-cornerSQRs-gradient-rotation" type="number" onChange={(e) => setcornerSQRRotation(e.target.value)} min="0" max="360" defaultValue={cornerSQRRotation} />
                                                            <InputGroup.Text>° (degree)</InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion>
                        </Col>
                        <Col sm={12} md={6}>
                            <Accordion>
                                <Accordion.Header>
                                    Corners Dot Options
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group>
                                        <Form.Label>Corners Dot Style</Form.Label>
                                        <Form.Select defaultValue={cornerDotStyle} onChange={(e) => setcornerDotStyle(e.target.value)} id="form-cornerDots-type">
                                            <option value="" >None</option>
                                            <option value="square">Square</option>
                                            <option value="dot">Dot</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Color Type</Form.Label>
                                        <Tab.Container id="corner-dot-color-options-tab-container" defaultActiveKey={cornerDotColorType} onSelect={(sOp) => setcornerDotColorType(sOp)}>
                                            <ListGroup defaultActiveKey={cornerDotColorType} horizontal>
                                                <ListGroup.Item eventKey="single">Single Color</ListGroup.Item>
                                                <ListGroup.Item eventKey="gradient">Gradient Color</ListGroup.Item>
                                            </ListGroup>

                                            <Tab.Content className="mt-3">
                                                <Tab.Pane eventKey="single">
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text>Corners Square:</InputGroup.Text>
                                                        <Form.Control type="color" defaultValue={cornerDotColor} onChange={(e) => setcornerDotColor(e.target.value)} name="from" />
                                                    </InputGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gradient">
                                                    <Form.Group>
                                                        <Form.Label>Gradient Type</Form.Label>
                                                        <ButtonGroup aria-label="Gradient Type">
                                                            <Button variant={cornerDotGradientType === "linear" ? "success" : "outline-success"} onClick={() => setcornerDotGradientType("linear")}>Linear</Button>
                                                            <Button variant={cornerDotGradientType === "radial" ? "success" : "outline-success"} onClick={() => setcornerDotGradientType("radial")}>Radial</Button>
                                                        </ButtonGroup>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Color Gradient</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="color" onChange={(e) => setcornerDotGradientOne(e.target.value)} defaultValue={cornerDotGradientOne} name="from" />
                                                            <Form.Control type="color" onChange={(e) => setcornerDotGradientTwo(e.target.value)} defaultValue={cornerDotGradientTwo} name="to" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <InputGroup.Text>Rotation:</InputGroup.Text>
                                                            <Form.Control id="form-cornerDots-gradient-rotation" type="number" onChange={(e) => setcornerDotRotation(e.target.value)} min="0" max="360" defaultValue={cornerDotRotation} />
                                                            <InputGroup.Text>° (degree)</InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Qrcode
