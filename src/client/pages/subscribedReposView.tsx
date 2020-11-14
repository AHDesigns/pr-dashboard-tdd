import { ProviderRenderProps } from 'client/components/Provider';
import testids from 'client/utils/testids';
import React from 'react';

export function subscribedReposView({
  subscribtions,
}: ProviderRenderProps): JSX.Element {
  return subscribtions.length === 0 ? (
    <div data-testid={testids.NO_SUBSCRIPTIONS_MSG}>
      <h2>Welcome to your Pull Request Dashbaord</h2>
      <p>Looks like you haven't subscribed to any repos yet</p>
      <button data-testid={testids.BTN_CONFIG_PANEL_OPEN}>s Add some!</button>
    </div>
  ) : (
    <div>some</div>
  );
}
