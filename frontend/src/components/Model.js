import "@google/model-viewer";

const Model = ({ image }) => (
  // <div id="card">
  <model-viewer
    // src={"/models/order-test/order-test.glb"}
    src={image}
    ios-src=""
    alt="A 3D model of an astronaut"
    min-camera-orbit="auto auto 0m"
    min-field-of-view="150"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
  // </div>
);

export default Model;
