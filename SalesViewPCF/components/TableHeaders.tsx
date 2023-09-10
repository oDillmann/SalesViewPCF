import { Button, DefaultButton, Dropdown, makeStyles, PrimaryButton, Stack, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useVM } from '../viewModel/context';

interface props {
  Departments: string[];
}

const TableHeaders = ({ Departments }: props) => {
  const vm = useVM();

  return (
    <>
      <colgroup>
        <col style={{ width: "auto" }} />
        {Departments.map((d) => (
          <col key={d} style={{ width: "auto" }} />
        ))}
      </colgroup>
      <thead>
        <tr style={{ display: 'table-row' }}>
          <th style={{ height: 0, whiteSpace: 'nowrap' }}>
            <Stack
              verticalAlign="center"
              horizontal
              tokens={{ childrenGap: '0.5rem' }}
              styles={{ root: { padding: '0.6rem 1rem', border: '2px solid #fff', height: '100%', width: '250px' } }}
            >
              <Text styles={{ root: { fontWeight: '600' } }}>Group By</Text>
              <Dropdown
                styles={{ root: { width: '100px' } }}
                defaultSelectedKey="Date"
                options={[
                  { key: "Phase", text: "By Phase" },
                  { key: "Date", text: "By Date" }
                ]}
                onChange={(e, o) => { vm.ViewType = o?.key as any }}
              />
            </Stack>
          </th>
          {Departments.map((d) => (
            <th key={d} style={{ height: 0, whiteSpace: 'nowrap' }}>
              <Stack verticalAlign="center" styles={{ root: { padding: '0.6rem 1rem', border: '2px solid #fff', height: '100%', backgroundColor: '#eee' } }}>
                <Text styles={{ root: { fontWeight: '600' } }}>{d}</Text>
              </Stack>
            </th>
          ))}
        </tr>
      </thead>
    </>
  )
}

export default observer(TableHeaders); 
