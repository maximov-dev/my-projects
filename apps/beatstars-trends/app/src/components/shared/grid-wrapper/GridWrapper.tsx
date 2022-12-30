import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { ReactNode } from 'react';

export interface GridWrapperProps<T> {
  gridTitle: string;
  data: T[];
  columns: string[];
  children?: ReactNode;
}

export function GridWrapper<T>({ gridTitle, data, columns, children }: GridWrapperProps<T>) {
    const agGridColumns = columns.map((column) => (<AgGridColumn
        key = {column}
        autoHeight = {true}
        wrapText={true}
        sortable={true}
        field={column}
        flex={1} />));

  return (
    <>
      <h1 className="my-5 font-semibold uppercase">{ gridTitle }</h1>
      <div className="my-5">{ children }</div>
      <div className="ag-theme-material my-5" style={{ height: 500, width: '100%' }}>
        <AgGridReact rowData={data}>
            {agGridColumns}
        </AgGridReact>
      </div>
    </>
  );
}
