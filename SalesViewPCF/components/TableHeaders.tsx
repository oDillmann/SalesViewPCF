import { Stack, Text } from '@fluentui/react';
import React from 'react';

interface props {
  Departments: string[];
}

const TableHeaders = ({ Departments }: props) => {
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
          <th style={{ height: 0, whiteSpace: 'nowrap', width: '200px' }}><Stack styles={{ root: { padding: '0.6rem 1rem', height: '100%', width: '200px' } }} /></th>
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

export default TableHeaders; 
