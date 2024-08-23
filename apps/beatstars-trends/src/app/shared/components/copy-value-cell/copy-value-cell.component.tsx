import { BaseColDefParams } from 'ag-grid-community/dist/lib/entities/colDef';
import { FaCopy } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { showSnackbarSuccess } from '../../../store/snackbar.slice';

const copyText = async (text: string) => {
   navigator.clipboard.writeText(text);
};

export const CopyCellComponent = (
   props: BaseColDefParams & { columnId: string }
) => {
   const dispatch = useDispatch();

   const text = props.data[props.columnId];

   return (
      <div className="flex items-center">
         {text && (
            <div className="mr-2 min-w-6 min-h-6 cursor-pointer">
               <FaCopy
               onClick={() => {
                  copyText(text);
                  dispatch(showSnackbarSuccess('Copied'))
               }}
               
            />
            </div>
         )}
         <span>{text}</span>
      </div>
   );
};
