import { Stack, Text } from '@fluentui/react';
import React from 'react';
import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from '../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus';
import { SalesFulfillmentStatus } from '../types/SalesFulfillmentStatus';

interface props { Departments: string[], sf: SalesFulfillmentStatus }

const BodyRows = ({ Departments, sf }: props) => {
  return (
    <>
      {Departments.map((d) => {
        const status = sf.department[d] || axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted;
        const statusColor = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? "#cc0000" :
          status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "orange" : "#00c000"
        const statusText = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'Not started' :
          status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "WIP" : "Done"
        return (
          <td key={d} style={{ height: 0, whiteSpace: 'nowrap' }} >
            <Stack verticalAlign="center" horizontalAlign="center" styles={{
              root: {
                padding: '0.6rem 1rem',
                border: '2px solid #fff',
                backgroundColor: statusColor,
                height: '100%'
              }
            }}>
              <Text styles={{ root: { color: "white" } }}>{statusText}</Text>
            </Stack>
          </td>
        )
      })}
    </>
  )
}

export default BodyRows;
