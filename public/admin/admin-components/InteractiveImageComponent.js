const Control = createClass({
  handleChange: function (e) {
    this.props.onChange(e.target.value.trim());
  },

  render: function () {
    const value = this.props.value;
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value,
      onChange: this.handleChange
    });
  }
});

const Preview = createClass({
  imgPreview: {
    parentDivElement: HTMLElement,
    element: HTMLElement,
    dimensions: {
      width: 0,
      height: 0
    }
  },
  randomPoint: {
    x: 100,
    y: 100
  },
  componentDidMount() {
    this.setElement();
    this.setDimensions();
    this.addPoints();
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
    this.imgPreview.parentDivElement = this.imgPreview.element ? this.imgPreview.element.parentNode : null;
    console.log(this.imgPreview);
  },
  setDimensions() {
    const { element } = this.imgPreview;
    this.imgPreview.dimensions.width = element.width;
    this.imgPreview.dimensions.height = element.height;
  },
  addPoints() {
    // get image parent div
    const imageParentDiv = this.imgPreview.element.parentElement;
    // set position relative on image parent div
    imageParentDiv.style.position = 'relative';
    // create span points
    const point = document.createElement('span');
    // set span styling absolute
    this.setPointStyles(point);
    this.setPointPosition(point, { x: this.randomPoint.x, y: this.randomPoint.y });
    // add span elements with this.randomPoint properties
    imageParentDiv.append(point);
  },
  render: function () {
    const { fieldsMetaData, value } = this.props;
    return h('p', {}, [JSON.stringify(fieldsMetaData), value]);
  }
});

export { Control, Preview };
