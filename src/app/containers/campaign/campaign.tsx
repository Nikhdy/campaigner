import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { DripTab } from './drip-tab';
import { fetchProspectColumns } from 'app/stores/prospects/prospect.action';
import { fetchCampaign } from 'app/stores/campaign/campaign.action';
import { ProspectTab } from './prospect-tab';
import { SettingTab } from './setting-tab';
import { PreviewTab } from './preview-tab';
import { translate } from 'app/locales';
import Tabs from 'app/shared/tabs';
interface ICampaignProps {
  match: any;
  location: any;
  history: any;
  fetchCampaign: (campaignuId: string | null) => void;
  fetchProspectColumns: () => void;
}

interface ICampaignState {
  currentTab: string
}

class CampaignUnwrapped extends React.Component<ICampaignProps, ICampaignState>{
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'drips',
    }
  }

  componentWillUpdate(prevProps, prevState) {
    const { match, location } = this.props;
    const currentTab = location.pathname.split("/");
    if (currentTab[currentTab.length - 1] &&
      currentTab[currentTab.length - 1] !== match.params.id &&
      currentTab[currentTab.length - 1] !== this.state.currentTab) {
      this.setState({ currentTab: currentTab[currentTab.length - 1] });
    }
  }

  componentWillMount() {
    const { match, location } = this.props;
    const currentTab = location.pathname.split("/");
    if (currentTab[currentTab.length - 1] && currentTab[currentTab.length - 1] !== match.params.id) {
      this.setState({ currentTab: currentTab[currentTab.length - 1] });
    }
    this.props.fetchCampaign(match.params.id);
    this.props.fetchProspectColumns();
  }

  campaignTabs: { name: string, key: string, displayName: string }[] = [
    { name: 'drips', key: 'drips', displayName: translate('DRIPS') },
    { name: 'prospects', key: 'prospects', displayName: translate('PROSPECTS') },
    { name: 'settings', key: 'settings', displayName: translate('SETTINGS') },
    { name: 'stats', key: 'stats', displayName: translate('STATS') },
    { name: 'logs', key: 'logs', displayName: translate('LOGS') },
    { name: 'preview', key: 'preview', displayName: translate('PREVIEW') },
  ];

  componentWillUnmount() {
    this.props.fetchCampaign(null);
  }

  onTabClick = (name: string) => {
    const { match } = this.props;
    return () => {
      this.setState({ currentTab: name });

      this.props.history.push("/campaigns/" + match.params.id + "/" + name)
    };
  }

  render() {
    const { match } = this.props;
    const { currentTab } = this.state;
    return <div className="row">
      <div className="col-md-12">
        <Tabs options={this.campaignTabs} onTabClick={this.onTabClick} currentTab={currentTab} />
        <Switch>
          <Route exact path={match.path} component={DripTab} />
          <Route path={match.path + "/drips"} component={DripTab} />
          <Route path={match.path + "/prospects"} component={ProspectTab} />
          <Route path={match.path + "/settings"} component={SettingTab} />
          <Route path={match.path + "/preview"} component={PreviewTab} />
        </Switch>
      </div>
    </div >
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchCampaign: (campaignuId: string) => dispatch(fetchCampaign(campaignuId)),
    fetchProspectColumns: () => dispatch(fetchProspectColumns())
  }
}

const mapStateToProps = state => {
  return {
    loading: state.campaignReducer.isLoading,
  }
}


export const Campaign = connect(mapStateToProps, mapDispatchToProps)(CampaignUnwrapped);
