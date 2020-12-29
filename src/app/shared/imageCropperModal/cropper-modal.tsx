import * as React from 'react';
const  Cropper = require('react-cropper').default;

interface ICropperModalProps {
    onClose: () => void;
}

export class CropperModal extends React.Component<ICropperModalProps, {}>{
    cropper: any;
    constructor(props) {
        super(props);

    }
    _crop() {
        // image in dataUrl
    }

    render() {
        return (<div className="modal fade bs-example-modal-lg in" tabIndex={-1}
            role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}><span aria-hidden="true">×</span></button>
                        <h4 className="modal-title" id="myLargeModalLabel">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <Cropper
                            ref={(ele) => { this.cropper = ele; }}
                            src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
                            style={{ height: 400, width: '100%' }}
                            // Cropper.js options
                            aspectRatio={16 / 9}
                            guides={false}
                            crop={this._crop.bind(this)} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}




                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
                                                                // But will they be alive tomorrow?
                                                                // They think this thing is a highway
                                                                // If it was our way, we'd have a tempo change every other time change
                                                                // 'Cause our mind's changed on what we think is good
                                                                // I wasn't raised in the hood
                                                                // But I know a thing or two about pain and darkness
                                                                // If it wasn't for this music I don’t know how I would have fought this
                                                                // Regardless, all these songs I'm hearing are so heartless
                                                                // Don't trust a perfect person and don't trust a song that’s flawless, honest
                                                                // There's a few songs on this record that feel common
                                                                // I'm in constant confrontation with what I want and what is poppin'
                                                                // In the industry it seems to me that singles on the radio are currency
                                                                // My creativity's only free when I'm playing shows
                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
                                                                // But will they be alive tomorrow?
                                                                // They be alive tomorrow?
                                                                // I'm sorry if that question I asked last
                                                                // Scared you a bit like a hazmat, in a gas mask if you ask zack
                                                                // He's my brother, he likes when I rap fast
                                                                // But let's backtrack
                                                                // Back to this
                                                                // Who would you live and die for on that list?
                                                                // But the problem is, there's another list that exists
                                                                // And no one really wants to think about this
                                                                // Forget sanity, forget salary, forget vanity, my morality
                                                                // If you get in between someone I love and me
                                                                // You're gonna feel the heat of my cavalry
                                                                // All these songs I'm hearing are so heartless
                                                                // Don't trust a perfect person and don’t trust a song that's flawless
                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
                                                                // But will they be alive tomorrow?
                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
                                                                // But will they be alive tomorrow?
                                                                // Will they be alive tomorrow?
                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
                                                                // But will they be alive tomorrow?
                                                                // They say, "stay in your lane, boy, lane, boy"
                                                                // But we go where we want to
                                                                // They think this thing is a highway, highway
// But will they be alive tomorrow?