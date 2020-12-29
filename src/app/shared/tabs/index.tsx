import * as React from 'react';

const Tabs = (props) => <div className="os-tabs-w mx-1">
  <div className="os-tabs-controls">
    <ul className="nav nav-tabs upper">
      {props.options.map(tab => <li className="nav-item" key={tab.key}>
        <a aria-expanded="false" className={"nav-link" + (props.currentTab === tab.name ? '  active show' : '')}
          data-toggle="tab" onClick={props.onTabClick(tab.name)} href="javascript:void(0)"> {tab.displayName}</a>
      </li>
      )}
    </ul>
    {props.children}
  </div>
</div>

export default Tabs;