const Control = createClass({
  handleChange: function (e) {
    const separator = this.props.field.get('separator', ', ');
    this.props.onChange(e.target.value.split(separator).map(e => e.trim()));
  },

  render: function () {
    const separator = this.props.field.get('separator', ', ');
    const value = this.props.value;
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange
    });
  }
});

const Preview = createClass({
  render: function () {
    return h(
      'ul',
      {},
      this.props.value.map(function (val, index) {
        return h('li', { key: index }, val);
      })
    );
  }
});

const Schema = {
  properties: {
    separator: { type: 'string' }
  }
};
export { Control, Preview, Schema };
