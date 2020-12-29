import { fork, call, put, all, takeEvery } from 'redux-saga/effects';

import { fetchInbox } from 'app/api/inbox.api';
import { FETCH_INBOX, FETCH_INBOX_SUCCESS, FETCH_INBOX_ERROR } from './inbox.action';

function* getInbox() {
  // const result = yield call(fetchInbox);
  // console.log("Result",result)
  // if (result.status === "SUCCESS") {
  //   yield put({ type: FETCH_INBOX_SUCCESS, payload: result.data });
  // } else {
    // yield put({ type: FETCH_INBOX_ERROR, payload: "Failed to load data" });
    // console.log("Error");
    yield put({ type: FETCH_INBOX_SUCCESS, payload: data });
  // }
}

export function* getInboxWatcher() {
  yield takeEvery(FETCH_INBOX, getInbox);
}

export default function* inboxRoot() {
  yield all([getInboxWatcher()]);
}

const emailThreads: Inbox.IEmailThread[] = [{
  body: '<div id=":om" class="ii gt"><div id=":ol" class="a3s aXjCH "><p><span style="font-family:verdana,geneva">Hi Avinash,</span></p> <p><span style="font-family:verdana,geneva">How have you been?</span></p> <p><span style="font-family:verdana,geneva">I wanted to connect to see how things are shaping up with Chargebee.</span><br><span style="font-family:verdana,geneva">Do you have any questions I could help with?</span></p> <p><span style="font-family:verdana,geneva">If you’d like a quick product overview, feel free to schedule a call <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA">here.</a></span></p> <p><span style="font-family:verdana,geneva">Thanks,</span></p> <p><span style="font-family:verdana,geneva;font-size:10pt"> Rakesh</span><br><span style="font-family:verdana,geneva;font-size:small">Sales Consultant</span><br><span style="font-size:10pt"> <a href="tel:(408)%20903-4114" rel="noopener" target="_blank"><span style="font-family:verdana,geneva">(408) 903-4114</span></a></span><br><span style="font-size:10pt"> <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA"><span style="font-family:verdana,geneva">schedule a call</span></a></span><br><span style="font-size:10pt"> <a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid=r5p14i&amp;url=http%3A%2F%2Fbit.ly%2Fchargebeevideo" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid%3Dr5p14i%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebeevideo&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNE-HzG2ROrqMWHlu97zxGyDEIV36g"><span style="font-family:verdana,geneva">watch our 1 min demo</span></a></span><br><a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid=jkyb9&amp;url=http%3A%2F%2Fbit.ly%2Fchargebee-billing" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid%3Djkyb9%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebee-billing&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNFPxNJA_a6PjcdZJgsczS9u2b4LeA"><br><img src="https://ci6.googleusercontent.com/proxy/F7a1fmpKUDUUAC4orHRkzw5oAeJ4hdtoBOzpzgELx7r9ygRG755PSXaJGEtqXwV6Ik7V70IXhfQvlMslQkKJ_b0_kZBviu28miNHTFWTGl7v8ccRJw1K5EHMkzLCkG1uovdtdA=s0-d-e1-ft#https://www.chargebee.com/static/resources/brand/mail/chargebee-logo-black.png" alt="Chargebee" width="98" class="CToWUd"></a><br><span style="font-family:verdana,geneva;font-size:10pt">billing made simple</span></p><img src="https://ci4.googleusercontent.com/proxy/ow7F5POZJEofU3xA0LuYmBeaQyqU3QQYw4f0egBKejhNNO72TweRvywpn7bwkfMXBtzRvXrni9BFnAfy9b7t1n4kzEwD2xssslg_DU9HMsgnNNNXGuaPNg=s0-d-e1-ft#https://www.kl-def-j1.email/getAttachment/5b2e389a8027a50f00f241d3" align="left" height="0" width="0" style="border:0;width:0px;height:0px" alt="" class="CToWUd"> <p style="font-size:10px;color:#aaa">Click <a href="https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3&amp;source=gmail&amp;ust=1530205676202000&amp;usg=AFQjCNGXGxQkYd-bMpmP0FHiMHNI_bhzQA">here</a> if you would not like to hear from us</p></div><div class="yj6qo"></div></div>',
  createdOn: new Date(),
  subject: 'CREATE NEW PROFILE REQUEST',
  toAddress: 'avinash.v@aarvy.lab',
  messageId: 'message-id-aih9012812',
  recievedOn: new Date(),
  fromAddress: 'nikhil.r@aarvy.lab',
  lastModifiedOn: new Date(),

  campaignId: 0,
  prospectId: 0,

  lastName: 'Morgan',
  firstName: 'James',
}, {
  body: '<div id=":om" class="ii gt"><div id=":ol" class="a3s aXjCH "><p><span style="font-family:verdana,geneva">Hi Avinash,</span></p> <p><span style="font-family:verdana,geneva">How have you been?</span></p> <p><span style="font-family:verdana,geneva">I wanted to connect to see how things are shaping up with Chargebee.</span><br><span style="font-family:verdana,geneva">Do you have any questions I could help with?</span></p> <p><span style="font-family:verdana,geneva">If you’d like a quick product overview, feel free to schedule a call <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA">here.</a></span></p> <p><span style="font-family:verdana,geneva">Thanks,</span></p> <p><span style="font-family:verdana,geneva;font-size:10pt"> Rakesh</span><br><span style="font-family:verdana,geneva;font-size:small">Sales Consultant</span><br><span style="font-size:10pt"> <a href="tel:(408)%20903-4114" rel="noopener" target="_blank"><span style="font-family:verdana,geneva">(408) 903-4114</span></a></span><br><span style="font-size:10pt"> <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA"><span style="font-family:verdana,geneva">schedule a call</span></a></span><br><span style="font-size:10pt"> <a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid=r5p14i&amp;url=http%3A%2F%2Fbit.ly%2Fchargebeevideo" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid%3Dr5p14i%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebeevideo&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNE-HzG2ROrqMWHlu97zxGyDEIV36g"><span style="font-family:verdana,geneva">watch our 1 min demo</span></a></span><br><a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid=jkyb9&amp;url=http%3A%2F%2Fbit.ly%2Fchargebee-billing" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid%3Djkyb9%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebee-billing&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNFPxNJA_a6PjcdZJgsczS9u2b4LeA"><br><img src="https://ci6.googleusercontent.com/proxy/F7a1fmpKUDUUAC4orHRkzw5oAeJ4hdtoBOzpzgELx7r9ygRG755PSXaJGEtqXwV6Ik7V70IXhfQvlMslQkKJ_b0_kZBviu28miNHTFWTGl7v8ccRJw1K5EHMkzLCkG1uovdtdA=s0-d-e1-ft#https://www.chargebee.com/static/resources/brand/mail/chargebee-logo-black.png" alt="Chargebee" width="98" class="CToWUd"></a><br><span style="font-family:verdana,geneva;font-size:10pt">billing made simple</span></p><img src="https://ci4.googleusercontent.com/proxy/ow7F5POZJEofU3xA0LuYmBeaQyqU3QQYw4f0egBKejhNNO72TweRvywpn7bwkfMXBtzRvXrni9BFnAfy9b7t1n4kzEwD2xssslg_DU9HMsgnNNNXGuaPNg=s0-d-e1-ft#https://www.kl-def-j1.email/getAttachment/5b2e389a8027a50f00f241d3" align="left" height="0" width="0" style="border:0;width:0px;height:0px" alt="" class="CToWUd"> <p style="font-size:10px;color:#aaa">Click <a href="https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3&amp;source=gmail&amp;ust=1530205676202000&amp;usg=AFQjCNGXGxQkYd-bMpmP0FHiMHNI_bhzQA">here</a> if you would not like to hear from us</p></div><div class="yj6qo"></div></div>',
  createdOn: new Date(),
  subject: 'CREATE NEW PROFILE REQUEST',
  toAddress: 'avinash.v@aarvy.lab',
  messageId: 'message-id-aih9012812',
  recievedOn: new Date(),
  fromAddress: 'nikhil.r@aarvy.lab',
  lastModifiedOn: new Date(),

  campaignId: 0,
  prospectId: 0,

  lastName: 'Morgan',
  firstName: 'James',
}, {
  body: '<div id=":om" class="ii gt"><div id=":ol" class="a3s aXjCH "><p><span style="font-family:verdana,geneva">Hi Avinash,</span></p> <p><span style="font-family:verdana,geneva">How have you been?</span></p> <p><span style="font-family:verdana,geneva">I wanted to connect to see how things are shaping up with Chargebee.</span><br><span style="font-family:verdana,geneva">Do you have any questions I could help with?</span></p> <p><span style="font-family:verdana,geneva">If you’d like a quick product overview, feel free to schedule a call <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA">here.</a></span></p> <p><span style="font-family:verdana,geneva">Thanks,</span></p> <p><span style="font-family:verdana,geneva;font-size:10pt"> Rakesh</span><br><span style="font-family:verdana,geneva;font-size:small">Sales Consultant</span><br><span style="font-size:10pt"> <a href="tel:(408)%20903-4114" rel="noopener" target="_blank"><span style="font-family:verdana,geneva">(408) 903-4114</span></a></span><br><span style="font-size:10pt"> <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA"><span style="font-family:verdana,geneva">schedule a call</span></a></span><br><span style="font-size:10pt"> <a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid=r5p14i&amp;url=http%3A%2F%2Fbit.ly%2Fchargebeevideo" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid%3Dr5p14i%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebeevideo&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNE-HzG2ROrqMWHlu97zxGyDEIV36g"><span style="font-family:verdana,geneva">watch our 1 min demo</span></a></span><br><a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid=jkyb9&amp;url=http%3A%2F%2Fbit.ly%2Fchargebee-billing" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid%3Djkyb9%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebee-billing&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNFPxNJA_a6PjcdZJgsczS9u2b4LeA"><br><img src="https://ci6.googleusercontent.com/proxy/F7a1fmpKUDUUAC4orHRkzw5oAeJ4hdtoBOzpzgELx7r9ygRG755PSXaJGEtqXwV6Ik7V70IXhfQvlMslQkKJ_b0_kZBviu28miNHTFWTGl7v8ccRJw1K5EHMkzLCkG1uovdtdA=s0-d-e1-ft#https://www.chargebee.com/static/resources/brand/mail/chargebee-logo-black.png" alt="Chargebee" width="98" class="CToWUd"></a><br><span style="font-family:verdana,geneva;font-size:10pt">billing made simple</span></p><img src="https://ci4.googleusercontent.com/proxy/ow7F5POZJEofU3xA0LuYmBeaQyqU3QQYw4f0egBKejhNNO72TweRvywpn7bwkfMXBtzRvXrni9BFnAfy9b7t1n4kzEwD2xssslg_DU9HMsgnNNNXGuaPNg=s0-d-e1-ft#https://www.kl-def-j1.email/getAttachment/5b2e389a8027a50f00f241d3" align="left" height="0" width="0" style="border:0;width:0px;height:0px" alt="" class="CToWUd"> <p style="font-size:10px;color:#aaa">Click <a href="https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3&amp;source=gmail&amp;ust=1530205676202000&amp;usg=AFQjCNGXGxQkYd-bMpmP0FHiMHNI_bhzQA">here</a> if you would not like to hear from us</p></div><div class="yj6qo"></div></div>',
  createdOn: new Date(),
  subject: 'CREATE NEW PROFILE REQUEST',
  toAddress: 'avinash.v@aarvy.lab',
  messageId: 'message-id-aih9012812',
  recievedOn: new Date(),
  fromAddress: 'nikhil.r@aarvy.lab',
  lastModifiedOn: new Date(),

  campaignId: 0,
  prospectId: 0,

  lastName: 'Morgan',
  firstName: 'James',
}, {
  body: '<div id=":om" class="ii gt"><div id=":ol" class="a3s aXjCH "><p><span style="font-family:verdana,geneva">Hi Avinash,</span></p> <p><span style="font-family:verdana,geneva">How have you been?</span></p> <p><span style="font-family:verdana,geneva">I wanted to connect to see how things are shaping up with Chargebee.</span><br><span style="font-family:verdana,geneva">Do you have any questions I could help with?</span></p> <p><span style="font-family:verdana,geneva">If you’d like a quick product overview, feel free to schedule a call <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA">here.</a></span></p> <p><span style="font-family:verdana,geneva">Thanks,</span></p> <p><span style="font-family:verdana,geneva;font-size:10pt"> Rakesh</span><br><span style="font-family:verdana,geneva;font-size:small">Sales Consultant</span><br><span style="font-size:10pt"> <a href="tel:(408)%20903-4114" rel="noopener" target="_blank"><span style="font-family:verdana,geneva">(408) 903-4114</span></a></span><br><span style="font-size:10pt"> <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA"><span style="font-family:verdana,geneva">schedule a call</span></a></span><br><span style="font-size:10pt"> <a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid=r5p14i&amp;url=http%3A%2F%2Fbit.ly%2Fchargebeevideo" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid%3Dr5p14i%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebeevideo&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNE-HzG2ROrqMWHlu97zxGyDEIV36g"><span style="font-family:verdana,geneva">watch our 1 min demo</span></a></span><br><a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid=jkyb9&amp;url=http%3A%2F%2Fbit.ly%2Fchargebee-billing" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid%3Djkyb9%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebee-billing&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNFPxNJA_a6PjcdZJgsczS9u2b4LeA"><br><img src="https://ci6.googleusercontent.com/proxy/F7a1fmpKUDUUAC4orHRkzw5oAeJ4hdtoBOzpzgELx7r9ygRG755PSXaJGEtqXwV6Ik7V70IXhfQvlMslQkKJ_b0_kZBviu28miNHTFWTGl7v8ccRJw1K5EHMkzLCkG1uovdtdA=s0-d-e1-ft#https://www.chargebee.com/static/resources/brand/mail/chargebee-logo-black.png" alt="Chargebee" width="98" class="CToWUd"></a><br><span style="font-family:verdana,geneva;font-size:10pt">billing made simple</span></p><img src="https://ci4.googleusercontent.com/proxy/ow7F5POZJEofU3xA0LuYmBeaQyqU3QQYw4f0egBKejhNNO72TweRvywpn7bwkfMXBtzRvXrni9BFnAfy9b7t1n4kzEwD2xssslg_DU9HMsgnNNNXGuaPNg=s0-d-e1-ft#https://www.kl-def-j1.email/getAttachment/5b2e389a8027a50f00f241d3" align="left" height="0" width="0" style="border:0;width:0px;height:0px" alt="" class="CToWUd"> <p style="font-size:10px;color:#aaa">Click <a href="https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3&amp;source=gmail&amp;ust=1530205676202000&amp;usg=AFQjCNGXGxQkYd-bMpmP0FHiMHNI_bhzQA">here</a> if you would not like to hear from us</p></div><div class="yj6qo"></div></div>',
  createdOn: new Date(),
  subject: 'CREATE NEW PROFILE REQUEST',
  toAddress: 'avinash.v@aarvy.lab',
  messageId: 'message-id-aih9012812',
  recievedOn: new Date(),
  fromAddress: 'nikhil.r@aarvy.lab',
  lastModifiedOn: new Date(),

  campaignId: 0,
  prospectId: 0,

  lastName: 'Morgan',
  firstName: 'James',
}, {
  body: '<div id=":om" class="ii gt"><div id=":ol" class="a3s aXjCH "><p><span style="font-family:verdana,geneva">Hi Avinash,</span></p> <p><span style="font-family:verdana,geneva">How have you been?</span></p> <p><span style="font-family:verdana,geneva">I wanted to connect to see how things are shaping up with Chargebee.</span><br><span style="font-family:verdana,geneva">Do you have any questions I could help with?</span></p> <p><span style="font-family:verdana,geneva">If you’d like a quick product overview, feel free to schedule a call <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA">here.</a></span></p> <p><span style="font-family:verdana,geneva">Thanks,</span></p> <p><span style="font-family:verdana,geneva;font-size:10pt"> Rakesh</span><br><span style="font-family:verdana,geneva;font-size:small">Sales Consultant</span><br><span style="font-size:10pt"> <a href="tel:(408)%20903-4114" rel="noopener" target="_blank"><span style="font-family:verdana,geneva">(408) 903-4114</span></a></span><br><span style="font-size:10pt"> <a href="https://calendly.com/rakeshg/15min/" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://calendly.com/rakeshg/15min/&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNHYJ_80V8-7GksNQJBQiVXmoTcxfA"><span style="font-family:verdana,geneva">schedule a call</span></a></span><br><span style="font-size:10pt"> <a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid=r5p14i&amp;url=http%3A%2F%2Fbit.ly%2Fchargebeevideo" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e0?lid%3Dr5p14i%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebeevideo&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNE-HzG2ROrqMWHlu97zxGyDEIV36g"><span style="font-family:verdana,geneva">watch our 1 min demo</span></a></span><br><a href="https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid=jkyb9&amp;url=http%3A%2F%2Fbit.ly%2Fchargebee-billing" rel="noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/k/5b2e389a8027a50f00f241e1?lid%3Djkyb9%26url%3Dhttp%253A%252F%252Fbit.ly%252Fchargebee-billing&amp;source=gmail&amp;ust=1530205676201000&amp;usg=AFQjCNFPxNJA_a6PjcdZJgsczS9u2b4LeA"><br><img src="https://ci6.googleusercontent.com/proxy/F7a1fmpKUDUUAC4orHRkzw5oAeJ4hdtoBOzpzgELx7r9ygRG755PSXaJGEtqXwV6Ik7V70IXhfQvlMslQkKJ_b0_kZBviu28miNHTFWTGl7v8ccRJw1K5EHMkzLCkG1uovdtdA=s0-d-e1-ft#https://www.chargebee.com/static/resources/brand/mail/chargebee-logo-black.png" alt="Chargebee" width="98" class="CToWUd"></a><br><span style="font-family:verdana,geneva;font-size:10pt">billing made simple</span></p><img src="https://ci4.googleusercontent.com/proxy/ow7F5POZJEofU3xA0LuYmBeaQyqU3QQYw4f0egBKejhNNO72TweRvywpn7bwkfMXBtzRvXrni9BFnAfy9b7t1n4kzEwD2xssslg_DU9HMsgnNNNXGuaPNg=s0-d-e1-ft#https://www.kl-def-j1.email/getAttachment/5b2e389a8027a50f00f241d3" align="left" height="0" width="0" style="border:0;width:0px;height:0px" alt="" class="CToWUd"> <p style="font-size:10px;color:#aaa">Click <a href="https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.kl-def-j1.email/unsubscribeMails/5b2e389a8027a50f00f241d3&amp;source=gmail&amp;ust=1530205676202000&amp;usg=AFQjCNGXGxQkYd-bMpmP0FHiMHNI_bhzQA">here</a> if you would not like to hear from us</p></div><div class="yj6qo"></div></div>',
  createdOn: new Date(),
  toAddress: 'avinash.v@aarvy.lab',
  subject: 'CREATE NEW PROFILE REQUEST',
  messageId: 'message-id-aih9012812',
  recievedOn: new Date(),
  fromAddress: 'nikhil.r@aarvy.lab',
  lastModifiedOn: new Date(),
  campaignId: 0,
  prospectId: 0,

  lastName: 'Morgan',
  firstName: 'James',
}];

const data: Inbox.IEmail[] = [{
  id: 1,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 2,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 3,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 4,
  subject: 'CREATE NEW PROFILE REQUEST',
  emailThreads: emailThreads,
  lastName: 'Morgan',
  firstName: 'James',
}, {
  id: 5,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 6,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 7,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}, {
  id: 8,
  subject: 'CREATE NEW PROFILE REQUEST',
  lastName: 'Morgan',
  firstName: 'James',
  emailThreads: emailThreads
}];
