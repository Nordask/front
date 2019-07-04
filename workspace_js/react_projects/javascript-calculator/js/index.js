var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var isOperator = /[*+\-\/]/;
var endsWithOperator = /[*+\-\/]$/;

//container for buttons
var Buttons = function (_React$Component) {_inherits(Buttons, _React$Component);function Buttons() {_classCallCheck(this, Buttons);return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));}_createClass(Buttons, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement(Formula, { formula: this.props.formula }),
          React.createElement(Output, { currentValue: this.props.currentValue }),

          React.createElement("button", { id: "clear", className: "red-button", value: "clear", onClick: this.props.clear }, "Clear"),
          React.createElement("button", { id: "equals", className: "blue-button", value: "=", onClick: this.props.evaluate }, "="),

          React.createElement("button", { id: "seven", value: "7", onClick: this.props.number }, "7"),
          React.createElement("button", { id: "eight", value: "8", onClick: this.props.number }, "8"),
          React.createElement("button", { id: "nine", value: "9", onClick: this.props.number }, "9"),
          React.createElement("button", { id: "add", className: "green-button", value: "+", onClick: this.props.operator }, "+"),

          React.createElement("button", { id: "four", value: "4", onClick: this.props.number }, "4"),
          React.createElement("button", { id: "five", value: "5", onClick: this.props.number }, "5"),
          React.createElement("button", { id: "six", value: "6", onClick: this.props.number }, "6"),
          React.createElement("button", { id: "subtract", className: "green-button", value: "-", onClick: this.props.operator }, "-"),

          React.createElement("button", { id: "one", value: "1", onClick: this.props.number }, "1"),
          React.createElement("button", { id: "two", value: "2", onClick: this.props.number }, "2"),
          React.createElement("button", { id: "three", value: "3", onClick: this.props.number }, "3"),
          React.createElement("button", { id: "multiply", className: "green-button", value: "*", onClick: this.props.operator }, "*"),

          React.createElement("button", { id: "zero", value: "0", onClick: this.props.number }, "0"),
          React.createElement("button", { id: "decimal", value: ".", onClick: this.props.dot }, "."),
          React.createElement("button", { id: "divide", className: "green-button", value: "/", onClick: this.props.operator }, "/")));


    } }]);return Buttons;}(React.Component);var


Formula = function (_React$Component2) {_inherits(Formula, _React$Component2);function Formula() {_classCallCheck(this, Formula);return _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).apply(this, arguments));}_createClass(Formula, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "formula" }, this.props.formula));

    } }]);return Formula;}(React.Component);var


Output = function (_React$Component3) {_inherits(Output, _React$Component3);function Output() {_classCallCheck(this, Output);return _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).apply(this, arguments));}_createClass(Output, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "display" }, this.props.currentValue));

    } }]);return Output;}(React.Component);var


Calculator = function (_React$Component4) {_inherits(Calculator, _React$Component4);function Calculator() {var _ref;var _temp, _this4, _ret;_classCallCheck(this, Calculator);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call.apply(_ref, [this].concat(args))), _this4), _this4.

    state = {
      currentValue: '0',
      formula: ''


      // 0-9
    }, _this4.number = function (e) {
      if (_this4.state.formula.includes('=')) {
        _this4.setState({
          currentValue: e.target.value,
          formula: e.target.value != '0' ? e.target.value : '' });

      } else {
        _this4.setState({
          currentValue: _this4.state.currentValue == '0' || isOperator.test(_this4.state.currentValue) ? e.target.value : _this4.state.currentValue + e.target.value,
          formula: e.target.value == '0' && _this4.state.currentValue == '0' ? _this4.state.formula : _this4.state.formula + e.target.value });

      }
    }, _this4.

    evaluate = function () {
      var expression = _this4.state.formula;

      if (endsWithOperator.test(expression))
      expression = expression.slice(0, expression.lenght - 1);

      var result = eval(expression);

      _this4.setState({
        currentValue: result.toString(),
        formula: expression + '=' + result });

    }, _this4.


    operator = function (e) {
      if (_this4.state.formula.includes('=')) {
        _this4.setState({
          formula: _this4.state.currentValue + e.target.value,
          currentValue: e.target.value });

      } else {
        _this4.setState({
          currentValue: e.target.value,
          formula: endsWithOperator.test(_this4.state.formula) ? _this4.state.formula.slice(0, _this4.state.formula.length - 1) + e.target.value : _this4.state.formula + e.target.value });

      }
    }, _this4.

    clear = function () {
      _this4.setState({
        currentValue: '0',
        formula: '',
        wasCalulated: false });

    }, _this4.


    dot = function (e) {
      if (_this4.state.formula.includes('=')) {
        _this4.setState({
          currentValue: '0.',
          formula: '0.' });

      } else if (!_this4.state.currentValue.includes('.')) {
        if (endsWithOperator.test(_this4.state.formula) || _this4.state.curentValue == '0' && _this4.state.formula == '') {
          _this4.setState({
            currentValue: '0.',
            formula: _this4.state.formula + '0.' });

        } else {
          _this4.setState({
            currentValue: _this4.state.currentValue + e.target.value,
            formula: _this4.state.formula + e.target.value });

        }
      }
    }, _temp), _possibleConstructorReturn(_this4, _ret);} // =
  // +-*/
  // .
  _createClass(Calculator, [{ key: "render", value: function render() {return React.createElement("div", { id: "calc" },
        React.createElement(Buttons, { evaluate: this.evaluate,
          number: this.number,
          operator: this.operator,
          clear: this.clear,
          dot: this.dot,

          formula: this.state.formula,
          currentValue: this.state.currentValue }));



    } }]);return Calculator;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calc'));