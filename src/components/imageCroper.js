import React, { Component } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./imageCroper.css";

class ImageCroper extends Component {
  constructor() {
    super();
    this.state = {
      imageDestination: "",
    };
    this.imageElement = React.createRef();
  }

  componentDidMount() {
    const cropper = new Cropper(this.imageElement.current, {
      cropBoxResizable: true,
      zoomable: true,
      scalable: false,
      aspectRatio: 1,
      rounded: true,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        this.setState({ imageDestination: canvas.toDataURL("image/png") });
      },
      getData: () => {},
    });
  }

  render() {
    return (
      <div>
        <div class="img-container">
          <img
            ref={this.imageElement}
            src={this.props.src}
            alt="Source"
            crossorigin
          />
        </div>
        <img
          src={this.state.imageDestination}
          class="img-preview"
          alt="Destination"
        />
      </div>
    );
  }
}

export default ImageCroper;
