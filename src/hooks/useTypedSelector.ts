import { type RootState } from '@store/reducers';
import { useSelector } from 'react-redux';
import { type TypedUseSelectorHook } from 'react-redux/es/types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
