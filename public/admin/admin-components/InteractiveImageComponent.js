const Control = createClass({
  valueCache: new Map(),
  imageUploaded: false,
  imageUrl: '',
  pointsLength: 0,
  blobToImage: blob => {
    return new Promise(resolve => {
      const url = URL.createObjectURL(blob);
      let img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.src = url;
    });
  },
  mergeInputValues(e, prefix, key, self) {
    self.valueCache.set(prefix, { ...self.valueCache.get(prefix), ...{ [key]: e.target.value } });
    self.props.onChange(self.valueCache);
  },
  addPoint() {
    this.pointsLength++;
    this.forceUpdate();
  },
  removePoint() {
    this.pointsLength--;
    this.forceUpdate();
  },
  imageInputHandler(evt) {
    const [file] = evt.target.files;
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
      this.imageUploaded = true;
    } else {
      this.imageUploaded = false;
    }
    this.forceUpdate();
  },
  removeSelectedImage() {
    console.log('remove selected');
    this.imageUrl = '';
    this.imageUploaded = false;
    this.forceUpdate();
  },
  renderImage() {
    const args = {
      src: this.imageUrl
    };
    return h('div', {}, [
      h('img', args),
      h('div', {}, [
        h('span', {}, `Selected image: ${this.imageUrl}`),
        h(
          'button',
          {
            onClick: () => {
              this.removeSelectedImage();
            }
          },
          `Remove image`
        )
      ])
    ]);
  },
  renderFileInput() {
    const args = {
      type: 'file',
      id: 'file-input--interactiveComponent',
      accept: 'image/png, image/jpeg, image/png, image/jpg',
      onInput: e => this.imageInputHandler(e)
    };
    return h('input', args);
  },
  render: function () {
    return h('div', null, [this.imageUploaded ? this.renderImage() : this.renderFileInput()]);
  }
});

const Preview = createClass({
  mounted: false,
  imgPreview: {
    imgUrl: '',
    parentDivElement: HTMLElement,
    element: HTMLElement,
    dimensions: {
      width: 0,
      height: 0
    }
  },
  componentDidMount() {
    this.setElement();
    this.setDimensions();
    this.addPointsToPreview();
    this.mounted = true;
  },
  setPointStyles(point) {
    point.style.position = 'absolute';
    point.style.width = '30px';
    point.style.height = '30px';
    point.style.display = 'block';
    point.style.background = '#fff';
    point.style.borderRadius = '50%';
  },
  setPointPosition(point, { x, y }) {
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;
  },
  setElement() {
    const previewPane = document.querySelector('#preview-pane');
    this.imgPreview.element = previewPane.contentWindow.document.querySelector('img');
    if (this.imgPreview && this.imgPreview.element) {
    }
    this.imgPreview.parentDivElement = this.imgPreview.element ? this.imgPreview.element.parentNode : null;
  },
  setDimensions() {
    const { element } = this.imgPreview;
    this.imgPreview.dimensions.width = element.width;
    this.imgPreview.dimensions.height = element.height;
  },
  addPointsToPreview() {
    console.log(this.props.value);
    // get image parent div
    const imageParentDiv = this.imgPreview.element.parentElement;
    // set position relative on image parent div
    imageParentDiv.style.position = 'relative';

    // if(!!this.props.value && Array.isArray(this.props.value)){
    //   this.props.value.map()
    //   // create span points
    //   const point = document.createElement('span');
    //   // set span styling absolute
    //   this.setPointStyles(point);
    //   this.setPointPosition(point, { x: this.randomPoint.x, y: this.randomPoint.y });
    //   // add span elements with this.randomPoint properties
    //   imageParentDiv.append(point);
    // }
  },
  componentDidUpdate() {
    console.log('componentDidUpdate');
  },
  render: function () {
    // const { value } = this.props;
    console.log('rerender preivew');
    if (this.mounted) {
      this.addPointsToPreview();
    }

    return h('p', {});
  }
});

export { Control, Preview };
