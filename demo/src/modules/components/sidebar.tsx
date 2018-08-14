import React, { Fragment } from 'react';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import { PackageMetadata } from '../../types/app';
import SidebarSubHeading from '../core/components/SidebarSubHeading';

interface Props {}

interface State {
  loading: boolean;
  packages?: Record<string, PackageMetadata>;
  errors?: string;
}

class ComponentLibrarySidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
      packages: undefined,
      errors: undefined
    };
  }

  // TODO: let's actually put this inside redux so it doesn't try to re-read
  // the package list on every route change
  componentDidMount() {
    fetch('/kata-kit-packages.json')
      .then(res => res.json())
      .then(json => this.setState({ packages: json }))
      .catch(err => this.setState({ loading: false, errors: err }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { packages } = this.state;

    return (
      <SidebarSub titleElement={<SidebarSubTitle>Components</SidebarSubTitle>}>
        <SidebarSubMenu exact to="/docs">
          Index
        </SidebarSubMenu>
        {packages && (
          <Fragment>
            <SidebarSubHeading>Components</SidebarSubHeading>
            {Object.keys(packages).map(p => (
              <SidebarSubMenu to={`/components/${p}`}>{p}</SidebarSubMenu>
            ))}
          </Fragment>
        )}
      </SidebarSub>
    );
  }
}

export default ComponentLibrarySidebar;
