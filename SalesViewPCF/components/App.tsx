import { MessageBar, MessageBarType, Spinner, Stack, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from '../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus';
import ServiceProvider from '../ServiceProvider';
import ContextProvider from '../viewModel/context';
import SalesViewVM from '../viewModel/SalesViewVM';

export interface props {
  serviceProvider: ServiceProvider;
}

const App = ({ serviceProvider }: props) => {
  const vm = serviceProvider.get<SalesViewVM>(SalesViewVM.serviceName);
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  // this calls the init function again if the entityId changes, which eliminates the need for a refresh
  useEffect(() => {
    if (!vm.forceUpdate) vm.forceUpdate = forceUpdate;
    vm.init();
  }, []);

  return (
    <>
      {vm.PCFerror ? (
        <MessageBar messageBarType={MessageBarType.error}>
          {vm.PCFerror}
        </MessageBar>
      ) : (
        <ContextProvider value={vm}>
          <>
            {vm.isLoading ? (
              <Spinner label='Loading...' styles={{ root: { margin: "5rem" } }} />
            ) : (
              <>
                {vm.errorMessage && (
                  <MessageBar messageBarType={MessageBarType.error} onDismiss={() => { vm.setError(undefined) }}>
                    {vm.errorMessage}
                  </MessageBar>
                )}
                <Stack horizontal styles={{ root: { overflow: 'scroll' } }}>
                  <table>
                    <thead>
                      <tr>
                        <th style={{ height: 0 }}> <Stack styles={{ root: { padding: '0.5rem 1rem', height: '100%' } }} /></th>
                        {vm.Departments.map((d) => (
                          <th key={d} style={{ height: 0 }}>
                            <Stack styles={{ root: { padding: '0.5rem 1rem', border: '1px solid #ccc', height: '100%' } }}>
                              <Text >{d}</Text>
                            </Stack>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {vm.SFS.map((sf) => (
                        <tr key={sf.id}>
                          <td style={{ height: 0 }}>
                            <Stack styles={{ root: { padding: '0.5rem 1rem', border: '1px solid #ccc', height: '100%' } }}>
                              <Text>{sf.title}</Text>
                            </Stack>
                          </td>
                          {vm.Departments.map((d) => {
                            const status = sf.department[d] || axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted;
                            const statusColor = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'red' :
                              status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "orange" : "green"
                            const statusText = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'Not started' :
                              status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "WIP" : "Done"
                            return (
                              <td key={d} style={{ height: 0 }} >
                                <Stack verticalFill styles={{ root: { padding: '0.5rem 1rem', border: '1px solid #ccc', backgroundColor: statusColor, height: '100%' } }}>
                                  <Text styles={{ root: { color: "white" } }}>{statusText}</Text>
                                </Stack>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Stack>
              </>
            )}
          </>
        </ContextProvider >
      )}
    </>
  )
}

export default observer(App);






                  // <Stack horizontal>
                  //   <div style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', width: '150px' }}>
                  //   </div>
                  //   {
                  //     vm.Departments.map((d, i) => (
                  //       <div className='header-element' style={{ padding: '0.5rem 1rem', border: '1px solid #ccc' }}>
                  //         <Text variant='medium'>{d}</Text>
                  //       </div>
                  //     ))
                  //   }
                  // </Stack>
                  // {
                  //   vm.SFS.map((sfs) => {
                  //     const depStatuses = vm.Departments.map((d, i) => {
                  //       const status = sfs.department[d] || axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted;
                  //       const statusColor = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'red' :
                  //         status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "yellow" : "green"
                  //       const statusText = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'Not started' :
                  //         status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "WIP" : "Done"
                  //       return (
                  //         <Stack styles={{ root: { padding: '0.5rem 1rem', border: '1px solid #ccc', backgroundColor: statusColor, width: headerWidths[i] } }}>
                  //           <Text variant='medium'>
                  //             {statusText}
                  //           </Text>
                  //         </Stack>
                  //
                  //       )
                  //     })
                  //     return (
                  //       <Stack horizontal >
                  //         <div style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', width: '150px' }}>
                  //           <Text variant='medium'>{sfs.title}</Text>
                  //         </div>
                  //         {depStatuses}
                  //       </Stack>
                  //     )
                  //   })
                  // }
