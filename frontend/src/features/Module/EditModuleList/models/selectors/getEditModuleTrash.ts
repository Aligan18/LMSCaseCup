import { IStateSchema } from 'app/providers/StoreProvider'

export const getEditModuleTrash = (state: IStateSchema) => state.editModuleList.trash_listModule
