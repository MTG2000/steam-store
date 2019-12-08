import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { gamesVisibilityFilters } from "../../store/reducers/gamesReducer";
import { SET_GAMES_VISIBILITY_FILTER } from "../../store/actions/gamesActions";
import Filter from "./Filter";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: props => ({
    backgroundColor: props.palette.primary.dark,
    maxWidth: 270
  })
});

const VisibilityFilters = ({
  currentFilter,
  SET_GAMES_VISIBILITY_FILTER: setFilter
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...theme });

  return (
    <ExpansionPanel className={classes.root} defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore color="secondary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color="secondary">Filter Games</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <Filter
            text="All"
            filter={gamesVisibilityFilters.ALL}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="All without ignored"
            filter={gamesVisibilityFilters.ALL_NOT_IGNORED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="Whitelisted"
            filter={gamesVisibilityFilters.WHITELISTED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="Ignored"
            filter={gamesVisibilityFilters.IGONRED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const mapStateToProps = state => ({
  currentFilter: state.games.visibilityFilter
});

export default connect(mapStateToProps, { SET_GAMES_VISIBILITY_FILTER })(
  VisibilityFilters
);
