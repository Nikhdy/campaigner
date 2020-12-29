
export const FETCH_INBOX = 'FETCH_INBOX';
export const FETCH_INBOX_SUCCESS = 'FETCH_INBOX_SUCCESS';
export const FETCH_INBOX_ERROR = 'FETCH_INBOX_ERROR';

export const fetchInbox = (offset: number, limit: number) => ({ type: FETCH_INBOX, payload: { offset, limit } });
