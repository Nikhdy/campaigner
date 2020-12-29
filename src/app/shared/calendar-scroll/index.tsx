import * as React from 'react';
import * as moment from 'moment';
import Calendar from 'react-calendar';
// import {Popover, OverlayTrigger} from 'react-bootstrap';
interface ICalendarProps {
    onNavigateClick: (startDate: moment.Moment) => void;
    noOfDaysOnNaviagater: number;
    startOfWeek: boolean;
    startDate?: moment.Moment;
}
interface ICalendarState {
    startDate: moment.Moment;
    selDate?: moment.Moment;
    displayCalendar: boolean;
    position: { x: number, y: number };
}

export class CalendarScroll extends React.Component<ICalendarProps, ICalendarState>{
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            displayCalendar: false,
            position: { x: 0, y: 0 }
        }
        this.showCalendar = this.showCalendar.bind(this);
        this.onChange = this.onChange.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.onNavigateClick = this.onNavigateClick.bind(this);
    }
    onNavigateClick(val: number) {
        return (e) => {
            const { noOfDaysOnNaviagater, startOfWeek } = this.props;
            const { startDate } = this.state;
            if (val > 0) {
                if (moment(startDate).add(noOfDaysOnNaviagater, 'd') < moment()) {
                    this.setState({ startDate: moment(startDate).add(noOfDaysOnNaviagater, 'd') },
                        () => { this.props.onNavigateClick(this.state.startDate) });
                }
            } else {
                this.setState({ startDate: moment(startDate).subtract(noOfDaysOnNaviagater, 'd') },
                    () => { this.props.onNavigateClick(this.state.startDate) });
            }

        }
    }
    componentDidMount() {
        if (this.props.startDate) {
            this.setState({ startDate: this.props.startDate });
        } else {
            this.setState({ startDate: moment().startOf('week') });
        }
        window.addEventListener('click', this.closeCalendar);
    }
    componentWillMount() {
        window.removeEventListener('click', this.closeCalendar);
    }

    closeCalendar() {
        this.setState({ displayCalendar: false });
    }

    showCalendar(e) {
        e.stopPropagation();
        this.setState({ displayCalendar: true, position: { x: e.target.offsetLeft - 30, y: e.target.offsetTop + 30 } })
    }
    onChange(date) {
        if (moment(date) <= moment()) {
            this.setState({ startDate: moment(date), displayCalendar: false }, () => { this.props.onNavigateClick(this.state.startDate) });
        }
    }
    stopPropegation(e) {
        e.stopPropagation();
    }


    render() {
        const { startDate, displayCalendar, position } = this.state;
        const { noOfDaysOnNaviagater, startOfWeek } = this.props;
        const start = startOfWeek && noOfDaysOnNaviagater === 7 ? moment(startDate).startOf('week') : startDate;
        const end = moment(start).add(noOfDaysOnNaviagater - 1, 'd');
        return <div className='text-center'>
            <i className='fa fa-caret-left text-primary date_buttons' onClick={this.onNavigateClick(-1)}></i>
            {noOfDaysOnNaviagater > 1 && <div className='date_view' onClick={this.showCalendar}>{start.format('DD MMM YY')} &nbsp;&nbsp;- &nbsp;&nbsp;{end.format('DD MMM YY')} </div>}
            {noOfDaysOnNaviagater === 1 && <div className='date_view' onClick={this.showCalendar}>{start.format('DD MMM YY')} </div>}
            <i className='fa fa-caret-right text-primary date_buttons' onClick={this.onNavigateClick(1)}></i>
            {displayCalendar && <div onClick={this.stopPropegation} className={displayCalendar ? 'popover fade bottom in' : 'popover fade bottom'}
                role='tooltip'
                id='popover200295'
                style={{ top: position.y + 'px', left: position.x + 'px', display: 'block' }}>
                <div className='arrow' style={{ left: '50%' }}>
                </div>
                <div className='popover-content'>
                    <Calendar
                        locale="en-US"
                        onChange={this.onChange}
                        value={startDate.toDate()}
                    />
                </div>
            </div>
            }
        </div>

    }

}