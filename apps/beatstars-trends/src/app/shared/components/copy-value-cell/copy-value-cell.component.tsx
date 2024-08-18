import { BaseColDefParams } from 'ag-grid-community/dist/lib/entities/colDef';
import { FaCopy } from 'react-icons/fa';

const copyText = async (text: string) => {
    navigator.clipboard.writeText(text);
 };
 



export const CopyCellComponent = (
   props: BaseColDefParams & { columnId: string }
) => {
    const text = props.data[props.columnId];
   return (
      <div className="flex items-center">
         { text && <FaCopy onClick={() => copyText(text)} className="mr-2 min-w-4 min-h-4 cursor-pointer" /> }
         <span>{text}</span>
      </div>
   );
};
