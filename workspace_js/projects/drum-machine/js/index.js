var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var buttonsBackgroundColor = '#CD853F';
var pressedButtonsBackgroundColor = '#A0522D';

var buttonStyle = {
  backgroundColor: buttonsBackgroundColor,
  boxShadow: "10px 10px 20px orange" };


var buttonPressedStyle = {
  backgroundColor: pressedButtonsBackgroundColor };


var soundsContainer = [
{
  keyCharacter: 'Q',
  buttonCode: 81,
  soundName: 'Bass drum: GHOST',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/SC-40%20Bassdrums/38[kb]SC40BD001.aif.mp3' },
{
  keyCharacter: 'W',
  buttonCode: 87,
  soundName: 'Talking drum',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Talking%20Drum/69[kb]talking-drum-1.aif.mp3' },
{
  keyCharacter: 'E',
  buttonCode: 69,
  soundName: 'Burundi',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/African%20Burundi%20Drums/178[kb]big-burundi-07.wav.mp3' },
{
  keyCharacter: 'A',
  buttonCode: 65,
  soundName: 'Heavy crash',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/102[kb]CRASH.aif.mp3' },
{
  keyCharacter: 'S',
  buttonCode: 83,
  soundName: 'Tonal D2',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Verby%20Tonal%20Kit/405[kb]D2.aif.mp3' },
{
  keyCharacter: 'D',
  buttonCode: 68,
  soundName: 'Prophet clap',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Prophet/48[kb]prophet-Clap.wav.mp3' },
{
  keyCharacter: 'Z',
  buttonCode: 90,
  soundName: 'Claporama',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/claporama/65[kb]claporama-1.aif.mp3' },
{
  keyCharacter: 'X',
  buttonCode: 88,
  soundName: 'Clave big hit',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Clave%20Big%20Hit/65[kb]clave-big-hit-7.wav.mp3' },
{
  keyCharacter: 'C',
  buttonCode: 67,
  soundName: 'Share slam',
  soundUrl: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/UK%20Hard%20Kit/78[kb]UK_SNARE-slam.WAV.mp3' }];var



MyComponent = function (_React$Component) {_inherits(MyComponent, _React$Component);
  function MyComponent(props) {_classCallCheck(this, MyComponent);var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this,
    props));
    _this.myRef = React.createRef();return _this;
  }_createClass(MyComponent, [{ key: 'render', value: function render()
    {
      return React.createElement('div', { ref: this.myRef });
    } }]);return MyComponent;}(React.Component);var



DrumButton = function (_React$Component2) {_inherits(DrumButton, _React$Component2);
  function DrumButton(props) {_classCallCheck(this, DrumButton);var _this2 = _possibleConstructorReturn(this, (DrumButton.__proto__ || Object.getPrototypeOf(DrumButton)).call(this,
    props));_this2.








    playSound = function (e) {
      var sound = _this2.myRef.current;
      sound.currentTime = 0;
      sound.play();
      _this2.reverseButton();
      setTimeout(function () {return _this2.reverseButton();}, 100);
      _this2.props.getSoundName(_this2.props.soundId);
    };_this2.

    reverseButton = function () {
      if (_this2.state.buttonStyle.backgroundColor === buttonsBackgroundColor) {
        _this2.setState({
          buttonStyle: buttonPressedStyle });

        //$(".drum-pad").css("background-color", "blue" )
      } else if (_this2.state.buttonStyle.backgroundColor === pressedButtonsBackgroundColor) {
        _this2.setState({
          buttonStyle: buttonStyle });

      }
    };_this2.
    keyPressedHandler = function (e) {
      if (e.keyCode === _this2.props.buttonCode) {
        _this2.playSound();
      }
    };_this2.state = { buttonStyle: buttonStyle };_this2.myRef = React.createRef();return _this2;}_createClass(DrumButton, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      document.addEventListener('keydown', this.keyPressedHandler);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()

    {
      document.removeEventListener('keydown', this.keyPressedHandler);
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'drum-pad col-lg-1 col-lg-offset-1',
            id: this.props.soundId,
            onClick: this.playSound,
            style: this.state.buttonStyle },
          React.createElement('audio', { className: 'clip',
            src: this.props.soundUrl,
            id: this.props.keyCharacter,
            ref: this.myRef }),
          this.props.keyCharacter));


    } }]);return DrumButton;}(React.Component);var


DrumButtonsContainer = function (_React$Component3) {_inherits(DrumButtonsContainer, _React$Component3);function DrumButtonsContainer() {_classCallCheck(this, DrumButtonsContainer);return _possibleConstructorReturn(this, (DrumButtonsContainer.__proto__ || Object.getPrototypeOf(DrumButtonsContainer)).apply(this, arguments));}_createClass(DrumButtonsContainer, [{ key: 'render', value: function render()

    {var _this4 = this;
      var buttonContainer = [];
      buttonContainer = this.props.soundsContainer.map(
      function (currentSoundItem) {
        return (
          React.createElement(DrumButton, { soundUrl: currentSoundItem.soundUrl,
            keyCharacter: currentSoundItem.keyCharacter,
            buttonCode: currentSoundItem.buttonCode,
            soundId: currentSoundItem.soundName,
            getSoundName: _this4.props.getSoundName }));

      });

      return (
        React.createElement('div', { className: 'pad-bank row' }, buttonContainer));

    } }]);return DrumButtonsContainer;}(React.Component);var


ControlPanel = function (_React$Component4) {_inherits(ControlPanel, _React$Component4);function ControlPanel() {_classCallCheck(this, ControlPanel);return _possibleConstructorReturn(this, (ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).apply(this, arguments));}_createClass(ControlPanel, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'controlPanel' },
          React.createElement('div', { className: 'soundName' },
            React.createElement('p', null, this.props.soundName))));



    } }]);return ControlPanel;}(React.Component);var


DrumMachine = function (_React$Component5) {_inherits(DrumMachine, _React$Component5);function DrumMachine() {var _ref;var _temp, _this6, _ret;_classCallCheck(this, DrumMachine);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this6 = _possibleConstructorReturn(this, (_ref = DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call.apply(_ref, [this].concat(args))), _this6), _this6.

    state = {
      soundsContainer: soundsContainer,
      soundName: '' }, _this6.



    getSoundName = function (name) {
      _this6.setState({
        soundName: name });

    }, _temp), _possibleConstructorReturn(_this6, _ret);}_createClass(DrumMachine, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', { id: 'display' },
            React.createElement(DrumButtonsContainer, {
              soundsContainer: this.state.soundsContainer,
              getSoundName: this.getSoundName }),
            React.createElement(ControlPanel, { soundName: this.state.soundName }))));



    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, null),
document.getElementById('machine'));