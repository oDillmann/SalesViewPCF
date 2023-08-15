import { Stack } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useVM } from '../viewModel/context';
import CollapsibleRows from './CollapsibleRows';
import TableHeaders from './TableHeaders';

const TableView = () => {
  const vm = useVM();


  return (
    <Stack horizontal styles={{ root: { padding: '0 0 0 1rem', height: '100%', width: '100%', overflowY: 'scroll' } }}>
      <table style={{ display: 'block' }}>
        <TableHeaders Departments={vm.Departments} />
        <tbody>
          <CollapsibleRows SFS={vm.thisWeek} Departments={vm.Departments} periodTitle={"This Week"} />
          <CollapsibleRows SFS={vm.nextWeek} Departments={vm.Departments} periodTitle={"Next Week"} />
          <CollapsibleRows SFS={vm.beyond} Departments={vm.Departments} periodTitle={"Beyond"} />
        </tbody>
      </table>
    </Stack>
  )
}

export default observer(TableView);
