import * as _ from 'lodash';
import * as React from 'react';
import { useEffect, useState, FC } from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { translate } from 'app/locales';
import { userLogout } from 'app/stores/account/account.action';
import { TopNavigationIcons } from './side-navigation-data';
import { toggleSideMenu } from 'app/stores/application/app.action';

interface ITopNavigationProps {
  user: Account.IUser;
  userLogout: () => void;
  toggleSideMenu: () => void;
  currentRoute: string;
}
interface ITopNavigationState {
  active: string;
}

const TopNavigation: FC<ITopNavigationProps> = (props) => {
  const [active, setActive] = useState("");

  const onUserLogOut = () => {
    props.userLogout();
  }


  const onIconClick = (iconName: string) => {
    return (e) => {
      e.nativeEvent.stopImmediatePropagation();
      setActive(iconName);
    }
  }


  const documentClickHandler = () => {
    setActive('');
  }
  useEffect(() => {
    document.addEventListener("click", documentClickHandler);
    return () => {
      document.removeEventListener("click", documentClickHandler);

    }
  }, [])


  // const toggleMenu = () => {
  //   props.toggleSideMenu();
  // }

  const getRouteIcon = () => {
    const { currentRoute } = props;
    switch (currentRoute) {
      case "CAMPAIGN":
        return <i className="os-icon  os-icon-fire"></i>;
      case "PROSPECTS":
        return <i className="os-icon  os-icon-users"></i>;
      case "DASHBOARD":
        return <i className="os-icon  os-icon-layout"></i>;
      case "TEAMS":
        return <i className="os-icon os-icon-user-male-circle2"></i>;
      case "INBOX":
        return <i className="os-icon os-icon-inbox"></i>;
      case "TEMPLATES":
        return <i className="os-icon os-icon-documents-03"></i>;
      case "CALANDER":
        return <i className="os-icon os-icon-calendar"></i>;
      case "SETTINGS":
        return <i className="os-icon  os-icon-settings"></i>;
      default:
        return <i></i>;
    }
  }

  const { user, currentRoute } = props;
  return (<div className='top-bar color-scheme-light'>
    <div className="fancy-selector-w">
      <div className="fancy-selector-current">
        <div className="fs-img shadowless">
          {getRouteIcon()}
        </div>
        <div className="fs-main-info">
          <div className="fs-name">
            {translate(currentRoute)}
          </div>
          {/* <div className="fs-sub">
              <span>New Tickets:</span><strong>14</strong>
            </div> */}
        </div>
        {/* <div className="fs-selector-trigger">
            <i className="os-icon os-icon-arrow-down4"></i>
          </div> */}
      </div>

    </div>
    <div className='top-menu-controls'>
      <div className='element-search autosuggest-search-activator'>
        <input placeholder='Start typing to search...' type='text' />
      </div>
      {_.map(TopNavigationIcons, (navIcon) => {
        return <div key={navIcon.name} className={'messages-notifications os-dropdown-trigger os-dropdown-position-left' + (active === navIcon.name ? ' over' : '')}
          onClick={onIconClick(navIcon.name)}>
          <i className={navIcon.icon} ></i>
          {navIcon.hasBadge && <div className='new-messages-count'>12</div>}
          <div className='os-dropdown light message-list'>
            <ul>
              <li>
                <a href='#'>
                  <div className='user-avatar-w'>
                    <img alt='' src={require('../assets/img/avatar1.jpg')} />
                  </div>
                  <div className='message-content'>
                    <h6 className='message-from'>John Mayers</h6>
                    <h6 className='message-title'>Account Update</h6>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='user-avatar-w'>
                    <img alt='' src={require('../assets/img/avatar2.jpg')} />
                  </div>
                  <div className='message-content'>
                    <h6 className='message-from'>Phil Jones</h6>
                    <h6 className='message-title'>Secutiry Updates</h6>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='user-avatar-w'>
                    <img alt='' src={require('../assets/img/avatar3.jpg')} />
                  </div>
                  <div className='message-content'>
                    <h6 className='message-from'>Bekky Simpson</h6>
                    <h6 className='message-title'>Vacation Rentals</h6>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='user-avatar-w'>
                    <img alt='' src={require('../assets/img/avatar4.jpg')} />
                  </div>
                  <div className='message-content'>
                    <h6 className='message-from'>Alice Priskon</h6>
                    <h6 className='message-title'>Payment Confirmation</h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      })}
      <div className='logged-user-w'>
        <div className='logged-user-i'>
          <div className='avatar-w bg-default user-logo'>
            <Avatar name={user.email} size="35" />
          </div>
          <div className='logged-user-menu color-style-bright'>
            <div className='logged-user-avatar-info'>
              <div className='avatar-w'>
                <Avatar name={user.email} size="30" />
              </div>
              <div className='logged-user-info-w'>
                <div className='logged-user-name'>{user.email}</div>
                <div className='logged-user-role'>Administrator</div>
              </div>
            </div>
            <div className='bg-icon'>
              <i className='os-icon os-icon-wallet-loaded'></i>
            </div>
            <ul>
              <li>`
                  <a href='javascript:void(0)' onClick={onUserLogOut}>
                  <i className='os-icon os-icon-signs-11'></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>)
}




const mapStateToProps = (state) => {
  return {
    user: state.accountReducer.user,
    currentRoute: state.appReducer.currentRoute,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout()),
    toggleSideMenu: () => dispatch(toggleSideMenu()),
  }
}


export const TopNavigationComponent = connect(mapStateToProps, mapDispatchToProps)(TopNavigation);