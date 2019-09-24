import React from "react";
import PropTypes from "prop-types";
import "./shot.scss";
import { AvatarBlock, Card, Counter, Icon, Image, Toolbar } from "components";

const Shot = props => {
  return (
    <div className="shot">
      <Card>
        <Card.Body>
          <Image src={props.src} />
        </Card.Body>
        <Card.Footer>
          <Toolbar>
            <Toolbar.Left>
              <Icon color="#BBBBBB" name="paperclip" />
            </Toolbar.Left>
            <Toolbar.Right>
              <Counter value="6000" icon="view" />
              <Counter value="30" icon="comment" />
              <Counter value="5999" icon="heart" />
            </Toolbar.Right>
          </Toolbar>
        </Card.Footer>
      </Card>
      <AvatarBlock
        name="Guille Mesyngier"
        url="https://dribbble.com/gmesyngier"
        label="pro"
        src="https://cdn.dribbble.com/users/441550/avatars/small/ff7601302c6a004465e0f936110a35de.jpg"
      />
    </div>
  );
};

Shot.propTypes = {};

export default Shot;
