import * as _ from 'lodash';
import * as React from 'react';
import * as moment from 'moment';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import {setRoute} from 'app/stores/application/app.action';
import { fetchInbox } from 'app/stores/inbox/inbox.action';

interface IInboxProps {
  isLoading: boolean;
  inbox: Inbox.IEmail[];
  isSideBarMini: boolean;
  fetchInbox: (offset: number, limit: number) => void;
  setRoute:(route: string) => void;
}

interface IInboxState {
  showAllMessages: boolean;
  currentSelectedBox: Inbox.IEmail;
}

class InboxUnwrapped extends React.Component<IInboxProps, IInboxState> {

  private MAX_BODY_TXT_LENGTH = 80;

  constructor(props) {
    super(props);
    this.state = {
      currentSelectedBox: undefined,
      showAllMessages: false
    };
    this.strip = this.strip.bind(this);
    this.fetchInbox = this.fetchInbox.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.expandAllMessages = this.expandAllMessages.bind(this);
    this.getFormattedDateTime = this.getFormattedDateTime.bind(this);
  }

  componentWillMount() {
    this.props.setRoute("INBOX");
    this.fetchInbox();
  }

  componentWillUnmount() { }

  fetchInbox() {
    this.props.fetchInbox(0, 10);
  }

  onItemClick(box) {
    return () => {
      this.setState({
        showAllMessages: false,
        currentSelectedBox: box
      });
    }
  }

