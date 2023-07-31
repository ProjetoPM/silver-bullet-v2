import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.stakeholderCalendars.fields.id'),
  },
  {
    name: 'activity',
    label: i18n('entities.stakeholderCalendars.fields.activity'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'stakeholder',
    label: i18n('entities.stakeholderCalendars.fields.stakeholder'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'allocationStart',
    label: i18n('entities.stakeholderCalendars.fields.allocationStart'),
  },
  {
    name: 'allocationEnds',
    label: i18n('entities.stakeholderCalendars.fields.allocationEnds'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.stakeholderCalendars.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.stakeholderCalendars.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
