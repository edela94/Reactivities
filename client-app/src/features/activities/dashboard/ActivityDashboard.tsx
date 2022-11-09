import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: String) => void;
  cancelSelectActivity: () => void;
}

export default function ActityDashboard(props: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ActityList
            activities={props.activities}
            selectActivity={props.selectActivity}
          />
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        {props.selectedActivity && (
          <ActivityDetails
            activity={props.selectedActivity}
            cancelSelectActivity={props.cancelSelectActivity}
          />
        )}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}
