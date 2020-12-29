declare namespace Inbox {
  interface IEmail {
    id: number;
    bodyTxt?: string;
    subject: string;
    lastName: string;
    firstName: string;
    emailThreads: IEmailThread[];
  }

  interface IEmailThread {
    body: string;
    createdOn: Date;
    toAddress: string;
    subject: string;
    messageId: string;
    recievedOn: Date;
    campaignId: number;
    prospectId: number;
    lastName: string;
    firstName: string;
    fromAddress: string;
    lastModifiedOn: Date;
  }
}