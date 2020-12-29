import * as React from 'react';
import { connect } from 'react-redux';
import { setRoute } from 'app/stores/application/app.action';

interface ISettingProps {
  setRoute: (route: string) => void;

}

class SettingsUnwrapped extends React.Component<ISettingProps, {}>{
  componentWillMount() {
    this.props.setRoute("SETTINGS");
  }
  render() {
    return <div className="content-box">
      <div className="row">
        <div className="col-sm-12">
          <div className="element-wrapper">
            <h6 className="element-header">Settings</h6>
            <div className="element-box"></div>
          </div>
        </div>
      </div>
    </div>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),

  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export const Settings = connect(mapStateToProps, mapDispatchToProps)(SettingsUnwrapped)