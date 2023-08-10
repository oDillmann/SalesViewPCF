import { MessageBar, MessageBarType, Spinner, Stack, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { axa_salesfulfillmentstatusMetadata } from '../cds-generated/entities/axa_SalesFulfillmentStatus';
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
                <Stack horizontal styles={{ root: { padding: '0 0 0 1rem', height: "100%", width: '100%', overflow: 'scroll' } }}>
                  <table >
                    <thead>
                      <tr>
                        <th style={{ height: 0 }}><Stack styles={{ root: { padding: '0.2rem 1rem', height: '100%' } }} /></th>
                        {vm.Departments.map((d) => (
                          <th key={d} style={{ height: 0 }}>
                            <Stack styles={{ root: { padding: '0.2rem 1rem', border: '1px solid #fff', height: '100%', backgroundColor: '#eee' } }}>
                              <Text >{d}</Text>
                            </Stack>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {vm.SFS.map((sf) => (
                        <tr
                          key={sf.id}
                        >
                          <td style={{ height: 0 }}>
                            <Stack
                              verticalAlign="center"
                              onDoubleClick={() => {
                                vm.context.navigation.openForm({
                                  entityName: axa_salesfulfillmentstatusMetadata.logicalName,
                                  entityId: sf.id
                                })
                              }}
                              styles={{
                                root: {
                                  padding: "0.2rem 1rem",
                                  border: "1px solid #fff",
                                  backgroundColor: '#eee',
                                  height: "100%",
                                  userSelect: "none",
                                  cursor: "pointer"
                                }
                              }}>
                              <Text>{sf.title}</Text>
                            </Stack>
                          </td>
                          {vm.Departments.map((d) => {
                            const status = sf.department[d] || axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted;
                            const statusColor = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? "red" :
                              status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "orange" : "green"
                            const statusText = status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted ? 'Not started' :
                              status === axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP ? "WIP" : "Done"
                            return (
                              <td key={d} style={{ height: 0 }} >
                                <Stack verticalAlign="center" horizontalAlign="center" styles={{
                                  root: {
                                    padding: '0.2rem 1rem',
                                    border: '1px solid #fff',
                                    backgroundColor: statusColor,
                                    height: '100%'
                                  }
                                }}>
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
      )
      }
    </>
  )
}

export default observer(App);

