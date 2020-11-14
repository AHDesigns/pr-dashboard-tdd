import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import testids from '../utils/testids';
import { subscribedReposView } from './subscribedReposView';
import { ProviderRenderProps } from 'client/components/Provider';

describe('subscribedReposView', () => {
  let mockProvider: ProviderRenderProps = { subscribtions: [] };

  beforeEach(() => {
    render(<div>{subscribedReposView(mockProvider)}</div>);
  });

  describe('when no repos have been subscribed to', () => {
    beforeAll(() => {
      mockProvider = { subscribtions: [] };
    });

    it('renders the greeting message', () => {
      expect(
        screen.queryByTestId(testids.NO_SUBSCRIPTIONS_MSG),
      ).toBeInTheDocument();
    });

    it('renders the cta to configure subscriptions', () => {
      expect(
        screen.queryByTestId(testids.BTN_CONFIG_PANEL_OPEN),
      ).toBeInTheDocument();
    });
  });

  describe('when repos have been subscribed to', () => {
    beforeAll(() => {
      mockProvider = {
        subscribtions: [1],
      };
    });

    it('does not render the greeting message', () => {
      expect(
        screen.queryByTestId(testids.NO_SUBSCRIPTIONS_MSG),
      ).not.toBeInTheDocument();
    });

    it('does not render the cta to configure subscriptions', () => {
      expect(
        screen.queryByTestId(testids.BTN_CONFIG_PANEL_OPEN),
      ).not.toBeInTheDocument();
    });
  });
});
