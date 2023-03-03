import { capitalize } from "lodash";
import { POSITION_REQUIREMENTS } from "../constants";

const formatWithCommas = (items) => {
  return items.map((item, idx) =>
    idx !== items.length - 1 ? `${capitalize(item)}, ` : capitalize(item)
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

export { formatWithCommas, getRequirementsStatus };
