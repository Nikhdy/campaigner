declare namespace Campaign {
  
  // type CampaignType = 'coldemail' | 'trigger' | 'promotional';
  type ICampaignStatus = 'created' | 'paused' | 'running' | 'completed';
  type IEmailPriority = 'first' | 'equal' | 'followup';

  interface IColdCampaign {
    id: number;
    uid: string;
    name: string;

    status: ICampaignStatus;

    ownerId: string| number;
    ownerName: string;
    ownerEmail: string;

    drips: IDrip[];

    createdOn?: number;
    createdBy?: number;
    lastModifiedOn?: number;
    lastModifiedBy?: number;
    settings?: ICampaignSettings;

    stats?: ICamapignStats;

  }


  interface IDrip{
    id: string | number;
    dripTitle: string;
    subject: string;
    body: string;
    delay: number;
    order?: number;
    type: 'email'|'newsletter'
  }


interface ICampaignSettings {
    fromEmail?: string;
    toEmail?: string;
    timezone?: string;
    dailyStartTime?: number;
    dailyEndTime?: number;
    daysToSend?: boolean[];
    senderEmailId?: string | number;
    receiverEmailId?: string | number;
    consecutiveEmailDelay?: number;
    optOutMsg?: string;

    emailPriority?: IEmailPriority; // coldemail
    maxEmailsPerDay?: number; // coldemail promotional
    markCompletedAfterDays?: number;// coldemail
    openTrackingEnabled?: boolean; // coldemail promotional
    signature?: string; // coldemail
    scaleUp?: number | string | Date; // coldemail
    scaleUpNumberOfDays?: number; // coldemail
    scaleUpStartCount?: number; // coldemail

  }


  interface ICamapignStats{
    totalSent?: number;
    totalProspects?: number;
    totalSeen?:number;
    totalReplied?: number;

    currentProspects?: number,
    totalOpened?: number,
    currentOptedOut?: number,
    currentToCheck?: number,
    currentFailedEmailValidation?: number,
    currentBounced?: number,
    currentCompleted?: number,
    currentInProgress?: number,
    currentPaused?: number,
    currentUnsentProspects?: number,
    totalSteps?: number,


    dripwiseStats?: IDripStats[];
  }

  interface IDripStats{
    dripId: string| number;
    totalSent?: number;
    totalProspects?: number;
    totalSeen?:number;
    totalReplied?: number;

    prospectInDrip?: number;

  }














  
  // interface ISettings {
  //   from_email?: string;
  //   to_email?: string;
  // }
  // interface ITriggerCampaignSettings extends ISettings {

  // }
  // interface IPromotionalCampaignSettings extends ISettings {

  // }

  // interface ICampaignSettings extends ISettings {
  //   timezone?: string;
  //   dailyStartTime?: number;
  //   dailyEndTime?: number;
  //   daysToSend?: boolean[];
  //   senderEmailId?: string | number;
  //   receiverEmailId?: string | number;
  //   consecutiveEmailDelay?: number;
  //   optOutMsg?: string;

  //   emailPriority?: IEmailPriority; // coldemail
  //   maxEmailsPerDay?: number; // coldemail promotional
  //   markCompletedAfterDays?: number;// coldemail
  //   openTrackingEnabled?: boolean; // coldemail promotional
  //   signature?: string; // coldemail
  //   warmupStartedAt?: number | string | Date; // coldemail
  //   warmupLengthInDays?: number; // coldemail
  //   warmupStartingEmailCount?: number; // coldemail
  // }

  // // interface IColdCampaignInfo extends ICampaign {
  // //   settings: IColdCampaignSettings;
  // //   stats: IColdCampaignInfo;
  // // }
  // // interface ITriggerCampaignInfo extends ICampaign {
  // //   settings: ITriggerCampaignSettings;
  // // }
  // // interface IPromotionalCampaignInfo extends ICampaign {
  // //   settings: IPromotionalCampaignSettings;
  // // }

  // interface IColdCampaignInfo {
  //   currentProspects: number;
  //   totalSent: number;
  //   totalOpened: number;
  //   totalReplied: number;
  //   currentOptedOut: number,
  //   currentToCheck: number;
  //   currentFailedEmailValidation: number;
  //   currentBounced: number;
  //   currentCompleted: number;
  //   currentInProgress: number;
  //   currentPaused: number;
  //   currentUnsentProspects: number;
  //   totalSteps: number;
  // }

  // interface IGeneralCampaignInfo extends ICampaign {
  //   stats?: IColdCampaignInfo;
  //   conversations?: any[];
  //   steps?: ICampaignStep[];
  //   settings?: ICampaignSettings;
  // }

  // // interface ICampaign {
  // //   id: number | string;
  // //   name: string;
  // //   status: ICampaignStatus;
  // //   created_at: number;
  // //   owner_email: string;
  // //   owner_name: string;
  // //   team_id: number | string;
  // //   head_step_id?: number;
  // //   shared_with_team: boolean;
  // //   type: string;

  // //   settings: {
  // //     from_email?: string;
  // //     to_email?: string;
  // //     timezone?: string;
  // //     daily_from_time?: number;
  // //     daily_till_time?: number;
  // //     days_preference?: boolean[];
  // //     consecutive_email_delay?: number;
  // //     sender_email_settings_id?: string | number;
  // //     receiver_email_settings_id?: string | number;
  // //     email_priority?: IEmailPriority;
  // //     max_emails_per_day?: number;
  // //     mark_completed_after_days?: number;
  // //     open_tracking_enabled?: boolean;
  // //     opt_out_is_text?: boolean;
  // //     opt_out_msg?: string;
  // //     signature?: string;  // interface ITriggerCampaignSettings extends ISettings {

  // // }
  // // interface IPromotionalCampaignSettings extends ISettings {

  // // }
  // //     warmup_started_at?: number | string | Date;
  // //     warmup_length_in_days?: number;
  // //     warmup_starting_email_count?: number;
  // //   }

  // //   stats: {
  // //     current_prospects: number;
  // //     total_sent: number;
  // //     total_opened: number;
  // //     total_replied: number;
  // //     current_opted_out: number,
  // //     current_to_check: number;
  // //     current_failed_email_validation: number;
  // //     current_bounced: number;
  // //     current_completed: number;
  // //     current_in_progress: number;
  // //     current_paused: number;
  // //     current_unsent_prospects: number;
  // //     total_steps: number;
  // //   }
  // // }

  // interface ICampaignStep {
  //   stepTitle?: string;
  //   subject: string;
  //   body: string;
  //   delay: number;
  //   id: number | string;
  //   label?: string;
  //   step_type?: string;
  //   campaign_id?: number | number;
  // }

  // interface IContentTabInfo {
  //   availableTags: string[];
  //   emails: ICampaignStep[];
  // }

  // interface IStatColumns {
  //   name: string;
  //   field: string;
  //   width: number;
  //   dataFormat?: any;
  //   dataSort?: boolean;
  // }

  // interface ICampaignStats {
  //   totalProspects: number;
  //   totalSent: number;
  //   totalOpened: number;
  //   totalReplied: number;
  //   totalOptedOut: number,
  //   numberToCheck: number;
  //   numberOfFailedEmails: number;
  //   totalBounced: number;
  //   totalCompleted: number;
  //   totalInProgress: number;
  //   totalPaused: number;
  //   totalUnsentProspects: number;
  //   totalSteps: number;
  //   totalConverted: number;
  //   totalInterested: number;
  //   totalLostInterested: number;
  //   statsTimeLine: ITimeLieStats[]
  // }

  // interface ITimeLieStats {
  //   statsOnDate: number | string;
  //   totalBounced: number;
  //   totalSent: number;
  //   totalOpened: number;
  //   totalReplied: number,
  // }
}