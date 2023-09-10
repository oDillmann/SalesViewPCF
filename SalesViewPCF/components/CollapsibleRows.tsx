import { Icon, Stack, Text, TooltipHost, VerticalDivider } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useBoolean } from '@fluentui/react-hooks';
import { SalesFulfillmentStatus } from '../types/SalesFulfillmentStatus';
import { useVM } from '../viewModel/context';
import BodyRows from './BodyRows';
import { axa_salesfulfillmentstatusMetadata } from '../cds-generated/entities/axa_SalesFulfillmentStatus';
import HorizontalDivider from './HorizontalDivider';

interface props {
  SFS: SalesFulfillmentStatus[];
  Departments: string[]
  periodTitle: string
  pastDue?: boolean
}

const CollapsibleRows = ({ SFS, Departments, periodTitle, pastDue }: props) => {
  const vm = useVM();
  const [expanded, { setTrue: expand, setFalse: collapse }] = useBoolean(false);
  const periodTitleColor = pastDue ? "#ff5555" : "#5555ff"

  return (
    <>
      {SFS.length > 0 ? (
        <>
          <tr style={{ display: 'table-row', userSelect: 'none' }} onClick={() => expanded ? collapse() : expand()}>
            <td colSpan={Departments.length + 1} >
              <Stack
                horizontal
                tokens={{ childrenGap: 10 }}
                verticalAlign="center"
                styles={{
                  root: {
                    padding: "0.6rem 1rem",
                    border: "2px solid #fff",
                    backgroundColor: 'white',
                    cursor: "pointer"
                  }
                }}
              >
                <Text variant="mediumPlus" styles={{ root: { color: periodTitleColor, fontWeight: 600 } }}>{periodTitle}</Text>
                <Icon iconName="ChevronDownMed" styles={{
                  root: {
                    fontSize: '1.2rem',
                    color: periodTitleColor,
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.1s ease-in-out'
                  }
                }} />
              </Stack>
            </td>
          </tr>
          {SFS.map((sf) => (
            <tr key={sf.id} style={{ display: expanded ? 'table-row' : 'none' }}>
              <td>
                <Stack
                  verticalAlign="center"
                  tokens={{ childrenGap: '0.5rem' }}
                  onDoubleClick={() => {
                    vm.context.navigation.openForm({
                      entityName: axa_salesfulfillmentstatusMetadata.logicalName,
                      entityId: sf.id
                    })
                  }}
                  styles={{
                    root: {
                      padding: "0.6rem 1rem",
                      userSelect: 'none',
                      border: "2px solid #fff",
                      backgroundColor: '#eee',
                      width: '250px',
                      wordWrap: 'break-word',
                      cursor: "pointer"
                    }
                  }}>
                  <Stack horizontal tokens={{ childrenGap: '0.5rem' }} horizontalAlign="space-between">
                    <Text styles={{ root: { fontWeight: '900' } }}>{sf.title ?? "No Description"}</Text>
                    <Text styles={{ root: { fontSize: '0.8rem' } }}>{sf.esd?.toLocaleDateString() ?? "No Due Date"}</Text>
                  </Stack>
                  <Stack horizontal tokens={{ childrenGap: '0.5rem' }} horizontalAlign="space-between">
                    <Text styles={{ root: { fontSize: '0.8rem' } }}>{sf.personResponsible ?? "No Sales Responsible"}</Text>
                    <Text styles={{ root: { fontSize: '0.8rem' } }}>{sf.phase ?? "No Phase"}</Text>
                  </Stack>
                </Stack>
              </td>
              <BodyRows Departments={Departments} sf={sf} />
            </tr>
          ))}
        </>
      ) : (
        <tr style={{ display: 'table-row', userSelect: 'none' }}>
          <td colSpan={Departments.length + 1} >
            <TooltipHost content="There are no Sales Fulfillment Statuses.">
              <Stack
                horizontal
                tokens={{ childrenGap: 10 }}
                verticalAlign="center"
                styles={{
                  root: {
                    padding: "0.6rem 1rem",
                    border: "2px solid #fff",
                    backgroundColor: 'white',
                  }
                }}
              >
                <Text variant="mediumPlus" styles={{ root: { color: "#888", fontWeight: 600 } }}>{periodTitle}</Text>
                <Icon iconName="ChromeMinimize" styles={{ root: { fontSize: '1.2rem', color: '#888', } }} />
              </Stack>
            </TooltipHost>
          </td>
        </tr>
      )}
    </>
  )
}

export default observer(CollapsibleRows);
