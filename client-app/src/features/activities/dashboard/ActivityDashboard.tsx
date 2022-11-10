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
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
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
        {props.selectedActivity && !props.editMode && (
          <ActivityDetails
            activity={props.selectedActivity}
            cancelSelectActivity={props.cancelSelectActivity}
            openForm={props.openForm}
          />
        )}
        {props.editMode && (
          <ActivityForm
            closeForm={props.closeForm}
            activity={props.selectedActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
