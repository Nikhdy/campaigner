import * as React from 'react';

export class NotFoundPage extends React.Component<{}, {}>{
    render() {

        return <div className='row'>
            <div className='col-md-6 center text-center'>
                <h1 className='error-page-logo'>404</h1>
                <p className='error-page-top-text'>Oops.. Something went wrong..</p>
                <p className='error-page-bottom-text'>We can't seem to find the page you're looking for.</p>
                {/* <a href='#' className='btn btn-primary m-b-xxs'>Help Center</a> */}
            </div>
        </div>;
    }
}