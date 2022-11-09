import {
  Button,
  Item,
  ItemContent,
  ItemHeader,
  Label,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
}

export default function ActityList(props: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {props.activities.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="view" color="blue" />
                <Label basic content={activity.category} />
              </Item.Extra>
            </ItemContent>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
