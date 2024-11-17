import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-vandee',
    version: '1.0.5',
    title: 'Vandee Boat Tracker',
    icon: '🛥',
    description: 'This plugin demonstrates how to create simple race tracker.',
    author: 'John Doe (optional company name)',
    repository: 'https://github.com/windycom/windy-plugin-template',
    desktopUI: 'rhpane',
    mobileUI: 'small',
    desktopWidth: 200,
    routerPath: '/vandee-tracker',
};

export default config;
