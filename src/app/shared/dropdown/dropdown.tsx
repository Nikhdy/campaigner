import * as React from 'react';

interface IButton {
  name: string;
  displayName: string,
  event: any;
  disabled: boolean;
  icon: string;
}

interface IDropDownProps {
  type: string;
  buttons: IButton[];
  icon?: string;
  displayName: string;
  onShow?: (e) => void;
  className?: string;
}

interface IDropDownState {
  showDropDown: boolean;

}

export default class DropDown extends React.Component<IDropDownProps, IDropDownState> {

  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    }
    this.documentClickHandler = this.documentClickHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.documentClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  documentClickHandler() {
    this.setState({
      showDropDown: false,
    });
}



  onDropDownClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ showDropDown: !this.state.showDropDown })
  }

  onButtonItemClick = (cb) => (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ showDropDown: false })
    if (cb) {
      cb();
    }
  }
  // add event listner

  render() {
    const { buttons, displayName, icon, className = "" } = this.props;
    const { showDropDown } = this.state;
    return <div className={"btn-group mr-1 mb-1 " + className}>
    <div>{undefined}</div>
      <button aria-expanded="true" aria-haspopup="true"
        className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton1" type="button" onClick={this.onDropDownClick}>
        {icon && <i className={`icon ${icon}`} />}{displayName}</button>
      <div aria-labelledby="dropdownMenuButton1" className={"dropdown-menu " + (showDropDown ? "show" : "")} x-placement="bottom-start">

        {buttons.map(btn => <button key={btn.name} className="dropdown-item" type="button"
          onClick={this.onButtonItemClick(btn.event)}>{btn.icon && <i className={`icon ${btn.icon}`} />}{btn.displayName}</button>)}

      </div>
    </div>
  }
}


