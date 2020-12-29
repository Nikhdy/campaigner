declare namespace Team {

  interface ITeam {
    id: number;
    xid: string;
    name: string;
    owner: Account.IAccount;
    members?: ITeamMember[]
    active: boolean;

    organizationId: number;

    createdOn: Date;
    createdBy: Account.IAccount;

    lastModifiedOn: Date;
    lastModifiedBy: Account.IAccount;
  }

  interface ITeamMember {
    id: number;
    xid: string;
    account: Account.IAccount;

    teamMemberType: 'OWNER' | 'MEMBER';

    active: boolean;

    createdOn: Date;
    createdBy: Account.IAccount;

    lastModifiedOn: Date;
    lastModifiedBy: Account.IAccount;
  }
}