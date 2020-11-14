const enums = [
  'APP_VIEW',
  'NO_SUBSCRIPTIONS_MSG',
  'BTN_CONFIG_PANEL_OPEN',
  'ERROR_BOUNDRY_MESSAGE',
] as const;

export default enums.reduce(
  (allIds, id) => ({ ...allIds, [id]: id }),
  {} as Record<typeof enums[number], string>,
);
