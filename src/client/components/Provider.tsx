import React from 'react';

export type ProviderRenderProps = {
  subscribtions: number[];
};

export interface IProvider {
  children(props: ProviderRenderProps): JSX.Element;
}

const Provider: React.FC<IProvider> = ({ children }) => (
  <div>{children({ subscribtions: [1] })}</div>
);

export default Provider;
