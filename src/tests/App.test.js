import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { MockHeader, MockFooter} from "./mockComponent";

jest.mock('../components/Header', () => () => <MockHeader/>);
jest.mock('../components/Footer', () => () => <MockFooter/>)

describe('<App/>', () => {
  it('should render', () => {
    const renderComponent = render(<App/>);
    expect(renderComponent).toMatchSnapshot();
  });
});
