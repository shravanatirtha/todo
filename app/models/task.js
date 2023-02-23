import Model from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('boolean', { defaultValue: false }) isCompleted;
}
