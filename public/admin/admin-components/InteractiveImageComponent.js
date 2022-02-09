const Control = createClass({
  valueCache: new Map(),
  imageUploaded: false,
  imageUrl: '',
  pointsLength: 0,

  componentDidMount() {
    console.log(this.props.value ? this.props.value.get('points') : new Map());
    if (!!this.props.value && this.props.value.has('points')) {
      Array.from(this.props.value.get('points')).forEach(point => {
        this.valueCache.set(point[0], point[1]);
      });

      this.forceUpdate();
      // this.imageUploaded = true
    }
  },

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
  handlePointMetaInput(e, key) {
    if (this.valueCache.has(key)) {
      this.valueCache.set(key, {
        ...this.valueCache.get(key),
        metaData: {
          tooltip: e.target.value
        }
      });
    }
    this.props.onChange({
      image: this.imageUrl,
      points: this.valueCache
    });
  },
  handleImageClick(e) {
    console.log(e);
    if (!e) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const key = `point-${this.valueCache.size}`;

    const xPercentage = `${(x / rect.width) * 100}%`;
    const yPercentage = `${(y / rect.height) * 100}%`;

    if (this.valueCache.has(key)) {
      this.valueCache.set(key, { ...this.valueCache.get(key), x, y, xPercentage, yPercentage });
    } else {
      this.valueCache.set(key, { x, y, xPercentage, yPercentage });
    }
    // update cms value
    this.props.onChange({
      image: this.imageUrl,
      points: this.valueCache
    });
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
  setPointPosition(styleObject, { xPercentage, yPercentage }) {
    console.log({ xPercentage, yPercentage });
    styleObject.left = `${xPercentage}`;
    styleObject.top = `${yPercentage}`;
    return styleObject;
  },
  renderPointsMetaData() {
    const args = {
      type: 'text',
      style: {
        border: '1px solid black'
      }
    };
    const pointInputArgs = {
      className: 'iimg-points-input',
      onMouseEnter: e => {
        let key;
        if (e.target.tagName === 'INPUT') {
          key = e.target.parentNode.getAttribute('data-key');
        } else {
          key = e.target.getAttribute('data-key');
        }
        document.querySelectorAll(`span[data-key=${key}]`).forEach(element => {
          element.classList.add('hovering');
        });
      },
      onMouseLeave: () => {
        document.querySelectorAll('.hovering').forEach(element => element.classList.remove('hovering'));
      }
    };

    const iterator = () =>
      Array.from(this.valueCache.keys()).map(key => {
        return h('div', { ...pointInputArgs, 'data-key': key }, [
          h('span', {}, key),
          h('input', { ...args, onInput: e => this.handlePointMetaInput(e, key) })
        ]);
      });
    return h('div', { className: 'iimg-points-input-wrapper' }, iterator());
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
      console.log(pointsArray);
      return pointsArray.map(point => {
        const key = point[0];
        const xPercentage = point[1].xPercentage;
        const yPercentage = point[1].yPercentage;
        // const value = point[1];
        const styleObject = {};
        const style = {
          ...this.setPointStyles(styleObject),
          ...this.setPointPosition(styleObject, {
            xPercentage: !xPercentage ? point[1].get('xPercentage') : xPercentage,
            yPercentage: !yPercentage ? point[1].get('yPercentage') : yPercentage
          })
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
  render: function () {
    return h('div', null, [
      this.imageUploaded
        ? [this.renderImage(), this.valueCache.size !== 0 ? this.renderPointsMetaData() : null]
        : this.renderFileInput()
    ]);
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
