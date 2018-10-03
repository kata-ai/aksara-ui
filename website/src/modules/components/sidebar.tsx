import * as React from 'react';
import { connect } from 'react-redux';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import SidebarSubHeading from '../core/components/SidebarSubHeading';

import { PackageMetadata, RootStore } from '../../types/app';

interface PropsFromState {
  packagesError?: string;
  packagesList: Record<string, PackageMetadata>;
}

interface Props extends PropsFromState {}

interface State {
  loading: boolean;
  packages?: Record<string, PackageMetadata>;
  errors?: string;
}

class ComponentLibrarySidebar extends React.Component<Props, State> {
  render() {
    const { packagesList } = this.props;

    return (
      <SidebarSub titleElement={<SidebarSubTitle>Components</SidebarSubTitle>}>
        <SidebarSubMenu exact to="/components">
          Index
        </SidebarSubMenu>
        {packagesList && (
          <>
            <SidebarSubHeading>Components</SidebarSubHeading>
            {Object.keys(packagesList).map(p => (
              <SidebarSubMenu key={p} to={`/components/${p}`}>
                {p}
              </SidebarSubMenu>
            ))}
          </>
        )}
      </SidebarSub>
    );
  }
}

const mapStateToProps = ({ packages }: RootStore) => ({
  packagesError: packages.errors,
  packagesList: packages.list
});

export default connect(mapStateToProps)(ComponentLibrarySidebar);
