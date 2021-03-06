import { RequestType } from '../../../../@types';

export default class PairCreateCommand {
  public id: string;
  public team_id: string;
  public pair_name: string;
  public user_ids: string[];

  constructor(req: RequestType.Pair) {
    this.id = req.params.id;
    this.team_id = req.body.team_id;
    this.pair_name = req.body.pair_name;
    this.user_ids = req.body.user_ids;
  }
}
