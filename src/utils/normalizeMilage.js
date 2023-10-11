export const normalizeMilage = stringValue => {
  return Number(stringValue.replaceAll(',', ''));
};
