import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActityDashboard(props: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <ActityList
            activities={props.activities}
            selectActivity={props.selectActivity}
            deleteActivity={props.deleteActivity}
            submitting={props.submitting}
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
            createOrEdit={props.createOrEdit}
            submitting={props.submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
