const Control = createClass({
  valueCache: new Map(),
  imageUploaded: false,
  imageUrl: '',
  pointsLength: 0,
  handleImageInput(evt) {
    const [file] = evt.target.files;
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
      this.imageUploaded = true;
    } else {
      this.imageUploaded = false;
    }
    this.forceUpdate();
  },
  handleRemoveImage() {
    this.imageUrl = '';
    this.imageUploaded = false;
    this.forceUpdate();
  },
  handleImageClick(e) {
    if (!e) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const key = `point-${this.valueCache.size}`;

    // save state
    this.valueCache.set(key, { ...this.valueCache.get(key), x, y });
    // update cms value
    this.props.onChange({
      image: this.imageUrl,
      points: this.valueCache
    });
  },
  renderImage() {
    const args = {
      img: {
        src: this.imageUrl,
        onClick: this.handleImageClick
      },
      button: {
        onClick: this.handleRemoveImage
      }
    };
    const points = () => {
      const pointsArray = Array.from(this.valueCache.entries());

      return pointsArray.map(point => {
        const key = point[0];
        const value = point[1];
        const styleObject = {};
        const style = {
          ...this.setPointStyles(styleObject),
          ...this.setPointPosition(styleObject, value)
        };

        return h(
          'span',
          {
            'data-key': key,
            style
          },
          ''
        );
      });
    };
    return h('div', { className: 'iimg-image-wrapper' }, [
      h('div', null, [h('img', args.img), h('div', {}, points())]),
      h('button', args.button, `Remove image`)
    ]);
  },
  renderFileInput() {
    const args = {
      type: 'file',
      accept: 'image/png, image/jpeg, image/png, image/jpg',
      onInput: this.handleImageInput
    };
    return h('input', args);
  },
  setPointStyles(styleObject) {
    styleObject.position = 'absolute';
    styleObject.width = '30px';
    styleObject.height = '30px';
    styleObject.display = 'block';
    styleObject.background = '#fff';
    styleObject.borderRadius = '50%';
    styleObject.transform = 'translate(-50%, -50%)';
    return styleObject;
  },
  setPointPosition(styleObject, { x, y }) {
    styleObject.left = `${x}px`;
    styleObject.top = `${y}px`;
    return styleObject;
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
