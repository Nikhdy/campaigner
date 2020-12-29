import * as React from 'react';
import { useEffect, useState, FC } from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { cexNavigation } from './side-navigation-data';
import { translate } from '../locales';

interface ISideNavigationProps {
  user: Account.IUser;
  location?: any;
  history?: any;
  isSideBarMini?: boolean;
}
interface ISideNavigationState {
  active: string;
}

const SideNavigation: FC<ISideNavigationProps> = (props) => {
  const [active, setActive] = useState('');


  const onNavMenuClick = (menuItem: Menu.ISideMenuItem) => {
    return (e) => {
      e.nativeEvent.stopImmediatePropagation();
      if (menuItem.path && menuItem.path !== '') {
        setActive('');
        props.history.push(menuItem.path)
      } else {
        setActive(menuItem.name);
      }
    }
  }

  const documentClickHandler = () => {
    setActive('');
  }
  useEffect(() => {
    document.addEventListener('click', documentClickHandler);
    return () => {
      document.removeEventListener('click', documentClickHandler);
    }
  }, [])
  const menuItems: Menu.ISideMenuItem[] = cexNavigation;
  const { isSideBarMini } = props
  return (<div className={'menu-w color-scheme-light color-style-default menu-position-side menu-side-left menu-layout-' + (isSideBarMini ? 'mini' : 'full') + ' sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link'}>
    <div className='logo-w'>
      <a className='logo' href='index.html'>
        <div className='logo-element'></div>
        <div className='logo-label'>CEX</div>
      </a>
    </div>
    <ul className='main-menu has-active'>
      {_.map(menuItems, (item: Menu.ISideMenuItem) => {
        if (item.name !== 'divider' && item.name !== 'menu-header') {
          return <li key={item.name}
            className={'selected ' + ((item.subItems && item.subItems.length > 0) ? 'has-sub-menu ' : '') + (active === item.name ? ' active' : '')}>
            <a href='javascript:void(0)' onClick={onNavMenuClick(item)} >
              <div className='icon-w'>
                <div className={item.icon}></div>
              </div>
              <span>{translate(item.displayName, item.name)}</span></a>
            <div className='sub-menu-w'>
              <div className='sub-menu-header'>
                {translate(item.displayName, item.name)}
              </div>
              <div className='sub-menu-icon'>
                <i className={item.icon}></i>
              </div>
            </div>
          </li>
        } else if (item.name === 'divider') {
          return <li key={item.name} className="horz-divider"><hr /></li>
        } else {
          return <li key={item.displayName} className='sub-header'>
            <span>{translate(item.displayName, item.displayName)}</span>
          </li>
        }
      })}
    </ul>
  </div>)
}






const mapStateToProps = (state) => {
  return {
    user: state.accountReducer.user,
    isSideBarMini: state.appReducer.isSideBarMini
  };
};


export const SideNavigationComponent = withRouter(connect(mapStateToProps)(SideNavigation));
