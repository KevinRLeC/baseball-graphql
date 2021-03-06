/*@flow*/
import * as constants from "../../constants";
import { teamMapping, leagueMapping } from "../maps";
import type { StatCastFilter } from "../../schemaTypes.flow";
import type { StatCastSearch } from "../types.flow";

const statcastKey = "team";

const internalFilterKey = constants.TEAM_FILTER;

const mapping = {
  ...teamMapping,
  ...leagueMapping
};

export default (request: StatCastFilter, data: StatCastSearch) => {
  const requestValue = request[internalFilterKey];

  if (requestValue) {
    data[statcastKey] = mapping[requestValue];
  }

  return data;
};
