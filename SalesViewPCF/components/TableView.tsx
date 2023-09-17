import { Stack } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase } from '../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase';
import { crf08_nmclocation } from '../cds-generated/enums/crf08_nmclocation';
import { useVM } from '../viewModel/context';
import SalesViewVM, { ViewType } from '../viewModel/SalesViewVM';
import CollapsibleRows from './CollapsibleRows';
import TableHeaders from './TableHeaders';

const groupByHandlers = {
  [ViewType.Date]: (vm: SalesViewVM) => (
    [...Object.keys(vm.pastDueByMonth).map((month) => {
      return <CollapsibleRows key={month} SFS={vm.pastDueByMonth[month]} Departments={vm.Departments} periodTitle={month} pastDue />
    }),
    <CollapsibleRows SFS={vm.thisWeek} Departments={vm.Departments} periodTitle={"This Week"} />,
    ...Object.keys(vm.groupedByMonth).map((month) => {
      return <CollapsibleRows key={month} SFS={vm.groupedByMonth[month]} Departments={vm.Departments} periodTitle={month} />
    }),
    vm.noEsd.length > 0 && <CollapsibleRows SFS={vm.noEsd} Departments={vm.Departments} periodTitle={"No Date"} />
    ].filter(Boolean) as JSX.Element[]
  ),
  //
  [ViewType.Phase]: (vm: SalesViewVM) => Object.keys(vm.groupedByPhase).map((phase) => {
    return <CollapsibleRows key={phase} SFS={vm.groupedByPhase[phase]} Departments={vm.Departments} periodTitle={phase} />
  }) as JSX.Element[],
  //
  [ViewType.Location]: (vm: SalesViewVM) => Object.keys(vm.groupedByLocation).map((location) => {
    return <CollapsibleRows key={location} SFS={vm.groupedByLocation[location]} Departments={vm.Departments} periodTitle={location} />
  }) as JSX.Element[],
  // Add more handlers here as needed
};

const TableView = () => {
  const vm = useVM();

  const groupByComponent = React.useMemo(() => {
    return groupByHandlers[vm.ViewType](vm);
  }, [vm.ViewType, vm.groupedByPhase, vm.groupedByMonth, vm.groupedByLocation, vm.pastDueByMonth, vm.thisWeek, vm.noEsd, vm.Departments]);

  return (
    <Stack horizontal styles={{ root: { padding: '0 0 0 1rem', height: '100%', width: '100%', overflowY: 'scroll' } }}>
      <table style={{ display: 'block' }}>
        <TableHeaders Departments={vm.Departments} />
        <tbody>
          {groupByComponent}
        </tbody>
      </table>
    </Stack>
  )
}

export default observer(TableView);
