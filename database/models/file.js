import { selectAll, selectFirst } from './modelsHelper.js';

export const files = {
  selectAll: (conditions) => selectAll('files', conditions),
  selectFirst: (conditions) => selectFirst('files', conditions),
  selectAllSharedFiles: (
    rightTable,
    columnLeftTable,
    columnRightTable,
    conditions,
  ) =>
    selectAll(
      'files',
      conditions,
      'leftJoin',
      rightTable,
      columnLeftTable,
      columnRightTable,
    ),
};
