var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var LengthControl = function (_React$Component) {_inherits(LengthControl, _React$Component);
  function LengthControl(props) {_classCallCheck(this, LengthControl);return _possibleConstructorReturn(this, (LengthControl.__proto__ || Object.getPrototypeOf(LengthControl)).call(this,
    props));
  }_createClass(LengthControl, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "lengthControl" },
          React.createElement("div", { id: this.props.titleID },
            this.props.title),


          React.createElement("button", { id: this.props.decID,
              value: "-",
              onClick: this.props.onClick },
            React.createElement("i", { className: "fa fa-arrow-down fa-2x" })),


          React.createElement("div", { id: this.props.lengthID },
            React.createElement("span", null, this.props.length)),


          React.createElement("button", { id: this.props.incID,
              value: "+",
              onClick: this.props.onClick },
            React.createElement("i", { className: "fa fa-arrow-up fa-2x" }))));



    } }]);return LengthControl;}(React.Component);var


Timer = function (_React$Component2) {_inherits(Timer, _React$Component2);function Timer() {_classCallCheck(this, Timer);return _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));}_createClass(Timer, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "clock" },
          React.createElement("div", { id: "timer-label", style: this.props.alarmColor },
            this.props.timerType),

          React.createElement("div", { id: "time-left", style: this.props.alarmColor },
            React.createElement("span", null, this.props.time)),

          React.createElement("button", { id: "start_stop", onClick: this.props.timerControl },
            React.createElement("i", { className: this.props.runButtonClass })),

          React.createElement("button", { id: "reset", onClick: this.props.reset },
            React.createElement("i", { className: "fa fa-refresh fa-2x" }))));



    } }]);return Timer;}(React.Component);var


TimerPanel = function (_React$Component3) {_inherits(TimerPanel, _React$Component3);
  function TimerPanel(props) {_classCallCheck(this, TimerPanel);var _this3 = _possibleConstructorReturn(this, (TimerPanel.__proto__ || Object.getPrototypeOf(TimerPanel)).call(this,
    props));_this3.











    decrementTimer = function () {
      //console.log("Hello I'm decrementTimer!")
      //if(this.state.timeValue === 0) {
      //this.clearTimer()
      //} else {
      var timeValue = _this3.state.timeValue - 1;
      _this3.setState({
        timeValue: timeValue });

      //}  
    };_this3.

    clearTimer = function () {
      clearInterval(_this3.timer);
      _this3.timer = 0;
    };_this3.

    timerWork = function () {
      //console.log("Hello I'm a timeerWork!")
      _this3.decrementTimer();
      _this3.phaseControl();
    };_this3.

    phaseControl = function () {
      var timeValue = _this3.state.timeValue;
      _this3.warning(timeValue);
      _this3.alarm(timeValue);

      if (timeValue < 0) {
        if (_this3.state.timerType == 'Session') {
          _this3.switchTimer(_this3.state.breakLength * 60, 'Break');
          _this3.clearTimer();
          _this3.timer = setInterval(_this3.timerWork, 1000);
        } else if (_this3.state.timerType == 'Break') {
          _this3.switchTimer(_this3.state.sessionLength * 60, 'Session');
          _this3.clearTimer();
          _this3.timer = setInterval(_this3.timerWork, 1000);
        }
      }
    };_this3.

    alarm = function (timerValue) {
      //let timerValue = this.state.timerValue
      if (timerValue === 0) {
        _this3.audioBeep.play();
      }
    };_this3.

    reset = function () {
      _this3.clearTimer();
      _this3.setState({
        breakLength: 5,
        sessionLength: 25,
        timerState: 'Stopped',
        timeValue: 1500,
        alarmColor: { color: 'white' },
        timerType: 'Session' });

      _this3.audioBeep.pause();
      _this3.audioBeep.currentTime = 0;
    };_this3.

    warning = function (timerValue) {
      _this3.setState({
        alarmColor: timerValue < 61 ? { color: 'red' } : { color: 'white' } });

    };_this3.

    timerControl = function () {
      if (_this3.state.timerState == 'Stopped') {
        //console.log("Hello I'm timerControl!")
        if (_this3.timer == 0 && _this3.state.timeValue > 0) {
          _this3.timer = setInterval(_this3.timerWork, 1000);
        }
        _this3.setState({
          timerState: 'Running' });

      } else if (_this3.state.timerState == 'Running') {
        _this3.clearTimer();
        _this3.setState({
          timerState: 'Stopped' });

      }
    };_this3.

    getRunButtonClass = function () {
      if (_this3.state.timerState == 'Stopped')
      return "fa fa-play fa-2x";else
      if (_this3.state.timerState == 'Running')
      return "fa fa-pause fa-2x";
    };_this3.

    setBreakLength = function (e) {
      if (_this3.checkLengthValue(_this3.state.breakLength, e.target.value)) {
        _this3.setState({
          breakLength: e.target.value == "+" ? _this3.state.breakLength + 1 : _this3.state.breakLength - 1 });

      }
    };_this3.

    setSessionLength = function (e) {
      if (_this3.checkLengthValue(_this3.state.sessionLength, e.target.value) && _this3.state.timerState == 'Stopped') {
        _this3.setState({
          sessionLength: e.target.value == "+" ? _this3.state.sessionLength + 1 : _this3.state.sessionLength - 1,
          timeValue: e.target.value == "+" ? (_this3.state.sessionLength + 1) * 60 : (_this3.state.sessionLength - 1) * 60 });

      }
    };_this3.

    getCurrentTime = function () {
      //console.log(this.state.timeValue)
      var min = Math.floor(_this3.state.timeValue / 60);
      var sec = _this3.state.timeValue % 60;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      return min + ':' + sec;
    };_this3.

    checkLengthValue = function (length, direction) {
      return !(length <= 1 && direction == '-' || length >= 60 && direction == '+');
    };_this3.

    switchTimer = function (timeValue, timerType) {
      _this3.setState({
        timeValue: timeValue,
        timerType: timerType,
        alarmColor: { color: 'white' } });

    };_this3.timer = 0;_this3.state = { breakLength: 5, sessionLength: 25, timerState: 'Stopped', timeValue: 1500, alarmColor: { color: 'white' }, timerType: 'Session' };return _this3;}_createClass(TimerPanel, [{ key: "render", value: function render()

    {var _this4 = this;
      return (
        React.createElement("div", { id: "timer-panel" },
          React.createElement("div", { id: "control" },
            React.createElement(LengthControl, { onClick: this.setBreakLength,
              length: this.state.breakLength,
              title: "Break Length",
              titleID: "break-label",
              decID: "break-decrement",
              incID: "break-increment",
              lengthID: "break-length" }),
            React.createElement(LengthControl, { onClick: this.setSessionLength,
              length: this.state.sessionLength,
              title: "Session Length",
              titleID: "session-label",
              decID: "session-decrement",
              incID: "session-increment",
              lengthID: "session-length" })),

          React.createElement(Timer, { time: this.getCurrentTime(),
            runButtonClass: this.getRunButtonClass(),
            reset: this.reset,
            timerControl: this.timerControl,
            timerType: this.state.timerType,
            alarmColor: this.state.alarmColor }),
          React.createElement("audio", { id: "beep", preload: "auto",
            src: "https://goo.gl/65cBl1",
            ref: function ref(audio) {_this4.audioBeep = audio;} })));


    } }]);return TimerPanel;}(React.Component);


ReactDOM.render(React.createElement(TimerPanel, null), document.getElementById('alarm'));