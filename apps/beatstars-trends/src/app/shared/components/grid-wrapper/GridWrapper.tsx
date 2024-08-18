import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { ReactNode } from 'react';
import { CopyCellComponent } from '../copy-value-cell/copy-value-cell.component';
import { ValueGetterFunc } from 'ag-grid-community';

export interface GridWrapperColumn {
   value: string;
   canCopy?: boolean;
   valueGetter?: string | ValueGetterFunc<any>;
}
export interface GridWrapperProps<T> {
   gridTitle: string;
   data: T[];
   columns: GridWrapperColumn[];
   children?: ReactNode;
}

export function GridWrapper<T>({
   gridTitle,
   data,
   columns,
   children,
}: GridWrapperProps<T>) {
   const agGridColumns = columns.map((column) => {
      const cellRenderer = column.canCopy ? CopyCellComponent : undefined;
      const cellRendererParams = column.canCopy
         ? {
              columnId: column.value,
           }
         : undefined;

      return (
         <AgGridColumn
            cellRenderer={cellRenderer}
            valueGetter={column.valueGetter}
            cellRendererParams={cellRendererParams}
            key={column.value}
            autoHeight={true}
            wrapText={true}
            sortable={true}
            resizable={true}
            field={column.value}
         />
      );
   });

   return (
      <>
         <h1 className="my-5 text-slate-800 text-xl font-semibold uppercase">
            {gridTitle}
         </h1>
         <div className="my-5">{children}</div>
         <div
            className="ag-theme-material my-5"
            style={{ height: 500, width: '100%' }}
         >
            <AgGridReact onGridReady={(params) => params.api.sizeColumnsToFit()} rowData={data}>{agGridColumns}</AgGridReact>
         </div>
      </>
   );
}
