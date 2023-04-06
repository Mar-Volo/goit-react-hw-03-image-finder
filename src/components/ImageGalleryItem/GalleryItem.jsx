import PropTypes from 'prop-types';

import { Component } from 'react';

import { Item, Img } from './GalleryItem.styled';

export class ListItem extends Component {
  state = {
    isVisible: false,
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;
    return (
      <Item>
        <Img src={webformatURL} alt={tags} />
      </Item>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