  strip(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  getFormattedDateTime(date, format) {
    return moment(date).format(format);
  }

  expandAllMessages() {
    this.setState({
      showAllMessages: true
    });
  }

  sanitizeEmail(inbox) {
    _.forEach(inbox, (box: Inbox.IEmail) => {
      if (box.emailThreads && box.emailThreads.length) {
        const html = this.strip(box.emailThreads[0].body);
        const len = html.length > this.MAX_BODY_TXT_LENGTH ? this.MAX_BODY_TXT_LENGTH : html.length;
        box.bodyTxt = html.substring(0, len);
      }
    });
  }

  dateToFromNowDaily(myDate) {
    var fromNow = moment(myDate).fromNow();
    return moment(myDate).calendar(null, {
      lastWeek: '[Last] dddd',
      lastDay: '[Yesterday]',
      sameDay: 'HH:mmA',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      sameElse: function () {
        return "[" + fromNow + "]";
      }
    });
  }

  getEmail(email: Inbox.IEmailThread, index) {
    return <div className="aec-full-message-w" key={index}>
      <div className="aec-full-message">
        <div className="message-head">
          <div className="user-w">
            <div className="user-avatar-w">
              <div className="user-avatar">
                <Avatar name={email.firstName + " " + email.lastName} size="50" />
              </div>
            </div>
            <div className="user-name">
              <h6 className="user-title">{email.firstName} {email.lastName}</h6>
              <div className="user-role">
                {email.subject}
                <span>&lt;{email.fromAddress}&gt;</span>
              </div>
            </div>
          </div>
          <div className="message-info">
            {this.getFormattedDateTime(email.recievedOn, 'MMMM do, YYYY')}
            <br />
            {this.getFormattedDateTime(email.recievedOn, 'HH:mmA')}
          </div>
        </div>
        <div className="message-content" dangerouslySetInnerHTML={{ __html: email.body ? email.body.replace(/(<? *script)/gi, 'illegalscript') : '' }}></div>
      </div>
    </div>
  }

  render() {
    const { inbox, isLoading } = this.props;
    const { currentSelectedBox, showAllMessages } = this.state;
    let oldEmails = [];
    let newEmail = {} as Inbox.IEmailThread;
    this.sanitizeEmail(inbox);

    let selectedBox = currentSelectedBox;
    if (!currentSelectedBox && inbox && inbox.length) {
      selectedBox = inbox[0];
    }
    if (selectedBox) {
      selectedBox.emailThreads = selectedBox.emailThreads && selectedBox.emailThreads.length ?
        selectedBox.emailThreads : [];

      oldEmails = selectedBox.emailThreads;
      newEmail = selectedBox.emailThreads[selectedBox.emailThreads.length - 1];
    }

    return !isLoading && !selectedBox ? null : <div className='content-i'>
      <div className="content-box inbox-container">
        <div className="app-email-w">
          <div className="app-email-i">
            <div className="ae-list-w">
              <div className="ael-head">
                <div className="actions-left">
                  <select>
                    <option>Sort by date</option>
                  </select>
                </div>
                <div className="actions-right">
                  <a href="#">
                    <i className="os-icon os-icon-ui-37"></i>
                  </a>
                  <a href="#">
                    <i className="os-icon os-icon-grid-18"></i>
                  </a>
                </div>
              </div>
              <div className="ae-list ps ps--theme_default ps--active-y">
                {
                  _.map(inbox, (box: Inbox.IEmail, index) => {
                    return <div key={index} className={"ae-item " + (selectedBox.id === box.id && "active")} onClick={this.onItemClick(box)}>
                      <div className="aei-content">
                        <div className="aei-timestamp">
                          {this.dateToFromNowDaily(box.emailThreads[box.emailThreads.length - 1].recievedOn)}
                        </div>
                        <h6 className="aei-title">{box.firstName} {box.lastName}</h6>
                        <div className="aei-sub-title">{box.subject}</div>
                        <div className="aei-text">{box.bodyTxt}</div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="ae-content-w">
              <div className="aec-head">
                <div className="actions-left">
                  <a className="highlight" href="#">
                    <i className="os-icon os-icon-ui-02"></i>
                  </a>
                </div>
                <div className="actions-right">
                  <div className="aeh-actions">
                    <a href="#">
                      <i className="os-icon os-icon-ui-44"></i>
                    </a>
                    <a className="separate" href="#">
                      <i className="os-icon os-icon-ui-15"></i>
                    </a>
                    <a href="#">
                      <i className="os-icon os-icon-common-07"></i>
                    </a>
                    <a href="#">
                      <i className="os-icon os-icon-mail-19"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="ae-content">
                <div className={showAllMessages ? "older-pack show-msgs" : "older-pack"}>
                  {
                    _.map(oldEmails, (email, index) => {
                      return this.getEmail(email, index);
                    })
                  }
                </div>
                <div className="aec-full-message-w show-pack">
                  {
                    (oldEmails && oldEmails.length && !showAllMessages) &&
                    <div className="more-messages" onClick={this.expandAllMessages}>{oldEmails.length} Earlier Messages</div>
                  }
                  {
                    !showAllMessages && this.getEmail(newEmail, oldEmails.length + 1)
                  }
                </div>
                <div className="aec-reply">
                  <div className="reply-header">
                    <h5>
                      Reply to <span>{newEmail.firstName} {newEmail.lastName}</span>
                    </h5>
                  </div>
                  <textarea id="ckeditorEmail" name="ckeditor1"></textarea>
                  <div className="buttons-w">
                    <div className="actions-left">
                      <a className="btn btn-link" href="#">
                        <i className="os-icon os-icon-ui-51"></i>
                        <span>Add Attachment</span>
                      </a>
                    </div>
                    <div className="actions-right">
                      <a className="btn btn-success" href="#">
                        <i className="os-icon os-icon-mail-18"></i>
                        <span>Send Message</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInbox: (offset: number, limit: number) => dispatch(fetchInbox(offset, limit)),
    setRoute: (route: string) =>  dispatch(setRoute(route)),
  }
}

const mapStateToProps = state => {
  return {
    inbox: state.inboxReducer.inbox,
    isLoading: state.inboxReducer.isLoading
  }
}

export const Inbox = connect(mapStateToProps, mapDispatchToProps)(InboxUnwrapped)
