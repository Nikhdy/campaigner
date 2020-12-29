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
}
interface ISideNavigationState {
    active: string;
}

const MobileSideNavigation: FC<ISideNavigationProps> = (props) => {
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
    return (
        <div className='menu-mobile menu-activated-on-click color-scheme-dark'>
            <div className='mm-logo-buttons-w'>
                <a className='mm-logo' href='index.html'><img src={require("../assets/img/logo.png")} /><span>Clean Admin</span></a>
                <div className='mm-buttons'>
                    <div className='content-panel-open'>
                        <div className='os-icon os-icon-grid-circles'></div>
                    </div>
                    <div className='mobile-menu-trigger'>
                        <div className='os-icon os-icon-hamburger-menu-1'></div>
                    </div>
                </div>
            </div>
            <div className='menu-and-user'>
                <div className='logged-user-w'>
                    <div className='avatar-w'>
                        <img alt='' src={require('../assets/img/avatar1.jpg')} />
                    </div>
                    <div className='logged-user-info-w'>
                        <div className='logged-user-name'>
                            Maria Gomez
                </div>
                        <div className='logged-user-role'>
                            Administrator
                </div>
                    </div>
                </div>
                <ul className='main-menu'>

                    {_.map(menuItems, (item: Menu.ISideMenuItem) => {
                        if (item.name !== 'divider') {
                            return <li key={item.name}
                                className={'selected ' + ((item.subItems && item.subItems.length > 0) ? 'has-sub-menu ' : '') + (active === item.name ? ' active' : '')}>
                                {/* I am a comment*/}
                                <a href='javascript:void(0)' onClick={onNavMenuClick(item)} >
                                    <div className='icon-w'>
                                        <div className={item.icon}></div>
                                    </div>
                                    <span>{translate(item.displayName, item.name)}</span></a>


                                <ul className='sub-menu'>
                                    {_.map(item.subItems, (subItem: Menu.ISideMenuItem, index) => {
                                        return <li key={subItem.name + '_' + index}>
                                            <a href='javascript:void(0)' onClick={onNavMenuClick(subItem)}>
                                                {translate(subItem.displayName, subItem.name)}</a>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        } else {
                            return;
                        }
                    })}
                </ul>
                <div className='mobile-menu-magic'>
                    <h4>
                        CEX
                        </h4>
                    <p>
                        by Aarvy Labs
                         </p>
                </div>
            </div>
        </div>
    );

}



const mapStateToProps = (state) => {
    return {
        user: state.accountReducer.user,
    };
};


export const MobileSideNavigationComponent = withRouter(connect(mapStateToProps)(MobileSideNavigation));
