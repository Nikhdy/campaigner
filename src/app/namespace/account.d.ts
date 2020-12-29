declare namespace Account {
  interface ILoginUser{
    email: string;
    password: string;
  }

  interface IRegisterUser{
    email: string;
    password: string;
    orgnization: string;
    firstName: string;
    lastName: string;
  }

  interface IAccount {
    id: number;
    xid: string;
    name: string;
    email: string;
    isOwner: boolean;
    emailVerified: boolean;
    organizationId : number;
  }

  interface IUser extends IAccount {
    teams: Team.ITeam[];
  }

  interface ITeams {
    id: string;
    name: string;
    organizationId: string;
    active: boolean;
    lastModifiedOn: string;
    teamMemberType: 'OWNER' | 'MEMBER';
  }

  interface IAgencyDashboard {

  }
}