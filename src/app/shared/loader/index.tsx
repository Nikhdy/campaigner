import * as React from 'react';

export class Loader extends React.Component<{}, {}>{
    render() {
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
    }
}