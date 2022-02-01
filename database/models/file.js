import { leftJoinWhere, selectFirst, where } from './modelsHelper.js';

export const files = {
  selectAll: (query) => where('files', query),
  selectFirst: (conditions) => selectFirst('files', conditions),
  selectAllLeftJoinWhere: (
    rightTable,
    columnLeftTable,
    columnRightTable,
    conditions,
  ) =>
    leftJoinWhere(
      'files',
      rightTable,
      columnLeftTable,
      columnRightTable,
      conditions,
    ),
};
