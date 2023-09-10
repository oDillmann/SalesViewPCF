import { Stack } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase } from '../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase';
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
          {vm.ViewType === "Phase" ? (
            <>
              {Object.keys(vm.groupedByPhase).map((value) => {
                const phase = value as any as axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase
                return <CollapsibleRows key={phase} SFS={vm.groupedByPhase[phase]} Departments={vm.Departments} periodTitle={value} />
              })}
            </>
          ) : (
            <>
              {Object.keys(vm.pastDueByMonth).map((month) => {
                return <CollapsibleRows key={month} SFS={vm.pastDueByMonth[month]} Departments={vm.Departments} periodTitle={month} pastDue />
              })}
              <CollapsibleRows SFS={vm.thisWeek} Departments={vm.Departments} periodTitle={"This Week"} />
              {Object.keys(vm.groupedByMonth).map((month) => {
                return <CollapsibleRows key={month} SFS={vm.groupedByMonth[month]} Departments={vm.Departments} periodTitle={month} />
              })}
              {vm.noEsd.length > 0 && <CollapsibleRows SFS={vm.noEsd} Departments={vm.Departments} periodTitle={"No Date"} />}
            </>
          )}
        </tbody>
      </table>
    </Stack>
  )
}

export default observer(TableView);
