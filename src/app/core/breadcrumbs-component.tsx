import * as React from 'react';
import { withRouter } from 'react-router';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
interface IBreadCrumbsProps {
    history?: any;
    location?: any;
}

class BreadCrumbs extends React.Component<IBreadCrumbsProps, {}>{
    constructor(props) {
        super(props);
    }

    getCrumbsDisplayValue() {
        const history = this.props.history;
        //split string remove query
        const crumbObject = {}
        // find object Displays
        // return array of displayname and url
        return [];
    }

    joinArray(seperator, strArray, start, end, ) {
        if (!start) start = 0;
        if (!end) end = strArray.length - 1;
        end++;
        return strArray.slice(start, end).join(seperator);
    };

    render() {
        const { history, location } = this.props;
        const crumbs = _.split(location.pathname, '/');
        crumbs.splice(0, 1);
        return (<ul className='breadcrumb'>
            {_.map(crumbs, (crumb, index) => 
                <li key={crumb} className='breadcrumb-item'>
                    <Link to={"/" + this.joinArray("/", crumbs, 0, index)}>{crumb}</Link>
                </li>
            )}
        </ul>)
    }
}


export const BreadCrumbsComponent = withRouter(BreadCrumbs);