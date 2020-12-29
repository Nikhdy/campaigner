import * as React from 'react';
import { connect } from 'react-redux';

import FullCalendar from 'fullcalendar-reactwrapper';
import { setRoute } from 'app/stores/application/app.action';

interface ISettingProps {
  setRoute: (route: string) => void;

}

class CalanderUnwrapped extends React.Component<ISettingProps, {}> {
  componentWillMount() {
    this.props.setRoute("CALANDER");
  }


  render() {
    const events = [
      {
        title: 'All Day Event',
        start: '2017-05-01'
      },
      {
        title: 'Long Event',
        start: '2017-05-07',
        end: '2017-05-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-05-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2017-05-11',
        end: '2017-05-13'
      },
      {
        title: 'Meeting',
        start: '2017-05-12T10:30:00',
        end: '2017-05-12T12:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2017-05-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-05-28'
      }
    ];
    return <div className="content-box">
      <div className="element-wrapper">
        <div className="element-box">
          <FullCalendar id="your-custom-ID" header={{
            left: 'prev,next today myCustomButton', center: 'title', right: 'month,basicWeek,basicDay'
          }} navLinks={true} editable={true} eventLimit={true} events={events} />
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
export const Calander = connect(mapStateToProps, mapDispatchToProps)(CalanderUnwrapped)