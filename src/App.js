import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    const showModal = (src) => {
        setImgSrc(src);
        setModalVisible(true);
    };
    const hideModal = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setModalVisible(false);
        } else {
            return;
        }
    };
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid handleClick={showModal} />
            {modalVisible ? <Modal src={imgSrc} hideModal={hideModal} /> : null}
        </div>
    );
}

export default App;
