import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'Team';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Role: Attribute.String;
    Role_description: Attribute.Text;
    users_permissions_user: Attribute.Relation<
      'team.team',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.team': TeamTeam;
    }
  }
}
