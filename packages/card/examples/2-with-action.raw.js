() => (
  <Fragment>
    <CardGrid>
      <DashboardCard
        title="First Card"
        action={
          <Dropdown>
            <DropdownToggle caret={false}>
              <Button isIcon>
                <i className="icon-more" />
              </Button>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => console.log('Item')}>
                Menu item
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </DashboardCard>
      <DashboardCard
        title="Second Card"
        avatar={'https://via.placeholder.com/350x150'}
        action={
          <Button color="secondary" isIcon>
            <i className="icon-more" />
          </Button>
        }
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </DashboardCard>
      <DashboardCard
        title="Third Card"
        action={
          <Button color="secondary" isIcon>
            <i className="icon-more" />
          </Button>
        }
      >
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </DashboardCard>
    </CardGrid>
  </Fragment>
);
