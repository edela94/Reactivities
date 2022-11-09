import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

interface Props {
  activities: Activity[];
}

export default function ActityDashboard(props: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ActityList activities={props.activities} />
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        {props.activities[0] && (
          <ActivityDetails activity={props.activities[0]} />
        )}
      </Grid.Column>
    </Grid>
  );
}
