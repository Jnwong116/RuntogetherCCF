import { startCase } from "lodash";
import { COMMITTEE_POSITIONS, POSITION_REQUIREMENTS } from "../constants";

const formatWithCommas = (items) => {
  return items.map((item, idx) =>
    idx !== items.length - 1 ? `${startCase(item)}, ` : startCase(item)
  );
};

const getRequirementsStatus = (user, position) => {
  const { visionName, nominations } = user;
  const hasVision =
    visionName.length > 0 || !POSITION_REQUIREMENTS[position].vision;
  const hasNominations =
    nominations.length === POSITION_REQUIREMENTS[position].nominations;
  return hasVision && hasNominations;
};

const groupByPosition = (position) => {
  if (Object.values(COMMITTEE_POSITIONS).includes(position)) {
    return "COMMITTEE";
  } else {
    return "IGs & MINISTRIES";
  }
};

export { formatWithCommas, getRequirementsStatus, groupByPosition };
