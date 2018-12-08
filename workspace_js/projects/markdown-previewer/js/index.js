var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var placeholder = "\nHeaders:\n# MainHeader\n## SubHeader\n-----------------------------------------------------\nInline code:\nStart code `return 0;` end code\n\n-----------------------------------------------------\nSection with code:\n```\nclass TypesOfFood extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <h1>Types of Food:</h1>\n        {/* change code below this line */}\n        <Fruits/>\n        <Vegetables/>\n        {/* change code above this line */}\n      </div>\n    );\n  }\n};\n```\n-----------------------------------------------------\nLink:\n[linkToGoogle](https://www.google.com)\n-----------------------------------------------------\nBlock Quotes:\n> Blablableblibla\n-----------------------------------------------------\nNumbered list of items:\n1. FirstItem\n2. SecondItem\n3. ThirdItem\n\nList of items:\n- FirstItem\n  - SecondItem\n    -ThirdItem\n-----------------------------------------------------\nTables\n\nFirstHeader|SecondHeader|ThirdHeader\n------------ | ------------- | ------------- \nData1|Data2|Data3\nInfo1|Info2|Info3\n\n-----------------------------------------------------\nImage:\n![FREE](https://www.textuar.com/blog/wp-content/uploads/2017/11/free-images-for-copywriting.jpg)\n-----------------------------------------------------\nText:\n**Bold**\n_Italic_\n**_Bold&Italic_**\n_**Italic&Bold**_\n~Crossing~\n";






























































marked.setOptions({ breaks: true });
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return "<a target=\"_blank\" href=\"" + href + "\">" + text + "></a>";
};var

Previewer = function (_React$Component) {_inherits(Previewer, _React$Component);
  function Previewer(props) {_classCallCheck(this, Previewer);var _this = _possibleConstructorReturn(this, (Previewer.__proto__ || Object.getPrototypeOf(Previewer)).call(this,
    props));_this.






    handleChange = function (e) {
      _this.setState({
        editorCode: e.target.value });

    };_this.state = { editorCode: placeholder };return _this;}_createClass(Previewer, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "code-page" },
          React.createElement("div", null,
            React.createElement(Toolbar, { text: "Editor" }),
            React.createElement(Editor, { markdown: this.state.editorCode,
              onChange: this.handleChange })),

          React.createElement("div", null,
            React.createElement(Toolbar, { text: "Preview" }),
            React.createElement(Preview, { markdown: this.state.editorCode }))));



    } }]);return Previewer;}(React.Component);


var Editor = function Editor(props) {
  return (
    React.createElement("textarea", { id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));

};

var Preview = function Preview(props) {
  return (
    React.createElement("div", { id: "preview",
      dangerouslySetInnerHTML: createMarkup(props.markdown) }));

};

function createMarkup(code) {
  return { __html: marked(code, { renderer: renderer }) };
}

var Toolbar = function Toolbar(props) {
  return (
    React.createElement("div", { className: "toolbar" },
      React.createElement("i", null, props.text)));


};

ReactDOM.render(React.createElement(Previewer, null), document.getElementById('app'));