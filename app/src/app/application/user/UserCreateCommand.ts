import { RequestType } from '../../../../@types';

export default class UserCreateCommand {
  public pair_id?: string;
  public team_id?: string;
  public status?: number;
  public user_name: string;
  public email: string;

  constructor(req: RequestType.CreateUser) {
    this.pair_id = req.body.pair_id;
    this.team_id = req.body.team_id;
    this.status = req.body.status;
    this.user_name = req.body.user_name;
    this.email = req.body.email;
  }

  public getPairId() {
    return this.pair_id;
  }

  public getTeamId() {
    return this.team_id;
  }

  public getStatus() {
    return this.status;
  }

  public getUserName() {
    return this.user_name;
  }

  public getEmail() {
    return this.email;
  }
}
