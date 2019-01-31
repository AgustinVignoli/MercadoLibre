import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../../components/searchBar';
import SearchButton from '../../components/searchButton';

describe('SearchBar tests', () => {
  it('should render SearchBar with props', () => {
    const component = shallow(<SearchBar history={{}} location={{ search: '' }} match={{}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render child component', () => {
    const wrapper = mount(<SearchBar history={{}} location={{ search: '' }} match={{}} />);
    expect(wrapper.find(SearchButton)).toHaveLength(1);
    expect(wrapper.find(SearchButton).find('button')).toHaveLength(1);
  });

  it('should simulate click event', () => {
    const onButtonClick = jest.fn();
    const searchButton = shallow(<SearchButton handleClick={onButtonClick} />);
    searchButton.find('button').at(0).simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
